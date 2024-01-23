/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate =
    (this && this.__decorate) ||
    function (decorators, target, key, desc) {
        var c = arguments.length,
            r =
                c < 3
                    ? target
                    : desc === null
                      ? (desc = Object.getOwnPropertyDescriptor(target, key))
                      : desc,
            d
        if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc)
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
        return c > 3 && r && Object.defineProperty(target, key, r), r
    }
var __param =
    (this && this.__param) ||
    function (paramIndex, decorator) {
        return function (target, key) {
            decorator(target, key, paramIndex)
        }
    }
var StickyScrollController_1
import { Disposable, DisposableStore, toDisposable } from '../../../../base/common/lifecycle.js'
import { ILanguageFeaturesService } from '../../../common/services/languageFeatures.js'
import { StickyScrollWidget, StickyScrollWidgetState } from './stickyScrollWidget.js'
import { StickyLineCandidateProvider } from './stickyScrollProvider.js'
import { IInstantiationService } from '../../../../platform/instantiation/common/instantiation.js'
import { IContextMenuService } from '../../../../platform/contextview/browser/contextView.js'
import { MenuId } from '../../../../platform/actions/common/actions.js'
import { IContextKeyService } from '../../../../platform/contextkey/common/contextkey.js'
import { EditorContextKeys } from '../../../common/editorContextKeys.js'
import { ClickLinkGesture } from '../../gotoSymbol/browser/link/clickLinkGesture.js'
import { Range } from '../../../common/core/range.js'
import { getDefinitionsAtPosition } from '../../gotoSymbol/browser/goToSymbol.js'
import { goToDefinitionWithLocation } from '../../inlayHints/browser/inlayHintsLocations.js'
import { Position } from '../../../common/core/position.js'
import { CancellationTokenSource } from '../../../../base/common/cancellation.js'
import { ILanguageConfigurationService } from '../../../common/languages/languageConfigurationRegistry.js'
import { ILanguageFeatureDebounceService } from '../../../common/services/languageFeatureDebounce.js'
import * as dom from '../../../../base/browser/dom.js'
import { StickyRange } from './stickyScrollElement.js'
import { StandardMouseEvent } from '../../../../base/browser/mouseEvent.js'
import { FoldingController } from '../../folding/browser/folding.js'
import { toggleCollapseState } from '../../folding/browser/foldingModel.js'
let StickyScrollController = (StickyScrollController_1 = class StickyScrollController extends (
    Disposable
) {
    constructor(
        _editor,
        _contextMenuService,
        _languageFeaturesService,
        _instaService,
        _languageConfigurationService,
        _languageFeatureDebounceService,
        _contextKeyService
    ) {
        super()
        this._editor = _editor
        this._contextMenuService = _contextMenuService
        this._languageFeaturesService = _languageFeaturesService
        this._instaService = _instaService
        this._contextKeyService = _contextKeyService
        this._sessionStore = new DisposableStore()
        this._foldingModel = null
        this._maxStickyLines = Number.MAX_SAFE_INTEGER
        this._candidateDefinitionsLength = -1
        this._focusedStickyElementIndex = -1
        this._enabled = false
        this._focused = false
        this._positionRevealed = false
        this._onMouseDown = false
        this._endLineNumbers = []
        this._showEndForLine = null
        this._stickyScrollWidget = new StickyScrollWidget(this._editor)
        this._stickyLineCandidateProvider = new StickyLineCandidateProvider(
            this._editor,
            _languageFeaturesService,
            _languageConfigurationService
        )
        this._register(this._stickyScrollWidget)
        this._register(this._stickyLineCandidateProvider)
        this._widgetState = new StickyScrollWidgetState([], [], 0)
        this._readConfiguration()
        const stickyScrollDomNode = this._stickyScrollWidget.getDomNode()
        this._register(
            this._editor.onDidChangeConfiguration((e) => {
                if (
                    e.hasChanged(114 /* EditorOption.stickyScroll */) ||
                    e.hasChanged(72 /* EditorOption.minimap */) ||
                    e.hasChanged(66 /* EditorOption.lineHeight */) ||
                    e.hasChanged(109 /* EditorOption.showFoldingControls */)
                ) {
                    this._readConfiguration()
                }
            })
        )
        this._register(
            dom.addDisposableListener(
                stickyScrollDomNode,
                dom.EventType.CONTEXT_MENU,
                async (event) => {
                    this._onContextMenu(dom.getWindow(stickyScrollDomNode), event)
                }
            )
        )
        this._stickyScrollFocusedContextKey = EditorContextKeys.stickyScrollFocused.bindTo(
            this._contextKeyService
        )
        this._stickyScrollVisibleContextKey = EditorContextKeys.stickyScrollVisible.bindTo(
            this._contextKeyService
        )
        const focusTracker = this._register(dom.trackFocus(stickyScrollDomNode))
        this._register(
            focusTracker.onDidBlur((_) => {
                // Suppose that the blurring is caused by scrolling, then keep the focus on the sticky scroll
                // This is determined by the fact that the height of the widget has become zero and there has been no position revealing
                if (this._positionRevealed === false && stickyScrollDomNode.clientHeight === 0) {
                    this._focusedStickyElementIndex = -1
                    this.focus()
                }
                // In all other casees, dispose the focus on the sticky scroll
                else {
                    this._disposeFocusStickyScrollStore()
                }
            })
        )
        this._register(
            focusTracker.onDidFocus((_) => {
                this.focus()
            })
        )
        this._registerMouseListeners()
        // Suppose that mouse down on the sticky scroll, then do not focus on the sticky scroll because this will be followed by the revealing of a position
        this._register(
            dom.addDisposableListener(stickyScrollDomNode, dom.EventType.MOUSE_DOWN, (e) => {
                this._onMouseDown = true
            })
        )
    }
    static get(editor) {
        return editor.getContribution(StickyScrollController_1.ID)
    }
    _disposeFocusStickyScrollStore() {
        var _a
        this._stickyScrollFocusedContextKey.set(false)
        ;(_a = this._focusDisposableStore) === null || _a === void 0 ? void 0 : _a.dispose()
        this._focused = false
        this._positionRevealed = false
        this._onMouseDown = false
    }
    focus() {
        // If the mouse is down, do not focus on the sticky scroll
        if (this._onMouseDown) {
            this._onMouseDown = false
            this._editor.focus()
            return
        }
        const focusState = this._stickyScrollFocusedContextKey.get()
        if (focusState === true) {
            return
        }
        this._focused = true
        this._focusDisposableStore = new DisposableStore()
        this._stickyScrollFocusedContextKey.set(true)
        this._focusedStickyElementIndex = this._stickyScrollWidget.lineNumbers.length - 1
        this._stickyScrollWidget.focusLineWithIndex(this._focusedStickyElementIndex)
    }
    focusNext() {
        if (this._focusedStickyElementIndex < this._stickyScrollWidget.lineNumberCount - 1) {
            this._focusNav(true)
        }
    }
    focusPrevious() {
        if (this._focusedStickyElementIndex > 0) {
            this._focusNav(false)
        }
    }
    selectEditor() {
        this._editor.focus()
    }
    // True is next, false is previous
    _focusNav(direction) {
        this._focusedStickyElementIndex = direction
            ? this._focusedStickyElementIndex + 1
            : this._focusedStickyElementIndex - 1
        this._stickyScrollWidget.focusLineWithIndex(this._focusedStickyElementIndex)
    }
    goToFocused() {
        const lineNumbers = this._stickyScrollWidget.lineNumbers
        this._disposeFocusStickyScrollStore()
        this._revealPosition({
            lineNumber: lineNumbers[this._focusedStickyElementIndex],
            column: 1
        })
    }
    _revealPosition(position) {
        this._reveaInEditor(position, () => this._editor.revealPosition(position))
    }
    _revealLineInCenterIfOutsideViewport(position) {
        this._reveaInEditor(position, () =>
            this._editor.revealLineInCenterIfOutsideViewport(
                position.lineNumber,
                0 /* ScrollType.Smooth */
            )
        )
    }
    _reveaInEditor(position, revealFunction) {
        if (this._focused) {
            this._disposeFocusStickyScrollStore()
        }
        this._positionRevealed = true
        revealFunction()
        this._editor.setSelection(Range.fromPositions(position))
        this._editor.focus()
    }
    _registerMouseListeners() {
        const sessionStore = this._register(new DisposableStore())
        const gesture = this._register(
            new ClickLinkGesture(this._editor, {
                extractLineNumberFromMouseEvent: (e) => {
                    const position = this._stickyScrollWidget.getEditorPositionFromNode(
                        e.target.element
                    )
                    return position ? position.lineNumber : 0
                }
            })
        )
        const getMouseEventTarget = (mouseEvent) => {
            if (!this._editor.hasModel()) {
                return null
            }
            if (
                mouseEvent.target.type !== 12 /* MouseTargetType.OVERLAY_WIDGET */ ||
                mouseEvent.target.detail !== this._stickyScrollWidget.getId()
            ) {
                // not hovering over our widget
                return null
            }
            const mouseTargetElement = mouseEvent.target.element
            if (
                !mouseTargetElement ||
                mouseTargetElement.innerText !== mouseTargetElement.innerHTML
            ) {
                // not on a span element rendering text
                return null
            }
            const position = this._stickyScrollWidget.getEditorPositionFromNode(mouseTargetElement)
            if (!position) {
                // not hovering a sticky scroll line
                return null
            }
            return {
                range: new Range(
                    position.lineNumber,
                    position.column,
                    position.lineNumber,
                    position.column + mouseTargetElement.innerText.length
                ),
                textElement: mouseTargetElement
            }
        }
        const stickyScrollWidgetDomNode = this._stickyScrollWidget.getDomNode()
        this._register(
            dom.addStandardDisposableListener(
                stickyScrollWidgetDomNode,
                dom.EventType.CLICK,
                (mouseEvent) => {
                    if (mouseEvent.ctrlKey || mouseEvent.altKey || mouseEvent.metaKey) {
                        // modifier pressed
                        return
                    }
                    if (!mouseEvent.leftButton) {
                        // not left click
                        return
                    }
                    if (mouseEvent.shiftKey) {
                        // shift click
                        const lineIndex = this._stickyScrollWidget.getLineIndexFromChildDomNode(
                            mouseEvent.target
                        )
                        if (lineIndex === null) {
                            return
                        }
                        const position = new Position(this._endLineNumbers[lineIndex], 1)
                        this._revealLineInCenterIfOutsideViewport(position)
                        return
                    }
                    const isInFoldingIconDomNode = this._stickyScrollWidget.isInFoldingIconDomNode(
                        mouseEvent.target
                    )
                    if (isInFoldingIconDomNode) {
                        // clicked on folding icon
                        const lineNumber = this._stickyScrollWidget.getLineNumberFromChildDomNode(
                            mouseEvent.target
                        )
                        this._toggleFoldingRegionForLine(lineNumber)
                        return
                    }
                    const isInStickyLine = this._stickyScrollWidget.isInStickyLine(
                        mouseEvent.target
                    )
                    if (!isInStickyLine) {
                        return
                    }
                    // normal click
                    let position = this._stickyScrollWidget.getEditorPositionFromNode(
                        mouseEvent.target
                    )
                    if (!position) {
                        const lineNumber = this._stickyScrollWidget.getLineNumberFromChildDomNode(
                            mouseEvent.target
                        )
                        if (lineNumber === null) {
                            // not hovering a sticky scroll line
                            return
                        }
                        position = new Position(lineNumber, 1)
                    }
                    this._revealPosition(position)
                }
            )
        )
        this._register(
            dom.addStandardDisposableListener(
                stickyScrollWidgetDomNode,
                dom.EventType.MOUSE_MOVE,
                (mouseEvent) => {
                    if (mouseEvent.shiftKey) {
                        const currentEndForLineIndex =
                            this._stickyScrollWidget.getLineIndexFromChildDomNode(mouseEvent.target)
                        if (
                            currentEndForLineIndex === null ||
                            (this._showEndForLine !== null &&
                                this._showEndForLine === currentEndForLineIndex)
                        ) {
                            return
                        }
                        this._showEndForLine = currentEndForLineIndex
                        this._renderStickyScroll()
                        return
                    }
                    if (this._showEndForLine !== null) {
                        this._showEndForLine = null
                        this._renderStickyScroll()
                    }
                }
            )
        )
        this._register(
            dom.addDisposableListener(stickyScrollWidgetDomNode, dom.EventType.MOUSE_LEAVE, (e) => {
                if (this._showEndForLine !== null) {
                    this._showEndForLine = null
                    this._renderStickyScroll()
                }
            })
        )
        this._register(
            gesture.onMouseMoveOrRelevantKeyDown(([mouseEvent, _keyboardEvent]) => {
                const mouseTarget = getMouseEventTarget(mouseEvent)
                if (!mouseTarget || !mouseEvent.hasTriggerModifier || !this._editor.hasModel()) {
                    sessionStore.clear()
                    return
                }
                const { range, textElement } = mouseTarget
                if (!range.equalsRange(this._stickyRangeProjectedOnEditor)) {
                    this._stickyRangeProjectedOnEditor = range
                    sessionStore.clear()
                } else if (textElement.style.textDecoration === 'underline') {
                    return
                }
                const cancellationToken = new CancellationTokenSource()
                sessionStore.add(toDisposable(() => cancellationToken.dispose(true)))
                let currentHTMLChild
                getDefinitionsAtPosition(
                    this._languageFeaturesService.definitionProvider,
                    this._editor.getModel(),
                    new Position(range.startLineNumber, range.startColumn + 1),
                    cancellationToken.token
                ).then((candidateDefinitions) => {
                    if (cancellationToken.token.isCancellationRequested) {
                        return
                    }
                    if (candidateDefinitions.length !== 0) {
                        this._candidateDefinitionsLength = candidateDefinitions.length
                        const childHTML = textElement
                        if (currentHTMLChild !== childHTML) {
                            sessionStore.clear()
                            currentHTMLChild = childHTML
                            currentHTMLChild.style.textDecoration = 'underline'
                            sessionStore.add(
                                toDisposable(() => {
                                    currentHTMLChild.style.textDecoration = 'none'
                                })
                            )
                        } else if (!currentHTMLChild) {
                            currentHTMLChild = childHTML
                            currentHTMLChild.style.textDecoration = 'underline'
                            sessionStore.add(
                                toDisposable(() => {
                                    currentHTMLChild.style.textDecoration = 'none'
                                })
                            )
                        }
                    } else {
                        sessionStore.clear()
                    }
                })
            })
        )
        this._register(
            gesture.onCancel(() => {
                sessionStore.clear()
            })
        )
        this._register(
            gesture.onExecute(async (e) => {
                if (
                    e.target.type !== 12 /* MouseTargetType.OVERLAY_WIDGET */ ||
                    e.target.detail !== this._stickyScrollWidget.getId()
                ) {
                    // not hovering over our widget
                    return
                }
                const position = this._stickyScrollWidget.getEditorPositionFromNode(
                    e.target.element
                )
                if (!position) {
                    // not hovering a sticky scroll line
                    return
                }
                if (this._candidateDefinitionsLength > 1) {
                    if (this._focused) {
                        this._disposeFocusStickyScrollStore()
                    }
                    this._revealPosition({ lineNumber: position.lineNumber, column: 1 })
                }
                this._instaService.invokeFunction(goToDefinitionWithLocation, e, this._editor, {
                    uri: this._editor.getModel().uri,
                    range: this._stickyRangeProjectedOnEditor
                })
            })
        )
    }
    _onContextMenu(targetWindow, e) {
        const event = new StandardMouseEvent(targetWindow, e)
        this._contextMenuService.showContextMenu({
            menuId: MenuId.StickyScrollContext,
            getAnchor: () => event
        })
    }
    _toggleFoldingRegionForLine(line) {
        if (!this._foldingModel || line === null) {
            return
        }
        const stickyLine = this._stickyScrollWidget.getStickyLineForLine(line)
        const foldingIcon =
            stickyLine === null || stickyLine === void 0 ? void 0 : stickyLine.foldingIcon
        if (!foldingIcon) {
            return
        }
        toggleCollapseState(this._foldingModel, Number.MAX_VALUE, [line])
        foldingIcon.isCollapsed = !foldingIcon.isCollapsed
        const scrollTop =
            (foldingIcon.isCollapsed
                ? this._editor.getTopForLineNumber(foldingIcon.foldingEndLine)
                : this._editor.getTopForLineNumber(foldingIcon.foldingStartLine)) -
            this._editor.getOption(66 /* EditorOption.lineHeight */) * stickyLine.index +
            1
        this._editor.setScrollTop(scrollTop)
        this._renderStickyScroll(line)
    }
    _readConfiguration() {
        const options = this._editor.getOption(114 /* EditorOption.stickyScroll */)
        if (options.enabled === false) {
            this._editor.removeOverlayWidget(this._stickyScrollWidget)
            this._sessionStore.clear()
            this._enabled = false
            return
        } else if (options.enabled && !this._enabled) {
            // When sticky scroll was just enabled, add the listeners on the sticky scroll
            this._editor.addOverlayWidget(this._stickyScrollWidget)
            this._sessionStore.add(
                this._editor.onDidScrollChange((e) => {
                    if (e.scrollTopChanged) {
                        this._showEndForLine = null
                        this._renderStickyScroll()
                    }
                })
            )
            this._sessionStore.add(this._editor.onDidLayoutChange(() => this._onDidResize()))
            this._sessionStore.add(
                this._editor.onDidChangeModelTokens((e) => this._onTokensChange(e))
            )
            this._sessionStore.add(
                this._stickyLineCandidateProvider.onDidChangeStickyScroll(() => {
                    this._showEndForLine = null
                    this._renderStickyScroll()
                })
            )
            this._enabled = true
        }
        const lineNumberOption = this._editor.getOption(67 /* EditorOption.lineNumbers */)
        if (lineNumberOption.renderType === 2 /* RenderLineNumbersType.Relative */) {
            this._sessionStore.add(
                this._editor.onDidChangeCursorPosition(() => {
                    this._showEndForLine = null
                    this._renderStickyScroll(-1)
                })
            )
        }
    }
    _needsUpdate(event) {
        const stickyLineNumbers = this._stickyScrollWidget.getCurrentLines()
        for (const stickyLineNumber of stickyLineNumbers) {
            for (const range of event.ranges) {
                if (
                    stickyLineNumber >= range.fromLineNumber &&
                    stickyLineNumber <= range.toLineNumber
                ) {
                    return true
                }
            }
        }
        return false
    }
    _onTokensChange(event) {
        if (this._needsUpdate(event)) {
            // Rebuilding the whole widget from line -1
            this._renderStickyScroll(-1)
        }
    }
    _onDidResize() {
        const layoutInfo = this._editor.getLayoutInfo()
        // Make sure sticky scroll doesn't take up more than 25% of the editor
        const theoreticalLines =
            layoutInfo.height / this._editor.getOption(66 /* EditorOption.lineHeight */)
        this._maxStickyLines = Math.round(theoreticalLines * 0.25)
    }
    async _renderStickyScroll(rebuildFromLine = Infinity) {
        var _a, _b
        const model = this._editor.getModel()
        if (!model || model.isTooLargeForTokenization()) {
            this._foldingModel = null
            this._stickyScrollWidget.setState(undefined, null, rebuildFromLine)
            return
        }
        const stickyLineVersion = this._stickyLineCandidateProvider.getVersionId()
        if (stickyLineVersion === undefined || stickyLineVersion === model.getVersionId()) {
            this._foldingModel =
                (_b = await ((_a = FoldingController.get(this._editor)) === null || _a === void 0
                    ? void 0
                    : _a.getFoldingModel())) !== null && _b !== void 0
                    ? _b
                    : null
            this._widgetState = this.findScrollWidgetState()
            this._stickyScrollVisibleContextKey.set(
                !(this._widgetState.startLineNumbers.length === 0)
            )
            if (!this._focused) {
                this._stickyScrollWidget.setState(
                    this._widgetState,
                    this._foldingModel,
                    rebuildFromLine
                )
            } else {
                // Suppose that previously the sticky scroll widget had height 0, then if there are visible lines, set the last line as focused
                if (this._focusedStickyElementIndex === -1) {
                    this._stickyScrollWidget.setState(
                        this._widgetState,
                        this._foldingModel,
                        rebuildFromLine
                    )
                    this._focusedStickyElementIndex = this._stickyScrollWidget.lineNumberCount - 1
                    if (this._focusedStickyElementIndex !== -1) {
                        this._stickyScrollWidget.focusLineWithIndex(this._focusedStickyElementIndex)
                    }
                } else {
                    const focusedStickyElementLineNumber =
                        this._stickyScrollWidget.lineNumbers[this._focusedStickyElementIndex]
                    this._stickyScrollWidget.setState(
                        this._widgetState,
                        this._foldingModel,
                        rebuildFromLine
                    )
                    // Suppose that after setting the state, there are no sticky lines, set the focused index to -1
                    if (this._stickyScrollWidget.lineNumberCount === 0) {
                        this._focusedStickyElementIndex = -1
                    } else {
                        const previousFocusedLineNumberExists =
                            this._stickyScrollWidget.lineNumbers.includes(
                                focusedStickyElementLineNumber
                            )
                        // If the line number is still there, do not change anything
                        // If the line number is not there, set the new focused line to be the last line
                        if (!previousFocusedLineNumberExists) {
                            this._focusedStickyElementIndex =
                                this._stickyScrollWidget.lineNumberCount - 1
                        }
                        this._stickyScrollWidget.focusLineWithIndex(this._focusedStickyElementIndex)
                    }
                }
            }
        }
    }
    findScrollWidgetState() {
        const lineHeight = this._editor.getOption(66 /* EditorOption.lineHeight */)
        const maxNumberStickyLines = Math.min(
            this._maxStickyLines,
            this._editor.getOption(114 /* EditorOption.stickyScroll */).maxLineCount
        )
        const scrollTop = this._editor.getScrollTop()
        let lastLineRelativePosition = 0
        const startLineNumbers = []
        const endLineNumbers = []
        const arrayVisibleRanges = this._editor.getVisibleRanges()
        if (arrayVisibleRanges.length !== 0) {
            const fullVisibleRange = new StickyRange(
                arrayVisibleRanges[0].startLineNumber,
                arrayVisibleRanges[arrayVisibleRanges.length - 1].endLineNumber
            )
            const candidateRanges =
                this._stickyLineCandidateProvider.getCandidateStickyLinesIntersecting(
                    fullVisibleRange
                )
            for (const range of candidateRanges) {
                const start = range.startLineNumber
                const end = range.endLineNumber
                const depth = range.nestingDepth
                if (end - start > 0) {
                    const topOfElementAtDepth = (depth - 1) * lineHeight
                    const bottomOfElementAtDepth = depth * lineHeight
                    const bottomOfBeginningLine =
                        this._editor.getBottomForLineNumber(start) - scrollTop
                    const topOfEndLine = this._editor.getTopForLineNumber(end) - scrollTop
                    const bottomOfEndLine = this._editor.getBottomForLineNumber(end) - scrollTop
                    if (
                        topOfElementAtDepth > topOfEndLine &&
                        topOfElementAtDepth <= bottomOfEndLine
                    ) {
                        startLineNumbers.push(start)
                        endLineNumbers.push(end + 1)
                        lastLineRelativePosition = bottomOfEndLine - bottomOfElementAtDepth
                        break
                    } else if (
                        bottomOfElementAtDepth > bottomOfBeginningLine &&
                        bottomOfElementAtDepth <= bottomOfEndLine
                    ) {
                        startLineNumbers.push(start)
                        endLineNumbers.push(end + 1)
                    }
                    if (startLineNumbers.length === maxNumberStickyLines) {
                        break
                    }
                }
            }
        }
        this._endLineNumbers = endLineNumbers
        return new StickyScrollWidgetState(
            startLineNumbers,
            endLineNumbers,
            lastLineRelativePosition,
            this._showEndForLine
        )
    }
    dispose() {
        super.dispose()
        this._sessionStore.dispose()
    }
})
StickyScrollController.ID = 'store.contrib.stickyScrollController'
StickyScrollController = StickyScrollController_1 = __decorate(
    [
        __param(1, IContextMenuService),
        __param(2, ILanguageFeaturesService),
        __param(3, IInstantiationService),
        __param(4, ILanguageConfigurationService),
        __param(5, ILanguageFeatureDebounceService),
        __param(6, IContextKeyService)
    ],
    StickyScrollController
)
export { StickyScrollController }
