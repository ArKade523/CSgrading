/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/vscode/blob/main/LICENSE.txt
 *-----------------------------------------------------------*/ ;(function () {
    var J = [
            'require',
            'exports',
            'vs/editor/common/core/range',
            'vs/editor/common/core/offsetRange',
            'vs/editor/common/core/position',
            'vs/base/common/errors',
            'vs/base/common/strings',
            'vs/base/common/arrays',
            'vs/editor/common/diff/defaultLinesDiffComputer/algorithms/diffAlgorithm',
            'vs/base/common/event',
            'vs/editor/common/core/lineRange',
            'vs/base/common/arraysFind',
            'vs/base/common/assert',
            'vs/base/common/lifecycle',
            'vs/base/common/objects',
            'vs/editor/common/diff/defaultLinesDiffComputer/utils',
            'vs/editor/common/diff/rangeMapping',
            'vs/base/common/platform',
            'vs/base/common/uri',
            'vs/nls',
            'vs/base/common/functional',
            'vs/base/common/iterator',
            'vs/base/common/linkedList',
            'vs/base/common/stopwatch',
            'vs/base/common/diff/diff',
            'vs/base/common/types',
            'vs/base/common/uint',
            'vs/editor/common/core/characterClassifier',
            'vs/editor/common/core/wordHelper',
            'vs/editor/common/diff/defaultLinesDiffComputer/algorithms/myersDiffAlgorithm',
            'vs/editor/common/diff/defaultLinesDiffComputer/linesSliceCharSequence',
            'vs/editor/common/diff/linesDiffComputer',
            'vs/base/common/cache',
            'vs/base/common/color',
            'vs/base/common/diff/diffChange',
            'vs/base/common/keyCodes',
            'vs/base/common/lazy',
            'vs/base/common/map',
            'vs/base/common/cancellation',
            'vs/base/common/hash',
            'vs/base/common/codicons',
            'vs/editor/common/core/selection',
            'vs/editor/common/core/wordCharacterClassifier',
            'vs/editor/common/diff/defaultLinesDiffComputer/heuristicSequenceOptimizations',
            'vs/editor/common/diff/defaultLinesDiffComputer/lineSequence',
            'vs/editor/common/diff/defaultLinesDiffComputer/algorithms/dynamicProgrammingDiffing',
            'vs/editor/common/diff/defaultLinesDiffComputer/computeMovedLines',
            'vs/editor/common/diff/defaultLinesDiffComputer/defaultLinesDiffComputer',
            'vs/editor/common/diff/legacyLinesDiffComputer',
            'vs/editor/common/diff/linesDiffComputers',
            'vs/editor/common/languages/defaultDocumentColorsComputer',
            'vs/editor/common/languages/linkComputer',
            'vs/editor/common/languages/supports/inplaceReplaceSupport',
            'vs/editor/common/model',
            'vs/editor/common/model/prefixSumComputer',
            'vs/editor/common/model/mirrorTextModel',
            'vs/editor/common/model/textModelSearch',
            'vs/editor/common/services/unicodeTextModelHighlighter',
            'vs/editor/common/standalone/standaloneEnums',
            'vs/editor/common/tokenizationRegistry',
            'vs/nls!vs/base/common/platform',
            'vs/nls!vs/base/common/worker/simpleWorker',
            'vs/base/common/process',
            'vs/base/common/path',
            'vs/nls!vs/editor/common/languages',
            'vs/editor/common/languages',
            'vs/editor/common/services/editorBaseApi',
            'vs/base/common/worker/simpleWorker',
            'vs/editor/common/services/editorSimpleWorker'
        ],
        Z = function (q) {
            for (var n = [], M = 0, A = q.length; M < A; M++) n[M] = J[q[M]]
            return n
        }
    const Ee = this,
        Ne = typeof global == 'object' ? global : {}
    var ae
    ;(function (q) {
        q.global = Ee
        class n {
            get isWindows() {
                return this._detect(), this._isWindows
            }
            get isNode() {
                return this._detect(), this._isNode
            }
            get isElectronRenderer() {
                return this._detect(), this._isElectronRenderer
            }
            get isWebWorker() {
                return this._detect(), this._isWebWorker
            }
            get isElectronNodeIntegrationWebWorker() {
                return this._detect(), this._isElectronNodeIntegrationWebWorker
            }
            constructor() {
                ;(this._detected = !1),
                    (this._isWindows = !1),
                    (this._isNode = !1),
                    (this._isElectronRenderer = !1),
                    (this._isWebWorker = !1),
                    (this._isElectronNodeIntegrationWebWorker = !1)
            }
            _detect() {
                this._detected ||
                    ((this._detected = !0),
                    (this._isWindows = n._isWindows()),
                    (this._isNode = typeof module < 'u' && !!module.exports),
                    (this._isElectronRenderer =
                        typeof process < 'u' &&
                        typeof process.versions < 'u' &&
                        typeof process.versions.electron < 'u' &&
                        process.type === 'renderer'),
                    (this._isWebWorker = typeof q.global.importScripts == 'function'),
                    (this._isElectronNodeIntegrationWebWorker =
                        this._isWebWorker &&
                        typeof process < 'u' &&
                        typeof process.versions < 'u' &&
                        typeof process.versions.electron < 'u' &&
                        process.type === 'worker'))
            }
            static _isWindows() {
                return typeof navigator < 'u' &&
                    navigator.userAgent &&
                    navigator.userAgent.indexOf('Windows') >= 0
                    ? !0
                    : typeof process < 'u'
                      ? process.platform === 'win32'
                      : !1
            }
        }
        q.Environment = n
    })(ae || (ae = {}))
    var ae
    ;(function (q) {
        class n {
            constructor(d, g, L) {
                ;(this.type = d), (this.detail = g), (this.timestamp = L)
            }
        }
        q.LoaderEvent = n
        class M {
            constructor(d) {
                this._events = [new n(1, '', d)]
            }
            record(d, g) {
                this._events.push(new n(d, g, q.Utilities.getHighPerformanceTimestamp()))
            }
            getEvents() {
                return this._events
            }
        }
        q.LoaderEventRecorder = M
        class A {
            record(d, g) {}
            getEvents() {
                return []
            }
        }
        ;(A.INSTANCE = new A()), (q.NullLoaderEventRecorder = A)
    })(ae || (ae = {}))
    var ae
    ;(function (q) {
        class n {
            static fileUriToFilePath(A, i) {
                if (((i = decodeURI(i).replace(/%23/g, '#')), A)) {
                    if (/^file:\/\/\//.test(i)) return i.substr(8)
                    if (/^file:\/\//.test(i)) return i.substr(5)
                } else if (/^file:\/\//.test(i)) return i.substr(7)
                return i
            }
            static startsWith(A, i) {
                return A.length >= i.length && A.substr(0, i.length) === i
            }
            static endsWith(A, i) {
                return A.length >= i.length && A.substr(A.length - i.length) === i
            }
            static containsQueryString(A) {
                return /^[^\#]*\?/gi.test(A)
            }
            static isAbsolutePath(A) {
                return /^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(A)
            }
            static forEachProperty(A, i) {
                if (A) {
                    let d
                    for (d in A) A.hasOwnProperty(d) && i(d, A[d])
                }
            }
            static isEmpty(A) {
                let i = !0
                return (
                    n.forEachProperty(A, () => {
                        i = !1
                    }),
                    i
                )
            }
            static recursiveClone(A) {
                if (
                    !A ||
                    typeof A != 'object' ||
                    A instanceof RegExp ||
                    (!Array.isArray(A) && Object.getPrototypeOf(A) !== Object.prototype)
                )
                    return A
                let i = Array.isArray(A) ? [] : {}
                return (
                    n.forEachProperty(A, (d, g) => {
                        g && typeof g == 'object' ? (i[d] = n.recursiveClone(g)) : (i[d] = g)
                    }),
                    i
                )
            }
            static generateAnonymousModule() {
                return '===anonymous' + n.NEXT_ANONYMOUS_ID++ + '==='
            }
            static isAnonymousModule(A) {
                return n.startsWith(A, '===anonymous')
            }
            static getHighPerformanceTimestamp() {
                return (
                    this.PERFORMANCE_NOW_PROBED ||
                        ((this.PERFORMANCE_NOW_PROBED = !0),
                        (this.HAS_PERFORMANCE_NOW =
                            q.global.performance && typeof q.global.performance.now == 'function')),
                    this.HAS_PERFORMANCE_NOW ? q.global.performance.now() : Date.now()
                )
            }
        }
        ;(n.NEXT_ANONYMOUS_ID = 1),
            (n.PERFORMANCE_NOW_PROBED = !1),
            (n.HAS_PERFORMANCE_NOW = !1),
            (q.Utilities = n)
    })(ae || (ae = {}))
    var ae
    ;(function (q) {
        function n(i) {
            if (i instanceof Error) return i
            const d = new Error(i.message || String(i) || 'Unknown Error')
            return i.stack && (d.stack = i.stack), d
        }
        q.ensureError = n
        class M {
            static validateConfigurationOptions(d) {
                function g(L) {
                    if (L.phase === 'loading') {
                        console.error('Loading "' + L.moduleId + '" failed'),
                            console.error(L),
                            console.error('Here are the modules that depend on it:'),
                            console.error(L.neededBy)
                        return
                    }
                    if (L.phase === 'factory') {
                        console.error(
                            'The factory function of "' + L.moduleId + '" has thrown an exception'
                        ),
                            console.error(L),
                            console.error('Here are the modules that depend on it:'),
                            console.error(L.neededBy)
                        return
                    }
                }
                if (
                    ((d = d || {}),
                    typeof d.baseUrl != 'string' && (d.baseUrl = ''),
                    typeof d.isBuild != 'boolean' && (d.isBuild = !1),
                    typeof d.paths != 'object' && (d.paths = {}),
                    typeof d.config != 'object' && (d.config = {}),
                    typeof d.catchError > 'u' && (d.catchError = !1),
                    typeof d.recordStats > 'u' && (d.recordStats = !1),
                    typeof d.urlArgs != 'string' && (d.urlArgs = ''),
                    typeof d.onError != 'function' && (d.onError = g),
                    Array.isArray(d.ignoreDuplicateModules) || (d.ignoreDuplicateModules = []),
                    d.baseUrl.length > 0 &&
                        (q.Utilities.endsWith(d.baseUrl, '/') || (d.baseUrl += '/')),
                    typeof d.cspNonce != 'string' && (d.cspNonce = ''),
                    typeof d.preferScriptTags > 'u' && (d.preferScriptTags = !1),
                    d.nodeCachedData &&
                        typeof d.nodeCachedData == 'object' &&
                        (typeof d.nodeCachedData.seed != 'string' &&
                            (d.nodeCachedData.seed = 'seed'),
                        (typeof d.nodeCachedData.writeDelay != 'number' ||
                            d.nodeCachedData.writeDelay < 0) &&
                            (d.nodeCachedData.writeDelay = 1e3 * 7),
                        !d.nodeCachedData.path || typeof d.nodeCachedData.path != 'string'))
                ) {
                    const L = n(new Error("INVALID cached data configuration, 'path' MUST be set"))
                    ;(L.phase = 'configuration'), d.onError(L), (d.nodeCachedData = void 0)
                }
                return d
            }
            static mergeConfigurationOptions(d = null, g = null) {
                let L = q.Utilities.recursiveClone(g || {})
                return (
                    q.Utilities.forEachProperty(d, (h, o) => {
                        h === 'ignoreDuplicateModules' && typeof L.ignoreDuplicateModules < 'u'
                            ? (L.ignoreDuplicateModules = L.ignoreDuplicateModules.concat(o))
                            : h === 'paths' && typeof L.paths < 'u'
                              ? q.Utilities.forEachProperty(o, (C, e) => (L.paths[C] = e))
                              : h === 'config' && typeof L.config < 'u'
                                ? q.Utilities.forEachProperty(o, (C, e) => (L.config[C] = e))
                                : (L[h] = q.Utilities.recursiveClone(o))
                    }),
                    M.validateConfigurationOptions(L)
                )
            }
        }
        q.ConfigurationOptionsUtil = M
        class A {
            constructor(d, g) {
                if (
                    ((this._env = d),
                    (this.options = M.mergeConfigurationOptions(g)),
                    this._createIgnoreDuplicateModulesMap(),
                    this._createSortedPathsRules(),
                    this.options.baseUrl === '' &&
                        this.options.nodeRequire &&
                        this.options.nodeRequire.main &&
                        this.options.nodeRequire.main.filename &&
                        this._env.isNode)
                ) {
                    let L = this.options.nodeRequire.main.filename,
                        h = Math.max(L.lastIndexOf('/'), L.lastIndexOf('\\'))
                    this.options.baseUrl = L.substring(0, h + 1)
                }
            }
            _createIgnoreDuplicateModulesMap() {
                this.ignoreDuplicateModulesMap = {}
                for (let d = 0; d < this.options.ignoreDuplicateModules.length; d++)
                    this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[d]] = !0
            }
            _createSortedPathsRules() {
                ;(this.sortedPathsRules = []),
                    q.Utilities.forEachProperty(this.options.paths, (d, g) => {
                        Array.isArray(g)
                            ? this.sortedPathsRules.push({ from: d, to: g })
                            : this.sortedPathsRules.push({ from: d, to: [g] })
                    }),
                    this.sortedPathsRules.sort((d, g) => g.from.length - d.from.length)
            }
            cloneAndMerge(d) {
                return new A(this._env, M.mergeConfigurationOptions(d, this.options))
            }
            getOptionsLiteral() {
                return this.options
            }
            _applyPaths(d) {
                let g
                for (let L = 0, h = this.sortedPathsRules.length; L < h; L++)
                    if (((g = this.sortedPathsRules[L]), q.Utilities.startsWith(d, g.from))) {
                        let o = []
                        for (let C = 0, e = g.to.length; C < e; C++)
                            o.push(g.to[C] + d.substr(g.from.length))
                        return o
                    }
                return [d]
            }
            _addUrlArgsToUrl(d) {
                return q.Utilities.containsQueryString(d)
                    ? d + '&' + this.options.urlArgs
                    : d + '?' + this.options.urlArgs
            }
            _addUrlArgsIfNecessaryToUrl(d) {
                return this.options.urlArgs ? this._addUrlArgsToUrl(d) : d
            }
            _addUrlArgsIfNecessaryToUrls(d) {
                if (this.options.urlArgs)
                    for (let g = 0, L = d.length; g < L; g++) d[g] = this._addUrlArgsToUrl(d[g])
                return d
            }
            moduleIdToPaths(d) {
                if (
                    this._env.isNode &&
                    this.options.amdModulesPattern instanceof RegExp &&
                    !this.options.amdModulesPattern.test(d)
                )
                    return this.isBuild() ? ['empty:'] : ['node|' + d]
                let g = d,
                    L
                if (!q.Utilities.endsWith(g, '.js') && !q.Utilities.isAbsolutePath(g)) {
                    L = this._applyPaths(g)
                    for (let h = 0, o = L.length; h < o; h++)
                        (this.isBuild() && L[h] === 'empty:') ||
                            (q.Utilities.isAbsolutePath(L[h]) ||
                                (L[h] = this.options.baseUrl + L[h]),
                            !q.Utilities.endsWith(L[h], '.js') &&
                                !q.Utilities.containsQueryString(L[h]) &&
                                (L[h] = L[h] + '.js'))
                } else
                    !q.Utilities.endsWith(g, '.js') &&
                        !q.Utilities.containsQueryString(g) &&
                        (g = g + '.js'),
                        (L = [g])
                return this._addUrlArgsIfNecessaryToUrls(L)
            }
            requireToUrl(d) {
                let g = d
                return (
                    q.Utilities.isAbsolutePath(g) ||
                        ((g = this._applyPaths(g)[0]),
                        q.Utilities.isAbsolutePath(g) || (g = this.options.baseUrl + g)),
                    this._addUrlArgsIfNecessaryToUrl(g)
                )
            }
            isBuild() {
                return this.options.isBuild
            }
            shouldInvokeFactory(d) {
                return !!(
                    !this.options.isBuild ||
                    q.Utilities.isAnonymousModule(d) ||
                    (this.options.buildForceInvokeFactory &&
                        this.options.buildForceInvokeFactory[d])
                )
            }
            isDuplicateMessageIgnoredFor(d) {
                return this.ignoreDuplicateModulesMap.hasOwnProperty(d)
            }
            getConfigForModule(d) {
                if (this.options.config) return this.options.config[d]
            }
            shouldCatchError() {
                return this.options.catchError
            }
            shouldRecordStats() {
                return this.options.recordStats
            }
            onError(d) {
                this.options.onError(d)
            }
        }
        q.Configuration = A
    })(ae || (ae = {}))
    var ae
    ;(function (q) {
        class n {
            constructor(o) {
                ;(this._env = o), (this._scriptLoader = null), (this._callbackMap = {})
            }
            load(o, C, e, a) {
                if (!this._scriptLoader)
                    if (this._env.isWebWorker) this._scriptLoader = new i()
                    else if (this._env.isElectronRenderer) {
                        const { preferScriptTags: c } = o.getConfig().getOptionsLiteral()
                        c ? (this._scriptLoader = new M()) : (this._scriptLoader = new d(this._env))
                    } else
                        this._env.isNode
                            ? (this._scriptLoader = new d(this._env))
                            : (this._scriptLoader = new M())
                let u = { callback: e, errorback: a }
                if (this._callbackMap.hasOwnProperty(C)) {
                    this._callbackMap[C].push(u)
                    return
                }
                ;(this._callbackMap[C] = [u]),
                    this._scriptLoader.load(
                        o,
                        C,
                        () => this.triggerCallback(C),
                        (c) => this.triggerErrorback(C, c)
                    )
            }
            triggerCallback(o) {
                let C = this._callbackMap[o]
                delete this._callbackMap[o]
                for (let e = 0; e < C.length; e++) C[e].callback()
            }
            triggerErrorback(o, C) {
                let e = this._callbackMap[o]
                delete this._callbackMap[o]
                for (let a = 0; a < e.length; a++) e[a].errorback(C)
            }
        }
        class M {
            attachListeners(o, C, e) {
                let a = () => {
                        o.removeEventListener('load', u), o.removeEventListener('error', c)
                    },
                    u = (m) => {
                        a(), C()
                    },
                    c = (m) => {
                        a(), e(m)
                    }
                o.addEventListener('load', u), o.addEventListener('error', c)
            }
            load(o, C, e, a) {
                if (/^node\|/.test(C)) {
                    let u = o.getConfig().getOptionsLiteral(),
                        c = g(o.getRecorder(), u.nodeRequire || q.global.nodeRequire),
                        m = C.split('|'),
                        f = null
                    try {
                        f = c(m[1])
                    } catch (S) {
                        a(S)
                        return
                    }
                    o.enqueueDefineAnonymousModule([], () => f), e()
                } else {
                    let u = document.createElement('script')
                    u.setAttribute('async', 'async'),
                        u.setAttribute('type', 'text/javascript'),
                        this.attachListeners(u, e, a)
                    const { trustedTypesPolicy: c } = o.getConfig().getOptionsLiteral()
                    c && (C = c.createScriptURL(C)), u.setAttribute('src', C)
                    const { cspNonce: m } = o.getConfig().getOptionsLiteral()
                    m && u.setAttribute('nonce', m),
                        document.getElementsByTagName('head')[0].appendChild(u)
                }
            }
        }
        function A(h) {
            const { trustedTypesPolicy: o } = h.getConfig().getOptionsLiteral()
            try {
                return (
                    (o ? self.eval(o.createScript('', 'true')) : new Function('true')).call(self),
                    !0
                )
            } catch {
                return !1
            }
        }
        class i {
            constructor() {
                this._cachedCanUseEval = null
            }
            _canUseEval(o) {
                return (
                    this._cachedCanUseEval === null && (this._cachedCanUseEval = A(o)),
                    this._cachedCanUseEval
                )
            }
            load(o, C, e, a) {
                if (/^node\|/.test(C)) {
                    const u = o.getConfig().getOptionsLiteral(),
                        c = g(o.getRecorder(), u.nodeRequire || q.global.nodeRequire),
                        m = C.split('|')
                    let f = null
                    try {
                        f = c(m[1])
                    } catch (S) {
                        a(S)
                        return
                    }
                    o.enqueueDefineAnonymousModule([], function () {
                        return f
                    }),
                        e()
                } else {
                    const { trustedTypesPolicy: u } = o.getConfig().getOptionsLiteral()
                    if (
                        !(
                            /^((http:)|(https:)|(file:))/.test(C) &&
                            C.substring(0, self.origin.length) !== self.origin
                        ) &&
                        this._canUseEval(o)
                    ) {
                        fetch(C)
                            .then((m) => {
                                if (m.status !== 200) throw new Error(m.statusText)
                                return m.text()
                            })
                            .then((m) => {
                                ;(m = `${m}
//# sourceURL=${C}`),
                                    (u ? self.eval(u.createScript('', m)) : new Function(m)).call(
                                        self
                                    ),
                                    e()
                            })
                            .then(void 0, a)
                        return
                    }
                    try {
                        u && (C = u.createScriptURL(C)), importScripts(C), e()
                    } catch (m) {
                        a(m)
                    }
                }
            }
        }
        class d {
            constructor(o) {
                ;(this._env = o), (this._didInitialize = !1), (this._didPatchNodeRequire = !1)
            }
            _init(o) {
                this._didInitialize ||
                    ((this._didInitialize = !0),
                    (this._fs = o('fs')),
                    (this._vm = o('vm')),
                    (this._path = o('path')),
                    (this._crypto = o('crypto')))
            }
            _initNodeRequire(o, C) {
                const { nodeCachedData: e } = C.getConfig().getOptionsLiteral()
                if (!e || this._didPatchNodeRequire) return
                this._didPatchNodeRequire = !0
                const a = this,
                    u = o('module')
                function c(m) {
                    const f = m.constructor
                    let S = function (E) {
                        try {
                            return m.require(E)
                        } finally {
                        }
                    }
                    return (
                        (S.resolve = function (E, y) {
                            return f._resolveFilename(E, m, !1, y)
                        }),
                        (S.resolve.paths = function (E) {
                            return f._resolveLookupPaths(E, m)
                        }),
                        (S.main = process.mainModule),
                        (S.extensions = f._extensions),
                        (S.cache = f._cache),
                        S
                    )
                }
                u.prototype._compile = function (m, f) {
                    const S = u.wrap(m.replace(/^#!.*/, '')),
                        w = C.getRecorder(),
                        E = a._getCachedDataPath(e, f),
                        y = { filename: f }
                    let _
                    try {
                        const R = a._fs.readFileSync(E)
                        ;(_ = R.slice(0, 16)), (y.cachedData = R.slice(16)), w.record(60, E)
                    } catch {
                        w.record(61, E)
                    }
                    const r = new a._vm.Script(S, y),
                        s = r.runInThisContext(y),
                        l = a._path.dirname(f),
                        p = c(this),
                        b = [this.exports, p, this, f, l, process, Ne, Buffer],
                        v = s.apply(this.exports, b)
                    return (
                        a._handleCachedData(r, S, E, !y.cachedData, C),
                        a._verifyCachedData(r, S, E, _, C),
                        v
                    )
                }
            }
            load(o, C, e, a) {
                const u = o.getConfig().getOptionsLiteral(),
                    c = g(o.getRecorder(), u.nodeRequire || q.global.nodeRequire),
                    m =
                        u.nodeInstrumenter ||
                        function (S) {
                            return S
                        }
                this._init(c), this._initNodeRequire(c, o)
                let f = o.getRecorder()
                if (/^node\|/.test(C)) {
                    let S = C.split('|'),
                        w = null
                    try {
                        w = c(S[1])
                    } catch (E) {
                        a(E)
                        return
                    }
                    o.enqueueDefineAnonymousModule([], () => w), e()
                } else {
                    C = q.Utilities.fileUriToFilePath(this._env.isWindows, C)
                    const S = this._path.normalize(C),
                        w = this._getElectronRendererScriptPathOrUri(S),
                        E = !!u.nodeCachedData,
                        y = E ? this._getCachedDataPath(u.nodeCachedData, C) : void 0
                    this._readSourceAndCachedData(S, y, f, (_, r, s, l) => {
                        if (_) {
                            a(_)
                            return
                        }
                        let p
                        r.charCodeAt(0) === d._BOM
                            ? (p = d._PREFIX + r.substring(1) + d._SUFFIX)
                            : (p = d._PREFIX + r + d._SUFFIX),
                            (p = m(p, S))
                        const b = { filename: w, cachedData: s },
                            v = this._createAndEvalScript(o, p, b, e, a)
                        this._handleCachedData(v, p, y, E && !s, o),
                            this._verifyCachedData(v, p, y, l, o)
                    })
                }
            }
            _createAndEvalScript(o, C, e, a, u) {
                const c = o.getRecorder()
                c.record(31, e.filename)
                const m = new this._vm.Script(C, e),
                    f = m.runInThisContext(e),
                    S = o.getGlobalAMDDefineFunc()
                let w = !1
                const E = function () {
                    return (w = !0), S.apply(null, arguments)
                }
                return (
                    (E.amd = S.amd),
                    f.call(
                        q.global,
                        o.getGlobalAMDRequireFunc(),
                        E,
                        e.filename,
                        this._path.dirname(e.filename)
                    ),
                    c.record(32, e.filename),
                    w ? a() : u(new Error(`Didn't receive define call in ${e.filename}!`)),
                    m
                )
            }
            _getElectronRendererScriptPathOrUri(o) {
                if (!this._env.isElectronRenderer) return o
                let C = o.match(/^([a-z])\:(.*)/i)
                return C
                    ? `file:///${(C[1].toUpperCase() + ':' + C[2]).replace(/\\/g, '/')}`
                    : `file://${o}`
            }
            _getCachedDataPath(o, C) {
                const e = this._crypto
                        .createHash('md5')
                        .update(C, 'utf8')
                        .update(o.seed, 'utf8')
                        .update(process.arch, '')
                        .digest('hex'),
                    a = this._path.basename(C).replace(/\.js$/, '')
                return this._path.join(o.path, `${a}-${e}.code`)
            }
            _handleCachedData(o, C, e, a, u) {
                o.cachedDataRejected
                    ? this._fs.unlink(e, (c) => {
                          u.getRecorder().record(62, e),
                              this._createAndWriteCachedData(o, C, e, u),
                              c && u.getConfig().onError(c)
                      })
                    : a && this._createAndWriteCachedData(o, C, e, u)
            }
            _createAndWriteCachedData(o, C, e, a) {
                let u = Math.ceil(
                        a.getConfig().getOptionsLiteral().nodeCachedData.writeDelay *
                            (1 + Math.random())
                    ),
                    c = -1,
                    m = 0,
                    f
                const S = () => {
                    setTimeout(
                        () => {
                            f || (f = this._crypto.createHash('md5').update(C, 'utf8').digest())
                            const w = o.createCachedData()
                            if (!(w.length === 0 || w.length === c || m >= 5)) {
                                if (w.length < c) {
                                    S()
                                    return
                                }
                                ;(c = w.length),
                                    this._fs.writeFile(e, Buffer.concat([f, w]), (E) => {
                                        E && a.getConfig().onError(E),
                                            a.getRecorder().record(63, e),
                                            S()
                                    })
                            }
                        },
                        u * Math.pow(4, m++)
                    )
                }
                S()
            }
            _readSourceAndCachedData(o, C, e, a) {
                if (!C) this._fs.readFile(o, { encoding: 'utf8' }, a)
                else {
                    let u,
                        c,
                        m,
                        f = 2
                    const S = (w) => {
                        w ? a(w) : --f === 0 && a(void 0, u, c, m)
                    }
                    this._fs.readFile(o, { encoding: 'utf8' }, (w, E) => {
                        ;(u = E), S(w)
                    }),
                        this._fs.readFile(C, (w, E) => {
                            !w && E && E.length > 0
                                ? ((m = E.slice(0, 16)), (c = E.slice(16)), e.record(60, C))
                                : e.record(61, C),
                                S()
                        })
                }
            }
            _verifyCachedData(o, C, e, a, u) {
                a &&
                    (o.cachedDataRejected ||
                        setTimeout(
                            () => {
                                const c = this._crypto.createHash('md5').update(C, 'utf8').digest()
                                a.equals(c) ||
                                    (u
                                        .getConfig()
                                        .onError(
                                            new Error(
                                                `FAILED TO VERIFY CACHED DATA, deleting stale '${e}' now, but a RESTART IS REQUIRED`
                                            )
                                        ),
                                    this._fs.unlink(e, (m) => {
                                        m && u.getConfig().onError(m)
                                    }))
                            },
                            Math.ceil(5e3 * (1 + Math.random()))
                        ))
            }
        }
        ;(d._BOM = 65279),
            (d._PREFIX = '(function (require, define, __filename, __dirname) { '),
            (d._SUFFIX = `
});`)
        function g(h, o) {
            if (o.__$__isRecorded) return o
            const C = function (a) {
                h.record(33, a)
                try {
                    return o(a)
                } finally {
                    h.record(34, a)
                }
            }
            return (C.__$__isRecorded = !0), C
        }
        q.ensureRecordedNodeRequire = g
        function L(h) {
            return new n(h)
        }
        q.createScriptLoader = L
    })(ae || (ae = {}))
    var ae
    ;(function (q) {
        class n {
            constructor(h) {
                let o = h.lastIndexOf('/')
                o !== -1 ? (this.fromModulePath = h.substr(0, o + 1)) : (this.fromModulePath = '')
            }
            static _normalizeModuleId(h) {
                let o = h,
                    C
                for (C = /\/\.\//; C.test(o); ) o = o.replace(C, '/')
                for (
                    o = o.replace(/^\.\//g, ''),
                        C = /\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;
                    C.test(o);

                )
                    o = o.replace(C, '/')
                return (
                    (o = o.replace(
                        /^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,
                        ''
                    )),
                    o
                )
            }
            resolveModule(h) {
                let o = h
                return (
                    q.Utilities.isAbsolutePath(o) ||
                        ((q.Utilities.startsWith(o, './') || q.Utilities.startsWith(o, '../')) &&
                            (o = n._normalizeModuleId(this.fromModulePath + o))),
                    o
                )
            }
        }
        ;(n.ROOT = new n('')), (q.ModuleIdResolver = n)
        class M {
            constructor(h, o, C, e, a, u) {
                ;(this.id = h),
                    (this.strId = o),
                    (this.dependencies = C),
                    (this._callback = e),
                    (this._errorback = a),
                    (this.moduleIdResolver = u),
                    (this.exports = {}),
                    (this.error = null),
                    (this.exportsPassedIn = !1),
                    (this.unresolvedDependenciesCount = this.dependencies.length),
                    (this._isComplete = !1)
            }
            static _safeInvokeFunction(h, o) {
                try {
                    return { returnedValue: h.apply(q.global, o), producedError: null }
                } catch (C) {
                    return { returnedValue: null, producedError: C }
                }
            }
            static _invokeFactory(h, o, C, e) {
                return h.shouldInvokeFactory(o)
                    ? h.shouldCatchError()
                        ? this._safeInvokeFunction(C, e)
                        : { returnedValue: C.apply(q.global, e), producedError: null }
                    : { returnedValue: null, producedError: null }
            }
            complete(h, o, C, e) {
                this._isComplete = !0
                let a = null
                if (this._callback)
                    if (typeof this._callback == 'function') {
                        h.record(21, this.strId)
                        let u = M._invokeFactory(o, this.strId, this._callback, C)
                        ;(a = u.producedError),
                            h.record(22, this.strId),
                            !a &&
                                typeof u.returnedValue < 'u' &&
                                (!this.exportsPassedIn || q.Utilities.isEmpty(this.exports)) &&
                                (this.exports = u.returnedValue)
                    } else this.exports = this._callback
                if (a) {
                    let u = q.ensureError(a)
                    ;(u.phase = 'factory'),
                        (u.moduleId = this.strId),
                        (u.neededBy = e(this.id)),
                        (this.error = u),
                        o.onError(u)
                }
                ;(this.dependencies = null),
                    (this._callback = null),
                    (this._errorback = null),
                    (this.moduleIdResolver = null)
            }
            onDependencyError(h) {
                return (
                    (this._isComplete = !0),
                    (this.error = h),
                    this._errorback ? (this._errorback(h), !0) : !1
                )
            }
            isComplete() {
                return this._isComplete
            }
        }
        q.Module = M
        class A {
            constructor() {
                ;(this._nextId = 0),
                    (this._strModuleIdToIntModuleId = new Map()),
                    (this._intModuleIdToStrModuleId = []),
                    this.getModuleId('exports'),
                    this.getModuleId('module'),
                    this.getModuleId('require')
            }
            getMaxModuleId() {
                return this._nextId
            }
            getModuleId(h) {
                let o = this._strModuleIdToIntModuleId.get(h)
                return (
                    typeof o > 'u' &&
                        ((o = this._nextId++),
                        this._strModuleIdToIntModuleId.set(h, o),
                        (this._intModuleIdToStrModuleId[o] = h)),
                    o
                )
            }
            getStrModuleId(h) {
                return this._intModuleIdToStrModuleId[h]
            }
        }
        class i {
            constructor(h) {
                this.id = h
            }
        }
        ;(i.EXPORTS = new i(0)),
            (i.MODULE = new i(1)),
            (i.REQUIRE = new i(2)),
            (q.RegularDependency = i)
        class d {
            constructor(h, o, C) {
                ;(this.id = h), (this.pluginId = o), (this.pluginParam = C)
            }
        }
        q.PluginDependency = d
        class g {
            constructor(h, o, C, e, a = 0) {
                ;(this._env = h),
                    (this._scriptLoader = o),
                    (this._loaderAvailableTimestamp = a),
                    (this._defineFunc = C),
                    (this._requireFunc = e),
                    (this._moduleIdProvider = new A()),
                    (this._config = new q.Configuration(this._env)),
                    (this._hasDependencyCycle = !1),
                    (this._modules2 = []),
                    (this._knownModules2 = []),
                    (this._inverseDependencies2 = []),
                    (this._inversePluginDependencies2 = new Map()),
                    (this._currentAnonymousDefineCall = null),
                    (this._recorder = null),
                    (this._buildInfoPath = []),
                    (this._buildInfoDefineStack = []),
                    (this._buildInfoDependencies = []),
                    (this._requireFunc.moduleManager = this)
            }
            reset() {
                return new g(
                    this._env,
                    this._scriptLoader,
                    this._defineFunc,
                    this._requireFunc,
                    this._loaderAvailableTimestamp
                )
            }
            getGlobalAMDDefineFunc() {
                return this._defineFunc
            }
            getGlobalAMDRequireFunc() {
                return this._requireFunc
            }
            static _findRelevantLocationInStack(h, o) {
                let C = (u) => u.replace(/\\/g, '/'),
                    e = C(h),
                    a = o.split(/\n/)
                for (let u = 0; u < a.length; u++) {
                    let c = a[u].match(/(.*):(\d+):(\d+)\)?$/)
                    if (c) {
                        let m = c[1],
                            f = c[2],
                            S = c[3],
                            w = Math.max(m.lastIndexOf(' ') + 1, m.lastIndexOf('(') + 1)
                        if (((m = m.substr(w)), (m = C(m)), m === e)) {
                            let E = { line: parseInt(f, 10), col: parseInt(S, 10) }
                            return E.line === 1 && (E.col -= 53), E
                        }
                    }
                }
                throw new Error('Could not correlate define call site for needle ' + h)
            }
            getBuildInfo() {
                if (!this._config.isBuild()) return null
                let h = [],
                    o = 0
                for (let C = 0, e = this._modules2.length; C < e; C++) {
                    let a = this._modules2[C]
                    if (!a) continue
                    let u = this._buildInfoPath[a.id] || null,
                        c = this._buildInfoDefineStack[a.id] || null,
                        m = this._buildInfoDependencies[a.id]
                    h[o++] = {
                        id: a.strId,
                        path: u,
                        defineLocation: u && c ? g._findRelevantLocationInStack(u, c) : null,
                        dependencies: m,
                        shim: null,
                        exports: a.exports
                    }
                }
                return h
            }
            getRecorder() {
                return (
                    this._recorder ||
                        (this._config.shouldRecordStats()
                            ? (this._recorder = new q.LoaderEventRecorder(
                                  this._loaderAvailableTimestamp
                              ))
                            : (this._recorder = q.NullLoaderEventRecorder.INSTANCE)),
                    this._recorder
                )
            }
            getLoaderEvents() {
                return this.getRecorder().getEvents()
            }
            enqueueDefineAnonymousModule(h, o) {
                if (this._currentAnonymousDefineCall !== null)
                    throw new Error('Can only have one anonymous define call per script file')
                let C = null
                this._config.isBuild() && (C = new Error('StackLocation').stack || null),
                    (this._currentAnonymousDefineCall = { stack: C, dependencies: h, callback: o })
            }
            defineModule(h, o, C, e, a, u = new n(h)) {
                let c = this._moduleIdProvider.getModuleId(h)
                if (this._modules2[c]) {
                    this._config.isDuplicateMessageIgnoredFor(h) ||
                        console.warn("Duplicate definition of module '" + h + "'")
                    return
                }
                let m = new M(c, h, this._normalizeDependencies(o, u), C, e, u)
                ;(this._modules2[c] = m),
                    this._config.isBuild() &&
                        ((this._buildInfoDefineStack[c] = a),
                        (this._buildInfoDependencies[c] = (m.dependencies || []).map((f) =>
                            this._moduleIdProvider.getStrModuleId(f.id)
                        ))),
                    this._resolve(m)
            }
            _normalizeDependency(h, o) {
                if (h === 'exports') return i.EXPORTS
                if (h === 'module') return i.MODULE
                if (h === 'require') return i.REQUIRE
                let C = h.indexOf('!')
                if (C >= 0) {
                    let e = o.resolveModule(h.substr(0, C)),
                        a = o.resolveModule(h.substr(C + 1)),
                        u = this._moduleIdProvider.getModuleId(e + '!' + a),
                        c = this._moduleIdProvider.getModuleId(e)
                    return new d(u, c, a)
                }
                return new i(this._moduleIdProvider.getModuleId(o.resolveModule(h)))
            }
            _normalizeDependencies(h, o) {
                let C = [],
                    e = 0
                for (let a = 0, u = h.length; a < u; a++)
                    C[e++] = this._normalizeDependency(h[a], o)
                return C
            }
            _relativeRequire(h, o, C, e) {
                if (typeof o == 'string') return this.synchronousRequire(o, h)
                this.defineModule(q.Utilities.generateAnonymousModule(), o, C, e, null, h)
            }
            synchronousRequire(h, o = new n(h)) {
                let C = this._normalizeDependency(h, o),
                    e = this._modules2[C.id]
                if (!e)
                    throw new Error(
                        "Check dependency list! Synchronous require cannot resolve module '" +
                            h +
                            "'. This is the first mention of this module!"
                    )
                if (!e.isComplete())
                    throw new Error(
                        "Check dependency list! Synchronous require cannot resolve module '" +
                            h +
                            "'. This module has not been resolved completely yet."
                    )
                if (e.error) throw e.error
                return e.exports
            }
            configure(h, o) {
                let C = this._config.shouldRecordStats()
                o
                    ? (this._config = new q.Configuration(this._env, h))
                    : (this._config = this._config.cloneAndMerge(h)),
                    this._config.shouldRecordStats() && !C && (this._recorder = null)
            }
            getConfig() {
                return this._config
            }
            _onLoad(h) {
                if (this._currentAnonymousDefineCall !== null) {
                    let o = this._currentAnonymousDefineCall
                    ;(this._currentAnonymousDefineCall = null),
                        this.defineModule(
                            this._moduleIdProvider.getStrModuleId(h),
                            o.dependencies,
                            o.callback,
                            null,
                            o.stack
                        )
                }
            }
            _createLoadError(h, o) {
                let C = this._moduleIdProvider.getStrModuleId(h),
                    e = (this._inverseDependencies2[h] || []).map((u) =>
                        this._moduleIdProvider.getStrModuleId(u)
                    )
                const a = q.ensureError(o)
                return (a.phase = 'loading'), (a.moduleId = C), (a.neededBy = e), a
            }
            _onLoadError(h, o) {
                const C = this._createLoadError(h, o)
                this._modules2[h] ||
                    (this._modules2[h] = new M(
                        h,
                        this._moduleIdProvider.getStrModuleId(h),
                        [],
                        () => {},
                        null,
                        null
                    ))
                let e = []
                for (let c = 0, m = this._moduleIdProvider.getMaxModuleId(); c < m; c++) e[c] = !1
                let a = !1,
                    u = []
                for (u.push(h), e[h] = !0; u.length > 0; ) {
                    let c = u.shift(),
                        m = this._modules2[c]
                    m && (a = m.onDependencyError(C) || a)
                    let f = this._inverseDependencies2[c]
                    if (f)
                        for (let S = 0, w = f.length; S < w; S++) {
                            let E = f[S]
                            e[E] || (u.push(E), (e[E] = !0))
                        }
                }
                a || this._config.onError(C)
            }
            _hasDependencyPath(h, o) {
                let C = this._modules2[h]
                if (!C) return !1
                let e = []
                for (let u = 0, c = this._moduleIdProvider.getMaxModuleId(); u < c; u++) e[u] = !1
                let a = []
                for (a.push(C), e[h] = !0; a.length > 0; ) {
                    let c = a.shift().dependencies
                    if (c)
                        for (let m = 0, f = c.length; m < f; m++) {
                            let S = c[m]
                            if (S.id === o) return !0
                            let w = this._modules2[S.id]
                            w && !e[S.id] && ((e[S.id] = !0), a.push(w))
                        }
                }
                return !1
            }
            _findCyclePath(h, o, C) {
                if (h === o || C === 50) return [h]
                let e = this._modules2[h]
                if (!e) return null
                let a = e.dependencies
                if (a)
                    for (let u = 0, c = a.length; u < c; u++) {
                        let m = this._findCyclePath(a[u].id, o, C + 1)
                        if (m !== null) return m.push(h), m
                    }
                return null
            }
            _createRequire(h) {
                let o = (C, e, a) => this._relativeRequire(h, C, e, a)
                return (
                    (o.toUrl = (C) => this._config.requireToUrl(h.resolveModule(C))),
                    (o.getStats = () => this.getLoaderEvents()),
                    (o.hasDependencyCycle = () => this._hasDependencyCycle),
                    (o.config = (C, e = !1) => {
                        this.configure(C, e)
                    }),
                    (o.__$__nodeRequire = q.global.nodeRequire),
                    o
                )
            }
            _loadModule(h) {
                if (this._modules2[h] || this._knownModules2[h]) return
                this._knownModules2[h] = !0
                let o = this._moduleIdProvider.getStrModuleId(h),
                    C = this._config.moduleIdToPaths(o),
                    e = /^@[^\/]+\/[^\/]+$/
                this._env.isNode && (o.indexOf('/') === -1 || e.test(o)) && C.push('node|' + o)
                let a = -1,
                    u = (c) => {
                        if ((a++, a >= C.length)) this._onLoadError(h, c)
                        else {
                            let m = C[a],
                                f = this.getRecorder()
                            if (this._config.isBuild() && m === 'empty:') {
                                ;(this._buildInfoPath[h] = m),
                                    this.defineModule(
                                        this._moduleIdProvider.getStrModuleId(h),
                                        [],
                                        null,
                                        null,
                                        null
                                    ),
                                    this._onLoad(h)
                                return
                            }
                            f.record(10, m),
                                this._scriptLoader.load(
                                    this,
                                    m,
                                    () => {
                                        this._config.isBuild() && (this._buildInfoPath[h] = m),
                                            f.record(11, m),
                                            this._onLoad(h)
                                    },
                                    (S) => {
                                        f.record(12, m), u(S)
                                    }
                                )
                        }
                    }
                u(null)
            }
            _loadPluginDependency(h, o) {
                if (this._modules2[o.id] || this._knownModules2[o.id]) return
                this._knownModules2[o.id] = !0
                let C = (e) => {
                    this.defineModule(
                        this._moduleIdProvider.getStrModuleId(o.id),
                        [],
                        e,
                        null,
                        null
                    )
                }
                ;(C.error = (e) => {
                    this._config.onError(this._createLoadError(o.id, e))
                }),
                    h.load(
                        o.pluginParam,
                        this._createRequire(n.ROOT),
                        C,
                        this._config.getOptionsLiteral()
                    )
            }
            _resolve(h) {
                let o = h.dependencies
                if (o)
                    for (let C = 0, e = o.length; C < e; C++) {
                        let a = o[C]
                        if (a === i.EXPORTS) {
                            ;(h.exportsPassedIn = !0), h.unresolvedDependenciesCount--
                            continue
                        }
                        if (a === i.MODULE) {
                            h.unresolvedDependenciesCount--
                            continue
                        }
                        if (a === i.REQUIRE) {
                            h.unresolvedDependenciesCount--
                            continue
                        }
                        let u = this._modules2[a.id]
                        if (u && u.isComplete()) {
                            if (u.error) {
                                h.onDependencyError(u.error)
                                return
                            }
                            h.unresolvedDependenciesCount--
                            continue
                        }
                        if (this._hasDependencyPath(a.id, h.id)) {
                            ;(this._hasDependencyCycle = !0),
                                console.warn(
                                    "There is a dependency cycle between '" +
                                        this._moduleIdProvider.getStrModuleId(a.id) +
                                        "' and '" +
                                        this._moduleIdProvider.getStrModuleId(h.id) +
                                        "'. The cyclic path follows:"
                                )
                            let c = this._findCyclePath(a.id, h.id, 0) || []
                            c.reverse(),
                                c.push(a.id),
                                console.warn(
                                    c.map((m) => this._moduleIdProvider.getStrModuleId(m))
                                        .join(` => 
`)
                                ),
                                h.unresolvedDependenciesCount--
                            continue
                        }
                        if (
                            ((this._inverseDependencies2[a.id] =
                                this._inverseDependencies2[a.id] || []),
                            this._inverseDependencies2[a.id].push(h.id),
                            a instanceof d)
                        ) {
                            let c = this._modules2[a.pluginId]
                            if (c && c.isComplete()) {
                                this._loadPluginDependency(c.exports, a)
                                continue
                            }
                            let m = this._inversePluginDependencies2.get(a.pluginId)
                            m || ((m = []), this._inversePluginDependencies2.set(a.pluginId, m)),
                                m.push(a),
                                this._loadModule(a.pluginId)
                            continue
                        }
                        this._loadModule(a.id)
                    }
                h.unresolvedDependenciesCount === 0 && this._onModuleComplete(h)
            }
            _onModuleComplete(h) {
                let o = this.getRecorder()
                if (h.isComplete()) return
                let C = h.dependencies,
                    e = []
                if (C)
                    for (let m = 0, f = C.length; m < f; m++) {
                        let S = C[m]
                        if (S === i.EXPORTS) {
                            e[m] = h.exports
                            continue
                        }
                        if (S === i.MODULE) {
                            e[m] = {
                                id: h.strId,
                                config: () => this._config.getConfigForModule(h.strId)
                            }
                            continue
                        }
                        if (S === i.REQUIRE) {
                            e[m] = this._createRequire(h.moduleIdResolver)
                            continue
                        }
                        let w = this._modules2[S.id]
                        if (w) {
                            e[m] = w.exports
                            continue
                        }
                        e[m] = null
                    }
                const a = (m) =>
                    (this._inverseDependencies2[m] || []).map((f) =>
                        this._moduleIdProvider.getStrModuleId(f)
                    )
                h.complete(o, this._config, e, a)
                let u = this._inverseDependencies2[h.id]
                if (((this._inverseDependencies2[h.id] = null), u))
                    for (let m = 0, f = u.length; m < f; m++) {
                        let S = u[m],
                            w = this._modules2[S]
                        w.unresolvedDependenciesCount--,
                            w.unresolvedDependenciesCount === 0 && this._onModuleComplete(w)
                    }
                let c = this._inversePluginDependencies2.get(h.id)
                if (c) {
                    this._inversePluginDependencies2.delete(h.id)
                    for (let m = 0, f = c.length; m < f; m++)
                        this._loadPluginDependency(h.exports, c[m])
                }
            }
        }
        q.ModuleManager = g
    })(ae || (ae = {}))
    var X, ae
    ;(function (q) {
        const n = new q.Environment()
        let M = null
        const A = function (L, h, o) {
            typeof L != 'string' && ((o = h), (h = L), (L = null)),
                (typeof h != 'object' || !Array.isArray(h)) && ((o = h), (h = null)),
                h || (h = ['require', 'exports', 'module']),
                L ? M.defineModule(L, h, o, null, null) : M.enqueueDefineAnonymousModule(h, o)
        }
        A.amd = { jQuery: !0 }
        const i = function (L, h = !1) {
                M.configure(L, h)
            },
            d = function () {
                if (arguments.length === 1) {
                    if (arguments[0] instanceof Object && !Array.isArray(arguments[0])) {
                        i(arguments[0])
                        return
                    }
                    if (typeof arguments[0] == 'string') return M.synchronousRequire(arguments[0])
                }
                if (
                    (arguments.length === 2 || arguments.length === 3) &&
                    Array.isArray(arguments[0])
                ) {
                    M.defineModule(
                        q.Utilities.generateAnonymousModule(),
                        arguments[0],
                        arguments[1],
                        arguments[2],
                        null
                    )
                    return
                }
                throw new Error('Unrecognized require call')
            }
        ;(d.config = i),
            (d.getConfig = function () {
                return M.getConfig().getOptionsLiteral()
            }),
            (d.reset = function () {
                M = M.reset()
            }),
            (d.getBuildInfo = function () {
                return M.getBuildInfo()
            }),
            (d.getStats = function () {
                return M.getLoaderEvents()
            }),
            (d.define = A)
        function g() {
            if (typeof q.global.require < 'u' || typeof require < 'u') {
                const L = q.global.require || require
                if (typeof L == 'function' && typeof L.resolve == 'function') {
                    const h = q.ensureRecordedNodeRequire(M.getRecorder(), L)
                    ;(q.global.nodeRequire = h), (d.nodeRequire = h), (d.__$__nodeRequire = h)
                }
            }
            n.isNode && !n.isElectronRenderer && !n.isElectronNodeIntegrationWebWorker
                ? (module.exports = d)
                : (n.isElectronRenderer || (q.global.define = A), (q.global.require = d))
        }
        ;(q.init = g),
            (typeof q.global.define != 'function' || !q.global.define.amd) &&
                ((M = new q.ModuleManager(
                    n,
                    q.createScriptLoader(n),
                    A,
                    d,
                    q.Utilities.getHighPerformanceTimestamp()
                )),
                typeof q.global.require < 'u' &&
                    typeof q.global.require != 'function' &&
                    d.config(q.global.require),
                (X = function () {
                    return A.apply(null, arguments)
                }),
                (X.amd = A.amd),
                typeof doNotInitLoader > 'u' && g())
    })(ae || (ae = {})),
        X(J[19], Z([0, 1]), function (q, n) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.load =
                    n.create =
                    n.setPseudoTranslation =
                    n.getConfiguredDefaultLocale =
                    n.localize2 =
                    n.localize =
                        void 0)
            let M =
                typeof document < 'u' &&
                document.location &&
                document.location.hash.indexOf('pseudo=true') >= 0
            const A = 'i-default'
            function i(f, S) {
                let w
                return (
                    S.length === 0
                        ? (w = f)
                        : (w = f.replace(/\{(\d+)\}/g, (E, y) => {
                              const _ = y[0],
                                  r = S[_]
                              let s = E
                              return (
                                  typeof r == 'string'
                                      ? (s = r)
                                      : (typeof r == 'number' ||
                                            typeof r == 'boolean' ||
                                            r === void 0 ||
                                            r === null) &&
                                        (s = String(r)),
                                  s
                              )
                          })),
                    M && (w = '\uFF3B' + w.replace(/[aouei]/g, '$&$&') + '\uFF3D'),
                    w
                )
            }
            function d(f, S) {
                let w = f[S]
                return w || ((w = f['*']), w) ? w : null
            }
            function g(f) {
                return f.charAt(f.length - 1) === '/' ? f : f + '/'
            }
            async function L(f, S, w) {
                const E = g(f) + g(S) + 'vscode/' + g(w),
                    y = await fetch(E)
                if (y.ok) return await y.json()
                throw new Error(`${y.status} - ${y.statusText}`)
            }
            function h(f) {
                return function (S, w) {
                    const E = Array.prototype.slice.call(arguments, 2)
                    return i(f[S], E)
                }
            }
            function o(f) {
                return (S, w, ...E) => ({ value: i(f[S], E), original: i(w, E) })
            }
            function C(f, S, ...w) {
                return i(S, w)
            }
            n.localize = C
            function e(f, S, ...w) {
                const E = i(S, w)
                return { value: E, original: E }
            }
            n.localize2 = e
            function a(f) {}
            n.getConfiguredDefaultLocale = a
            function u(f) {
                M = f
            }
            n.setPseudoTranslation = u
            function c(f, S) {
                var w
                return {
                    localize: h(S[f]),
                    localize2: o(S[f]),
                    getConfiguredDefaultLocale:
                        (w = S.getConfiguredDefaultLocale) !== null && w !== void 0 ? w : (E) => {}
                }
            }
            n.create = c
            function m(f, S, w, E) {
                var y
                const _ = (y = E['vs/nls']) !== null && y !== void 0 ? y : {}
                if (!f || f.length === 0)
                    return w({
                        localize: C,
                        localize2: e,
                        getConfiguredDefaultLocale: () => {
                            var b
                            return (b = _.availableLanguages) === null || b === void 0
                                ? void 0
                                : b['*']
                        }
                    })
                const r = _.availableLanguages ? d(_.availableLanguages, f) : null,
                    s = r === null || r === A
                let l = '.nls'
                s || (l = l + '.' + r)
                const p = (b) => {
                    Array.isArray(b)
                        ? ((b.localize = h(b)), (b.localize2 = o(b)))
                        : ((b.localize = h(b[f])), (b.localize2 = o(b[f]))),
                        (b.getConfiguredDefaultLocale = () => {
                            var v
                            return (v = _.availableLanguages) === null || v === void 0
                                ? void 0
                                : v['*']
                        }),
                        w(b)
                }
                typeof _.loadBundle == 'function'
                    ? _.loadBundle(f, r, (b, v) => {
                          b ? S([f + '.nls'], p) : p(v)
                      })
                    : _.translationServiceUrl && !s
                      ? (async () => {
                            var b
                            try {
                                const v = await L(_.translationServiceUrl, r, f)
                                return p(v)
                            } catch (v) {
                                if (!r.includes('-')) return console.error(v), S([f + '.nls'], p)
                                try {
                                    const R = r.split('-')[0],
                                        N = await L(_.translationServiceUrl, R, f)
                                    return (
                                        ((b = _.availableLanguages) !== null && b !== void 0) ||
                                            (_.availableLanguages = {}),
                                        (_.availableLanguages['*'] = R),
                                        p(N)
                                    )
                                } catch (R) {
                                    return console.error(R), S([f + '.nls'], p)
                                }
                            }
                        })()
                      : S([f + l], p, (b) => {
                            if (l === '.nls') {
                                console.error('Failed trying to load default language strings', b)
                                return
                            }
                            console.error(
                                `Failed to load message bundle for language ${r}. Falling back to the default language:`,
                                b
                            ),
                                S([f + '.nls'], p)
                        })
            }
            n.load = m
        }),
        (function () {
            const q = globalThis.MonacoEnvironment,
                n = q && q.baseUrl ? q.baseUrl : '../../../'
            function M(C, e) {
                var a
                if (q?.createTrustedTypesPolicy)
                    try {
                        return q.createTrustedTypesPolicy(C, e)
                    } catch (u) {
                        console.warn(u)
                        return
                    }
                try {
                    return (a = self.trustedTypes) === null || a === void 0
                        ? void 0
                        : a.createPolicy(C, e)
                } catch (u) {
                    console.warn(u)
                    return
                }
            }
            const A = M('amdLoader', {
                createScriptURL: (C) => C,
                createScript: (C, ...e) => {
                    const a = e.slice(0, -1).join(','),
                        u = e.pop().toString()
                    return `(function anonymous(${a}) { ${u}
})`
                }
            })
            function i() {
                try {
                    return (
                        (A
                            ? globalThis.eval(A.createScript('', 'true'))
                            : new Function('true')
                        ).call(globalThis),
                        !0
                    )
                } catch {
                    return !1
                }
            }
            function d() {
                return new Promise((C, e) => {
                    if (typeof globalThis.define == 'function' && globalThis.define.amd) return C()
                    const a = n + 'vs/loader.js'
                    if (
                        !(
                            /^((http:)|(https:)|(file:))/.test(a) &&
                            a.substring(0, globalThis.origin.length) !== globalThis.origin
                        ) &&
                        i()
                    ) {
                        fetch(a)
                            .then((c) => {
                                if (c.status !== 200) throw new Error(c.statusText)
                                return c.text()
                            })
                            .then((c) => {
                                ;(c = `${c}
//# sourceURL=${a}`),
                                    (A
                                        ? globalThis.eval(A.createScript('', c))
                                        : new Function(c)
                                    ).call(globalThis),
                                    C()
                            })
                            .then(void 0, e)
                        return
                    }
                    A ? importScripts(A.createScriptURL(a)) : importScripts(a), C()
                })
            }
            function g() {
                require.config({
                    baseUrl: n,
                    catchError: !0,
                    trustedTypesPolicy: A,
                    amdModulesPattern: /^vs\//
                })
            }
            function L(C) {
                d().then(() => {
                    g(),
                        require([C], function (e) {
                            setTimeout(function () {
                                const a = e.create((u, c) => {
                                    globalThis.postMessage(u, c)
                                }, null)
                                for (
                                    globalThis.onmessage = (u) => a.onmessage(u.data, u.ports);
                                    o.length > 0;

                                ) {
                                    const u = o.shift()
                                    a.onmessage(u.data, u.ports)
                                }
                            }, 0)
                        })
                })
            }
            typeof globalThis.define == 'function' && globalThis.define.amd && g()
            let h = !0
            const o = []
            globalThis.onmessage = (C) => {
                if (!h) {
                    o.push(C)
                    return
                }
                ;(h = !1), L(C.data)
            }
        })(),
        X(J[7], Z([0, 1]), function (q, n) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.CallbackIterable =
                    n.ArrayQueue =
                    n.reverseOrder =
                    n.booleanComparator =
                    n.numberComparator =
                    n.tieBreakComparators =
                    n.compareBy =
                    n.CompareResult =
                    n.splice =
                    n.insertInto =
                    n.asArray =
                    n.pushMany =
                    n.pushToEnd =
                    n.pushToStart =
                    n.arrayInsert =
                    n.range =
                    n.firstOrDefault =
                    n.distinct =
                    n.isNonEmptyArray =
                    n.isFalsyOrEmpty =
                    n.coalesceInPlace =
                    n.coalesce =
                    n.forEachWithNeighbors =
                    n.forEachAdjacent =
                    n.groupAdjacentBy =
                    n.groupBy =
                    n.quickSelect =
                    n.binarySearch2 =
                    n.binarySearch =
                    n.removeFastWithoutKeepingOrder =
                    n.equals =
                    n.tail2 =
                    n.tail =
                        void 0)
            function M(k, O = 0) {
                return k[k.length - (1 + O)]
            }
            n.tail = M
            function A(k) {
                if (k.length === 0) throw new Error('Invalid tail call')
                return [k.slice(0, k.length - 1), k[k.length - 1]]
            }
            n.tail2 = A
            function i(k, O, I = (V, H) => V === H) {
                if (k === O) return !0
                if (!k || !O || k.length !== O.length) return !1
                for (let V = 0, H = k.length; V < H; V++) if (!I(k[V], O[V])) return !1
                return !0
            }
            n.equals = i
            function d(k, O) {
                const I = k.length - 1
                O < I && (k[O] = k[I]), k.pop()
            }
            n.removeFastWithoutKeepingOrder = d
            function g(k, O, I) {
                return L(k.length, (V) => I(k[V], O))
            }
            n.binarySearch = g
            function L(k, O) {
                let I = 0,
                    V = k - 1
                for (; I <= V; ) {
                    const H = ((I + V) / 2) | 0,
                        Y = O(H)
                    if (Y < 0) I = H + 1
                    else if (Y > 0) V = H - 1
                    else return H
                }
                return -(I + 1)
            }
            n.binarySearch2 = L
            function h(k, O, I) {
                if (((k = k | 0), k >= O.length)) throw new TypeError('invalid index')
                const V = O[Math.floor(O.length * Math.random())],
                    H = [],
                    Y = [],
                    t = []
                for (const re of O) {
                    const le = I(re, V)
                    le < 0 ? H.push(re) : le > 0 ? Y.push(re) : t.push(re)
                }
                return k < H.length
                    ? h(k, H, I)
                    : k < H.length + t.length
                      ? t[0]
                      : h(k - (H.length + t.length), Y, I)
            }
            n.quickSelect = h
            function o(k, O) {
                const I = []
                let V
                for (const H of k.slice(0).sort(O))
                    !V || O(V[0], H) !== 0 ? ((V = [H]), I.push(V)) : V.push(H)
                return I
            }
            n.groupBy = o
            function* C(k, O) {
                let I, V
                for (const H of k)
                    V !== void 0 && O(V, H) ? I.push(H) : (I && (yield I), (I = [H])), (V = H)
                I && (yield I)
            }
            n.groupAdjacentBy = C
            function e(k, O) {
                for (let I = 0; I <= k.length; I++)
                    O(I === 0 ? void 0 : k[I - 1], I === k.length ? void 0 : k[I])
            }
            n.forEachAdjacent = e
            function a(k, O) {
                for (let I = 0; I < k.length; I++)
                    O(I === 0 ? void 0 : k[I - 1], k[I], I + 1 === k.length ? void 0 : k[I + 1])
            }
            n.forEachWithNeighbors = a
            function u(k) {
                return k.filter((O) => !!O)
            }
            n.coalesce = u
            function c(k) {
                let O = 0
                for (let I = 0; I < k.length; I++) k[I] && ((k[O] = k[I]), (O += 1))
                k.length = O
            }
            n.coalesceInPlace = c
            function m(k) {
                return !Array.isArray(k) || k.length === 0
            }
            n.isFalsyOrEmpty = m
            function f(k) {
                return Array.isArray(k) && k.length > 0
            }
            n.isNonEmptyArray = f
            function S(k, O = (I) => I) {
                const I = new Set()
                return k.filter((V) => {
                    const H = O(V)
                    return I.has(H) ? !1 : (I.add(H), !0)
                })
            }
            n.distinct = S
            function w(k, O) {
                return k.length > 0 ? k[0] : O
            }
            n.firstOrDefault = w
            function E(k, O) {
                let I = typeof O == 'number' ? k : 0
                typeof O == 'number' ? (I = k) : ((I = 0), (O = k))
                const V = []
                if (I <= O) for (let H = I; H < O; H++) V.push(H)
                else for (let H = I; H > O; H--) V.push(H)
                return V
            }
            n.range = E
            function y(k, O, I) {
                const V = k.slice(0, O),
                    H = k.slice(O)
                return V.concat(I, H)
            }
            n.arrayInsert = y
            function _(k, O) {
                const I = k.indexOf(O)
                I > -1 && (k.splice(I, 1), k.unshift(O))
            }
            n.pushToStart = _
            function r(k, O) {
                const I = k.indexOf(O)
                I > -1 && (k.splice(I, 1), k.push(O))
            }
            n.pushToEnd = r
            function s(k, O) {
                for (const I of O) k.push(I)
            }
            n.pushMany = s
            function l(k) {
                return Array.isArray(k) ? k : [k]
            }
            n.asArray = l
            function p(k, O, I) {
                const V = v(k, O),
                    H = k.length,
                    Y = I.length
                k.length = H + Y
                for (let t = H - 1; t >= V; t--) k[t + Y] = k[t]
                for (let t = 0; t < Y; t++) k[t + V] = I[t]
            }
            n.insertInto = p
            function b(k, O, I, V) {
                const H = v(k, O)
                let Y = k.splice(H, I)
                return Y === void 0 && (Y = []), p(k, H, V), Y
            }
            n.splice = b
            function v(k, O) {
                return O < 0 ? Math.max(O + k.length, 0) : Math.min(O, k.length)
            }
            var R
            ;(function (k) {
                function O(Y) {
                    return Y < 0
                }
                k.isLessThan = O
                function I(Y) {
                    return Y <= 0
                }
                k.isLessThanOrEqual = I
                function V(Y) {
                    return Y > 0
                }
                k.isGreaterThan = V
                function H(Y) {
                    return Y === 0
                }
                ;(k.isNeitherLessOrGreaterThan = H),
                    (k.greaterThan = 1),
                    (k.lessThan = -1),
                    (k.neitherLessOrGreaterThan = 0)
            })(R || (n.CompareResult = R = {}))
            function N(k, O) {
                return (I, V) => O(k(I), k(V))
            }
            n.compareBy = N
            function D(...k) {
                return (O, I) => {
                    for (const V of k) {
                        const H = V(O, I)
                        if (!R.isNeitherLessOrGreaterThan(H)) return H
                    }
                    return R.neitherLessOrGreaterThan
                }
            }
            n.tieBreakComparators = D
            const x = (k, O) => k - O
            n.numberComparator = x
            const T = (k, O) => (0, n.numberComparator)(k ? 1 : 0, O ? 1 : 0)
            n.booleanComparator = T
            function F(k) {
                return (O, I) => -k(O, I)
            }
            n.reverseOrder = F
            class U {
                constructor(O) {
                    ;(this.items = O), (this.firstIdx = 0), (this.lastIdx = this.items.length - 1)
                }
                get length() {
                    return this.lastIdx - this.firstIdx + 1
                }
                takeWhile(O) {
                    let I = this.firstIdx
                    for (; I < this.items.length && O(this.items[I]); ) I++
                    const V = I === this.firstIdx ? null : this.items.slice(this.firstIdx, I)
                    return (this.firstIdx = I), V
                }
                takeFromEndWhile(O) {
                    let I = this.lastIdx
                    for (; I >= 0 && O(this.items[I]); ) I--
                    const V = I === this.lastIdx ? null : this.items.slice(I + 1, this.lastIdx + 1)
                    return (this.lastIdx = I), V
                }
                peek() {
                    if (this.length !== 0) return this.items[this.firstIdx]
                }
                dequeue() {
                    const O = this.items[this.firstIdx]
                    return this.firstIdx++, O
                }
                takeCount(O) {
                    const I = this.items.slice(this.firstIdx, this.firstIdx + O)
                    return (this.firstIdx += O), I
                }
            }
            n.ArrayQueue = U
            class z {
                constructor(O) {
                    this.iterate = O
                }
                toArray() {
                    const O = []
                    return this.iterate((I) => (O.push(I), !0)), O
                }
                filter(O) {
                    return new z((I) => this.iterate((V) => (O(V) ? I(V) : !0)))
                }
                map(O) {
                    return new z((I) => this.iterate((V) => I(O(V))))
                }
                findLast(O) {
                    let I
                    return this.iterate((V) => (O(V) && (I = V), !0)), I
                }
                findLastMaxBy(O) {
                    let I,
                        V = !0
                    return (
                        this.iterate(
                            (H) => ((V || R.isGreaterThan(O(H, I))) && ((V = !1), (I = H)), !0)
                        ),
                        I
                    )
                }
            }
            ;(n.CallbackIterable = z), (z.empty = new z((k) => {}))
        }),
        X(J[11], Z([0, 1]), function (q, n) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.mapFindFirst =
                    n.findMaxIdxBy =
                    n.findFirstMinBy =
                    n.findLastMaxBy =
                    n.findFirstMaxBy =
                    n.MonotonousArray =
                    n.findFirstIdxMonotonousOrArrLen =
                    n.findFirstMonotonous =
                    n.findLastIdxMonotonous =
                    n.findLastMonotonous =
                    n.findLastIdx =
                    n.findLast =
                        void 0)
            function M(c, m, f) {
                const S = A(c, m)
                if (S !== -1) return c[S]
            }
            n.findLast = M
            function A(c, m, f = c.length - 1) {
                for (let S = f; S >= 0; S--) {
                    const w = c[S]
                    if (m(w)) return S
                }
                return -1
            }
            n.findLastIdx = A
            function i(c, m) {
                const f = d(c, m)
                return f === -1 ? void 0 : c[f]
            }
            n.findLastMonotonous = i
            function d(c, m, f = 0, S = c.length) {
                let w = f,
                    E = S
                for (; w < E; ) {
                    const y = Math.floor((w + E) / 2)
                    m(c[y]) ? (w = y + 1) : (E = y)
                }
                return w - 1
            }
            n.findLastIdxMonotonous = d
            function g(c, m) {
                const f = L(c, m)
                return f === c.length ? void 0 : c[f]
            }
            n.findFirstMonotonous = g
            function L(c, m, f = 0, S = c.length) {
                let w = f,
                    E = S
                for (; w < E; ) {
                    const y = Math.floor((w + E) / 2)
                    m(c[y]) ? (E = y) : (w = y + 1)
                }
                return w
            }
            n.findFirstIdxMonotonousOrArrLen = L
            class h {
                constructor(m) {
                    ;(this._array = m), (this._findLastMonotonousLastIdx = 0)
                }
                findLastMonotonous(m) {
                    if (h.assertInvariants) {
                        if (this._prevFindLastPredicate) {
                            for (const S of this._array)
                                if (this._prevFindLastPredicate(S) && !m(S))
                                    throw new Error(
                                        'MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.'
                                    )
                        }
                        this._prevFindLastPredicate = m
                    }
                    const f = d(this._array, m, this._findLastMonotonousLastIdx)
                    return (
                        (this._findLastMonotonousLastIdx = f + 1),
                        f === -1 ? void 0 : this._array[f]
                    )
                }
            }
            ;(n.MonotonousArray = h), (h.assertInvariants = !1)
            function o(c, m) {
                if (c.length === 0) return
                let f = c[0]
                for (let S = 1; S < c.length; S++) {
                    const w = c[S]
                    m(w, f) > 0 && (f = w)
                }
                return f
            }
            n.findFirstMaxBy = o
            function C(c, m) {
                if (c.length === 0) return
                let f = c[0]
                for (let S = 1; S < c.length; S++) {
                    const w = c[S]
                    m(w, f) >= 0 && (f = w)
                }
                return f
            }
            n.findLastMaxBy = C
            function e(c, m) {
                return o(c, (f, S) => -m(f, S))
            }
            n.findFirstMinBy = e
            function a(c, m) {
                if (c.length === 0) return -1
                let f = 0
                for (let S = 1; S < c.length; S++) {
                    const w = c[S]
                    m(w, c[f]) > 0 && (f = S)
                }
                return f
            }
            n.findMaxIdxBy = a
            function u(c, m) {
                for (const f of c) {
                    const S = m(f)
                    if (S !== void 0) return S
                }
            }
            n.mapFindFirst = u
        }),
        X(J[32], Z([0, 1]), function (q, n) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.CachedFunction = n.LRUCachedFunction = void 0)
            class M {
                constructor(d) {
                    ;(this.fn = d), (this.lastCache = void 0), (this.lastArgKey = void 0)
                }
                get(d) {
                    const g = JSON.stringify(d)
                    return (
                        this.lastArgKey !== g &&
                            ((this.lastArgKey = g), (this.lastCache = this.fn(d))),
                        this.lastCache
                    )
                }
            }
            n.LRUCachedFunction = M
            class A {
                get cachedValues() {
                    return this._map
                }
                constructor(d) {
                    ;(this.fn = d), (this._map = new Map())
                }
                get(d) {
                    if (this._map.has(d)) return this._map.get(d)
                    const g = this.fn(d)
                    return this._map.set(d, g), g
                }
            }
            n.CachedFunction = A
        }),
        X(J[33], Z([0, 1]), function (q, n) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.Color = n.HSVA = n.HSLA = n.RGBA = void 0)
            function M(L, h) {
                const o = Math.pow(10, h)
                return Math.round(L * o) / o
            }
            class A {
                constructor(h, o, C, e = 1) {
                    ;(this._rgbaBrand = void 0),
                        (this.r = Math.min(255, Math.max(0, h)) | 0),
                        (this.g = Math.min(255, Math.max(0, o)) | 0),
                        (this.b = Math.min(255, Math.max(0, C)) | 0),
                        (this.a = M(Math.max(Math.min(1, e), 0), 3))
                }
                static equals(h, o) {
                    return h.r === o.r && h.g === o.g && h.b === o.b && h.a === o.a
                }
            }
            n.RGBA = A
            class i {
                constructor(h, o, C, e) {
                    ;(this._hslaBrand = void 0),
                        (this.h = Math.max(Math.min(360, h), 0) | 0),
                        (this.s = M(Math.max(Math.min(1, o), 0), 3)),
                        (this.l = M(Math.max(Math.min(1, C), 0), 3)),
                        (this.a = M(Math.max(Math.min(1, e), 0), 3))
                }
                static equals(h, o) {
                    return h.h === o.h && h.s === o.s && h.l === o.l && h.a === o.a
                }
                static fromRGBA(h) {
                    const o = h.r / 255,
                        C = h.g / 255,
                        e = h.b / 255,
                        a = h.a,
                        u = Math.max(o, C, e),
                        c = Math.min(o, C, e)
                    let m = 0,
                        f = 0
                    const S = (c + u) / 2,
                        w = u - c
                    if (w > 0) {
                        switch (((f = Math.min(S <= 0.5 ? w / (2 * S) : w / (2 - 2 * S), 1)), u)) {
                            case o:
                                m = (C - e) / w + (C < e ? 6 : 0)
                                break
                            case C:
                                m = (e - o) / w + 2
                                break
                            case e:
                                m = (o - C) / w + 4
                                break
                        }
                        ;(m *= 60), (m = Math.round(m))
                    }
                    return new i(m, f, S, a)
                }
                static _hue2rgb(h, o, C) {
                    return (
                        C < 0 && (C += 1),
                        C > 1 && (C -= 1),
                        C < 1 / 6
                            ? h + (o - h) * 6 * C
                            : C < 1 / 2
                              ? o
                              : C < 2 / 3
                                ? h + (o - h) * (2 / 3 - C) * 6
                                : h
                    )
                }
                static toRGBA(h) {
                    const o = h.h / 360,
                        { s: C, l: e, a } = h
                    let u, c, m
                    if (C === 0) u = c = m = e
                    else {
                        const f = e < 0.5 ? e * (1 + C) : e + C - e * C,
                            S = 2 * e - f
                        ;(u = i._hue2rgb(S, f, o + 1 / 3)),
                            (c = i._hue2rgb(S, f, o)),
                            (m = i._hue2rgb(S, f, o - 1 / 3))
                    }
                    return new A(Math.round(u * 255), Math.round(c * 255), Math.round(m * 255), a)
                }
            }
            n.HSLA = i
            class d {
                constructor(h, o, C, e) {
                    ;(this._hsvaBrand = void 0),
                        (this.h = Math.max(Math.min(360, h), 0) | 0),
                        (this.s = M(Math.max(Math.min(1, o), 0), 3)),
                        (this.v = M(Math.max(Math.min(1, C), 0), 3)),
                        (this.a = M(Math.max(Math.min(1, e), 0), 3))
                }
                static equals(h, o) {
                    return h.h === o.h && h.s === o.s && h.v === o.v && h.a === o.a
                }
                static fromRGBA(h) {
                    const o = h.r / 255,
                        C = h.g / 255,
                        e = h.b / 255,
                        a = Math.max(o, C, e),
                        u = Math.min(o, C, e),
                        c = a - u,
                        m = a === 0 ? 0 : c / a
                    let f
                    return (
                        c === 0
                            ? (f = 0)
                            : a === o
                              ? (f = ((((C - e) / c) % 6) + 6) % 6)
                              : a === C
                                ? (f = (e - o) / c + 2)
                                : (f = (o - C) / c + 4),
                        new d(Math.round(f * 60), m, a, h.a)
                    )
                }
                static toRGBA(h) {
                    const { h: o, s: C, v: e, a } = h,
                        u = e * C,
                        c = u * (1 - Math.abs(((o / 60) % 2) - 1)),
                        m = e - u
                    let [f, S, w] = [0, 0, 0]
                    return (
                        o < 60
                            ? ((f = u), (S = c))
                            : o < 120
                              ? ((f = c), (S = u))
                              : o < 180
                                ? ((S = u), (w = c))
                                : o < 240
                                  ? ((S = c), (w = u))
                                  : o < 300
                                    ? ((f = c), (w = u))
                                    : o <= 360 && ((f = u), (w = c)),
                        (f = Math.round((f + m) * 255)),
                        (S = Math.round((S + m) * 255)),
                        (w = Math.round((w + m) * 255)),
                        new A(f, S, w, a)
                    )
                }
            }
            n.HSVA = d
            class g {
                static fromHex(h) {
                    return g.Format.CSS.parseHex(h) || g.red
                }
                static equals(h, o) {
                    return !h && !o ? !0 : !h || !o ? !1 : h.equals(o)
                }
                get hsla() {
                    return this._hsla ? this._hsla : i.fromRGBA(this.rgba)
                }
                get hsva() {
                    return this._hsva ? this._hsva : d.fromRGBA(this.rgba)
                }
                constructor(h) {
                    if (h)
                        if (h instanceof A) this.rgba = h
                        else if (h instanceof i) (this._hsla = h), (this.rgba = i.toRGBA(h))
                        else if (h instanceof d) (this._hsva = h), (this.rgba = d.toRGBA(h))
                        else throw new Error('Invalid color ctor argument')
                    else throw new Error('Color needs a value')
                }
                equals(h) {
                    return (
                        !!h &&
                        A.equals(this.rgba, h.rgba) &&
                        i.equals(this.hsla, h.hsla) &&
                        d.equals(this.hsva, h.hsva)
                    )
                }
                getRelativeLuminance() {
                    const h = g._relativeLuminanceForComponent(this.rgba.r),
                        o = g._relativeLuminanceForComponent(this.rgba.g),
                        C = g._relativeLuminanceForComponent(this.rgba.b),
                        e = 0.2126 * h + 0.7152 * o + 0.0722 * C
                    return M(e, 4)
                }
                static _relativeLuminanceForComponent(h) {
                    const o = h / 255
                    return o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
                }
                isLighter() {
                    return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 >= 128
                }
                isLighterThan(h) {
                    const o = this.getRelativeLuminance(),
                        C = h.getRelativeLuminance()
                    return o > C
                }
                isDarkerThan(h) {
                    const o = this.getRelativeLuminance(),
                        C = h.getRelativeLuminance()
                    return o < C
                }
                lighten(h) {
                    return new g(
                        new i(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * h, this.hsla.a)
                    )
                }
                darken(h) {
                    return new g(
                        new i(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * h, this.hsla.a)
                    )
                }
                transparent(h) {
                    const { r: o, g: C, b: e, a } = this.rgba
                    return new g(new A(o, C, e, a * h))
                }
                isTransparent() {
                    return this.rgba.a === 0
                }
                isOpaque() {
                    return this.rgba.a === 1
                }
                opposite() {
                    return new g(
                        new A(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a)
                    )
                }
                makeOpaque(h) {
                    if (this.isOpaque() || h.rgba.a !== 1) return this
                    const { r: o, g: C, b: e, a } = this.rgba
                    return new g(
                        new A(
                            h.rgba.r - a * (h.rgba.r - o),
                            h.rgba.g - a * (h.rgba.g - C),
                            h.rgba.b - a * (h.rgba.b - e),
                            1
                        )
                    )
                }
                toString() {
                    return (
                        this._toString || (this._toString = g.Format.CSS.format(this)),
                        this._toString
                    )
                }
                static getLighterColor(h, o, C) {
                    if (h.isLighterThan(o)) return h
                    C = C || 0.5
                    const e = h.getRelativeLuminance(),
                        a = o.getRelativeLuminance()
                    return (C = (C * (a - e)) / a), h.lighten(C)
                }
                static getDarkerColor(h, o, C) {
                    if (h.isDarkerThan(o)) return h
                    C = C || 0.5
                    const e = h.getRelativeLuminance(),
                        a = o.getRelativeLuminance()
                    return (C = (C * (e - a)) / e), h.darken(C)
                }
            }
            ;(n.Color = g),
                (g.white = new g(new A(255, 255, 255, 1))),
                (g.black = new g(new A(0, 0, 0, 1))),
                (g.red = new g(new A(255, 0, 0, 1))),
                (g.blue = new g(new A(0, 0, 255, 1))),
                (g.green = new g(new A(0, 255, 0, 1))),
                (g.cyan = new g(new A(0, 255, 255, 1))),
                (g.lightgrey = new g(new A(211, 211, 211, 1))),
                (g.transparent = new g(new A(0, 0, 0, 0))),
                (function (L) {
                    let h
                    ;(function (o) {
                        let C
                        ;(function (e) {
                            function a(r) {
                                return r.rgba.a === 1
                                    ? `rgb(${r.rgba.r}, ${r.rgba.g}, ${r.rgba.b})`
                                    : L.Format.CSS.formatRGBA(r)
                            }
                            e.formatRGB = a
                            function u(r) {
                                return `rgba(${r.rgba.r}, ${r.rgba.g}, ${r.rgba.b}, ${+r.rgba.a.toFixed(2)})`
                            }
                            e.formatRGBA = u
                            function c(r) {
                                return r.hsla.a === 1
                                    ? `hsl(${r.hsla.h}, ${(r.hsla.s * 100).toFixed(2)}%, ${(r.hsla.l * 100).toFixed(2)}%)`
                                    : L.Format.CSS.formatHSLA(r)
                            }
                            e.formatHSL = c
                            function m(r) {
                                return `hsla(${r.hsla.h}, ${(r.hsla.s * 100).toFixed(2)}%, ${(r.hsla.l * 100).toFixed(2)}%, ${r.hsla.a.toFixed(2)})`
                            }
                            e.formatHSLA = m
                            function f(r) {
                                const s = r.toString(16)
                                return s.length !== 2 ? '0' + s : s
                            }
                            function S(r) {
                                return `#${f(r.rgba.r)}${f(r.rgba.g)}${f(r.rgba.b)}`
                            }
                            e.formatHex = S
                            function w(r, s = !1) {
                                return s && r.rgba.a === 1
                                    ? L.Format.CSS.formatHex(r)
                                    : `#${f(r.rgba.r)}${f(r.rgba.g)}${f(r.rgba.b)}${f(Math.round(r.rgba.a * 255))}`
                            }
                            e.formatHexA = w
                            function E(r) {
                                return r.isOpaque()
                                    ? L.Format.CSS.formatHex(r)
                                    : L.Format.CSS.formatRGBA(r)
                            }
                            e.format = E
                            function y(r) {
                                const s = r.length
                                if (s === 0 || r.charCodeAt(0) !== 35) return null
                                if (s === 7) {
                                    const l = 16 * _(r.charCodeAt(1)) + _(r.charCodeAt(2)),
                                        p = 16 * _(r.charCodeAt(3)) + _(r.charCodeAt(4)),
                                        b = 16 * _(r.charCodeAt(5)) + _(r.charCodeAt(6))
                                    return new L(new A(l, p, b, 1))
                                }
                                if (s === 9) {
                                    const l = 16 * _(r.charCodeAt(1)) + _(r.charCodeAt(2)),
                                        p = 16 * _(r.charCodeAt(3)) + _(r.charCodeAt(4)),
                                        b = 16 * _(r.charCodeAt(5)) + _(r.charCodeAt(6)),
                                        v = 16 * _(r.charCodeAt(7)) + _(r.charCodeAt(8))
                                    return new L(new A(l, p, b, v / 255))
                                }
                                if (s === 4) {
                                    const l = _(r.charCodeAt(1)),
                                        p = _(r.charCodeAt(2)),
                                        b = _(r.charCodeAt(3))
                                    return new L(new A(16 * l + l, 16 * p + p, 16 * b + b))
                                }
                                if (s === 5) {
                                    const l = _(r.charCodeAt(1)),
                                        p = _(r.charCodeAt(2)),
                                        b = _(r.charCodeAt(3)),
                                        v = _(r.charCodeAt(4))
                                    return new L(
                                        new A(
                                            16 * l + l,
                                            16 * p + p,
                                            16 * b + b,
                                            (16 * v + v) / 255
                                        )
                                    )
                                }
                                return null
                            }
                            e.parseHex = y
                            function _(r) {
                                switch (r) {
                                    case 48:
                                        return 0
                                    case 49:
                                        return 1
                                    case 50:
                                        return 2
                                    case 51:
                                        return 3
                                    case 52:
                                        return 4
                                    case 53:
                                        return 5
                                    case 54:
                                        return 6
                                    case 55:
                                        return 7
                                    case 56:
                                        return 8
                                    case 57:
                                        return 9
                                    case 97:
                                        return 10
                                    case 65:
                                        return 10
                                    case 98:
                                        return 11
                                    case 66:
                                        return 11
                                    case 99:
                                        return 12
                                    case 67:
                                        return 12
                                    case 100:
                                        return 13
                                    case 68:
                                        return 13
                                    case 101:
                                        return 14
                                    case 69:
                                        return 14
                                    case 102:
                                        return 15
                                    case 70:
                                        return 15
                                }
                                return 0
                            }
                        })((C = o.CSS || (o.CSS = {})))
                    })((h = L.Format || (L.Format = {})))
                })(g || (n.Color = g = {}))
        }),
        X(J[34], Z([0, 1]), function (q, n) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }), (n.DiffChange = void 0)
            class M {
                constructor(i, d, g, L) {
                    ;(this.originalStart = i),
                        (this.originalLength = d),
                        (this.modifiedStart = g),
                        (this.modifiedLength = L)
                }
                getOriginalEnd() {
                    return this.originalStart + this.originalLength
                }
                getModifiedEnd() {
                    return this.modifiedStart + this.modifiedLength
                }
            }
            n.DiffChange = M
        }),
        X(J[5], Z([0, 1]), function (q, n) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.BugIndicatingError =
                    n.ErrorNoTelemetry =
                    n.NotSupportedError =
                    n.illegalState =
                    n.illegalArgument =
                    n.canceled =
                    n.CancellationError =
                    n.isCancellationError =
                    n.transformErrorForSerialization =
                    n.onUnexpectedExternalError =
                    n.onUnexpectedError =
                    n.errorHandler =
                    n.ErrorHandler =
                        void 0)
            class M {
                constructor() {
                    ;(this.listeners = []),
                        (this.unexpectedErrorHandler = function (f) {
                            setTimeout(() => {
                                throw f.stack
                                    ? u.isErrorNoTelemetry(f)
                                        ? new u(
                                              f.message +
                                                  `

` +
                                                  f.stack
                                          )
                                        : new Error(
                                              f.message +
                                                  `

` +
                                                  f.stack
                                          )
                                    : f
                            }, 0)
                        })
                }
                emit(f) {
                    this.listeners.forEach((S) => {
                        S(f)
                    })
                }
                onUnexpectedError(f) {
                    this.unexpectedErrorHandler(f), this.emit(f)
                }
                onUnexpectedExternalError(f) {
                    this.unexpectedErrorHandler(f)
                }
            }
            ;(n.ErrorHandler = M), (n.errorHandler = new M())
            function A(m) {
                L(m) || n.errorHandler.onUnexpectedError(m)
            }
            n.onUnexpectedError = A
            function i(m) {
                L(m) || n.errorHandler.onUnexpectedExternalError(m)
            }
            n.onUnexpectedExternalError = i
            function d(m) {
                if (m instanceof Error) {
                    const { name: f, message: S } = m,
                        w = m.stacktrace || m.stack
                    return {
                        $isError: !0,
                        name: f,
                        message: S,
                        stack: w,
                        noTelemetry: u.isErrorNoTelemetry(m)
                    }
                }
                return m
            }
            n.transformErrorForSerialization = d
            const g = 'Canceled'
            function L(m) {
                return m instanceof h ? !0 : m instanceof Error && m.name === g && m.message === g
            }
            n.isCancellationError = L
            class h extends Error {
                constructor() {
                    super(g), (this.name = this.message)
                }
            }
            n.CancellationError = h
            function o() {
                const m = new Error(g)
                return (m.name = m.message), m
            }
            n.canceled = o
            function C(m) {
                return m ? new Error(`Illegal argument: ${m}`) : new Error('Illegal argument')
            }
            n.illegalArgument = C
            function e(m) {
                return m ? new Error(`Illegal state: ${m}`) : new Error('Illegal state')
            }
            n.illegalState = e
            class a extends Error {
                constructor(f) {
                    super('NotSupported'), f && (this.message = f)
                }
            }
            n.NotSupportedError = a
            class u extends Error {
                constructor(f) {
                    super(f), (this.name = 'CodeExpectedError')
                }
                static fromError(f) {
                    if (f instanceof u) return f
                    const S = new u()
                    return (S.message = f.message), (S.stack = f.stack), S
                }
                static isErrorNoTelemetry(f) {
                    return f.name === 'CodeExpectedError'
                }
            }
            n.ErrorNoTelemetry = u
            class c extends Error {
                constructor(f) {
                    super(f || 'An unexpected bug occurred.'),
                        Object.setPrototypeOf(this, c.prototype)
                }
            }
            n.BugIndicatingError = c
        }),
        X(J[12], Z([0, 1, 5]), function (q, n, M) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.checkAdjacentItems = n.assertFn = n.assertNever = n.ok = void 0)
            function A(L, h) {
                if (!L) throw new Error(h ? `Assertion failed (${h})` : 'Assertion Failed')
            }
            n.ok = A
            function i(L, h = 'Unreachable') {
                throw new Error(h)
            }
            n.assertNever = i
            function d(L) {
                if (!L()) {
                    debugger
                    L(), (0, M.onUnexpectedError)(new M.BugIndicatingError('Assertion Failed'))
                }
            }
            n.assertFn = d
            function g(L, h) {
                let o = 0
                for (; o < L.length - 1; ) {
                    const C = L[o],
                        e = L[o + 1]
                    if (!h(C, e)) return !1
                    o++
                }
                return !0
            }
            n.checkAdjacentItems = g
        }),
        X(J[20], Z([0, 1]), function (q, n) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.createSingleCallFunction = void 0)
            function M(A, i) {
                const d = this
                let g = !1,
                    L
                return function () {
                    if (g) return L
                    if (((g = !0), i))
                        try {
                            L = A.apply(d, arguments)
                        } finally {
                            i()
                        }
                    else L = A.apply(d, arguments)
                    return L
                }
            }
            n.createSingleCallFunction = M
        }),
        X(J[21], Z([0, 1]), function (q, n) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }), (n.Iterable = void 0)
            var M
            ;(function (A) {
                function i(_) {
                    return _ && typeof _ == 'object' && typeof _[Symbol.iterator] == 'function'
                }
                A.is = i
                const d = Object.freeze([])
                function g() {
                    return d
                }
                A.empty = g
                function* L(_) {
                    yield _
                }
                A.single = L
                function h(_) {
                    return i(_) ? _ : L(_)
                }
                A.wrap = h
                function o(_) {
                    return _ || d
                }
                A.from = o
                function* C(_) {
                    for (let r = _.length - 1; r >= 0; r--) yield _[r]
                }
                A.reverse = C
                function e(_) {
                    return !_ || _[Symbol.iterator]().next().done === !0
                }
                A.isEmpty = e
                function a(_) {
                    return _[Symbol.iterator]().next().value
                }
                A.first = a
                function u(_, r) {
                    for (const s of _) if (r(s)) return !0
                    return !1
                }
                A.some = u
                function c(_, r) {
                    for (const s of _) if (r(s)) return s
                }
                A.find = c
                function* m(_, r) {
                    for (const s of _) r(s) && (yield s)
                }
                A.filter = m
                function* f(_, r) {
                    let s = 0
                    for (const l of _) yield r(l, s++)
                }
                A.map = f
                function* S(..._) {
                    for (const r of _) yield* r
                }
                A.concat = S
                function w(_, r, s) {
                    let l = s
                    for (const p of _) l = r(l, p)
                    return l
                }
                A.reduce = w
                function* E(_, r, s = _.length) {
                    for (
                        r < 0 && (r += _.length),
                            s < 0 ? (s += _.length) : s > _.length && (s = _.length);
                        r < s;
                        r++
                    )
                        yield _[r]
                }
                A.slice = E
                function y(_, r = Number.POSITIVE_INFINITY) {
                    const s = []
                    if (r === 0) return [s, _]
                    const l = _[Symbol.iterator]()
                    for (let p = 0; p < r; p++) {
                        const b = l.next()
                        if (b.done) return [s, A.empty()]
                        s.push(b.value)
                    }
                    return [
                        s,
                        {
                            [Symbol.iterator]() {
                                return l
                            }
                        }
                    ]
                }
                A.consume = y
            })(M || (n.Iterable = M = {}))
        }),
        X(J[35], Z([0, 1]), function (q, n) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.KeyChord =
                    n.KeyCodeUtils =
                    n.IMMUTABLE_KEY_CODE_TO_CODE =
                    n.IMMUTABLE_CODE_TO_KEY_CODE =
                    n.NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE =
                    n.EVENT_KEY_CODE_MAP =
                        void 0)
            class M {
                constructor() {
                    ;(this._keyCodeToStr = []), (this._strToKeyCode = Object.create(null))
                }
                define(a, u) {
                    ;(this._keyCodeToStr[a] = u), (this._strToKeyCode[u.toLowerCase()] = a)
                }
                keyCodeToStr(a) {
                    return this._keyCodeToStr[a]
                }
                strToKeyCode(a) {
                    return this._strToKeyCode[a.toLowerCase()] || 0
                }
            }
            const A = new M(),
                i = new M(),
                d = new M()
            ;(n.EVENT_KEY_CODE_MAP = new Array(230)), (n.NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE = {})
            const g = [],
                L = Object.create(null),
                h = Object.create(null)
            ;(n.IMMUTABLE_CODE_TO_KEY_CODE = []), (n.IMMUTABLE_KEY_CODE_TO_CODE = [])
            for (let e = 0; e <= 193; e++) n.IMMUTABLE_CODE_TO_KEY_CODE[e] = -1
            for (let e = 0; e <= 132; e++) n.IMMUTABLE_KEY_CODE_TO_CODE[e] = -1
            ;(function () {
                const e = '',
                    a = [
                        [1, 0, 'None', 0, 'unknown', 0, 'VK_UNKNOWN', e, e],
                        [1, 1, 'Hyper', 0, e, 0, e, e, e],
                        [1, 2, 'Super', 0, e, 0, e, e, e],
                        [1, 3, 'Fn', 0, e, 0, e, e, e],
                        [1, 4, 'FnLock', 0, e, 0, e, e, e],
                        [1, 5, 'Suspend', 0, e, 0, e, e, e],
                        [1, 6, 'Resume', 0, e, 0, e, e, e],
                        [1, 7, 'Turbo', 0, e, 0, e, e, e],
                        [1, 8, 'Sleep', 0, e, 0, 'VK_SLEEP', e, e],
                        [1, 9, 'WakeUp', 0, e, 0, e, e, e],
                        [0, 10, 'KeyA', 31, 'A', 65, 'VK_A', e, e],
                        [0, 11, 'KeyB', 32, 'B', 66, 'VK_B', e, e],
                        [0, 12, 'KeyC', 33, 'C', 67, 'VK_C', e, e],
                        [0, 13, 'KeyD', 34, 'D', 68, 'VK_D', e, e],
                        [0, 14, 'KeyE', 35, 'E', 69, 'VK_E', e, e],
                        [0, 15, 'KeyF', 36, 'F', 70, 'VK_F', e, e],
                        [0, 16, 'KeyG', 37, 'G', 71, 'VK_G', e, e],
                        [0, 17, 'KeyH', 38, 'H', 72, 'VK_H', e, e],
                        [0, 18, 'KeyI', 39, 'I', 73, 'VK_I', e, e],
                        [0, 19, 'KeyJ', 40, 'J', 74, 'VK_J', e, e],
                        [0, 20, 'KeyK', 41, 'K', 75, 'VK_K', e, e],
                        [0, 21, 'KeyL', 42, 'L', 76, 'VK_L', e, e],
                        [0, 22, 'KeyM', 43, 'M', 77, 'VK_M', e, e],
                        [0, 23, 'KeyN', 44, 'N', 78, 'VK_N', e, e],
                        [0, 24, 'KeyO', 45, 'O', 79, 'VK_O', e, e],
                        [0, 25, 'KeyP', 46, 'P', 80, 'VK_P', e, e],
                        [0, 26, 'KeyQ', 47, 'Q', 81, 'VK_Q', e, e],
                        [0, 27, 'KeyR', 48, 'R', 82, 'VK_R', e, e],
                        [0, 28, 'KeyS', 49, 'S', 83, 'VK_S', e, e],
                        [0, 29, 'KeyT', 50, 'T', 84, 'VK_T', e, e],
                        [0, 30, 'KeyU', 51, 'U', 85, 'VK_U', e, e],
                        [0, 31, 'KeyV', 52, 'V', 86, 'VK_V', e, e],
                        [0, 32, 'KeyW', 53, 'W', 87, 'VK_W', e, e],
                        [0, 33, 'KeyX', 54, 'X', 88, 'VK_X', e, e],
                        [0, 34, 'KeyY', 55, 'Y', 89, 'VK_Y', e, e],
                        [0, 35, 'KeyZ', 56, 'Z', 90, 'VK_Z', e, e],
                        [0, 36, 'Digit1', 22, '1', 49, 'VK_1', e, e],
                        [0, 37, 'Digit2', 23, '2', 50, 'VK_2', e, e],
                        [0, 38, 'Digit3', 24, '3', 51, 'VK_3', e, e],
                        [0, 39, 'Digit4', 25, '4', 52, 'VK_4', e, e],
                        [0, 40, 'Digit5', 26, '5', 53, 'VK_5', e, e],
                        [0, 41, 'Digit6', 27, '6', 54, 'VK_6', e, e],
                        [0, 42, 'Digit7', 28, '7', 55, 'VK_7', e, e],
                        [0, 43, 'Digit8', 29, '8', 56, 'VK_8', e, e],
                        [0, 44, 'Digit9', 30, '9', 57, 'VK_9', e, e],
                        [0, 45, 'Digit0', 21, '0', 48, 'VK_0', e, e],
                        [1, 46, 'Enter', 3, 'Enter', 13, 'VK_RETURN', e, e],
                        [1, 47, 'Escape', 9, 'Escape', 27, 'VK_ESCAPE', e, e],
                        [1, 48, 'Backspace', 1, 'Backspace', 8, 'VK_BACK', e, e],
                        [1, 49, 'Tab', 2, 'Tab', 9, 'VK_TAB', e, e],
                        [1, 50, 'Space', 10, 'Space', 32, 'VK_SPACE', e, e],
                        [0, 51, 'Minus', 88, '-', 189, 'VK_OEM_MINUS', '-', 'OEM_MINUS'],
                        [0, 52, 'Equal', 86, '=', 187, 'VK_OEM_PLUS', '=', 'OEM_PLUS'],
                        [0, 53, 'BracketLeft', 92, '[', 219, 'VK_OEM_4', '[', 'OEM_4'],
                        [0, 54, 'BracketRight', 94, ']', 221, 'VK_OEM_6', ']', 'OEM_6'],
                        [0, 55, 'Backslash', 93, '\\', 220, 'VK_OEM_5', '\\', 'OEM_5'],
                        [0, 56, 'IntlHash', 0, e, 0, e, e, e],
                        [0, 57, 'Semicolon', 85, ';', 186, 'VK_OEM_1', ';', 'OEM_1'],
                        [0, 58, 'Quote', 95, "'", 222, 'VK_OEM_7', "'", 'OEM_7'],
                        [0, 59, 'Backquote', 91, '`', 192, 'VK_OEM_3', '`', 'OEM_3'],
                        [0, 60, 'Comma', 87, ',', 188, 'VK_OEM_COMMA', ',', 'OEM_COMMA'],
                        [0, 61, 'Period', 89, '.', 190, 'VK_OEM_PERIOD', '.', 'OEM_PERIOD'],
                        [0, 62, 'Slash', 90, '/', 191, 'VK_OEM_2', '/', 'OEM_2'],
                        [1, 63, 'CapsLock', 8, 'CapsLock', 20, 'VK_CAPITAL', e, e],
                        [1, 64, 'F1', 59, 'F1', 112, 'VK_F1', e, e],
                        [1, 65, 'F2', 60, 'F2', 113, 'VK_F2', e, e],
                        [1, 66, 'F3', 61, 'F3', 114, 'VK_F3', e, e],
                        [1, 67, 'F4', 62, 'F4', 115, 'VK_F4', e, e],
                        [1, 68, 'F5', 63, 'F5', 116, 'VK_F5', e, e],
                        [1, 69, 'F6', 64, 'F6', 117, 'VK_F6', e, e],
                        [1, 70, 'F7', 65, 'F7', 118, 'VK_F7', e, e],
                        [1, 71, 'F8', 66, 'F8', 119, 'VK_F8', e, e],
                        [1, 72, 'F9', 67, 'F9', 120, 'VK_F9', e, e],
                        [1, 73, 'F10', 68, 'F10', 121, 'VK_F10', e, e],
                        [1, 74, 'F11', 69, 'F11', 122, 'VK_F11', e, e],
                        [1, 75, 'F12', 70, 'F12', 123, 'VK_F12', e, e],
                        [1, 76, 'PrintScreen', 0, e, 0, e, e, e],
                        [1, 77, 'ScrollLock', 84, 'ScrollLock', 145, 'VK_SCROLL', e, e],
                        [1, 78, 'Pause', 7, 'PauseBreak', 19, 'VK_PAUSE', e, e],
                        [1, 79, 'Insert', 19, 'Insert', 45, 'VK_INSERT', e, e],
                        [1, 80, 'Home', 14, 'Home', 36, 'VK_HOME', e, e],
                        [1, 81, 'PageUp', 11, 'PageUp', 33, 'VK_PRIOR', e, e],
                        [1, 82, 'Delete', 20, 'Delete', 46, 'VK_DELETE', e, e],
                        [1, 83, 'End', 13, 'End', 35, 'VK_END', e, e],
                        [1, 84, 'PageDown', 12, 'PageDown', 34, 'VK_NEXT', e, e],
                        [1, 85, 'ArrowRight', 17, 'RightArrow', 39, 'VK_RIGHT', 'Right', e],
                        [1, 86, 'ArrowLeft', 15, 'LeftArrow', 37, 'VK_LEFT', 'Left', e],
                        [1, 87, 'ArrowDown', 18, 'DownArrow', 40, 'VK_DOWN', 'Down', e],
                        [1, 88, 'ArrowUp', 16, 'UpArrow', 38, 'VK_UP', 'Up', e],
                        [1, 89, 'NumLock', 83, 'NumLock', 144, 'VK_NUMLOCK', e, e],
                        [1, 90, 'NumpadDivide', 113, 'NumPad_Divide', 111, 'VK_DIVIDE', e, e],
                        [1, 91, 'NumpadMultiply', 108, 'NumPad_Multiply', 106, 'VK_MULTIPLY', e, e],
                        [1, 92, 'NumpadSubtract', 111, 'NumPad_Subtract', 109, 'VK_SUBTRACT', e, e],
                        [1, 93, 'NumpadAdd', 109, 'NumPad_Add', 107, 'VK_ADD', e, e],
                        [1, 94, 'NumpadEnter', 3, e, 0, e, e, e],
                        [1, 95, 'Numpad1', 99, 'NumPad1', 97, 'VK_NUMPAD1', e, e],
                        [1, 96, 'Numpad2', 100, 'NumPad2', 98, 'VK_NUMPAD2', e, e],
                        [1, 97, 'Numpad3', 101, 'NumPad3', 99, 'VK_NUMPAD3', e, e],
                        [1, 98, 'Numpad4', 102, 'NumPad4', 100, 'VK_NUMPAD4', e, e],
                        [1, 99, 'Numpad5', 103, 'NumPad5', 101, 'VK_NUMPAD5', e, e],
                        [1, 100, 'Numpad6', 104, 'NumPad6', 102, 'VK_NUMPAD6', e, e],
                        [1, 101, 'Numpad7', 105, 'NumPad7', 103, 'VK_NUMPAD7', e, e],
                        [1, 102, 'Numpad8', 106, 'NumPad8', 104, 'VK_NUMPAD8', e, e],
                        [1, 103, 'Numpad9', 107, 'NumPad9', 105, 'VK_NUMPAD9', e, e],
                        [1, 104, 'Numpad0', 98, 'NumPad0', 96, 'VK_NUMPAD0', e, e],
                        [1, 105, 'NumpadDecimal', 112, 'NumPad_Decimal', 110, 'VK_DECIMAL', e, e],
                        [0, 106, 'IntlBackslash', 97, 'OEM_102', 226, 'VK_OEM_102', e, e],
                        [1, 107, 'ContextMenu', 58, 'ContextMenu', 93, e, e, e],
                        [1, 108, 'Power', 0, e, 0, e, e, e],
                        [1, 109, 'NumpadEqual', 0, e, 0, e, e, e],
                        [1, 110, 'F13', 71, 'F13', 124, 'VK_F13', e, e],
                        [1, 111, 'F14', 72, 'F14', 125, 'VK_F14', e, e],
                        [1, 112, 'F15', 73, 'F15', 126, 'VK_F15', e, e],
                        [1, 113, 'F16', 74, 'F16', 127, 'VK_F16', e, e],
                        [1, 114, 'F17', 75, 'F17', 128, 'VK_F17', e, e],
                        [1, 115, 'F18', 76, 'F18', 129, 'VK_F18', e, e],
                        [1, 116, 'F19', 77, 'F19', 130, 'VK_F19', e, e],
                        [1, 117, 'F20', 78, 'F20', 131, 'VK_F20', e, e],
                        [1, 118, 'F21', 79, 'F21', 132, 'VK_F21', e, e],
                        [1, 119, 'F22', 80, 'F22', 133, 'VK_F22', e, e],
                        [1, 120, 'F23', 81, 'F23', 134, 'VK_F23', e, e],
                        [1, 121, 'F24', 82, 'F24', 135, 'VK_F24', e, e],
                        [1, 122, 'Open', 0, e, 0, e, e, e],
                        [1, 123, 'Help', 0, e, 0, e, e, e],
                        [1, 124, 'Select', 0, e, 0, e, e, e],
                        [1, 125, 'Again', 0, e, 0, e, e, e],
                        [1, 126, 'Undo', 0, e, 0, e, e, e],
                        [1, 127, 'Cut', 0, e, 0, e, e, e],
                        [1, 128, 'Copy', 0, e, 0, e, e, e],
                        [1, 129, 'Paste', 0, e, 0, e, e, e],
                        [1, 130, 'Find', 0, e, 0, e, e, e],
                        [
                            1,
                            131,
                            'AudioVolumeMute',
                            117,
                            'AudioVolumeMute',
                            173,
                            'VK_VOLUME_MUTE',
                            e,
                            e
                        ],
                        [1, 132, 'AudioVolumeUp', 118, 'AudioVolumeUp', 175, 'VK_VOLUME_UP', e, e],
                        [
                            1,
                            133,
                            'AudioVolumeDown',
                            119,
                            'AudioVolumeDown',
                            174,
                            'VK_VOLUME_DOWN',
                            e,
                            e
                        ],
                        [1, 134, 'NumpadComma', 110, 'NumPad_Separator', 108, 'VK_SEPARATOR', e, e],
                        [0, 135, 'IntlRo', 115, 'ABNT_C1', 193, 'VK_ABNT_C1', e, e],
                        [1, 136, 'KanaMode', 0, e, 0, e, e, e],
                        [0, 137, 'IntlYen', 0, e, 0, e, e, e],
                        [1, 138, 'Convert', 0, e, 0, e, e, e],
                        [1, 139, 'NonConvert', 0, e, 0, e, e, e],
                        [1, 140, 'Lang1', 0, e, 0, e, e, e],
                        [1, 141, 'Lang2', 0, e, 0, e, e, e],
                        [1, 142, 'Lang3', 0, e, 0, e, e, e],
                        [1, 143, 'Lang4', 0, e, 0, e, e, e],
                        [1, 144, 'Lang5', 0, e, 0, e, e, e],
                        [1, 145, 'Abort', 0, e, 0, e, e, e],
                        [1, 146, 'Props', 0, e, 0, e, e, e],
                        [1, 147, 'NumpadParenLeft', 0, e, 0, e, e, e],
                        [1, 148, 'NumpadParenRight', 0, e, 0, e, e, e],
                        [1, 149, 'NumpadBackspace', 0, e, 0, e, e, e],
                        [1, 150, 'NumpadMemoryStore', 0, e, 0, e, e, e],
                        [1, 151, 'NumpadMemoryRecall', 0, e, 0, e, e, e],
                        [1, 152, 'NumpadMemoryClear', 0, e, 0, e, e, e],
                        [1, 153, 'NumpadMemoryAdd', 0, e, 0, e, e, e],
                        [1, 154, 'NumpadMemorySubtract', 0, e, 0, e, e, e],
                        [1, 155, 'NumpadClear', 131, 'Clear', 12, 'VK_CLEAR', e, e],
                        [1, 156, 'NumpadClearEntry', 0, e, 0, e, e, e],
                        [1, 0, e, 5, 'Ctrl', 17, 'VK_CONTROL', e, e],
                        [1, 0, e, 4, 'Shift', 16, 'VK_SHIFT', e, e],
                        [1, 0, e, 6, 'Alt', 18, 'VK_MENU', e, e],
                        [1, 0, e, 57, 'Meta', 91, 'VK_COMMAND', e, e],
                        [1, 157, 'ControlLeft', 5, e, 0, 'VK_LCONTROL', e, e],
                        [1, 158, 'ShiftLeft', 4, e, 0, 'VK_LSHIFT', e, e],
                        [1, 159, 'AltLeft', 6, e, 0, 'VK_LMENU', e, e],
                        [1, 160, 'MetaLeft', 57, e, 0, 'VK_LWIN', e, e],
                        [1, 161, 'ControlRight', 5, e, 0, 'VK_RCONTROL', e, e],
                        [1, 162, 'ShiftRight', 4, e, 0, 'VK_RSHIFT', e, e],
                        [1, 163, 'AltRight', 6, e, 0, 'VK_RMENU', e, e],
                        [1, 164, 'MetaRight', 57, e, 0, 'VK_RWIN', e, e],
                        [1, 165, 'BrightnessUp', 0, e, 0, e, e, e],
                        [1, 166, 'BrightnessDown', 0, e, 0, e, e, e],
                        [1, 167, 'MediaPlay', 0, e, 0, e, e, e],
                        [1, 168, 'MediaRecord', 0, e, 0, e, e, e],
                        [1, 169, 'MediaFastForward', 0, e, 0, e, e, e],
                        [1, 170, 'MediaRewind', 0, e, 0, e, e, e],
                        [
                            1,
                            171,
                            'MediaTrackNext',
                            124,
                            'MediaTrackNext',
                            176,
                            'VK_MEDIA_NEXT_TRACK',
                            e,
                            e
                        ],
                        [
                            1,
                            172,
                            'MediaTrackPrevious',
                            125,
                            'MediaTrackPrevious',
                            177,
                            'VK_MEDIA_PREV_TRACK',
                            e,
                            e
                        ],
                        [1, 173, 'MediaStop', 126, 'MediaStop', 178, 'VK_MEDIA_STOP', e, e],
                        [1, 174, 'Eject', 0, e, 0, e, e, e],
                        [
                            1,
                            175,
                            'MediaPlayPause',
                            127,
                            'MediaPlayPause',
                            179,
                            'VK_MEDIA_PLAY_PAUSE',
                            e,
                            e
                        ],
                        [
                            1,
                            176,
                            'MediaSelect',
                            128,
                            'LaunchMediaPlayer',
                            181,
                            'VK_MEDIA_LAUNCH_MEDIA_SELECT',
                            e,
                            e
                        ],
                        [
                            1,
                            177,
                            'LaunchMail',
                            129,
                            'LaunchMail',
                            180,
                            'VK_MEDIA_LAUNCH_MAIL',
                            e,
                            e
                        ],
                        [
                            1,
                            178,
                            'LaunchApp2',
                            130,
                            'LaunchApp2',
                            183,
                            'VK_MEDIA_LAUNCH_APP2',
                            e,
                            e
                        ],
                        [1, 179, 'LaunchApp1', 0, e, 0, 'VK_MEDIA_LAUNCH_APP1', e, e],
                        [1, 180, 'SelectTask', 0, e, 0, e, e, e],
                        [1, 181, 'LaunchScreenSaver', 0, e, 0, e, e, e],
                        [
                            1,
                            182,
                            'BrowserSearch',
                            120,
                            'BrowserSearch',
                            170,
                            'VK_BROWSER_SEARCH',
                            e,
                            e
                        ],
                        [1, 183, 'BrowserHome', 121, 'BrowserHome', 172, 'VK_BROWSER_HOME', e, e],
                        [1, 184, 'BrowserBack', 122, 'BrowserBack', 166, 'VK_BROWSER_BACK', e, e],
                        [
                            1,
                            185,
                            'BrowserForward',
                            123,
                            'BrowserForward',
                            167,
                            'VK_BROWSER_FORWARD',
                            e,
                            e
                        ],
                        [1, 186, 'BrowserStop', 0, e, 0, 'VK_BROWSER_STOP', e, e],
                        [1, 187, 'BrowserRefresh', 0, e, 0, 'VK_BROWSER_REFRESH', e, e],
                        [1, 188, 'BrowserFavorites', 0, e, 0, 'VK_BROWSER_FAVORITES', e, e],
                        [1, 189, 'ZoomToggle', 0, e, 0, e, e, e],
                        [1, 190, 'MailReply', 0, e, 0, e, e, e],
                        [1, 191, 'MailForward', 0, e, 0, e, e, e],
                        [1, 192, 'MailSend', 0, e, 0, e, e, e],
                        [1, 0, e, 114, 'KeyInComposition', 229, e, e, e],
                        [1, 0, e, 116, 'ABNT_C2', 194, 'VK_ABNT_C2', e, e],
                        [1, 0, e, 96, 'OEM_8', 223, 'VK_OEM_8', e, e],
                        [1, 0, e, 0, e, 0, 'VK_KANA', e, e],
                        [1, 0, e, 0, e, 0, 'VK_HANGUL', e, e],
                        [1, 0, e, 0, e, 0, 'VK_JUNJA', e, e],
                        [1, 0, e, 0, e, 0, 'VK_FINAL', e, e],
                        [1, 0, e, 0, e, 0, 'VK_HANJA', e, e],
                        [1, 0, e, 0, e, 0, 'VK_KANJI', e, e],
                        [1, 0, e, 0, e, 0, 'VK_CONVERT', e, e],
                        [1, 0, e, 0, e, 0, 'VK_NONCONVERT', e, e],
                        [1, 0, e, 0, e, 0, 'VK_ACCEPT', e, e],
                        [1, 0, e, 0, e, 0, 'VK_MODECHANGE', e, e],
                        [1, 0, e, 0, e, 0, 'VK_SELECT', e, e],
                        [1, 0, e, 0, e, 0, 'VK_PRINT', e, e],
                        [1, 0, e, 0, e, 0, 'VK_EXECUTE', e, e],
                        [1, 0, e, 0, e, 0, 'VK_SNAPSHOT', e, e],
                        [1, 0, e, 0, e, 0, 'VK_HELP', e, e],
                        [1, 0, e, 0, e, 0, 'VK_APPS', e, e],
                        [1, 0, e, 0, e, 0, 'VK_PROCESSKEY', e, e],
                        [1, 0, e, 0, e, 0, 'VK_PACKET', e, e],
                        [1, 0, e, 0, e, 0, 'VK_DBE_SBCSCHAR', e, e],
                        [1, 0, e, 0, e, 0, 'VK_DBE_DBCSCHAR', e, e],
                        [1, 0, e, 0, e, 0, 'VK_ATTN', e, e],
                        [1, 0, e, 0, e, 0, 'VK_CRSEL', e, e],
                        [1, 0, e, 0, e, 0, 'VK_EXSEL', e, e],
                        [1, 0, e, 0, e, 0, 'VK_EREOF', e, e],
                        [1, 0, e, 0, e, 0, 'VK_PLAY', e, e],
                        [1, 0, e, 0, e, 0, 'VK_ZOOM', e, e],
                        [1, 0, e, 0, e, 0, 'VK_NONAME', e, e],
                        [1, 0, e, 0, e, 0, 'VK_PA1', e, e],
                        [1, 0, e, 0, e, 0, 'VK_OEM_CLEAR', e, e]
                    ],
                    u = [],
                    c = []
                for (const m of a) {
                    const [f, S, w, E, y, _, r, s, l] = m
                    if (
                        (c[S] ||
                            ((c[S] = !0),
                            (g[S] = w),
                            (L[w] = S),
                            (h[w.toLowerCase()] = S),
                            f &&
                                ((n.IMMUTABLE_CODE_TO_KEY_CODE[S] = E),
                                E !== 0 &&
                                    E !== 3 &&
                                    E !== 5 &&
                                    E !== 4 &&
                                    E !== 6 &&
                                    E !== 57 &&
                                    (n.IMMUTABLE_KEY_CODE_TO_CODE[E] = S))),
                        !u[E])
                    ) {
                        if (((u[E] = !0), !y))
                            throw new Error(
                                `String representation missing for key code ${E} around scan code ${w}`
                            )
                        A.define(E, y), i.define(E, s || y), d.define(E, l || s || y)
                    }
                    _ && (n.EVENT_KEY_CODE_MAP[_] = E),
                        r && (n.NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE[r] = E)
                }
                n.IMMUTABLE_KEY_CODE_TO_CODE[3] = 46
            })()
            var o
            ;(function (e) {
                function a(w) {
                    return A.keyCodeToStr(w)
                }
                e.toString = a
                function u(w) {
                    return A.strToKeyCode(w)
                }
                e.fromString = u
                function c(w) {
                    return i.keyCodeToStr(w)
                }
                e.toUserSettingsUS = c
                function m(w) {
                    return d.keyCodeToStr(w)
                }
                e.toUserSettingsGeneral = m
                function f(w) {
                    return i.strToKeyCode(w) || d.strToKeyCode(w)
                }
                e.fromUserSettings = f
                function S(w) {
                    if (w >= 98 && w <= 113) return null
                    switch (w) {
                        case 16:
                            return 'Up'
                        case 18:
                            return 'Down'
                        case 15:
                            return 'Left'
                        case 17:
                            return 'Right'
                    }
                    return A.keyCodeToStr(w)
                }
                e.toElectronAccelerator = S
            })(o || (n.KeyCodeUtils = o = {}))
            function C(e, a) {
                const u = ((a & 65535) << 16) >>> 0
                return (e | u) >>> 0
            }
            n.KeyChord = C
        }),
        X(J[36], Z([0, 1]), function (q, n) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }), (n.Lazy = void 0)
            class M {
                constructor(i) {
                    ;(this.executor = i), (this._didRun = !1)
                }
                get value() {
                    if (!this._didRun)
                        try {
                            this._value = this.executor()
                        } catch (i) {
                            this._error = i
                        } finally {
                            this._didRun = !0
                        }
                    if (this._error) throw this._error
                    return this._value
                }
                get rawValue() {
                    return this._value
                }
            }
            n.Lazy = M
        }),
        X(J[13], Z([0, 1, 20, 21]), function (q, n, M, A) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.DisposableMap =
                    n.ImmortalReference =
                    n.RefCountedDisposable =
                    n.MutableDisposable =
                    n.Disposable =
                    n.DisposableStore =
                    n.toDisposable =
                    n.combinedDisposable =
                    n.dispose =
                    n.isDisposable =
                    n.markAsSingleton =
                    n.markAsDisposed =
                    n.trackDisposable =
                    n.setDisposableTracker =
                        void 0)
            const i = !1
            let d = null
            function g(r) {
                d = r
            }
            if (((n.setDisposableTracker = g), i)) {
                const r = '__is_disposable_tracked__'
                g(
                    new (class {
                        trackDisposable(s) {
                            const l = new Error('Potentially leaked disposable').stack
                            setTimeout(() => {
                                s[r] || console.log(l)
                            }, 3e3)
                        }
                        setParent(s, l) {
                            if (s && s !== S.None)
                                try {
                                    s[r] = !0
                                } catch {}
                        }
                        markAsDisposed(s) {
                            if (s && s !== S.None)
                                try {
                                    s[r] = !0
                                } catch {}
                        }
                        markAsSingleton(s) {}
                    })()
                )
            }
            function L(r) {
                return d?.trackDisposable(r), r
            }
            n.trackDisposable = L
            function h(r) {
                d?.markAsDisposed(r)
            }
            n.markAsDisposed = h
            function o(r, s) {
                d?.setParent(r, s)
            }
            function C(r, s) {
                if (d) for (const l of r) d.setParent(l, s)
            }
            function e(r) {
                return d?.markAsSingleton(r), r
            }
            n.markAsSingleton = e
            function a(r) {
                return typeof r.dispose == 'function' && r.dispose.length === 0
            }
            n.isDisposable = a
            function u(r) {
                if (A.Iterable.is(r)) {
                    const s = []
                    for (const l of r)
                        if (l)
                            try {
                                l.dispose()
                            } catch (p) {
                                s.push(p)
                            }
                    if (s.length === 1) throw s[0]
                    if (s.length > 1)
                        throw new AggregateError(s, 'Encountered errors while disposing of store')
                    return Array.isArray(r) ? [] : r
                } else if (r) return r.dispose(), r
            }
            n.dispose = u
            function c(...r) {
                const s = m(() => u(r))
                return C(r, s), s
            }
            n.combinedDisposable = c
            function m(r) {
                const s = L({
                    dispose: (0, M.createSingleCallFunction)(() => {
                        h(s), r()
                    })
                })
                return s
            }
            n.toDisposable = m
            class f {
                constructor() {
                    ;(this._toDispose = new Set()), (this._isDisposed = !1), L(this)
                }
                dispose() {
                    this._isDisposed || (h(this), (this._isDisposed = !0), this.clear())
                }
                get isDisposed() {
                    return this._isDisposed
                }
                clear() {
                    if (this._toDispose.size !== 0)
                        try {
                            u(this._toDispose)
                        } finally {
                            this._toDispose.clear()
                        }
                }
                add(s) {
                    if (!s) return s
                    if (s === this) throw new Error('Cannot register a disposable on itself!')
                    return (
                        o(s, this),
                        this._isDisposed
                            ? f.DISABLE_DISPOSED_WARNING ||
                              console.warn(
                                  new Error(
                                      'Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!'
                                  ).stack
                              )
                            : this._toDispose.add(s),
                        s
                    )
                }
                deleteAndLeak(s) {
                    s && this._toDispose.has(s) && (this._toDispose.delete(s), o(s, null))
                }
            }
            ;(n.DisposableStore = f), (f.DISABLE_DISPOSED_WARNING = !1)
            class S {
                constructor() {
                    ;(this._store = new f()), L(this), o(this._store, this)
                }
                dispose() {
                    h(this), this._store.dispose()
                }
                _register(s) {
                    if (s === this) throw new Error('Cannot register a disposable on itself!')
                    return this._store.add(s)
                }
            }
            ;(n.Disposable = S), (S.None = Object.freeze({ dispose() {} }))
            class w {
                constructor() {
                    ;(this._isDisposed = !1), L(this)
                }
                get value() {
                    return this._isDisposed ? void 0 : this._value
                }
                set value(s) {
                    var l
                    this._isDisposed ||
                        s === this._value ||
                        ((l = this._value) === null || l === void 0 || l.dispose(),
                        s && o(s, this),
                        (this._value = s))
                }
                clear() {
                    this.value = void 0
                }
                dispose() {
                    var s
                    ;(this._isDisposed = !0),
                        h(this),
                        (s = this._value) === null || s === void 0 || s.dispose(),
                        (this._value = void 0)
                }
            }
            n.MutableDisposable = w
            class E {
                constructor(s) {
                    ;(this._disposable = s), (this._counter = 1)
                }
                acquire() {
                    return this._counter++, this
                }
                release() {
                    return --this._counter === 0 && this._disposable.dispose(), this
                }
            }
            n.RefCountedDisposable = E
            class y {
                constructor(s) {
                    this.object = s
                }
                dispose() {}
            }
            n.ImmortalReference = y
            class _ {
                constructor() {
                    ;(this._store = new Map()), (this._isDisposed = !1), L(this)
                }
                dispose() {
                    h(this), (this._isDisposed = !0), this.clearAndDisposeAll()
                }
                clearAndDisposeAll() {
                    if (this._store.size)
                        try {
                            u(this._store.values())
                        } finally {
                            this._store.clear()
                        }
                }
                get(s) {
                    return this._store.get(s)
                }
                set(s, l, p = !1) {
                    var b
                    this._isDisposed &&
                        console.warn(
                            new Error(
                                'Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!'
                            ).stack
                        ),
                        p || (b = this._store.get(s)) === null || b === void 0 || b.dispose(),
                        this._store.set(s, l)
                }
                deleteAndDispose(s) {
                    var l
                    ;(l = this._store.get(s)) === null || l === void 0 || l.dispose(),
                        this._store.delete(s)
                }
                [Symbol.iterator]() {
                    return this._store[Symbol.iterator]()
                }
            }
            n.DisposableMap = _
        }),
        X(J[22], Z([0, 1]), function (q, n) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }), (n.LinkedList = void 0)
            class M {
                constructor(d) {
                    ;(this.element = d), (this.next = M.Undefined), (this.prev = M.Undefined)
                }
            }
            M.Undefined = new M(void 0)
            class A {
                constructor() {
                    ;(this._first = M.Undefined), (this._last = M.Undefined), (this._size = 0)
                }
                get size() {
                    return this._size
                }
                isEmpty() {
                    return this._first === M.Undefined
                }
                clear() {
                    let d = this._first
                    for (; d !== M.Undefined; ) {
                        const g = d.next
                        ;(d.prev = M.Undefined), (d.next = M.Undefined), (d = g)
                    }
                    ;(this._first = M.Undefined), (this._last = M.Undefined), (this._size = 0)
                }
                unshift(d) {
                    return this._insert(d, !1)
                }
                push(d) {
                    return this._insert(d, !0)
                }
                _insert(d, g) {
                    const L = new M(d)
                    if (this._first === M.Undefined) (this._first = L), (this._last = L)
                    else if (g) {
                        const o = this._last
                        ;(this._last = L), (L.prev = o), (o.next = L)
                    } else {
                        const o = this._first
                        ;(this._first = L), (L.next = o), (o.prev = L)
                    }
                    this._size += 1
                    let h = !1
                    return () => {
                        h || ((h = !0), this._remove(L))
                    }
                }
                shift() {
                    if (this._first !== M.Undefined) {
                        const d = this._first.element
                        return this._remove(this._first), d
                    }
                }
                pop() {
                    if (this._last !== M.Undefined) {
                        const d = this._last.element
                        return this._remove(this._last), d
                    }
                }
                _remove(d) {
                    if (d.prev !== M.Undefined && d.next !== M.Undefined) {
                        const g = d.prev
                        ;(g.next = d.next), (d.next.prev = g)
                    } else
                        d.prev === M.Undefined && d.next === M.Undefined
                            ? ((this._first = M.Undefined), (this._last = M.Undefined))
                            : d.next === M.Undefined
                              ? ((this._last = this._last.prev), (this._last.next = M.Undefined))
                              : d.prev === M.Undefined &&
                                ((this._first = this._first.next), (this._first.prev = M.Undefined))
                    this._size -= 1
                }
                *[Symbol.iterator]() {
                    let d = this._first
                    for (; d !== M.Undefined; ) yield d.element, (d = d.next)
                }
            }
            n.LinkedList = A
        }),
        X(J[37], Z([0, 1]), function (q, n) {
            'use strict'
            var M, A
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.SetMap = n.BidirectionalMap = n.LRUCache = n.LinkedMap = n.ResourceMap = void 0)
            class i {
                constructor(a, u) {
                    ;(this.uri = a), (this.value = u)
                }
            }
            function d(e) {
                return Array.isArray(e)
            }
            class g {
                constructor(a, u) {
                    if (((this[M] = 'ResourceMap'), a instanceof g))
                        (this.map = new Map(a.map)), (this.toKey = u ?? g.defaultToKey)
                    else if (d(a)) {
                        ;(this.map = new Map()), (this.toKey = u ?? g.defaultToKey)
                        for (const [c, m] of a) this.set(c, m)
                    } else (this.map = new Map()), (this.toKey = a ?? g.defaultToKey)
                }
                set(a, u) {
                    return this.map.set(this.toKey(a), new i(a, u)), this
                }
                get(a) {
                    var u
                    return (u = this.map.get(this.toKey(a))) === null || u === void 0
                        ? void 0
                        : u.value
                }
                has(a) {
                    return this.map.has(this.toKey(a))
                }
                get size() {
                    return this.map.size
                }
                clear() {
                    this.map.clear()
                }
                delete(a) {
                    return this.map.delete(this.toKey(a))
                }
                forEach(a, u) {
                    typeof u < 'u' && (a = a.bind(u))
                    for (const [c, m] of this.map) a(m.value, m.uri, this)
                }
                *values() {
                    for (const a of this.map.values()) yield a.value
                }
                *keys() {
                    for (const a of this.map.values()) yield a.uri
                }
                *entries() {
                    for (const a of this.map.values()) yield [a.uri, a.value]
                }
                *[((M = Symbol.toStringTag), Symbol.iterator)]() {
                    for (const [, a] of this.map) yield [a.uri, a.value]
                }
            }
            ;(n.ResourceMap = g), (g.defaultToKey = (e) => e.toString())
            class L {
                constructor() {
                    ;(this[A] = 'LinkedMap'),
                        (this._map = new Map()),
                        (this._head = void 0),
                        (this._tail = void 0),
                        (this._size = 0),
                        (this._state = 0)
                }
                clear() {
                    this._map.clear(),
                        (this._head = void 0),
                        (this._tail = void 0),
                        (this._size = 0),
                        this._state++
                }
                isEmpty() {
                    return !this._head && !this._tail
                }
                get size() {
                    return this._size
                }
                get first() {
                    var a
                    return (a = this._head) === null || a === void 0 ? void 0 : a.value
                }
                get last() {
                    var a
                    return (a = this._tail) === null || a === void 0 ? void 0 : a.value
                }
                has(a) {
                    return this._map.has(a)
                }
                get(a, u = 0) {
                    const c = this._map.get(a)
                    if (c) return u !== 0 && this.touch(c, u), c.value
                }
                set(a, u, c = 0) {
                    let m = this._map.get(a)
                    if (m) (m.value = u), c !== 0 && this.touch(m, c)
                    else {
                        switch (((m = { key: a, value: u, next: void 0, previous: void 0 }), c)) {
                            case 0:
                                this.addItemLast(m)
                                break
                            case 1:
                                this.addItemFirst(m)
                                break
                            case 2:
                                this.addItemLast(m)
                                break
                            default:
                                this.addItemLast(m)
                                break
                        }
                        this._map.set(a, m), this._size++
                    }
                    return this
                }
                delete(a) {
                    return !!this.remove(a)
                }
                remove(a) {
                    const u = this._map.get(a)
                    if (u) return this._map.delete(a), this.removeItem(u), this._size--, u.value
                }
                shift() {
                    if (!this._head && !this._tail) return
                    if (!this._head || !this._tail) throw new Error('Invalid list')
                    const a = this._head
                    return this._map.delete(a.key), this.removeItem(a), this._size--, a.value
                }
                forEach(a, u) {
                    const c = this._state
                    let m = this._head
                    for (; m; ) {
                        if (
                            (u ? a.bind(u)(m.value, m.key, this) : a(m.value, m.key, this),
                            this._state !== c)
                        )
                            throw new Error('LinkedMap got modified during iteration.')
                        m = m.next
                    }
                }
                keys() {
                    const a = this,
                        u = this._state
                    let c = this._head
                    const m = {
                        [Symbol.iterator]() {
                            return m
                        },
                        next() {
                            if (a._state !== u)
                                throw new Error('LinkedMap got modified during iteration.')
                            if (c) {
                                const f = { value: c.key, done: !1 }
                                return (c = c.next), f
                            } else return { value: void 0, done: !0 }
                        }
                    }
                    return m
                }
                values() {
                    const a = this,
                        u = this._state
                    let c = this._head
                    const m = {
                        [Symbol.iterator]() {
                            return m
                        },
                        next() {
                            if (a._state !== u)
                                throw new Error('LinkedMap got modified during iteration.')
                            if (c) {
                                const f = { value: c.value, done: !1 }
                                return (c = c.next), f
                            } else return { value: void 0, done: !0 }
                        }
                    }
                    return m
                }
                entries() {
                    const a = this,
                        u = this._state
                    let c = this._head
                    const m = {
                        [Symbol.iterator]() {
                            return m
                        },
                        next() {
                            if (a._state !== u)
                                throw new Error('LinkedMap got modified during iteration.')
                            if (c) {
                                const f = { value: [c.key, c.value], done: !1 }
                                return (c = c.next), f
                            } else return { value: void 0, done: !0 }
                        }
                    }
                    return m
                }
                [((A = Symbol.toStringTag), Symbol.iterator)]() {
                    return this.entries()
                }
                trimOld(a) {
                    if (a >= this.size) return
                    if (a === 0) {
                        this.clear()
                        return
                    }
                    let u = this._head,
                        c = this.size
                    for (; u && c > a; ) this._map.delete(u.key), (u = u.next), c--
                    ;(this._head = u), (this._size = c), u && (u.previous = void 0), this._state++
                }
                addItemFirst(a) {
                    if (!this._head && !this._tail) this._tail = a
                    else if (this._head) (a.next = this._head), (this._head.previous = a)
                    else throw new Error('Invalid list')
                    ;(this._head = a), this._state++
                }
                addItemLast(a) {
                    if (!this._head && !this._tail) this._head = a
                    else if (this._tail) (a.previous = this._tail), (this._tail.next = a)
                    else throw new Error('Invalid list')
                    ;(this._tail = a), this._state++
                }
                removeItem(a) {
                    if (a === this._head && a === this._tail)
                        (this._head = void 0), (this._tail = void 0)
                    else if (a === this._head) {
                        if (!a.next) throw new Error('Invalid list')
                        ;(a.next.previous = void 0), (this._head = a.next)
                    } else if (a === this._tail) {
                        if (!a.previous) throw new Error('Invalid list')
                        ;(a.previous.next = void 0), (this._tail = a.previous)
                    } else {
                        const u = a.next,
                            c = a.previous
                        if (!u || !c) throw new Error('Invalid list')
                        ;(u.previous = c), (c.next = u)
                    }
                    ;(a.next = void 0), (a.previous = void 0), this._state++
                }
                touch(a, u) {
                    if (!this._head || !this._tail) throw new Error('Invalid list')
                    if (!(u !== 1 && u !== 2)) {
                        if (u === 1) {
                            if (a === this._head) return
                            const c = a.next,
                                m = a.previous
                            a === this._tail
                                ? ((m.next = void 0), (this._tail = m))
                                : ((c.previous = m), (m.next = c)),
                                (a.previous = void 0),
                                (a.next = this._head),
                                (this._head.previous = a),
                                (this._head = a),
                                this._state++
                        } else if (u === 2) {
                            if (a === this._tail) return
                            const c = a.next,
                                m = a.previous
                            a === this._head
                                ? ((c.previous = void 0), (this._head = c))
                                : ((c.previous = m), (m.next = c)),
                                (a.next = void 0),
                                (a.previous = this._tail),
                                (this._tail.next = a),
                                (this._tail = a),
                                this._state++
                        }
                    }
                }
                toJSON() {
                    const a = []
                    return (
                        this.forEach((u, c) => {
                            a.push([c, u])
                        }),
                        a
                    )
                }
                fromJSON(a) {
                    this.clear()
                    for (const [u, c] of a) this.set(u, c)
                }
            }
            n.LinkedMap = L
            class h extends L {
                constructor(a, u = 1) {
                    super(), (this._limit = a), (this._ratio = Math.min(Math.max(0, u), 1))
                }
                get limit() {
                    return this._limit
                }
                set limit(a) {
                    ;(this._limit = a), this.checkTrim()
                }
                get(a, u = 2) {
                    return super.get(a, u)
                }
                peek(a) {
                    return super.get(a, 0)
                }
                set(a, u) {
                    return super.set(a, u, 2), this.checkTrim(), this
                }
                checkTrim() {
                    this.size > this._limit && this.trimOld(Math.round(this._limit * this._ratio))
                }
            }
            n.LRUCache = h
            class o {
                constructor(a) {
                    if (((this._m1 = new Map()), (this._m2 = new Map()), a))
                        for (const [u, c] of a) this.set(u, c)
                }
                clear() {
                    this._m1.clear(), this._m2.clear()
                }
                set(a, u) {
                    this._m1.set(a, u), this._m2.set(u, a)
                }
                get(a) {
                    return this._m1.get(a)
                }
                getKey(a) {
                    return this._m2.get(a)
                }
                delete(a) {
                    const u = this._m1.get(a)
                    return u === void 0 ? !1 : (this._m1.delete(a), this._m2.delete(u), !0)
                }
                keys() {
                    return this._m1.keys()
                }
                values() {
                    return this._m1.values()
                }
            }
            n.BidirectionalMap = o
            class C {
                constructor() {
                    this.map = new Map()
                }
                add(a, u) {
                    let c = this.map.get(a)
                    c || ((c = new Set()), this.map.set(a, c)), c.add(u)
                }
                delete(a, u) {
                    const c = this.map.get(a)
                    c && (c.delete(u), c.size === 0 && this.map.delete(a))
                }
                forEach(a, u) {
                    const c = this.map.get(a)
                    c && c.forEach(u)
                }
                get(a) {
                    const u = this.map.get(a)
                    return u || new Set()
                }
            }
            n.SetMap = C
        }),
        X(J[23], Z([0, 1]), function (q, n) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }), (n.StopWatch = void 0)
            const M = globalThis.performance && typeof globalThis.performance.now == 'function'
            class A {
                static create(d) {
                    return new A(d)
                }
                constructor(d) {
                    ;(this._now =
                        M && d === !1
                            ? Date.now
                            : globalThis.performance.now.bind(globalThis.performance)),
                        (this._startTime = this._now()),
                        (this._stopTime = -1)
                }
                stop() {
                    this._stopTime = this._now()
                }
                elapsed() {
                    return this._stopTime !== -1
                        ? this._stopTime - this._startTime
                        : this._now() - this._startTime
                }
            }
            n.StopWatch = A
        }),
        X(J[9], Z([0, 1, 5, 20, 13, 22, 23]), function (q, n, M, A, i, d, g) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.Relay =
                    n.EventBufferer =
                    n.EventMultiplexer =
                    n.MicrotaskEmitter =
                    n.DebounceEmitter =
                    n.PauseableEmitter =
                    n.createEventDeliveryQueue =
                    n.Emitter =
                    n.EventProfiling =
                    n.Event =
                        void 0)
            const L = !1,
                h = !1
            var o
            ;(function (b) {
                b.None = () => i.Disposable.None
                function v(K) {
                    if (h) {
                        const { onDidAddListener: j } = K,
                            G = u.create()
                        let Q = 0
                        K.onDidAddListener = () => {
                            ++Q === 2 &&
                                (console.warn(
                                    'snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here'
                                ),
                                G.print()),
                                j?.()
                        }
                    }
                }
                function R(K, j) {
                    return I(K, () => {}, 0, void 0, !0, void 0, j)
                }
                b.defer = R
                function N(K) {
                    return (j, G = null, Q) => {
                        let ee = !1,
                            ne
                        return (
                            (ne = K(
                                (P) => {
                                    if (!ee) return ne ? ne.dispose() : (ee = !0), j.call(G, P)
                                },
                                null,
                                Q
                            )),
                            ee && ne.dispose(),
                            ne
                        )
                    }
                }
                b.once = N
                function D(K, j, G) {
                    return k((Q, ee = null, ne) => K((P) => Q.call(ee, j(P)), null, ne), G)
                }
                b.map = D
                function x(K, j, G) {
                    return k(
                        (Q, ee = null, ne) =>
                            K(
                                (P) => {
                                    j(P), Q.call(ee, P)
                                },
                                null,
                                ne
                            ),
                        G
                    )
                }
                b.forEach = x
                function T(K, j, G) {
                    return k((Q, ee = null, ne) => K((P) => j(P) && Q.call(ee, P), null, ne), G)
                }
                b.filter = T
                function F(K) {
                    return K
                }
                b.signal = F
                function U(...K) {
                    return (j, G = null, Q) => {
                        const ee = (0, i.combinedDisposable)(
                            ...K.map((ne) => ne((P) => j.call(G, P)))
                        )
                        return O(ee, Q)
                    }
                }
                b.any = U
                function z(K, j, G, Q) {
                    let ee = G
                    return D(K, (ne) => ((ee = j(ee, ne)), ee), Q)
                }
                b.reduce = z
                function k(K, j) {
                    let G
                    const Q = {
                        onWillAddFirstListener() {
                            G = K(ee.fire, ee)
                        },
                        onDidRemoveLastListener() {
                            G?.dispose()
                        }
                    }
                    j || v(Q)
                    const ee = new S(Q)
                    return j?.add(ee), ee.event
                }
                function O(K, j) {
                    return j instanceof Array ? j.push(K) : j && j.add(K), K
                }
                function I(K, j, G = 100, Q = !1, ee = !1, ne, P) {
                    let B,
                        W,
                        $,
                        te = 0,
                        ie
                    const oe = {
                        leakWarningThreshold: ne,
                        onWillAddFirstListener() {
                            B = K((ce) => {
                                te++,
                                    (W = j(W, ce)),
                                    Q && !$ && (ue.fire(W), (W = void 0)),
                                    (ie = () => {
                                        const se = W
                                        ;(W = void 0),
                                            ($ = void 0),
                                            (!Q || te > 1) && ue.fire(se),
                                            (te = 0)
                                    }),
                                    typeof G == 'number'
                                        ? (clearTimeout($), ($ = setTimeout(ie, G)))
                                        : $ === void 0 && (($ = 0), queueMicrotask(ie))
                            })
                        },
                        onWillRemoveListener() {
                            ee && te > 0 && ie?.()
                        },
                        onDidRemoveLastListener() {
                            ;(ie = void 0), B.dispose()
                        }
                    }
                    P || v(oe)
                    const ue = new S(oe)
                    return P?.add(ue), ue.event
                }
                b.debounce = I
                function V(K, j = 0, G) {
                    return b.debounce(
                        K,
                        (Q, ee) => (Q ? (Q.push(ee), Q) : [ee]),
                        j,
                        void 0,
                        !0,
                        void 0,
                        G
                    )
                }
                b.accumulate = V
                function H(K, j = (Q, ee) => Q === ee, G) {
                    let Q = !0,
                        ee
                    return T(
                        K,
                        (ne) => {
                            const P = Q || !j(ne, ee)
                            return (Q = !1), (ee = ne), P
                        },
                        G
                    )
                }
                b.latch = H
                function Y(K, j, G) {
                    return [b.filter(K, j, G), b.filter(K, (Q) => !j(Q), G)]
                }
                b.split = Y
                function t(K, j = !1, G = [], Q) {
                    let ee = G.slice(),
                        ne = K((W) => {
                            ee ? ee.push(W) : B.fire(W)
                        })
                    Q && Q.add(ne)
                    const P = () => {
                            ee?.forEach((W) => B.fire(W)), (ee = null)
                        },
                        B = new S({
                            onWillAddFirstListener() {
                                ne || ((ne = K((W) => B.fire(W))), Q && Q.add(ne))
                            },
                            onDidAddFirstListener() {
                                ee && (j ? setTimeout(P) : P())
                            },
                            onDidRemoveLastListener() {
                                ne && ne.dispose(), (ne = null)
                            }
                        })
                    return Q && Q.add(B), B.event
                }
                b.buffer = t
                function re(K, j) {
                    return (Q, ee, ne) => {
                        const P = j(new ge())
                        return K(
                            function (B) {
                                const W = P.evaluate(B)
                                W !== le && Q.call(ee, W)
                            },
                            void 0,
                            ne
                        )
                    }
                }
                b.chain = re
                const le = Symbol('HaltChainable')
                class ge {
                    constructor() {
                        this.steps = []
                    }
                    map(j) {
                        return this.steps.push(j), this
                    }
                    forEach(j) {
                        return this.steps.push((G) => (j(G), G)), this
                    }
                    filter(j) {
                        return this.steps.push((G) => (j(G) ? G : le)), this
                    }
                    reduce(j, G) {
                        let Q = G
                        return this.steps.push((ee) => ((Q = j(Q, ee)), Q)), this
                    }
                    latch(j = (G, Q) => G === Q) {
                        let G = !0,
                            Q
                        return (
                            this.steps.push((ee) => {
                                const ne = G || !j(ee, Q)
                                return (G = !1), (Q = ee), ne ? ee : le
                            }),
                            this
                        )
                    }
                    evaluate(j) {
                        for (const G of this.steps) if (((j = G(j)), j === le)) break
                        return j
                    }
                }
                function ve(K, j, G = (Q) => Q) {
                    const Q = (...B) => P.fire(G(...B)),
                        ee = () => K.on(j, Q),
                        ne = () => K.removeListener(j, Q),
                        P = new S({ onWillAddFirstListener: ee, onDidRemoveLastListener: ne })
                    return P.event
                }
                b.fromNodeEventEmitter = ve
                function pe(K, j, G = (Q) => Q) {
                    const Q = (...B) => P.fire(G(...B)),
                        ee = () => K.addEventListener(j, Q),
                        ne = () => K.removeEventListener(j, Q),
                        P = new S({ onWillAddFirstListener: ee, onDidRemoveLastListener: ne })
                    return P.event
                }
                b.fromDOMEventEmitter = pe
                function Le(K) {
                    return new Promise((j) => N(K)(j))
                }
                b.toPromise = Le
                function me(K) {
                    const j = new S()
                    return (
                        K.then(
                            (G) => {
                                j.fire(G)
                            },
                            () => {
                                j.fire(void 0)
                            }
                        ).finally(() => {
                            j.dispose()
                        }),
                        j.event
                    )
                }
                b.fromPromise = me
                function we(K, j, G) {
                    return j(G), K((Q) => j(Q))
                }
                b.runAndSubscribe = we
                function Ce(K, j) {
                    let G = null
                    function Q(ne) {
                        G?.dispose(), (G = new i.DisposableStore()), j(ne, G)
                    }
                    Q(void 0)
                    const ee = K((ne) => Q(ne))
                    return (0, i.toDisposable)(() => {
                        ee.dispose(), G?.dispose()
                    })
                }
                b.runAndSubscribeWithStore = Ce
                class Se {
                    constructor(j, G) {
                        ;(this._observable = j), (this._counter = 0), (this._hasChanged = !1)
                        const Q = {
                            onWillAddFirstListener: () => {
                                j.addObserver(this)
                            },
                            onDidRemoveLastListener: () => {
                                j.removeObserver(this)
                            }
                        }
                        G || v(Q), (this.emitter = new S(Q)), G && G.add(this.emitter)
                    }
                    beginUpdate(j) {
                        this._counter++
                    }
                    handlePossibleChange(j) {}
                    handleChange(j, G) {
                        this._hasChanged = !0
                    }
                    endUpdate(j) {
                        this._counter--,
                            this._counter === 0 &&
                                (this._observable.reportChanges(),
                                this._hasChanged &&
                                    ((this._hasChanged = !1),
                                    this.emitter.fire(this._observable.get())))
                    }
                }
                function be(K, j) {
                    return new Se(K, j).emitter.event
                }
                b.fromObservable = be
                function fe(K) {
                    return (j, G, Q) => {
                        let ee = 0,
                            ne = !1
                        const P = {
                            beginUpdate() {
                                ee++
                            },
                            endUpdate() {
                                ee--, ee === 0 && (K.reportChanges(), ne && ((ne = !1), j.call(G)))
                            },
                            handlePossibleChange() {},
                            handleChange() {
                                ne = !0
                            }
                        }
                        K.addObserver(P), K.reportChanges()
                        const B = {
                            dispose() {
                                K.removeObserver(P)
                            }
                        }
                        return (
                            Q instanceof i.DisposableStore
                                ? Q.add(B)
                                : Array.isArray(Q) && Q.push(B),
                            B
                        )
                    }
                }
                b.fromObservableLight = fe
            })(o || (n.Event = o = {}))
            class C {
                constructor(v) {
                    ;(this.listenerCount = 0),
                        (this.invocationCount = 0),
                        (this.elapsedOverall = 0),
                        (this.durations = []),
                        (this.name = `${v}_${C._idPool++}`),
                        C.all.add(this)
                }
                start(v) {
                    ;(this._stopWatch = new g.StopWatch()), (this.listenerCount = v)
                }
                stop() {
                    if (this._stopWatch) {
                        const v = this._stopWatch.elapsed()
                        this.durations.push(v),
                            (this.elapsedOverall += v),
                            (this.invocationCount += 1),
                            (this._stopWatch = void 0)
                    }
                }
            }
            ;(n.EventProfiling = C), (C.all = new Set()), (C._idPool = 0)
            let e = -1
            class a {
                constructor(v, R = Math.random().toString(18).slice(2, 5)) {
                    ;(this.threshold = v), (this.name = R), (this._warnCountdown = 0)
                }
                dispose() {
                    var v
                    ;(v = this._stacks) === null || v === void 0 || v.clear()
                }
                check(v, R) {
                    const N = this.threshold
                    if (N <= 0 || R < N) return
                    this._stacks || (this._stacks = new Map())
                    const D = this._stacks.get(v.value) || 0
                    if (
                        (this._stacks.set(v.value, D + 1),
                        (this._warnCountdown -= 1),
                        this._warnCountdown <= 0)
                    ) {
                        this._warnCountdown = N * 0.5
                        let x,
                            T = 0
                        for (const [F, U] of this._stacks) (!x || T < U) && ((x = F), (T = U))
                        console.warn(
                            `[${this.name}] potential listener LEAK detected, having ${R} listeners already. MOST frequent listener (${T}):`
                        ),
                            console.warn(x)
                    }
                    return () => {
                        const x = this._stacks.get(v.value) || 0
                        this._stacks.set(v.value, x - 1)
                    }
                }
            }
            class u {
                static create() {
                    var v
                    return new u((v = new Error().stack) !== null && v !== void 0 ? v : '')
                }
                constructor(v) {
                    this.value = v
                }
                print() {
                    console.warn(
                        this.value
                            .split(
                                `
`
                            )
                            .slice(2).join(`
`)
                    )
                }
            }
            class c {
                constructor(v) {
                    this.value = v
                }
            }
            const m = 2,
                f = (b, v) => {
                    if (b instanceof c) v(b)
                    else
                        for (let R = 0; R < b.length; R++) {
                            const N = b[R]
                            N && v(N)
                        }
                }
            class S {
                constructor(v) {
                    var R, N, D, x, T
                    ;(this._size = 0),
                        (this._options = v),
                        (this._leakageMon =
                            e > 0 ||
                            (!((R = this._options) === null || R === void 0) &&
                                R.leakWarningThreshold)
                                ? new a(
                                      (D =
                                          (N = this._options) === null || N === void 0
                                              ? void 0
                                              : N.leakWarningThreshold) !== null && D !== void 0
                                          ? D
                                          : e
                                  )
                                : void 0),
                        (this._perfMon =
                            !((x = this._options) === null || x === void 0) && x._profName
                                ? new C(this._options._profName)
                                : void 0),
                        (this._deliveryQueue =
                            (T = this._options) === null || T === void 0 ? void 0 : T.deliveryQueue)
                }
                dispose() {
                    var v, R, N, D
                    if (!this._disposed) {
                        if (
                            ((this._disposed = !0),
                            ((v = this._deliveryQueue) === null || v === void 0
                                ? void 0
                                : v.current) === this && this._deliveryQueue.reset(),
                            this._listeners)
                        ) {
                            if (L) {
                                const x = this._listeners
                                queueMicrotask(() => {
                                    f(x, (T) => {
                                        var F
                                        return (F = T.stack) === null || F === void 0
                                            ? void 0
                                            : F.print()
                                    })
                                })
                            }
                            ;(this._listeners = void 0), (this._size = 0)
                        }
                        ;(N =
                            (R = this._options) === null || R === void 0
                                ? void 0
                                : R.onDidRemoveLastListener) === null ||
                            N === void 0 ||
                            N.call(R),
                            (D = this._leakageMon) === null || D === void 0 || D.dispose()
                    }
                }
                get event() {
                    var v
                    return (
                        ((v = this._event) !== null && v !== void 0) ||
                            (this._event = (R, N, D) => {
                                var x, T, F, U, z
                                if (this._leakageMon && this._size > this._leakageMon.threshold * 3)
                                    return (
                                        console.warn(
                                            `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far`
                                        ),
                                        i.Disposable.None
                                    )
                                if (this._disposed) return i.Disposable.None
                                N && (R = R.bind(N))
                                const k = new c(R)
                                let O, I
                                this._leakageMon &&
                                    this._size >= Math.ceil(this._leakageMon.threshold * 0.2) &&
                                    ((k.stack = u.create()),
                                    (O = this._leakageMon.check(k.stack, this._size + 1))),
                                    L && (k.stack = I ?? u.create()),
                                    this._listeners
                                        ? this._listeners instanceof c
                                            ? (((z = this._deliveryQueue) !== null &&
                                                  z !== void 0) ||
                                                  (this._deliveryQueue = new E()),
                                              (this._listeners = [this._listeners, k]))
                                            : this._listeners.push(k)
                                        : ((T =
                                              (x = this._options) === null || x === void 0
                                                  ? void 0
                                                  : x.onWillAddFirstListener) === null ||
                                              T === void 0 ||
                                              T.call(x, this),
                                          (this._listeners = k),
                                          (U =
                                              (F = this._options) === null || F === void 0
                                                  ? void 0
                                                  : F.onDidAddFirstListener) === null ||
                                              U === void 0 ||
                                              U.call(F, this)),
                                    this._size++
                                const V = (0, i.toDisposable)(() => {
                                    O?.(), this._removeListener(k)
                                })
                                return (
                                    D instanceof i.DisposableStore
                                        ? D.add(V)
                                        : Array.isArray(D) && D.push(V),
                                    V
                                )
                            }),
                        this._event
                    )
                }
                _removeListener(v) {
                    var R, N, D, x
                    if (
                        ((N =
                            (R = this._options) === null || R === void 0
                                ? void 0
                                : R.onWillRemoveListener) === null ||
                            N === void 0 ||
                            N.call(R, this),
                        !this._listeners)
                    )
                        return
                    if (this._size === 1) {
                        ;(this._listeners = void 0),
                            (x =
                                (D = this._options) === null || D === void 0
                                    ? void 0
                                    : D.onDidRemoveLastListener) === null ||
                                x === void 0 ||
                                x.call(D, this),
                            (this._size = 0)
                        return
                    }
                    const T = this._listeners,
                        F = T.indexOf(v)
                    if (F === -1)
                        throw (
                            (console.log('disposed?', this._disposed),
                            console.log('size?', this._size),
                            console.log('arr?', JSON.stringify(this._listeners)),
                            new Error('Attempted to dispose unknown listener'))
                        )
                    this._size--, (T[F] = void 0)
                    const U = this._deliveryQueue.current === this
                    if (this._size * m <= T.length) {
                        let z = 0
                        for (let k = 0; k < T.length; k++)
                            T[k]
                                ? (T[z++] = T[k])
                                : U &&
                                  (this._deliveryQueue.end--,
                                  z < this._deliveryQueue.i && this._deliveryQueue.i--)
                        T.length = z
                    }
                }
                _deliver(v, R) {
                    var N
                    if (!v) return
                    const D =
                        ((N = this._options) === null || N === void 0
                            ? void 0
                            : N.onListenerError) || M.onUnexpectedError
                    if (!D) {
                        v.value(R)
                        return
                    }
                    try {
                        v.value(R)
                    } catch (x) {
                        D(x)
                    }
                }
                _deliverQueue(v) {
                    const R = v.current._listeners
                    for (; v.i < v.end; ) this._deliver(R[v.i++], v.value)
                    v.reset()
                }
                fire(v) {
                    var R, N, D, x
                    if (
                        (!((R = this._deliveryQueue) === null || R === void 0) &&
                            R.current &&
                            (this._deliverQueue(this._deliveryQueue),
                            (N = this._perfMon) === null || N === void 0 || N.stop()),
                        (D = this._perfMon) === null || D === void 0 || D.start(this._size),
                        this._listeners)
                    )
                        if (this._listeners instanceof c) this._deliver(this._listeners, v)
                        else {
                            const T = this._deliveryQueue
                            T.enqueue(this, v, this._listeners.length), this._deliverQueue(T)
                        }
                    ;(x = this._perfMon) === null || x === void 0 || x.stop()
                }
                hasListeners() {
                    return this._size > 0
                }
            }
            n.Emitter = S
            const w = () => new E()
            n.createEventDeliveryQueue = w
            class E {
                constructor() {
                    ;(this.i = -1), (this.end = 0)
                }
                enqueue(v, R, N) {
                    ;(this.i = 0), (this.end = N), (this.current = v), (this.value = R)
                }
                reset() {
                    ;(this.i = this.end), (this.current = void 0), (this.value = void 0)
                }
            }
            class y extends S {
                constructor(v) {
                    super(v),
                        (this._isPaused = 0),
                        (this._eventQueue = new d.LinkedList()),
                        (this._mergeFn = v?.merge)
                }
                pause() {
                    this._isPaused++
                }
                resume() {
                    if (this._isPaused !== 0 && --this._isPaused === 0)
                        if (this._mergeFn) {
                            if (this._eventQueue.size > 0) {
                                const v = Array.from(this._eventQueue)
                                this._eventQueue.clear(), super.fire(this._mergeFn(v))
                            }
                        } else
                            for (; !this._isPaused && this._eventQueue.size !== 0; )
                                super.fire(this._eventQueue.shift())
                }
                fire(v) {
                    this._size && (this._isPaused !== 0 ? this._eventQueue.push(v) : super.fire(v))
                }
            }
            n.PauseableEmitter = y
            class _ extends y {
                constructor(v) {
                    var R
                    super(v), (this._delay = (R = v.delay) !== null && R !== void 0 ? R : 100)
                }
                fire(v) {
                    this._handle ||
                        (this.pause(),
                        (this._handle = setTimeout(() => {
                            ;(this._handle = void 0), this.resume()
                        }, this._delay))),
                        super.fire(v)
                }
            }
            n.DebounceEmitter = _
            class r extends S {
                constructor(v) {
                    super(v), (this._queuedEvents = []), (this._mergeFn = v?.merge)
                }
                fire(v) {
                    this.hasListeners() &&
                        (this._queuedEvents.push(v),
                        this._queuedEvents.length === 1 &&
                            queueMicrotask(() => {
                                this._mergeFn
                                    ? super.fire(this._mergeFn(this._queuedEvents))
                                    : this._queuedEvents.forEach((R) => super.fire(R)),
                                    (this._queuedEvents = [])
                            }))
                }
            }
            n.MicrotaskEmitter = r
            class s {
                constructor() {
                    ;(this.hasListeners = !1),
                        (this.events = []),
                        (this.emitter = new S({
                            onWillAddFirstListener: () => this.onFirstListenerAdd(),
                            onDidRemoveLastListener: () => this.onLastListenerRemove()
                        }))
                }
                get event() {
                    return this.emitter.event
                }
                add(v) {
                    const R = { event: v, listener: null }
                    this.events.push(R), this.hasListeners && this.hook(R)
                    const N = () => {
                        this.hasListeners && this.unhook(R)
                        const D = this.events.indexOf(R)
                        this.events.splice(D, 1)
                    }
                    return (0, i.toDisposable)((0, A.createSingleCallFunction)(N))
                }
                onFirstListenerAdd() {
                    ;(this.hasListeners = !0), this.events.forEach((v) => this.hook(v))
                }
                onLastListenerRemove() {
                    ;(this.hasListeners = !1), this.events.forEach((v) => this.unhook(v))
                }
                hook(v) {
                    v.listener = v.event((R) => this.emitter.fire(R))
                }
                unhook(v) {
                    v.listener && v.listener.dispose(), (v.listener = null)
                }
                dispose() {
                    this.emitter.dispose()
                }
            }
            n.EventMultiplexer = s
            class l {
                constructor() {
                    this.buffers = []
                }
                wrapEvent(v) {
                    return (R, N, D) =>
                        v(
                            (x) => {
                                const T = this.buffers[this.buffers.length - 1]
                                T ? T.push(() => R.call(N, x)) : R.call(N, x)
                            },
                            void 0,
                            D
                        )
                }
                bufferEvents(v) {
                    const R = []
                    this.buffers.push(R)
                    const N = v()
                    return this.buffers.pop(), R.forEach((D) => D()), N
                }
            }
            n.EventBufferer = l
            class p {
                constructor() {
                    ;(this.listening = !1),
                        (this.inputEvent = o.None),
                        (this.inputEventListener = i.Disposable.None),
                        (this.emitter = new S({
                            onDidAddFirstListener: () => {
                                ;(this.listening = !0),
                                    (this.inputEventListener = this.inputEvent(
                                        this.emitter.fire,
                                        this.emitter
                                    ))
                            },
                            onDidRemoveLastListener: () => {
                                ;(this.listening = !1), this.inputEventListener.dispose()
                            }
                        })),
                        (this.event = this.emitter.event)
                }
                set input(v) {
                    ;(this.inputEvent = v),
                        this.listening &&
                            (this.inputEventListener.dispose(),
                            (this.inputEventListener = v(this.emitter.fire, this.emitter)))
                }
                dispose() {
                    this.inputEventListener.dispose(), this.emitter.dispose()
                }
            }
            n.Relay = p
        }),
        X(J[38], Z([0, 1, 9]), function (q, n, M) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.CancellationTokenSource = n.CancellationToken = void 0)
            const A = Object.freeze(function (L, h) {
                const o = setTimeout(L.bind(h), 0)
                return {
                    dispose() {
                        clearTimeout(o)
                    }
                }
            })
            var i
            ;(function (L) {
                function h(o) {
                    return o === L.None || o === L.Cancelled || o instanceof d
                        ? !0
                        : !o || typeof o != 'object'
                          ? !1
                          : typeof o.isCancellationRequested == 'boolean' &&
                            typeof o.onCancellationRequested == 'function'
                }
                ;(L.isCancellationToken = h),
                    (L.None = Object.freeze({
                        isCancellationRequested: !1,
                        onCancellationRequested: M.Event.None
                    })),
                    (L.Cancelled = Object.freeze({
                        isCancellationRequested: !0,
                        onCancellationRequested: A
                    }))
            })(i || (n.CancellationToken = i = {}))
            class d {
                constructor() {
                    ;(this._isCancelled = !1), (this._emitter = null)
                }
                cancel() {
                    this._isCancelled ||
                        ((this._isCancelled = !0),
                        this._emitter && (this._emitter.fire(void 0), this.dispose()))
                }
                get isCancellationRequested() {
                    return this._isCancelled
                }
                get onCancellationRequested() {
                    return this._isCancelled
                        ? A
                        : (this._emitter || (this._emitter = new M.Emitter()), this._emitter.event)
                }
                dispose() {
                    this._emitter && (this._emitter.dispose(), (this._emitter = null))
                }
            }
            class g {
                constructor(h) {
                    ;(this._token = void 0),
                        (this._parentListener = void 0),
                        (this._parentListener = h && h.onCancellationRequested(this.cancel, this))
                }
                get token() {
                    return this._token || (this._token = new d()), this._token
                }
                cancel() {
                    this._token
                        ? this._token instanceof d && this._token.cancel()
                        : (this._token = i.Cancelled)
                }
                dispose(h = !1) {
                    var o
                    h && this.cancel(),
                        (o = this._parentListener) === null || o === void 0 || o.dispose(),
                        this._token
                            ? this._token instanceof d && this._token.dispose()
                            : (this._token = i.None)
                }
            }
            n.CancellationTokenSource = g
        }),
        X(J[6], Z([0, 1, 32, 36]), function (q, n, M, A) {
            'use strict'
            var i
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.InvisibleCharacters =
                    n.AmbiguousCharacters =
                    n.noBreakWhitespace =
                    n.getLeftDeleteOffset =
                    n.singleLetterHash =
                    n.containsUppercaseCharacter =
                    n.startsWithUTF8BOM =
                    n.UTF8_BOM_CHARACTER =
                    n.isEmojiImprecise =
                    n.isFullWidthCharacter =
                    n.containsUnusualLineTerminators =
                    n.UNUSUAL_LINE_TERMINATORS =
                    n.isBasicASCII =
                    n.containsRTL =
                    n.getCharContainingOffset =
                    n.prevCharLength =
                    n.nextCharLength =
                    n.GraphemeIterator =
                    n.CodePointIterator =
                    n.getNextCodePoint =
                    n.computeCodePoint =
                    n.isLowSurrogate =
                    n.isHighSurrogate =
                    n.commonSuffixLength =
                    n.commonPrefixLength =
                    n.startsWithIgnoreCase =
                    n.equalsIgnoreCase =
                    n.isUpperAsciiLetter =
                    n.isLowerAsciiLetter =
                    n.isAsciiDigit =
                    n.compareSubstringIgnoreCase =
                    n.compareIgnoreCase =
                    n.compareSubstring =
                    n.compare =
                    n.lastNonWhitespaceIndex =
                    n.getLeadingWhitespace =
                    n.firstNonWhitespaceIndex =
                    n.splitLines =
                    n.regExpLeadsToEndlessLoop =
                    n.createRegExp =
                    n.stripWildcards =
                    n.convertSimple2RegExpPattern =
                    n.rtrim =
                    n.ltrim =
                    n.trim =
                    n.escapeRegExpCharacters =
                    n.escape =
                    n.format =
                    n.isFalsyOrWhitespace =
                        void 0)
            function d(P) {
                return !P || typeof P != 'string' ? !0 : P.trim().length === 0
            }
            n.isFalsyOrWhitespace = d
            const g = /{(\d+)}/g
            function L(P, ...B) {
                return B.length === 0
                    ? P
                    : P.replace(g, function (W, $) {
                          const te = parseInt($, 10)
                          return isNaN(te) || te < 0 || te >= B.length ? W : B[te]
                      })
            }
            n.format = L
            function h(P) {
                return P.replace(/[<>&]/g, function (B) {
                    switch (B) {
                        case '<':
                            return '&lt;'
                        case '>':
                            return '&gt;'
                        case '&':
                            return '&amp;'
                        default:
                            return B
                    }
                })
            }
            n.escape = h
            function o(P) {
                return P.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, '\\$&')
            }
            n.escapeRegExpCharacters = o
            function C(P, B = ' ') {
                const W = e(P, B)
                return a(W, B)
            }
            n.trim = C
            function e(P, B) {
                if (!P || !B) return P
                const W = B.length
                if (W === 0 || P.length === 0) return P
                let $ = 0
                for (; P.indexOf(B, $) === $; ) $ = $ + W
                return P.substring($)
            }
            n.ltrim = e
            function a(P, B) {
                if (!P || !B) return P
                const W = B.length,
                    $ = P.length
                if (W === 0 || $ === 0) return P
                let te = $,
                    ie = -1
                for (; (ie = P.lastIndexOf(B, te - 1)), !(ie === -1 || ie + W !== te); ) {
                    if (ie === 0) return ''
                    te = ie
                }
                return P.substring(0, te)
            }
            n.rtrim = a
            function u(P) {
                return P.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&').replace(
                    /[\*]/g,
                    '.*'
                )
            }
            n.convertSimple2RegExpPattern = u
            function c(P) {
                return P.replace(/\*/g, '')
            }
            n.stripWildcards = c
            function m(P, B, W = {}) {
                if (!P) throw new Error('Cannot create regex from empty string')
                B || (P = o(P)),
                    W.wholeWord &&
                        (/\B/.test(P.charAt(0)) || (P = '\\b' + P),
                        /\B/.test(P.charAt(P.length - 1)) || (P = P + '\\b'))
                let $ = ''
                return (
                    W.global && ($ += 'g'),
                    W.matchCase || ($ += 'i'),
                    W.multiline && ($ += 'm'),
                    W.unicode && ($ += 'u'),
                    new RegExp(P, $)
                )
            }
            n.createRegExp = m
            function f(P) {
                return P.source === '^' ||
                    P.source === '^$' ||
                    P.source === '$' ||
                    P.source === '^\\s*$'
                    ? !1
                    : !!(P.exec('') && P.lastIndex === 0)
            }
            n.regExpLeadsToEndlessLoop = f
            function S(P) {
                return P.split(/\r\n|\r|\n/)
            }
            n.splitLines = S
            function w(P) {
                for (let B = 0, W = P.length; B < W; B++) {
                    const $ = P.charCodeAt(B)
                    if ($ !== 32 && $ !== 9) return B
                }
                return -1
            }
            n.firstNonWhitespaceIndex = w
            function E(P, B = 0, W = P.length) {
                for (let $ = B; $ < W; $++) {
                    const te = P.charCodeAt($)
                    if (te !== 32 && te !== 9) return P.substring(B, $)
                }
                return P.substring(B, W)
            }
            n.getLeadingWhitespace = E
            function y(P, B = P.length - 1) {
                for (let W = B; W >= 0; W--) {
                    const $ = P.charCodeAt(W)
                    if ($ !== 32 && $ !== 9) return W
                }
                return -1
            }
            n.lastNonWhitespaceIndex = y
            function _(P, B) {
                return P < B ? -1 : P > B ? 1 : 0
            }
            n.compare = _
            function r(P, B, W = 0, $ = P.length, te = 0, ie = B.length) {
                for (; W < $ && te < ie; W++, te++) {
                    const ce = P.charCodeAt(W),
                        se = B.charCodeAt(te)
                    if (ce < se) return -1
                    if (ce > se) return 1
                }
                const oe = $ - W,
                    ue = ie - te
                return oe < ue ? -1 : oe > ue ? 1 : 0
            }
            n.compareSubstring = r
            function s(P, B) {
                return l(P, B, 0, P.length, 0, B.length)
            }
            n.compareIgnoreCase = s
            function l(P, B, W = 0, $ = P.length, te = 0, ie = B.length) {
                for (; W < $ && te < ie; W++, te++) {
                    let ce = P.charCodeAt(W),
                        se = B.charCodeAt(te)
                    if (ce === se) continue
                    if (ce >= 128 || se >= 128)
                        return r(P.toLowerCase(), B.toLowerCase(), W, $, te, ie)
                    b(ce) && (ce -= 32), b(se) && (se -= 32)
                    const he = ce - se
                    if (he !== 0) return he
                }
                const oe = $ - W,
                    ue = ie - te
                return oe < ue ? -1 : oe > ue ? 1 : 0
            }
            n.compareSubstringIgnoreCase = l
            function p(P) {
                return P >= 48 && P <= 57
            }
            n.isAsciiDigit = p
            function b(P) {
                return P >= 97 && P <= 122
            }
            n.isLowerAsciiLetter = b
            function v(P) {
                return P >= 65 && P <= 90
            }
            n.isUpperAsciiLetter = v
            function R(P, B) {
                return P.length === B.length && l(P, B) === 0
            }
            n.equalsIgnoreCase = R
            function N(P, B) {
                const W = B.length
                return B.length > P.length ? !1 : l(P, B, 0, W) === 0
            }
            n.startsWithIgnoreCase = N
            function D(P, B) {
                const W = Math.min(P.length, B.length)
                let $
                for ($ = 0; $ < W; $++) if (P.charCodeAt($) !== B.charCodeAt($)) return $
                return W
            }
            n.commonPrefixLength = D
            function x(P, B) {
                const W = Math.min(P.length, B.length)
                let $
                const te = P.length - 1,
                    ie = B.length - 1
                for ($ = 0; $ < W; $++) if (P.charCodeAt(te - $) !== B.charCodeAt(ie - $)) return $
                return W
            }
            n.commonSuffixLength = x
            function T(P) {
                return 55296 <= P && P <= 56319
            }
            n.isHighSurrogate = T
            function F(P) {
                return 56320 <= P && P <= 57343
            }
            n.isLowSurrogate = F
            function U(P, B) {
                return ((P - 55296) << 10) + (B - 56320) + 65536
            }
            n.computeCodePoint = U
            function z(P, B, W) {
                const $ = P.charCodeAt(W)
                if (T($) && W + 1 < B) {
                    const te = P.charCodeAt(W + 1)
                    if (F(te)) return U($, te)
                }
                return $
            }
            n.getNextCodePoint = z
            function k(P, B) {
                const W = P.charCodeAt(B - 1)
                if (F(W) && B > 1) {
                    const $ = P.charCodeAt(B - 2)
                    if (T($)) return U($, W)
                }
                return W
            }
            class O {
                get offset() {
                    return this._offset
                }
                constructor(B, W = 0) {
                    ;(this._str = B), (this._len = B.length), (this._offset = W)
                }
                setOffset(B) {
                    this._offset = B
                }
                prevCodePoint() {
                    const B = k(this._str, this._offset)
                    return (this._offset -= B >= 65536 ? 2 : 1), B
                }
                nextCodePoint() {
                    const B = z(this._str, this._len, this._offset)
                    return (this._offset += B >= 65536 ? 2 : 1), B
                }
                eol() {
                    return this._offset >= this._len
                }
            }
            n.CodePointIterator = O
            class I {
                get offset() {
                    return this._iterator.offset
                }
                constructor(B, W = 0) {
                    this._iterator = new O(B, W)
                }
                nextGraphemeLength() {
                    const B = fe.getInstance(),
                        W = this._iterator,
                        $ = W.offset
                    let te = B.getGraphemeBreakType(W.nextCodePoint())
                    for (; !W.eol(); ) {
                        const ie = W.offset,
                            oe = B.getGraphemeBreakType(W.nextCodePoint())
                        if (be(te, oe)) {
                            W.setOffset(ie)
                            break
                        }
                        te = oe
                    }
                    return W.offset - $
                }
                prevGraphemeLength() {
                    const B = fe.getInstance(),
                        W = this._iterator,
                        $ = W.offset
                    let te = B.getGraphemeBreakType(W.prevCodePoint())
                    for (; W.offset > 0; ) {
                        const ie = W.offset,
                            oe = B.getGraphemeBreakType(W.prevCodePoint())
                        if (be(oe, te)) {
                            W.setOffset(ie)
                            break
                        }
                        te = oe
                    }
                    return $ - W.offset
                }
                eol() {
                    return this._iterator.eol()
                }
            }
            n.GraphemeIterator = I
            function V(P, B) {
                return new I(P, B).nextGraphemeLength()
            }
            n.nextCharLength = V
            function H(P, B) {
                return new I(P, B).prevGraphemeLength()
            }
            n.prevCharLength = H
            function Y(P, B) {
                B > 0 && F(P.charCodeAt(B)) && B--
                const W = B + V(P, B)
                return [W - H(P, W), W]
            }
            n.getCharContainingOffset = Y
            let t
            function re() {
                return /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA\u07FE-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u088E\u08A0-\u08C9\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDC7\uFDF0-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE35\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDD23\uDE80-\uDEA9\uDEAD-\uDF45\uDF51-\uDF81\uDF86-\uDFF6]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD4B-\uDFFF]|\uD83B[\uDC00-\uDEBB])/
            }
            function le(P) {
                return t || (t = re()), t.test(P)
            }
            n.containsRTL = le
            const ge = /^[\t\n\r\x20-\x7E]*$/
            function ve(P) {
                return ge.test(P)
            }
            ;(n.isBasicASCII = ve), (n.UNUSUAL_LINE_TERMINATORS = /[\u2028\u2029]/)
            function pe(P) {
                return n.UNUSUAL_LINE_TERMINATORS.test(P)
            }
            n.containsUnusualLineTerminators = pe
            function Le(P) {
                return (
                    (P >= 11904 && P <= 55215) ||
                    (P >= 63744 && P <= 64255) ||
                    (P >= 65281 && P <= 65374)
                )
            }
            n.isFullWidthCharacter = Le
            function me(P) {
                return (
                    (P >= 127462 && P <= 127487) ||
                    P === 8986 ||
                    P === 8987 ||
                    P === 9200 ||
                    P === 9203 ||
                    (P >= 9728 && P <= 10175) ||
                    P === 11088 ||
                    P === 11093 ||
                    (P >= 127744 && P <= 128591) ||
                    (P >= 128640 && P <= 128764) ||
                    (P >= 128992 && P <= 129008) ||
                    (P >= 129280 && P <= 129535) ||
                    (P >= 129648 && P <= 129782)
                )
            }
            ;(n.isEmojiImprecise = me), (n.UTF8_BOM_CHARACTER = String.fromCharCode(65279))
            function we(P) {
                return !!(P && P.length > 0 && P.charCodeAt(0) === 65279)
            }
            n.startsWithUTF8BOM = we
            function Ce(P, B = !1) {
                return P ? (B && (P = P.replace(/\\./g, '')), P.toLowerCase() !== P) : !1
            }
            n.containsUppercaseCharacter = Ce
            function Se(P) {
                return (
                    (P = P % (2 * 26)),
                    P < 26 ? String.fromCharCode(97 + P) : String.fromCharCode(65 + P - 26)
                )
            }
            n.singleLetterHash = Se
            function be(P, B) {
                return P === 0
                    ? B !== 5 && B !== 7
                    : P === 2 && B === 3
                      ? !1
                      : P === 4 || P === 2 || P === 3 || B === 4 || B === 2 || B === 3
                        ? !0
                        : !(
                              (P === 8 && (B === 8 || B === 9 || B === 11 || B === 12)) ||
                              ((P === 11 || P === 9) && (B === 9 || B === 10)) ||
                              ((P === 12 || P === 10) && B === 10) ||
                              B === 5 ||
                              B === 13 ||
                              B === 7 ||
                              P === 1 ||
                              (P === 13 && B === 14) ||
                              (P === 6 && B === 6)
                          )
            }
            class fe {
                static getInstance() {
                    return fe._INSTANCE || (fe._INSTANCE = new fe()), fe._INSTANCE
                }
                constructor() {
                    this._data = K()
                }
                getGraphemeBreakType(B) {
                    if (B < 32) return B === 10 ? 3 : B === 13 ? 2 : 4
                    if (B < 127) return 0
                    const W = this._data,
                        $ = W.length / 3
                    let te = 1
                    for (; te <= $; )
                        if (B < W[3 * te]) te = 2 * te
                        else if (B > W[3 * te + 1]) te = 2 * te + 1
                        else return W[3 * te + 2]
                    return 0
                }
            }
            fe._INSTANCE = null
            function K() {
                return JSON.parse(
                    '[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]'
                )
            }
            function j(P, B) {
                if (P === 0) return 0
                const W = G(P, B)
                if (W !== void 0) return W
                const $ = new O(B, P)
                return $.prevCodePoint(), $.offset
            }
            n.getLeftDeleteOffset = j
            function G(P, B) {
                const W = new O(B, P)
                let $ = W.prevCodePoint()
                for (; Q($) || $ === 65039 || $ === 8419; ) {
                    if (W.offset === 0) return
                    $ = W.prevCodePoint()
                }
                if (!me($)) return
                let te = W.offset
                return te > 0 && W.prevCodePoint() === 8205 && (te = W.offset), te
            }
            function Q(P) {
                return 127995 <= P && P <= 127999
            }
            n.noBreakWhitespace = '\xA0'
            class ee {
                static getInstance(B) {
                    return i.cache.get(Array.from(B))
                }
                static getLocales() {
                    return i._locales.value
                }
                constructor(B) {
                    this.confusableDictionary = B
                }
                isAmbiguous(B) {
                    return this.confusableDictionary.has(B)
                }
                getPrimaryConfusable(B) {
                    return this.confusableDictionary.get(B)
                }
                getConfusableCodePoints() {
                    return new Set(this.confusableDictionary.keys())
                }
            }
            ;(n.AmbiguousCharacters = ee),
                (i = ee),
                (ee.ambiguousCharacterData = new A.Lazy(() =>
                    JSON.parse(
                        '{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,8218,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,8242,96,1370,96,1523,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71922,67,71913,67,65315,67,8557,67,8450,67,8493,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71919,87,71910,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,66293,90,71909,90,65338,90,8484,90,8488,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65297,49,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"cs":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"es":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"fr":[65374,126,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"it":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ja":[8211,45,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65292,44,65307,59],"ko":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pt-BR":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ru":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"zh-hans":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41],"zh-hant":[8211,45,65374,126,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65307,59]}'
                    )
                )),
                (ee.cache = new M.LRUCachedFunction((P) => {
                    function B(se) {
                        const he = new Map()
                        for (let de = 0; de < se.length; de += 2) he.set(se[de], se[de + 1])
                        return he
                    }
                    function W(se, he) {
                        const de = new Map(se)
                        for (const [_e, ye] of he) de.set(_e, ye)
                        return de
                    }
                    function $(se, he) {
                        if (!se) return he
                        const de = new Map()
                        for (const [_e, ye] of se) he.has(_e) && de.set(_e, ye)
                        return de
                    }
                    const te = i.ambiguousCharacterData.value
                    let ie = P.filter((se) => !se.startsWith('_') && se in te)
                    ie.length === 0 && (ie = ['_default'])
                    let oe
                    for (const se of ie) {
                        const he = B(te[se])
                        oe = $(oe, he)
                    }
                    const ue = B(te._common),
                        ce = W(ue, oe)
                    return new i(ce)
                })),
                (ee._locales = new A.Lazy(() =>
                    Object.keys(i.ambiguousCharacterData.value).filter((P) => !P.startsWith('_'))
                ))
            class ne {
                static getRawData() {
                    return JSON.parse(
                        '[9,10,11,12,13,32,127,160,173,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8203,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12288,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999]'
                    )
                }
                static getData() {
                    return this._data || (this._data = new Set(ne.getRawData())), this._data
                }
                static isInvisibleCharacter(B) {
                    return ne.getData().has(B)
                }
                static get codePoints() {
                    return ne.getData()
                }
            }
            ;(n.InvisibleCharacters = ne), (ne._data = void 0)
        }),
        X(J[39], Z([0, 1, 6]), function (q, n, M) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.StringSHA1 =
                    n.toHexString =
                    n.stringHash =
                    n.numberHash =
                    n.doHash =
                    n.hash =
                        void 0)
            function A(m) {
                return i(m, 0)
            }
            n.hash = A
            function i(m, f) {
                switch (typeof m) {
                    case 'object':
                        return m === null ? d(349, f) : Array.isArray(m) ? h(m, f) : o(m, f)
                    case 'string':
                        return L(m, f)
                    case 'boolean':
                        return g(m, f)
                    case 'number':
                        return d(m, f)
                    case 'undefined':
                        return d(937, f)
                    default:
                        return d(617, f)
                }
            }
            n.doHash = i
            function d(m, f) {
                return ((f << 5) - f + m) | 0
            }
            n.numberHash = d
            function g(m, f) {
                return d(m ? 433 : 863, f)
            }
            function L(m, f) {
                f = d(149417, f)
                for (let S = 0, w = m.length; S < w; S++) f = d(m.charCodeAt(S), f)
                return f
            }
            n.stringHash = L
            function h(m, f) {
                return (f = d(104579, f)), m.reduce((S, w) => i(w, S), f)
            }
            function o(m, f) {
                return (
                    (f = d(181387, f)),
                    Object.keys(m)
                        .sort()
                        .reduce((S, w) => ((S = L(w, S)), i(m[w], S)), f)
                )
            }
            function C(m, f, S = 32) {
                const w = S - f,
                    E = ~((1 << w) - 1)
                return ((m << f) | ((E & m) >>> w)) >>> 0
            }
            function e(m, f = 0, S = m.byteLength, w = 0) {
                for (let E = 0; E < S; E++) m[f + E] = w
            }
            function a(m, f, S = '0') {
                for (; m.length < f; ) m = S + m
                return m
            }
            function u(m, f = 32) {
                return m instanceof ArrayBuffer
                    ? Array.from(new Uint8Array(m))
                          .map((S) => S.toString(16).padStart(2, '0'))
                          .join('')
                    : a((m >>> 0).toString(16), f / 4)
            }
            n.toHexString = u
            class c {
                constructor() {
                    ;(this._h0 = 1732584193),
                        (this._h1 = 4023233417),
                        (this._h2 = 2562383102),
                        (this._h3 = 271733878),
                        (this._h4 = 3285377520),
                        (this._buff = new Uint8Array(64 + 3)),
                        (this._buffDV = new DataView(this._buff.buffer)),
                        (this._buffLen = 0),
                        (this._totalLen = 0),
                        (this._leftoverHighSurrogate = 0),
                        (this._finished = !1)
                }
                update(f) {
                    const S = f.length
                    if (S === 0) return
                    const w = this._buff
                    let E = this._buffLen,
                        y = this._leftoverHighSurrogate,
                        _,
                        r
                    for (
                        y !== 0 ? ((_ = y), (r = -1), (y = 0)) : ((_ = f.charCodeAt(0)), (r = 0));
                        ;

                    ) {
                        let s = _
                        if (M.isHighSurrogate(_))
                            if (r + 1 < S) {
                                const l = f.charCodeAt(r + 1)
                                M.isLowSurrogate(l)
                                    ? (r++, (s = M.computeCodePoint(_, l)))
                                    : (s = 65533)
                            } else {
                                y = _
                                break
                            }
                        else M.isLowSurrogate(_) && (s = 65533)
                        if (((E = this._push(w, E, s)), r++, r < S)) _ = f.charCodeAt(r)
                        else break
                    }
                    ;(this._buffLen = E), (this._leftoverHighSurrogate = y)
                }
                _push(f, S, w) {
                    return (
                        w < 128
                            ? (f[S++] = w)
                            : w < 2048
                              ? ((f[S++] = 192 | ((w & 1984) >>> 6)),
                                (f[S++] = 128 | ((w & 63) >>> 0)))
                              : w < 65536
                                ? ((f[S++] = 224 | ((w & 61440) >>> 12)),
                                  (f[S++] = 128 | ((w & 4032) >>> 6)),
                                  (f[S++] = 128 | ((w & 63) >>> 0)))
                                : ((f[S++] = 240 | ((w & 1835008) >>> 18)),
                                  (f[S++] = 128 | ((w & 258048) >>> 12)),
                                  (f[S++] = 128 | ((w & 4032) >>> 6)),
                                  (f[S++] = 128 | ((w & 63) >>> 0))),
                        S >= 64 &&
                            (this._step(),
                            (S -= 64),
                            (this._totalLen += 64),
                            (f[0] = f[64 + 0]),
                            (f[1] = f[64 + 1]),
                            (f[2] = f[64 + 2])),
                        S
                    )
                }
                digest() {
                    return (
                        this._finished ||
                            ((this._finished = !0),
                            this._leftoverHighSurrogate &&
                                ((this._leftoverHighSurrogate = 0),
                                (this._buffLen = this._push(this._buff, this._buffLen, 65533))),
                            (this._totalLen += this._buffLen),
                            this._wrapUp()),
                        u(this._h0) + u(this._h1) + u(this._h2) + u(this._h3) + u(this._h4)
                    )
                }
                _wrapUp() {
                    ;(this._buff[this._buffLen++] = 128),
                        e(this._buff, this._buffLen),
                        this._buffLen > 56 && (this._step(), e(this._buff))
                    const f = 8 * this._totalLen
                    this._buffDV.setUint32(56, Math.floor(f / 4294967296), !1),
                        this._buffDV.setUint32(60, f % 4294967296, !1),
                        this._step()
                }
                _step() {
                    const f = c._bigBlock32,
                        S = this._buffDV
                    for (let b = 0; b < 64; b += 4) f.setUint32(b, S.getUint32(b, !1), !1)
                    for (let b = 64; b < 320; b += 4)
                        f.setUint32(
                            b,
                            C(
                                f.getUint32(b - 12, !1) ^
                                    f.getUint32(b - 32, !1) ^
                                    f.getUint32(b - 56, !1) ^
                                    f.getUint32(b - 64, !1),
                                1
                            ),
                            !1
                        )
                    let w = this._h0,
                        E = this._h1,
                        y = this._h2,
                        _ = this._h3,
                        r = this._h4,
                        s,
                        l,
                        p
                    for (let b = 0; b < 80; b++)
                        b < 20
                            ? ((s = (E & y) | (~E & _)), (l = 1518500249))
                            : b < 40
                              ? ((s = E ^ y ^ _), (l = 1859775393))
                              : b < 60
                                ? ((s = (E & y) | (E & _) | (y & _)), (l = 2400959708))
                                : ((s = E ^ y ^ _), (l = 3395469782)),
                            (p = (C(w, 5) + s + r + l + f.getUint32(b * 4, !1)) & 4294967295),
                            (r = _),
                            (_ = y),
                            (y = C(E, 30)),
                            (E = w),
                            (w = p)
                    ;(this._h0 = (this._h0 + w) & 4294967295),
                        (this._h1 = (this._h1 + E) & 4294967295),
                        (this._h2 = (this._h2 + y) & 4294967295),
                        (this._h3 = (this._h3 + _) & 4294967295),
                        (this._h4 = (this._h4 + r) & 4294967295)
                }
            }
            ;(n.StringSHA1 = c), (c._bigBlock32 = new DataView(new ArrayBuffer(320)))
        }),
        X(J[24], Z([0, 1, 34, 39]), function (q, n, M, A) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.LcsDiff = n.stringDiff = n.StringDiffSequence = void 0)
            class i {
                constructor(e) {
                    this.source = e
                }
                getElements() {
                    const e = this.source,
                        a = new Int32Array(e.length)
                    for (let u = 0, c = e.length; u < c; u++) a[u] = e.charCodeAt(u)
                    return a
                }
            }
            n.StringDiffSequence = i
            function d(C, e, a) {
                return new o(new i(C), new i(e)).ComputeDiff(a).changes
            }
            n.stringDiff = d
            class g {
                static Assert(e, a) {
                    if (!e) throw new Error(a)
                }
            }
            class L {
                static Copy(e, a, u, c, m) {
                    for (let f = 0; f < m; f++) u[c + f] = e[a + f]
                }
                static Copy2(e, a, u, c, m) {
                    for (let f = 0; f < m; f++) u[c + f] = e[a + f]
                }
            }
            class h {
                constructor() {
                    ;(this.m_changes = []),
                        (this.m_originalStart = 1073741824),
                        (this.m_modifiedStart = 1073741824),
                        (this.m_originalCount = 0),
                        (this.m_modifiedCount = 0)
                }
                MarkNextChange() {
                    ;(this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
                        this.m_changes.push(
                            new M.DiffChange(
                                this.m_originalStart,
                                this.m_originalCount,
                                this.m_modifiedStart,
                                this.m_modifiedCount
                            )
                        ),
                        (this.m_originalCount = 0),
                        (this.m_modifiedCount = 0),
                        (this.m_originalStart = 1073741824),
                        (this.m_modifiedStart = 1073741824)
                }
                AddOriginalElement(e, a) {
                    ;(this.m_originalStart = Math.min(this.m_originalStart, e)),
                        (this.m_modifiedStart = Math.min(this.m_modifiedStart, a)),
                        this.m_originalCount++
                }
                AddModifiedElement(e, a) {
                    ;(this.m_originalStart = Math.min(this.m_originalStart, e)),
                        (this.m_modifiedStart = Math.min(this.m_modifiedStart, a)),
                        this.m_modifiedCount++
                }
                getChanges() {
                    return (
                        (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
                            this.MarkNextChange(),
                        this.m_changes
                    )
                }
                getReverseChanges() {
                    return (
                        (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
                            this.MarkNextChange(),
                        this.m_changes.reverse(),
                        this.m_changes
                    )
                }
            }
            class o {
                constructor(e, a, u = null) {
                    ;(this.ContinueProcessingPredicate = u),
                        (this._originalSequence = e),
                        (this._modifiedSequence = a)
                    const [c, m, f] = o._getElements(e),
                        [S, w, E] = o._getElements(a)
                    ;(this._hasStrings = f && E),
                        (this._originalStringElements = c),
                        (this._originalElementsOrHash = m),
                        (this._modifiedStringElements = S),
                        (this._modifiedElementsOrHash = w),
                        (this.m_forwardHistory = []),
                        (this.m_reverseHistory = [])
                }
                static _isStringArray(e) {
                    return e.length > 0 && typeof e[0] == 'string'
                }
                static _getElements(e) {
                    const a = e.getElements()
                    if (o._isStringArray(a)) {
                        const u = new Int32Array(a.length)
                        for (let c = 0, m = a.length; c < m; c++) u[c] = (0, A.stringHash)(a[c], 0)
                        return [a, u, !0]
                    }
                    return a instanceof Int32Array ? [[], a, !1] : [[], new Int32Array(a), !1]
                }
                ElementsAreEqual(e, a) {
                    return this._originalElementsOrHash[e] !== this._modifiedElementsOrHash[a]
                        ? !1
                        : this._hasStrings
                          ? this._originalStringElements[e] === this._modifiedStringElements[a]
                          : !0
                }
                ElementsAreStrictEqual(e, a) {
                    if (!this.ElementsAreEqual(e, a)) return !1
                    const u = o._getStrictElement(this._originalSequence, e),
                        c = o._getStrictElement(this._modifiedSequence, a)
                    return u === c
                }
                static _getStrictElement(e, a) {
                    return typeof e.getStrictElement == 'function' ? e.getStrictElement(a) : null
                }
                OriginalElementsAreEqual(e, a) {
                    return this._originalElementsOrHash[e] !== this._originalElementsOrHash[a]
                        ? !1
                        : this._hasStrings
                          ? this._originalStringElements[e] === this._originalStringElements[a]
                          : !0
                }
                ModifiedElementsAreEqual(e, a) {
                    return this._modifiedElementsOrHash[e] !== this._modifiedElementsOrHash[a]
                        ? !1
                        : this._hasStrings
                          ? this._modifiedStringElements[e] === this._modifiedStringElements[a]
                          : !0
                }
                ComputeDiff(e) {
                    return this._ComputeDiff(
                        0,
                        this._originalElementsOrHash.length - 1,
                        0,
                        this._modifiedElementsOrHash.length - 1,
                        e
                    )
                }
                _ComputeDiff(e, a, u, c, m) {
                    const f = [!1]
                    let S = this.ComputeDiffRecursive(e, a, u, c, f)
                    return m && (S = this.PrettifyChanges(S)), { quitEarly: f[0], changes: S }
                }
                ComputeDiffRecursive(e, a, u, c, m) {
                    for (m[0] = !1; e <= a && u <= c && this.ElementsAreEqual(e, u); ) e++, u++
                    for (; a >= e && c >= u && this.ElementsAreEqual(a, c); ) a--, c--
                    if (e > a || u > c) {
                        let _
                        return (
                            u <= c
                                ? (g.Assert(
                                      e === a + 1,
                                      'originalStart should only be one more than originalEnd'
                                  ),
                                  (_ = [new M.DiffChange(e, 0, u, c - u + 1)]))
                                : e <= a
                                  ? (g.Assert(
                                        u === c + 1,
                                        'modifiedStart should only be one more than modifiedEnd'
                                    ),
                                    (_ = [new M.DiffChange(e, a - e + 1, u, 0)]))
                                  : (g.Assert(
                                        e === a + 1,
                                        'originalStart should only be one more than originalEnd'
                                    ),
                                    g.Assert(
                                        u === c + 1,
                                        'modifiedStart should only be one more than modifiedEnd'
                                    ),
                                    (_ = [])),
                            _
                        )
                    }
                    const f = [0],
                        S = [0],
                        w = this.ComputeRecursionPoint(e, a, u, c, f, S, m),
                        E = f[0],
                        y = S[0]
                    if (w !== null) return w
                    if (!m[0]) {
                        const _ = this.ComputeDiffRecursive(e, E, u, y, m)
                        let r = []
                        return (
                            m[0]
                                ? (r = [
                                      new M.DiffChange(
                                          E + 1,
                                          a - (E + 1) + 1,
                                          y + 1,
                                          c - (y + 1) + 1
                                      )
                                  ])
                                : (r = this.ComputeDiffRecursive(E + 1, a, y + 1, c, m)),
                            this.ConcatenateChanges(_, r)
                        )
                    }
                    return [new M.DiffChange(e, a - e + 1, u, c - u + 1)]
                }
                WALKTRACE(e, a, u, c, m, f, S, w, E, y, _, r, s, l, p, b, v, R) {
                    let N = null,
                        D = null,
                        x = new h(),
                        T = a,
                        F = u,
                        U = s[0] - b[0] - c,
                        z = -1073741824,
                        k = this.m_forwardHistory.length - 1
                    do {
                        const O = U + e
                        O === T || (O < F && E[O - 1] < E[O + 1])
                            ? ((_ = E[O + 1]),
                              (l = _ - U - c),
                              _ < z && x.MarkNextChange(),
                              (z = _),
                              x.AddModifiedElement(_ + 1, l),
                              (U = O + 1 - e))
                            : ((_ = E[O - 1] + 1),
                              (l = _ - U - c),
                              _ < z && x.MarkNextChange(),
                              (z = _ - 1),
                              x.AddOriginalElement(_, l + 1),
                              (U = O - 1 - e)),
                            k >= 0 &&
                                ((E = this.m_forwardHistory[k]),
                                (e = E[0]),
                                (T = 1),
                                (F = E.length - 1))
                    } while (--k >= -1)
                    if (((N = x.getReverseChanges()), R[0])) {
                        let O = s[0] + 1,
                            I = b[0] + 1
                        if (N !== null && N.length > 0) {
                            const V = N[N.length - 1]
                            ;(O = Math.max(O, V.getOriginalEnd())),
                                (I = Math.max(I, V.getModifiedEnd()))
                        }
                        D = [new M.DiffChange(O, r - O + 1, I, p - I + 1)]
                    } else {
                        ;(x = new h()),
                            (T = f),
                            (F = S),
                            (U = s[0] - b[0] - w),
                            (z = 1073741824),
                            (k = v
                                ? this.m_reverseHistory.length - 1
                                : this.m_reverseHistory.length - 2)
                        do {
                            const O = U + m
                            O === T || (O < F && y[O - 1] >= y[O + 1])
                                ? ((_ = y[O + 1] - 1),
                                  (l = _ - U - w),
                                  _ > z && x.MarkNextChange(),
                                  (z = _ + 1),
                                  x.AddOriginalElement(_ + 1, l + 1),
                                  (U = O + 1 - m))
                                : ((_ = y[O - 1]),
                                  (l = _ - U - w),
                                  _ > z && x.MarkNextChange(),
                                  (z = _),
                                  x.AddModifiedElement(_ + 1, l + 1),
                                  (U = O - 1 - m)),
                                k >= 0 &&
                                    ((y = this.m_reverseHistory[k]),
                                    (m = y[0]),
                                    (T = 1),
                                    (F = y.length - 1))
                        } while (--k >= -1)
                        D = x.getChanges()
                    }
                    return this.ConcatenateChanges(N, D)
                }
                ComputeRecursionPoint(e, a, u, c, m, f, S) {
                    let w = 0,
                        E = 0,
                        y = 0,
                        _ = 0,
                        r = 0,
                        s = 0
                    e--,
                        u--,
                        (m[0] = 0),
                        (f[0] = 0),
                        (this.m_forwardHistory = []),
                        (this.m_reverseHistory = [])
                    const l = a - e + (c - u),
                        p = l + 1,
                        b = new Int32Array(p),
                        v = new Int32Array(p),
                        R = c - u,
                        N = a - e,
                        D = e - u,
                        x = a - c,
                        F = (N - R) % 2 === 0
                    ;(b[R] = e), (v[N] = a), (S[0] = !1)
                    for (let U = 1; U <= l / 2 + 1; U++) {
                        let z = 0,
                            k = 0
                        ;(y = this.ClipDiagonalBound(R - U, U, R, p)),
                            (_ = this.ClipDiagonalBound(R + U, U, R, p))
                        for (let I = y; I <= _; I += 2) {
                            I === y || (I < _ && b[I - 1] < b[I + 1])
                                ? (w = b[I + 1])
                                : (w = b[I - 1] + 1),
                                (E = w - (I - R) - D)
                            const V = w
                            for (; w < a && E < c && this.ElementsAreEqual(w + 1, E + 1); ) w++, E++
                            if (
                                ((b[I] = w),
                                w + E > z + k && ((z = w), (k = E)),
                                !F && Math.abs(I - N) <= U - 1 && w >= v[I])
                            )
                                return (
                                    (m[0] = w),
                                    (f[0] = E),
                                    V <= v[I] && 1447 > 0 && U <= 1447 + 1
                                        ? this.WALKTRACE(
                                              R,
                                              y,
                                              _,
                                              D,
                                              N,
                                              r,
                                              s,
                                              x,
                                              b,
                                              v,
                                              w,
                                              a,
                                              m,
                                              E,
                                              c,
                                              f,
                                              F,
                                              S
                                          )
                                        : null
                                )
                        }
                        const O = (z - e + (k - u) - U) / 2
                        if (
                            this.ContinueProcessingPredicate !== null &&
                            !this.ContinueProcessingPredicate(z, O)
                        )
                            return (
                                (S[0] = !0),
                                (m[0] = z),
                                (f[0] = k),
                                O > 0 && 1447 > 0 && U <= 1447 + 1
                                    ? this.WALKTRACE(
                                          R,
                                          y,
                                          _,
                                          D,
                                          N,
                                          r,
                                          s,
                                          x,
                                          b,
                                          v,
                                          w,
                                          a,
                                          m,
                                          E,
                                          c,
                                          f,
                                          F,
                                          S
                                      )
                                    : (e++, u++, [new M.DiffChange(e, a - e + 1, u, c - u + 1)])
                            )
                        ;(r = this.ClipDiagonalBound(N - U, U, N, p)),
                            (s = this.ClipDiagonalBound(N + U, U, N, p))
                        for (let I = r; I <= s; I += 2) {
                            I === r || (I < s && v[I - 1] >= v[I + 1])
                                ? (w = v[I + 1] - 1)
                                : (w = v[I - 1]),
                                (E = w - (I - N) - x)
                            const V = w
                            for (; w > e && E > u && this.ElementsAreEqual(w, E); ) w--, E--
                            if (((v[I] = w), F && Math.abs(I - R) <= U && w <= b[I]))
                                return (
                                    (m[0] = w),
                                    (f[0] = E),
                                    V >= b[I] && 1447 > 0 && U <= 1447 + 1
                                        ? this.WALKTRACE(
                                              R,
                                              y,
                                              _,
                                              D,
                                              N,
                                              r,
                                              s,
                                              x,
                                              b,
                                              v,
                                              w,
                                              a,
                                              m,
                                              E,
                                              c,
                                              f,
                                              F,
                                              S
                                          )
                                        : null
                                )
                        }
                        if (U <= 1447) {
                            let I = new Int32Array(_ - y + 2)
                            ;(I[0] = R - y + 1),
                                L.Copy2(b, y, I, 1, _ - y + 1),
                                this.m_forwardHistory.push(I),
                                (I = new Int32Array(s - r + 2)),
                                (I[0] = N - r + 1),
                                L.Copy2(v, r, I, 1, s - r + 1),
                                this.m_reverseHistory.push(I)
                        }
                    }
                    return this.WALKTRACE(R, y, _, D, N, r, s, x, b, v, w, a, m, E, c, f, F, S)
                }
                PrettifyChanges(e) {
                    for (let a = 0; a < e.length; a++) {
                        const u = e[a],
                            c =
                                a < e.length - 1
                                    ? e[a + 1].originalStart
                                    : this._originalElementsOrHash.length,
                            m =
                                a < e.length - 1
                                    ? e[a + 1].modifiedStart
                                    : this._modifiedElementsOrHash.length,
                            f = u.originalLength > 0,
                            S = u.modifiedLength > 0
                        for (
                            ;
                            u.originalStart + u.originalLength < c &&
                            u.modifiedStart + u.modifiedLength < m &&
                            (!f ||
                                this.OriginalElementsAreEqual(
                                    u.originalStart,
                                    u.originalStart + u.originalLength
                                )) &&
                            (!S ||
                                this.ModifiedElementsAreEqual(
                                    u.modifiedStart,
                                    u.modifiedStart + u.modifiedLength
                                ));

                        ) {
                            const E = this.ElementsAreStrictEqual(u.originalStart, u.modifiedStart)
                            if (
                                this.ElementsAreStrictEqual(
                                    u.originalStart + u.originalLength,
                                    u.modifiedStart + u.modifiedLength
                                ) &&
                                !E
                            )
                                break
                            u.originalStart++, u.modifiedStart++
                        }
                        const w = [null]
                        if (a < e.length - 1 && this.ChangesOverlap(e[a], e[a + 1], w)) {
                            ;(e[a] = w[0]), e.splice(a + 1, 1), a--
                            continue
                        }
                    }
                    for (let a = e.length - 1; a >= 0; a--) {
                        const u = e[a]
                        let c = 0,
                            m = 0
                        if (a > 0) {
                            const _ = e[a - 1]
                            ;(c = _.originalStart + _.originalLength),
                                (m = _.modifiedStart + _.modifiedLength)
                        }
                        const f = u.originalLength > 0,
                            S = u.modifiedLength > 0
                        let w = 0,
                            E = this._boundaryScore(
                                u.originalStart,
                                u.originalLength,
                                u.modifiedStart,
                                u.modifiedLength
                            )
                        for (let _ = 1; ; _++) {
                            const r = u.originalStart - _,
                                s = u.modifiedStart - _
                            if (
                                r < c ||
                                s < m ||
                                (f && !this.OriginalElementsAreEqual(r, r + u.originalLength)) ||
                                (S && !this.ModifiedElementsAreEqual(s, s + u.modifiedLength))
                            )
                                break
                            const p =
                                (r === c && s === m ? 5 : 0) +
                                this._boundaryScore(r, u.originalLength, s, u.modifiedLength)
                            p > E && ((E = p), (w = _))
                        }
                        ;(u.originalStart -= w), (u.modifiedStart -= w)
                        const y = [null]
                        if (a > 0 && this.ChangesOverlap(e[a - 1], e[a], y)) {
                            ;(e[a - 1] = y[0]), e.splice(a, 1), a++
                            continue
                        }
                    }
                    if (this._hasStrings)
                        for (let a = 1, u = e.length; a < u; a++) {
                            const c = e[a - 1],
                                m = e[a],
                                f = m.originalStart - c.originalStart - c.originalLength,
                                S = c.originalStart,
                                w = m.originalStart + m.originalLength,
                                E = w - S,
                                y = c.modifiedStart,
                                _ = m.modifiedStart + m.modifiedLength,
                                r = _ - y
                            if (f < 5 && E < 20 && r < 20) {
                                const s = this._findBetterContiguousSequence(S, E, y, r, f)
                                if (s) {
                                    const [l, p] = s
                                    ;(l !== c.originalStart + c.originalLength ||
                                        p !== c.modifiedStart + c.modifiedLength) &&
                                        ((c.originalLength = l - c.originalStart),
                                        (c.modifiedLength = p - c.modifiedStart),
                                        (m.originalStart = l + f),
                                        (m.modifiedStart = p + f),
                                        (m.originalLength = w - m.originalStart),
                                        (m.modifiedLength = _ - m.modifiedStart))
                                }
                            }
                        }
                    return e
                }
                _findBetterContiguousSequence(e, a, u, c, m) {
                    if (a < m || c < m) return null
                    const f = e + a - m + 1,
                        S = u + c - m + 1
                    let w = 0,
                        E = 0,
                        y = 0
                    for (let _ = e; _ < f; _++)
                        for (let r = u; r < S; r++) {
                            const s = this._contiguousSequenceScore(_, r, m)
                            s > 0 && s > w && ((w = s), (E = _), (y = r))
                        }
                    return w > 0 ? [E, y] : null
                }
                _contiguousSequenceScore(e, a, u) {
                    let c = 0
                    for (let m = 0; m < u; m++) {
                        if (!this.ElementsAreEqual(e + m, a + m)) return 0
                        c += this._originalStringElements[e + m].length
                    }
                    return c
                }
                _OriginalIsBoundary(e) {
                    return e <= 0 || e >= this._originalElementsOrHash.length - 1
                        ? !0
                        : this._hasStrings && /^\s*$/.test(this._originalStringElements[e])
                }
                _OriginalRegionIsBoundary(e, a) {
                    if (this._OriginalIsBoundary(e) || this._OriginalIsBoundary(e - 1)) return !0
                    if (a > 0) {
                        const u = e + a
                        if (this._OriginalIsBoundary(u - 1) || this._OriginalIsBoundary(u))
                            return !0
                    }
                    return !1
                }
                _ModifiedIsBoundary(e) {
                    return e <= 0 || e >= this._modifiedElementsOrHash.length - 1
                        ? !0
                        : this._hasStrings && /^\s*$/.test(this._modifiedStringElements[e])
                }
                _ModifiedRegionIsBoundary(e, a) {
                    if (this._ModifiedIsBoundary(e) || this._ModifiedIsBoundary(e - 1)) return !0
                    if (a > 0) {
                        const u = e + a
                        if (this._ModifiedIsBoundary(u - 1) || this._ModifiedIsBoundary(u))
                            return !0
                    }
                    return !1
                }
                _boundaryScore(e, a, u, c) {
                    const m = this._OriginalRegionIsBoundary(e, a) ? 1 : 0,
                        f = this._ModifiedRegionIsBoundary(u, c) ? 1 : 0
                    return m + f
                }
                ConcatenateChanges(e, a) {
                    const u = []
                    if (e.length === 0 || a.length === 0) return a.length > 0 ? a : e
                    if (this.ChangesOverlap(e[e.length - 1], a[0], u)) {
                        const c = new Array(e.length + a.length - 1)
                        return (
                            L.Copy(e, 0, c, 0, e.length - 1),
                            (c[e.length - 1] = u[0]),
                            L.Copy(a, 1, c, e.length, a.length - 1),
                            c
                        )
                    } else {
                        const c = new Array(e.length + a.length)
                        return L.Copy(e, 0, c, 0, e.length), L.Copy(a, 0, c, e.length, a.length), c
                    }
                }
                ChangesOverlap(e, a, u) {
                    if (
                        (g.Assert(
                            e.originalStart <= a.originalStart,
                            'Left change is not less than or equal to right change'
                        ),
                        g.Assert(
                            e.modifiedStart <= a.modifiedStart,
                            'Left change is not less than or equal to right change'
                        ),
                        e.originalStart + e.originalLength >= a.originalStart ||
                            e.modifiedStart + e.modifiedLength >= a.modifiedStart)
                    ) {
                        const c = e.originalStart
                        let m = e.originalLength
                        const f = e.modifiedStart
                        let S = e.modifiedLength
                        return (
                            e.originalStart + e.originalLength >= a.originalStart &&
                                (m = a.originalStart + a.originalLength - e.originalStart),
                            e.modifiedStart + e.modifiedLength >= a.modifiedStart &&
                                (S = a.modifiedStart + a.modifiedLength - e.modifiedStart),
                            (u[0] = new M.DiffChange(c, m, f, S)),
                            !0
                        )
                    } else return (u[0] = null), !1
                }
                ClipDiagonalBound(e, a, u, c) {
                    if (e >= 0 && e < c) return e
                    const m = u,
                        f = c - u - 1,
                        S = a % 2 === 0
                    if (e < 0) {
                        const w = m % 2 === 0
                        return S === w ? 0 : 1
                    } else {
                        const w = f % 2 === 0
                        return S === w ? c - 1 : c - 2
                    }
                }
            }
            n.LcsDiff = o
        }),
        X(J[25], Z([0, 1]), function (q, n) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.validateConstraint =
                    n.validateConstraints =
                    n.isFunction =
                    n.assertIsDefined =
                    n.assertType =
                    n.isUndefinedOrNull =
                    n.isDefined =
                    n.isUndefined =
                    n.isBoolean =
                    n.isIterable =
                    n.isNumber =
                    n.isTypedArray =
                    n.isObject =
                    n.isString =
                        void 0)
            function M(f) {
                return typeof f == 'string'
            }
            n.isString = M
            function A(f) {
                return (
                    typeof f == 'object' &&
                    f !== null &&
                    !Array.isArray(f) &&
                    !(f instanceof RegExp) &&
                    !(f instanceof Date)
                )
            }
            n.isObject = A
            function i(f) {
                const S = Object.getPrototypeOf(Uint8Array)
                return typeof f == 'object' && f instanceof S
            }
            n.isTypedArray = i
            function d(f) {
                return typeof f == 'number' && !isNaN(f)
            }
            n.isNumber = d
            function g(f) {
                return !!f && typeof f[Symbol.iterator] == 'function'
            }
            n.isIterable = g
            function L(f) {
                return f === !0 || f === !1
            }
            n.isBoolean = L
            function h(f) {
                return typeof f > 'u'
            }
            n.isUndefined = h
            function o(f) {
                return !C(f)
            }
            n.isDefined = o
            function C(f) {
                return h(f) || f === null
            }
            n.isUndefinedOrNull = C
            function e(f, S) {
                if (!f) throw new Error(S ? `Unexpected type, expected '${S}'` : 'Unexpected type')
            }
            n.assertType = e
            function a(f) {
                if (C(f)) throw new Error('Assertion Failed: argument is undefined or null')
                return f
            }
            n.assertIsDefined = a
            function u(f) {
                return typeof f == 'function'
            }
            n.isFunction = u
            function c(f, S) {
                const w = Math.min(f.length, S.length)
                for (let E = 0; E < w; E++) m(f[E], S[E])
            }
            n.validateConstraints = c
            function m(f, S) {
                if (M(S)) {
                    if (typeof f !== S)
                        throw new Error(`argument does not match constraint: typeof ${S}`)
                } else if (u(S)) {
                    try {
                        if (f instanceof S) return
                    } catch {}
                    if (
                        (!C(f) && f.constructor === S) ||
                        (S.length === 1 && S.call(void 0, f) === !0)
                    )
                        return
                    throw new Error(
                        'argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true'
                    )
                }
            }
            n.validateConstraint = m
        }),
        X(J[40], Z([0, 1, 25]), function (q, n, M) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.Codicon = n.getCodiconFontCharacters = void 0)
            const A = Object.create(null)
            function i(g, L) {
                if ((0, M.isString)(L)) {
                    const h = A[L]
                    if (h === void 0) throw new Error(`${g} references an unknown codicon: ${L}`)
                    L = h
                }
                return (A[g] = L), { id: g }
            }
            function d() {
                return A
            }
            ;(n.getCodiconFontCharacters = d),
                (n.Codicon = {
                    add: i('add', 6e4),
                    plus: i('plus', 6e4),
                    gistNew: i('gist-new', 6e4),
                    repoCreate: i('repo-create', 6e4),
                    lightbulb: i('lightbulb', 60001),
                    lightBulb: i('light-bulb', 60001),
                    repo: i('repo', 60002),
                    repoDelete: i('repo-delete', 60002),
                    gistFork: i('gist-fork', 60003),
                    repoForked: i('repo-forked', 60003),
                    gitPullRequest: i('git-pull-request', 60004),
                    gitPullRequestAbandoned: i('git-pull-request-abandoned', 60004),
                    recordKeys: i('record-keys', 60005),
                    keyboard: i('keyboard', 60005),
                    tag: i('tag', 60006),
                    tagAdd: i('tag-add', 60006),
                    tagRemove: i('tag-remove', 60006),
                    gitPullRequestLabel: i('git-pull-request-label', 60006),
                    person: i('person', 60007),
                    personFollow: i('person-follow', 60007),
                    personOutline: i('person-outline', 60007),
                    personFilled: i('person-filled', 60007),
                    gitBranch: i('git-branch', 60008),
                    gitBranchCreate: i('git-branch-create', 60008),
                    gitBranchDelete: i('git-branch-delete', 60008),
                    sourceControl: i('source-control', 60008),
                    mirror: i('mirror', 60009),
                    mirrorPublic: i('mirror-public', 60009),
                    star: i('star', 60010),
                    starAdd: i('star-add', 60010),
                    starDelete: i('star-delete', 60010),
                    starEmpty: i('star-empty', 60010),
                    comment: i('comment', 60011),
                    commentAdd: i('comment-add', 60011),
                    alert: i('alert', 60012),
                    warning: i('warning', 60012),
                    search: i('search', 60013),
                    searchSave: i('search-save', 60013),
                    logOut: i('log-out', 60014),
                    signOut: i('sign-out', 60014),
                    logIn: i('log-in', 60015),
                    signIn: i('sign-in', 60015),
                    eye: i('eye', 60016),
                    eyeUnwatch: i('eye-unwatch', 60016),
                    eyeWatch: i('eye-watch', 60016),
                    circleFilled: i('circle-filled', 60017),
                    primitiveDot: i('primitive-dot', 60017),
                    closeDirty: i('close-dirty', 60017),
                    debugBreakpoint: i('debug-breakpoint', 60017),
                    debugBreakpointDisabled: i('debug-breakpoint-disabled', 60017),
                    debugHint: i('debug-hint', 60017),
                    primitiveSquare: i('primitive-square', 60018),
                    edit: i('edit', 60019),
                    pencil: i('pencil', 60019),
                    info: i('info', 60020),
                    issueOpened: i('issue-opened', 60020),
                    gistPrivate: i('gist-private', 60021),
                    gitForkPrivate: i('git-fork-private', 60021),
                    lock: i('lock', 60021),
                    mirrorPrivate: i('mirror-private', 60021),
                    close: i('close', 60022),
                    removeClose: i('remove-close', 60022),
                    x: i('x', 60022),
                    repoSync: i('repo-sync', 60023),
                    sync: i('sync', 60023),
                    clone: i('clone', 60024),
                    desktopDownload: i('desktop-download', 60024),
                    beaker: i('beaker', 60025),
                    microscope: i('microscope', 60025),
                    vm: i('vm', 60026),
                    deviceDesktop: i('device-desktop', 60026),
                    file: i('file', 60027),
                    fileText: i('file-text', 60027),
                    more: i('more', 60028),
                    ellipsis: i('ellipsis', 60028),
                    kebabHorizontal: i('kebab-horizontal', 60028),
                    mailReply: i('mail-reply', 60029),
                    reply: i('reply', 60029),
                    organization: i('organization', 60030),
                    organizationFilled: i('organization-filled', 60030),
                    organizationOutline: i('organization-outline', 60030),
                    newFile: i('new-file', 60031),
                    fileAdd: i('file-add', 60031),
                    newFolder: i('new-folder', 60032),
                    fileDirectoryCreate: i('file-directory-create', 60032),
                    trash: i('trash', 60033),
                    trashcan: i('trashcan', 60033),
                    history: i('history', 60034),
                    clock: i('clock', 60034),
                    folder: i('folder', 60035),
                    fileDirectory: i('file-directory', 60035),
                    symbolFolder: i('symbol-folder', 60035),
                    logoGithub: i('logo-github', 60036),
                    markGithub: i('mark-github', 60036),
                    github: i('github', 60036),
                    terminal: i('terminal', 60037),
                    console: i('console', 60037),
                    repl: i('repl', 60037),
                    zap: i('zap', 60038),
                    symbolEvent: i('symbol-event', 60038),
                    error: i('error', 60039),
                    stop: i('stop', 60039),
                    variable: i('variable', 60040),
                    symbolVariable: i('symbol-variable', 60040),
                    array: i('array', 60042),
                    symbolArray: i('symbol-array', 60042),
                    symbolModule: i('symbol-module', 60043),
                    symbolPackage: i('symbol-package', 60043),
                    symbolNamespace: i('symbol-namespace', 60043),
                    symbolObject: i('symbol-object', 60043),
                    symbolMethod: i('symbol-method', 60044),
                    symbolFunction: i('symbol-function', 60044),
                    symbolConstructor: i('symbol-constructor', 60044),
                    symbolBoolean: i('symbol-boolean', 60047),
                    symbolNull: i('symbol-null', 60047),
                    symbolNumeric: i('symbol-numeric', 60048),
                    symbolNumber: i('symbol-number', 60048),
                    symbolStructure: i('symbol-structure', 60049),
                    symbolStruct: i('symbol-struct', 60049),
                    symbolParameter: i('symbol-parameter', 60050),
                    symbolTypeParameter: i('symbol-type-parameter', 60050),
                    symbolKey: i('symbol-key', 60051),
                    symbolText: i('symbol-text', 60051),
                    symbolReference: i('symbol-reference', 60052),
                    goToFile: i('go-to-file', 60052),
                    symbolEnum: i('symbol-enum', 60053),
                    symbolValue: i('symbol-value', 60053),
                    symbolRuler: i('symbol-ruler', 60054),
                    symbolUnit: i('symbol-unit', 60054),
                    activateBreakpoints: i('activate-breakpoints', 60055),
                    archive: i('archive', 60056),
                    arrowBoth: i('arrow-both', 60057),
                    arrowDown: i('arrow-down', 60058),
                    arrowLeft: i('arrow-left', 60059),
                    arrowRight: i('arrow-right', 60060),
                    arrowSmallDown: i('arrow-small-down', 60061),
                    arrowSmallLeft: i('arrow-small-left', 60062),
                    arrowSmallRight: i('arrow-small-right', 60063),
                    arrowSmallUp: i('arrow-small-up', 60064),
                    arrowUp: i('arrow-up', 60065),
                    bell: i('bell', 60066),
                    bold: i('bold', 60067),
                    book: i('book', 60068),
                    bookmark: i('bookmark', 60069),
                    debugBreakpointConditionalUnverified: i(
                        'debug-breakpoint-conditional-unverified',
                        60070
                    ),
                    debugBreakpointConditional: i('debug-breakpoint-conditional', 60071),
                    debugBreakpointConditionalDisabled: i(
                        'debug-breakpoint-conditional-disabled',
                        60071
                    ),
                    debugBreakpointDataUnverified: i('debug-breakpoint-data-unverified', 60072),
                    debugBreakpointData: i('debug-breakpoint-data', 60073),
                    debugBreakpointDataDisabled: i('debug-breakpoint-data-disabled', 60073),
                    debugBreakpointLogUnverified: i('debug-breakpoint-log-unverified', 60074),
                    debugBreakpointLog: i('debug-breakpoint-log', 60075),
                    debugBreakpointLogDisabled: i('debug-breakpoint-log-disabled', 60075),
                    briefcase: i('briefcase', 60076),
                    broadcast: i('broadcast', 60077),
                    browser: i('browser', 60078),
                    bug: i('bug', 60079),
                    calendar: i('calendar', 60080),
                    caseSensitive: i('case-sensitive', 60081),
                    check: i('check', 60082),
                    checklist: i('checklist', 60083),
                    chevronDown: i('chevron-down', 60084),
                    dropDownButton: i('drop-down-button', 60084),
                    chevronLeft: i('chevron-left', 60085),
                    chevronRight: i('chevron-right', 60086),
                    chevronUp: i('chevron-up', 60087),
                    chromeClose: i('chrome-close', 60088),
                    chromeMaximize: i('chrome-maximize', 60089),
                    chromeMinimize: i('chrome-minimize', 60090),
                    chromeRestore: i('chrome-restore', 60091),
                    circle: i('circle', 60092),
                    circleOutline: i('circle-outline', 60092),
                    debugBreakpointUnverified: i('debug-breakpoint-unverified', 60092),
                    circleSlash: i('circle-slash', 60093),
                    circuitBoard: i('circuit-board', 60094),
                    clearAll: i('clear-all', 60095),
                    clippy: i('clippy', 60096),
                    closeAll: i('close-all', 60097),
                    cloudDownload: i('cloud-download', 60098),
                    cloudUpload: i('cloud-upload', 60099),
                    code: i('code', 60100),
                    collapseAll: i('collapse-all', 60101),
                    colorMode: i('color-mode', 60102),
                    commentDiscussion: i('comment-discussion', 60103),
                    compareChanges: i('compare-changes', 60157),
                    creditCard: i('credit-card', 60105),
                    dash: i('dash', 60108),
                    dashboard: i('dashboard', 60109),
                    database: i('database', 60110),
                    debugContinue: i('debug-continue', 60111),
                    debugDisconnect: i('debug-disconnect', 60112),
                    debugPause: i('debug-pause', 60113),
                    debugRestart: i('debug-restart', 60114),
                    debugStart: i('debug-start', 60115),
                    debugStepInto: i('debug-step-into', 60116),
                    debugStepOut: i('debug-step-out', 60117),
                    debugStepOver: i('debug-step-over', 60118),
                    debugStop: i('debug-stop', 60119),
                    debug: i('debug', 60120),
                    deviceCameraVideo: i('device-camera-video', 60121),
                    deviceCamera: i('device-camera', 60122),
                    deviceMobile: i('device-mobile', 60123),
                    diffAdded: i('diff-added', 60124),
                    diffIgnored: i('diff-ignored', 60125),
                    diffModified: i('diff-modified', 60126),
                    diffRemoved: i('diff-removed', 60127),
                    diffRenamed: i('diff-renamed', 60128),
                    diff: i('diff', 60129),
                    discard: i('discard', 60130),
                    editorLayout: i('editor-layout', 60131),
                    emptyWindow: i('empty-window', 60132),
                    exclude: i('exclude', 60133),
                    extensions: i('extensions', 60134),
                    eyeClosed: i('eye-closed', 60135),
                    fileBinary: i('file-binary', 60136),
                    fileCode: i('file-code', 60137),
                    fileMedia: i('file-media', 60138),
                    filePdf: i('file-pdf', 60139),
                    fileSubmodule: i('file-submodule', 60140),
                    fileSymlinkDirectory: i('file-symlink-directory', 60141),
                    fileSymlinkFile: i('file-symlink-file', 60142),
                    fileZip: i('file-zip', 60143),
                    files: i('files', 60144),
                    filter: i('filter', 60145),
                    flame: i('flame', 60146),
                    foldDown: i('fold-down', 60147),
                    foldUp: i('fold-up', 60148),
                    fold: i('fold', 60149),
                    folderActive: i('folder-active', 60150),
                    folderOpened: i('folder-opened', 60151),
                    gear: i('gear', 60152),
                    gift: i('gift', 60153),
                    gistSecret: i('gist-secret', 60154),
                    gist: i('gist', 60155),
                    gitCommit: i('git-commit', 60156),
                    gitCompare: i('git-compare', 60157),
                    gitMerge: i('git-merge', 60158),
                    githubAction: i('github-action', 60159),
                    githubAlt: i('github-alt', 60160),
                    globe: i('globe', 60161),
                    grabber: i('grabber', 60162),
                    graph: i('graph', 60163),
                    gripper: i('gripper', 60164),
                    heart: i('heart', 60165),
                    home: i('home', 60166),
                    horizontalRule: i('horizontal-rule', 60167),
                    hubot: i('hubot', 60168),
                    inbox: i('inbox', 60169),
                    issueClosed: i('issue-closed', 60324),
                    issueReopened: i('issue-reopened', 60171),
                    issues: i('issues', 60172),
                    italic: i('italic', 60173),
                    jersey: i('jersey', 60174),
                    json: i('json', 60175),
                    bracket: i('bracket', 60175),
                    kebabVertical: i('kebab-vertical', 60176),
                    key: i('key', 60177),
                    law: i('law', 60178),
                    lightbulbAutofix: i('lightbulb-autofix', 60179),
                    linkExternal: i('link-external', 60180),
                    link: i('link', 60181),
                    listOrdered: i('list-ordered', 60182),
                    listUnordered: i('list-unordered', 60183),
                    liveShare: i('live-share', 60184),
                    loading: i('loading', 60185),
                    location: i('location', 60186),
                    mailRead: i('mail-read', 60187),
                    mail: i('mail', 60188),
                    markdown: i('markdown', 60189),
                    megaphone: i('megaphone', 60190),
                    mention: i('mention', 60191),
                    milestone: i('milestone', 60192),
                    gitPullRequestMilestone: i('git-pull-request-milestone', 60192),
                    mortarBoard: i('mortar-board', 60193),
                    move: i('move', 60194),
                    multipleWindows: i('multiple-windows', 60195),
                    mute: i('mute', 60196),
                    noNewline: i('no-newline', 60197),
                    note: i('note', 60198),
                    octoface: i('octoface', 60199),
                    openPreview: i('open-preview', 60200),
                    package: i('package', 60201),
                    paintcan: i('paintcan', 60202),
                    pin: i('pin', 60203),
                    play: i('play', 60204),
                    run: i('run', 60204),
                    plug: i('plug', 60205),
                    preserveCase: i('preserve-case', 60206),
                    preview: i('preview', 60207),
                    project: i('project', 60208),
                    pulse: i('pulse', 60209),
                    question: i('question', 60210),
                    quote: i('quote', 60211),
                    radioTower: i('radio-tower', 60212),
                    reactions: i('reactions', 60213),
                    references: i('references', 60214),
                    refresh: i('refresh', 60215),
                    regex: i('regex', 60216),
                    remoteExplorer: i('remote-explorer', 60217),
                    remote: i('remote', 60218),
                    remove: i('remove', 60219),
                    replaceAll: i('replace-all', 60220),
                    replace: i('replace', 60221),
                    repoClone: i('repo-clone', 60222),
                    repoForcePush: i('repo-force-push', 60223),
                    repoPull: i('repo-pull', 60224),
                    repoPush: i('repo-push', 60225),
                    report: i('report', 60226),
                    requestChanges: i('request-changes', 60227),
                    rocket: i('rocket', 60228),
                    rootFolderOpened: i('root-folder-opened', 60229),
                    rootFolder: i('root-folder', 60230),
                    rss: i('rss', 60231),
                    ruby: i('ruby', 60232),
                    saveAll: i('save-all', 60233),
                    saveAs: i('save-as', 60234),
                    save: i('save', 60235),
                    screenFull: i('screen-full', 60236),
                    screenNormal: i('screen-normal', 60237),
                    searchStop: i('search-stop', 60238),
                    server: i('server', 60240),
                    settingsGear: i('settings-gear', 60241),
                    settings: i('settings', 60242),
                    shield: i('shield', 60243),
                    smiley: i('smiley', 60244),
                    sortPrecedence: i('sort-precedence', 60245),
                    splitHorizontal: i('split-horizontal', 60246),
                    splitVertical: i('split-vertical', 60247),
                    squirrel: i('squirrel', 60248),
                    starFull: i('star-full', 60249),
                    starHalf: i('star-half', 60250),
                    symbolClass: i('symbol-class', 60251),
                    symbolColor: i('symbol-color', 60252),
                    symbolCustomColor: i('symbol-customcolor', 60252),
                    symbolConstant: i('symbol-constant', 60253),
                    symbolEnumMember: i('symbol-enum-member', 60254),
                    symbolField: i('symbol-field', 60255),
                    symbolFile: i('symbol-file', 60256),
                    symbolInterface: i('symbol-interface', 60257),
                    symbolKeyword: i('symbol-keyword', 60258),
                    symbolMisc: i('symbol-misc', 60259),
                    symbolOperator: i('symbol-operator', 60260),
                    symbolProperty: i('symbol-property', 60261),
                    wrench: i('wrench', 60261),
                    wrenchSubaction: i('wrench-subaction', 60261),
                    symbolSnippet: i('symbol-snippet', 60262),
                    tasklist: i('tasklist', 60263),
                    telescope: i('telescope', 60264),
                    textSize: i('text-size', 60265),
                    threeBars: i('three-bars', 60266),
                    thumbsdown: i('thumbsdown', 60267),
                    thumbsup: i('thumbsup', 60268),
                    tools: i('tools', 60269),
                    triangleDown: i('triangle-down', 60270),
                    triangleLeft: i('triangle-left', 60271),
                    triangleRight: i('triangle-right', 60272),
                    triangleUp: i('triangle-up', 60273),
                    twitter: i('twitter', 60274),
                    unfold: i('unfold', 60275),
                    unlock: i('unlock', 60276),
                    unmute: i('unmute', 60277),
                    unverified: i('unverified', 60278),
                    verified: i('verified', 60279),
                    versions: i('versions', 60280),
                    vmActive: i('vm-active', 60281),
                    vmOutline: i('vm-outline', 60282),
                    vmRunning: i('vm-running', 60283),
                    watch: i('watch', 60284),
                    whitespace: i('whitespace', 60285),
                    wholeWord: i('whole-word', 60286),
                    window: i('window', 60287),
                    wordWrap: i('word-wrap', 60288),
                    zoomIn: i('zoom-in', 60289),
                    zoomOut: i('zoom-out', 60290),
                    listFilter: i('list-filter', 60291),
                    listFlat: i('list-flat', 60292),
                    listSelection: i('list-selection', 60293),
                    selection: i('selection', 60293),
                    listTree: i('list-tree', 60294),
                    debugBreakpointFunctionUnverified: i(
                        'debug-breakpoint-function-unverified',
                        60295
                    ),
                    debugBreakpointFunction: i('debug-breakpoint-function', 60296),
                    debugBreakpointFunctionDisabled: i('debug-breakpoint-function-disabled', 60296),
                    debugStackframeActive: i('debug-stackframe-active', 60297),
                    circleSmallFilled: i('circle-small-filled', 60298),
                    debugStackframeDot: i('debug-stackframe-dot', 60298),
                    debugStackframe: i('debug-stackframe', 60299),
                    debugStackframeFocused: i('debug-stackframe-focused', 60299),
                    debugBreakpointUnsupported: i('debug-breakpoint-unsupported', 60300),
                    symbolString: i('symbol-string', 60301),
                    debugReverseContinue: i('debug-reverse-continue', 60302),
                    debugStepBack: i('debug-step-back', 60303),
                    debugRestartFrame: i('debug-restart-frame', 60304),
                    callIncoming: i('call-incoming', 60306),
                    callOutgoing: i('call-outgoing', 60307),
                    menu: i('menu', 60308),
                    expandAll: i('expand-all', 60309),
                    feedback: i('feedback', 60310),
                    gitPullRequestReviewer: i('git-pull-request-reviewer', 60310),
                    groupByRefType: i('group-by-ref-type', 60311),
                    ungroupByRefType: i('ungroup-by-ref-type', 60312),
                    account: i('account', 60313),
                    gitPullRequestAssignee: i('git-pull-request-assignee', 60313),
                    bellDot: i('bell-dot', 60314),
                    debugConsole: i('debug-console', 60315),
                    library: i('library', 60316),
                    output: i('output', 60317),
                    runAll: i('run-all', 60318),
                    syncIgnored: i('sync-ignored', 60319),
                    pinned: i('pinned', 60320),
                    githubInverted: i('github-inverted', 60321),
                    debugAlt: i('debug-alt', 60305),
                    serverProcess: i('server-process', 60322),
                    serverEnvironment: i('server-environment', 60323),
                    pass: i('pass', 60324),
                    stopCircle: i('stop-circle', 60325),
                    playCircle: i('play-circle', 60326),
                    record: i('record', 60327),
                    debugAltSmall: i('debug-alt-small', 60328),
                    vmConnect: i('vm-connect', 60329),
                    cloud: i('cloud', 60330),
                    merge: i('merge', 60331),
                    exportIcon: i('export', 60332),
                    graphLeft: i('graph-left', 60333),
                    magnet: i('magnet', 60334),
                    notebook: i('notebook', 60335),
                    redo: i('redo', 60336),
                    checkAll: i('check-all', 60337),
                    pinnedDirty: i('pinned-dirty', 60338),
                    passFilled: i('pass-filled', 60339),
                    circleLargeFilled: i('circle-large-filled', 60340),
                    circleLarge: i('circle-large', 60341),
                    circleLargeOutline: i('circle-large-outline', 60341),
                    combine: i('combine', 60342),
                    gather: i('gather', 60342),
                    table: i('table', 60343),
                    variableGroup: i('variable-group', 60344),
                    typeHierarchy: i('type-hierarchy', 60345),
                    typeHierarchySub: i('type-hierarchy-sub', 60346),
                    typeHierarchySuper: i('type-hierarchy-super', 60347),
                    gitPullRequestCreate: i('git-pull-request-create', 60348),
                    runAbove: i('run-above', 60349),
                    runBelow: i('run-below', 60350),
                    notebookTemplate: i('notebook-template', 60351),
                    debugRerun: i('debug-rerun', 60352),
                    workspaceTrusted: i('workspace-trusted', 60353),
                    workspaceUntrusted: i('workspace-untrusted', 60354),
                    workspaceUnspecified: i('workspace-unspecified', 60355),
                    terminalCmd: i('terminal-cmd', 60356),
                    terminalDebian: i('terminal-debian', 60357),
                    terminalLinux: i('terminal-linux', 60358),
                    terminalPowershell: i('terminal-powershell', 60359),
                    terminalTmux: i('terminal-tmux', 60360),
                    terminalUbuntu: i('terminal-ubuntu', 60361),
                    terminalBash: i('terminal-bash', 60362),
                    arrowSwap: i('arrow-swap', 60363),
                    copy: i('copy', 60364),
                    personAdd: i('person-add', 60365),
                    filterFilled: i('filter-filled', 60366),
                    wand: i('wand', 60367),
                    debugLineByLine: i('debug-line-by-line', 60368),
                    inspect: i('inspect', 60369),
                    layers: i('layers', 60370),
                    layersDot: i('layers-dot', 60371),
                    layersActive: i('layers-active', 60372),
                    compass: i('compass', 60373),
                    compassDot: i('compass-dot', 60374),
                    compassActive: i('compass-active', 60375),
                    azure: i('azure', 60376),
                    issueDraft: i('issue-draft', 60377),
                    gitPullRequestClosed: i('git-pull-request-closed', 60378),
                    gitPullRequestDraft: i('git-pull-request-draft', 60379),
                    debugAll: i('debug-all', 60380),
                    debugCoverage: i('debug-coverage', 60381),
                    runErrors: i('run-errors', 60382),
                    folderLibrary: i('folder-library', 60383),
                    debugContinueSmall: i('debug-continue-small', 60384),
                    beakerStop: i('beaker-stop', 60385),
                    graphLine: i('graph-line', 60386),
                    graphScatter: i('graph-scatter', 60387),
                    pieChart: i('pie-chart', 60388),
                    bracketDot: i('bracket-dot', 60389),
                    bracketError: i('bracket-error', 60390),
                    lockSmall: i('lock-small', 60391),
                    azureDevops: i('azure-devops', 60392),
                    verifiedFilled: i('verified-filled', 60393),
                    newLine: i('newline', 60394),
                    layout: i('layout', 60395),
                    layoutActivitybarLeft: i('layout-activitybar-left', 60396),
                    layoutActivitybarRight: i('layout-activitybar-right', 60397),
                    layoutPanelLeft: i('layout-panel-left', 60398),
                    layoutPanelCenter: i('layout-panel-center', 60399),
                    layoutPanelJustify: i('layout-panel-justify', 60400),
                    layoutPanelRight: i('layout-panel-right', 60401),
                    layoutPanel: i('layout-panel', 60402),
                    layoutSidebarLeft: i('layout-sidebar-left', 60403),
                    layoutSidebarRight: i('layout-sidebar-right', 60404),
                    layoutStatusbar: i('layout-statusbar', 60405),
                    layoutMenubar: i('layout-menubar', 60406),
                    layoutCentered: i('layout-centered', 60407),
                    layoutSidebarRightOff: i('layout-sidebar-right-off', 60416),
                    layoutPanelOff: i('layout-panel-off', 60417),
                    layoutSidebarLeftOff: i('layout-sidebar-left-off', 60418),
                    target: i('target', 60408),
                    indent: i('indent', 60409),
                    recordSmall: i('record-small', 60410),
                    errorSmall: i('error-small', 60411),
                    arrowCircleDown: i('arrow-circle-down', 60412),
                    arrowCircleLeft: i('arrow-circle-left', 60413),
                    arrowCircleRight: i('arrow-circle-right', 60414),
                    arrowCircleUp: i('arrow-circle-up', 60415),
                    heartFilled: i('heart-filled', 60420),
                    map: i('map', 60421),
                    mapFilled: i('map-filled', 60422),
                    circleSmall: i('circle-small', 60423),
                    bellSlash: i('bell-slash', 60424),
                    bellSlashDot: i('bell-slash-dot', 60425),
                    commentUnresolved: i('comment-unresolved', 60426),
                    gitPullRequestGoToChanges: i('git-pull-request-go-to-changes', 60427),
                    gitPullRequestNewChanges: i('git-pull-request-new-changes', 60428),
                    searchFuzzy: i('search-fuzzy', 60429),
                    commentDraft: i('comment-draft', 60430),
                    send: i('send', 60431),
                    sparkle: i('sparkle', 60432),
                    insert: i('insert', 60433),
                    mic: i('mic', 60434),
                    thumbsDownFilled: i('thumbsdown-filled', 60435),
                    thumbsUpFilled: i('thumbsup-filled', 60436),
                    coffee: i('coffee', 60437),
                    snake: i('snake', 60438),
                    game: i('game', 60439),
                    vr: i('vr', 60440),
                    chip: i('chip', 60441),
                    piano: i('piano', 60442),
                    music: i('music', 60443),
                    micFilled: i('mic-filled', 60444),
                    gitFetch: i('git-fetch', 60445),
                    copilot: i('copilot', 60446),
                    lightbulbSparkle: i('lightbulb-sparkle', 60447),
                    lightbulbSparkleAutofix: i('lightbulb-sparkle-autofix', 60447),
                    robot: i('robot', 60448),
                    sparkleFilled: i('sparkle-filled', 60449),
                    diffSingle: i('diff-single', 60450),
                    diffMultiple: i('diff-multiple', 60451),
                    dialogError: i('dialog-error', 'error'),
                    dialogWarning: i('dialog-warning', 'warning'),
                    dialogInfo: i('dialog-info', 'info'),
                    dialogClose: i('dialog-close', 'close'),
                    treeItemExpanded: i('tree-item-expanded', 'chevron-down'),
                    treeFilterOnTypeOn: i('tree-filter-on-type-on', 'list-filter'),
                    treeFilterOnTypeOff: i('tree-filter-on-type-off', 'list-selection'),
                    treeFilterClear: i('tree-filter-clear', 'close'),
                    treeItemLoading: i('tree-item-loading', 'loading'),
                    menuSelection: i('menu-selection', 'check'),
                    menuSubmenu: i('menu-submenu', 'chevron-right'),
                    menuBarMore: i('menubar-more', 'more'),
                    scrollbarButtonLeft: i('scrollbar-button-left', 'triangle-left'),
                    scrollbarButtonRight: i('scrollbar-button-right', 'triangle-right'),
                    scrollbarButtonUp: i('scrollbar-button-up', 'triangle-up'),
                    scrollbarButtonDown: i('scrollbar-button-down', 'triangle-down'),
                    toolBarMore: i('toolbar-more', 'more'),
                    quickInputBack: i('quick-input-back', 'arrow-left')
                })
        }),
        X(J[14], Z([0, 1, 25]), function (q, n, M) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.createProxyObject =
                    n.getAllMethodNames =
                    n.getAllPropertyNames =
                    n.equals =
                    n.mixin =
                    n.cloneAndChange =
                    n.deepFreeze =
                    n.deepClone =
                        void 0)
            function A(u) {
                if (!u || typeof u != 'object' || u instanceof RegExp) return u
                const c = Array.isArray(u) ? [] : {}
                return (
                    Object.entries(u).forEach(([m, f]) => {
                        c[m] = f && typeof f == 'object' ? A(f) : f
                    }),
                    c
                )
            }
            n.deepClone = A
            function i(u) {
                if (!u || typeof u != 'object') return u
                const c = [u]
                for (; c.length > 0; ) {
                    const m = c.shift()
                    Object.freeze(m)
                    for (const f in m)
                        if (d.call(m, f)) {
                            const S = m[f]
                            typeof S == 'object' &&
                                !Object.isFrozen(S) &&
                                !(0, M.isTypedArray)(S) &&
                                c.push(S)
                        }
                }
                return u
            }
            n.deepFreeze = i
            const d = Object.prototype.hasOwnProperty
            function g(u, c) {
                return L(u, c, new Set())
            }
            n.cloneAndChange = g
            function L(u, c, m) {
                if ((0, M.isUndefinedOrNull)(u)) return u
                const f = c(u)
                if (typeof f < 'u') return f
                if (Array.isArray(u)) {
                    const S = []
                    for (const w of u) S.push(L(w, c, m))
                    return S
                }
                if ((0, M.isObject)(u)) {
                    if (m.has(u)) throw new Error('Cannot clone recursive data-structure')
                    m.add(u)
                    const S = {}
                    for (const w in u) d.call(u, w) && (S[w] = L(u[w], c, m))
                    return m.delete(u), S
                }
                return u
            }
            function h(u, c, m = !0) {
                return (0, M.isObject)(u)
                    ? ((0, M.isObject)(c) &&
                          Object.keys(c).forEach((f) => {
                              f in u
                                  ? m &&
                                    ((0, M.isObject)(u[f]) && (0, M.isObject)(c[f])
                                        ? h(u[f], c[f], m)
                                        : (u[f] = c[f]))
                                  : (u[f] = c[f])
                          }),
                      u)
                    : c
            }
            n.mixin = h
            function o(u, c) {
                if (u === c) return !0
                if (
                    u == null ||
                    c === null ||
                    c === void 0 ||
                    typeof u != typeof c ||
                    typeof u != 'object' ||
                    Array.isArray(u) !== Array.isArray(c)
                )
                    return !1
                let m, f
                if (Array.isArray(u)) {
                    if (u.length !== c.length) return !1
                    for (m = 0; m < u.length; m++) if (!o(u[m], c[m])) return !1
                } else {
                    const S = []
                    for (f in u) S.push(f)
                    S.sort()
                    const w = []
                    for (f in c) w.push(f)
                    if ((w.sort(), !o(S, w))) return !1
                    for (m = 0; m < S.length; m++) if (!o(u[S[m]], c[S[m]])) return !1
                }
                return !0
            }
            n.equals = o
            function C(u) {
                let c = []
                for (; Object.prototype !== u; )
                    (c = c.concat(Object.getOwnPropertyNames(u))), (u = Object.getPrototypeOf(u))
                return c
            }
            n.getAllPropertyNames = C
            function e(u) {
                const c = []
                for (const m of C(u)) typeof u[m] == 'function' && c.push(m)
                return c
            }
            n.getAllMethodNames = e
            function a(u, c) {
                const m = (S) =>
                        function () {
                            const w = Array.prototype.slice.call(arguments, 0)
                            return c(S, w)
                        },
                    f = {}
                for (const S of u) f[S] = m(S)
                return f
            }
            n.createProxyObject = a
        }),
        X(J[26], Z([0, 1]), function (q, n) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }), (n.toUint32 = n.toUint8 = void 0)
            function M(i) {
                return i < 0 ? 0 : i > 255 ? 255 : i | 0
            }
            n.toUint8 = M
            function A(i) {
                return i < 0 ? 0 : i > 4294967295 ? 4294967295 : i | 0
            }
            n.toUint32 = A
        }),
        X(J[27], Z([0, 1, 26]), function (q, n, M) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.CharacterSet = n.CharacterClassifier = void 0)
            class A {
                constructor(g) {
                    const L = (0, M.toUint8)(g)
                    ;(this._defaultValue = L),
                        (this._asciiMap = A._createAsciiMap(L)),
                        (this._map = new Map())
                }
                static _createAsciiMap(g) {
                    const L = new Uint8Array(256)
                    return L.fill(g), L
                }
                set(g, L) {
                    const h = (0, M.toUint8)(L)
                    g >= 0 && g < 256 ? (this._asciiMap[g] = h) : this._map.set(g, h)
                }
                get(g) {
                    return g >= 0 && g < 256
                        ? this._asciiMap[g]
                        : this._map.get(g) || this._defaultValue
                }
                clear() {
                    this._asciiMap.fill(this._defaultValue), this._map.clear()
                }
            }
            n.CharacterClassifier = A
            class i {
                constructor() {
                    this._actual = new A(0)
                }
                add(g) {
                    this._actual.set(g, 1)
                }
                has(g) {
                    return this._actual.get(g) === 1
                }
                clear() {
                    return this._actual.clear()
                }
            }
            n.CharacterSet = i
        }),
        X(J[3], Z([0, 1, 5]), function (q, n, M) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.OffsetRangeSet = n.OffsetRange = void 0)
            class A {
                static addRange(g, L) {
                    let h = 0
                    for (; h < L.length && L[h].endExclusive < g.start; ) h++
                    let o = h
                    for (; o < L.length && L[o].start <= g.endExclusive; ) o++
                    if (h === o) L.splice(h, 0, g)
                    else {
                        const C = Math.min(g.start, L[h].start),
                            e = Math.max(g.endExclusive, L[o - 1].endExclusive)
                        L.splice(h, o - h, new A(C, e))
                    }
                }
                static tryCreate(g, L) {
                    if (!(g > L)) return new A(g, L)
                }
                static ofLength(g) {
                    return new A(0, g)
                }
                static ofStartAndLength(g, L) {
                    return new A(g, g + L)
                }
                constructor(g, L) {
                    if (((this.start = g), (this.endExclusive = L), g > L))
                        throw new M.BugIndicatingError(`Invalid range: ${this.toString()}`)
                }
                get isEmpty() {
                    return this.start === this.endExclusive
                }
                delta(g) {
                    return new A(this.start + g, this.endExclusive + g)
                }
                deltaStart(g) {
                    return new A(this.start + g, this.endExclusive)
                }
                deltaEnd(g) {
                    return new A(this.start, this.endExclusive + g)
                }
                get length() {
                    return this.endExclusive - this.start
                }
                toString() {
                    return `[${this.start}, ${this.endExclusive})`
                }
                equals(g) {
                    return this.start === g.start && this.endExclusive === g.endExclusive
                }
                containsRange(g) {
                    return this.start <= g.start && g.endExclusive <= this.endExclusive
                }
                contains(g) {
                    return this.start <= g && g < this.endExclusive
                }
                join(g) {
                    return new A(
                        Math.min(this.start, g.start),
                        Math.max(this.endExclusive, g.endExclusive)
                    )
                }
                intersect(g) {
                    const L = Math.max(this.start, g.start),
                        h = Math.min(this.endExclusive, g.endExclusive)
                    if (L <= h) return new A(L, h)
                }
                isBefore(g) {
                    return this.endExclusive <= g.start
                }
                isAfter(g) {
                    return this.start >= g.endExclusive
                }
                slice(g) {
                    return g.slice(this.start, this.endExclusive)
                }
                clip(g) {
                    if (this.isEmpty)
                        throw new M.BugIndicatingError(`Invalid clipping range: ${this.toString()}`)
                    return Math.max(this.start, Math.min(this.endExclusive - 1, g))
                }
                clipCyclic(g) {
                    if (this.isEmpty)
                        throw new M.BugIndicatingError(`Invalid clipping range: ${this.toString()}`)
                    return g < this.start
                        ? this.endExclusive - ((this.start - g) % this.length)
                        : g >= this.endExclusive
                          ? this.start + ((g - this.start) % this.length)
                          : g
                }
                forEach(g) {
                    for (let L = this.start; L < this.endExclusive; L++) g(L)
                }
            }
            n.OffsetRange = A
            class i {
                constructor() {
                    this._sortedRanges = []
                }
                addRange(g) {
                    let L = 0
                    for (
                        ;
                        L < this._sortedRanges.length &&
                        this._sortedRanges[L].endExclusive < g.start;

                    )
                        L++
                    let h = L
                    for (
                        ;
                        h < this._sortedRanges.length &&
                        this._sortedRanges[h].start <= g.endExclusive;

                    )
                        h++
                    if (L === h) this._sortedRanges.splice(L, 0, g)
                    else {
                        const o = Math.min(g.start, this._sortedRanges[L].start),
                            C = Math.max(g.endExclusive, this._sortedRanges[h - 1].endExclusive)
                        this._sortedRanges.splice(L, h - L, new A(o, C))
                    }
                }
                toString() {
                    return this._sortedRanges.map((g) => g.toString()).join(', ')
                }
                intersectsStrict(g) {
                    let L = 0
                    for (
                        ;
                        L < this._sortedRanges.length &&
                        this._sortedRanges[L].endExclusive <= g.start;

                    )
                        L++
                    return (
                        L < this._sortedRanges.length &&
                        this._sortedRanges[L].start < g.endExclusive
                    )
                }
                intersectWithRange(g) {
                    const L = new i()
                    for (const h of this._sortedRanges) {
                        const o = h.intersect(g)
                        o && L.addRange(o)
                    }
                    return L
                }
                intersectWithRangeLength(g) {
                    return this.intersectWithRange(g).length
                }
                get length() {
                    return this._sortedRanges.reduce((g, L) => g + L.length, 0)
                }
            }
            n.OffsetRangeSet = i
        }),
        X(J[4], Z([0, 1]), function (q, n) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }), (n.Position = void 0)
            class M {
                constructor(i, d) {
                    ;(this.lineNumber = i), (this.column = d)
                }
                with(i = this.lineNumber, d = this.column) {
                    return i === this.lineNumber && d === this.column ? this : new M(i, d)
                }
                delta(i = 0, d = 0) {
                    return this.with(this.lineNumber + i, this.column + d)
                }
                equals(i) {
                    return M.equals(this, i)
                }
                static equals(i, d) {
                    return !i && !d
                        ? !0
                        : !!i && !!d && i.lineNumber === d.lineNumber && i.column === d.column
                }
                isBefore(i) {
                    return M.isBefore(this, i)
                }
                static isBefore(i, d) {
                    return i.lineNumber < d.lineNumber
                        ? !0
                        : d.lineNumber < i.lineNumber
                          ? !1
                          : i.column < d.column
                }
                isBeforeOrEqual(i) {
                    return M.isBeforeOrEqual(this, i)
                }
                static isBeforeOrEqual(i, d) {
                    return i.lineNumber < d.lineNumber
                        ? !0
                        : d.lineNumber < i.lineNumber
                          ? !1
                          : i.column <= d.column
                }
                static compare(i, d) {
                    const g = i.lineNumber | 0,
                        L = d.lineNumber | 0
                    if (g === L) {
                        const h = i.column | 0,
                            o = d.column | 0
                        return h - o
                    }
                    return g - L
                }
                clone() {
                    return new M(this.lineNumber, this.column)
                }
                toString() {
                    return '(' + this.lineNumber + ',' + this.column + ')'
                }
                static lift(i) {
                    return new M(i.lineNumber, i.column)
                }
                static isIPosition(i) {
                    return i && typeof i.lineNumber == 'number' && typeof i.column == 'number'
                }
                toJSON() {
                    return { lineNumber: this.lineNumber, column: this.column }
                }
            }
            n.Position = M
        }),
        X(J[2], Z([0, 1, 4]), function (q, n, M) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }), (n.Range = void 0)
            class A {
                constructor(d, g, L, h) {
                    d > L || (d === L && g > h)
                        ? ((this.startLineNumber = L),
                          (this.startColumn = h),
                          (this.endLineNumber = d),
                          (this.endColumn = g))
                        : ((this.startLineNumber = d),
                          (this.startColumn = g),
                          (this.endLineNumber = L),
                          (this.endColumn = h))
                }
                isEmpty() {
                    return A.isEmpty(this)
                }
                static isEmpty(d) {
                    return d.startLineNumber === d.endLineNumber && d.startColumn === d.endColumn
                }
                containsPosition(d) {
                    return A.containsPosition(this, d)
                }
                static containsPosition(d, g) {
                    return !(
                        g.lineNumber < d.startLineNumber ||
                        g.lineNumber > d.endLineNumber ||
                        (g.lineNumber === d.startLineNumber && g.column < d.startColumn) ||
                        (g.lineNumber === d.endLineNumber && g.column > d.endColumn)
                    )
                }
                static strictContainsPosition(d, g) {
                    return !(
                        g.lineNumber < d.startLineNumber ||
                        g.lineNumber > d.endLineNumber ||
                        (g.lineNumber === d.startLineNumber && g.column <= d.startColumn) ||
                        (g.lineNumber === d.endLineNumber && g.column >= d.endColumn)
                    )
                }
                containsRange(d) {
                    return A.containsRange(this, d)
                }
                static containsRange(d, g) {
                    return !(
                        g.startLineNumber < d.startLineNumber ||
                        g.endLineNumber < d.startLineNumber ||
                        g.startLineNumber > d.endLineNumber ||
                        g.endLineNumber > d.endLineNumber ||
                        (g.startLineNumber === d.startLineNumber &&
                            g.startColumn < d.startColumn) ||
                        (g.endLineNumber === d.endLineNumber && g.endColumn > d.endColumn)
                    )
                }
                strictContainsRange(d) {
                    return A.strictContainsRange(this, d)
                }
                static strictContainsRange(d, g) {
                    return !(
                        g.startLineNumber < d.startLineNumber ||
                        g.endLineNumber < d.startLineNumber ||
                        g.startLineNumber > d.endLineNumber ||
                        g.endLineNumber > d.endLineNumber ||
                        (g.startLineNumber === d.startLineNumber &&
                            g.startColumn <= d.startColumn) ||
                        (g.endLineNumber === d.endLineNumber && g.endColumn >= d.endColumn)
                    )
                }
                plusRange(d) {
                    return A.plusRange(this, d)
                }
                static plusRange(d, g) {
                    let L, h, o, C
                    return (
                        g.startLineNumber < d.startLineNumber
                            ? ((L = g.startLineNumber), (h = g.startColumn))
                            : g.startLineNumber === d.startLineNumber
                              ? ((L = g.startLineNumber),
                                (h = Math.min(g.startColumn, d.startColumn)))
                              : ((L = d.startLineNumber), (h = d.startColumn)),
                        g.endLineNumber > d.endLineNumber
                            ? ((o = g.endLineNumber), (C = g.endColumn))
                            : g.endLineNumber === d.endLineNumber
                              ? ((o = g.endLineNumber), (C = Math.max(g.endColumn, d.endColumn)))
                              : ((o = d.endLineNumber), (C = d.endColumn)),
                        new A(L, h, o, C)
                    )
                }
                intersectRanges(d) {
                    return A.intersectRanges(this, d)
                }
                static intersectRanges(d, g) {
                    let L = d.startLineNumber,
                        h = d.startColumn,
                        o = d.endLineNumber,
                        C = d.endColumn
                    const e = g.startLineNumber,
                        a = g.startColumn,
                        u = g.endLineNumber,
                        c = g.endColumn
                    return (
                        L < e ? ((L = e), (h = a)) : L === e && (h = Math.max(h, a)),
                        o > u ? ((o = u), (C = c)) : o === u && (C = Math.min(C, c)),
                        L > o || (L === o && h > C) ? null : new A(L, h, o, C)
                    )
                }
                equalsRange(d) {
                    return A.equalsRange(this, d)
                }
                static equalsRange(d, g) {
                    return !d && !g
                        ? !0
                        : !!d &&
                              !!g &&
                              d.startLineNumber === g.startLineNumber &&
                              d.startColumn === g.startColumn &&
                              d.endLineNumber === g.endLineNumber &&
                              d.endColumn === g.endColumn
                }
                getEndPosition() {
                    return A.getEndPosition(this)
                }
                static getEndPosition(d) {
                    return new M.Position(d.endLineNumber, d.endColumn)
                }
                getStartPosition() {
                    return A.getStartPosition(this)
                }
                static getStartPosition(d) {
                    return new M.Position(d.startLineNumber, d.startColumn)
                }
                toString() {
                    return (
                        '[' +
                        this.startLineNumber +
                        ',' +
                        this.startColumn +
                        ' -> ' +
                        this.endLineNumber +
                        ',' +
                        this.endColumn +
                        ']'
                    )
                }
                setEndPosition(d, g) {
                    return new A(this.startLineNumber, this.startColumn, d, g)
                }
                setStartPosition(d, g) {
                    return new A(d, g, this.endLineNumber, this.endColumn)
                }
                collapseToStart() {
                    return A.collapseToStart(this)
                }
                static collapseToStart(d) {
                    return new A(d.startLineNumber, d.startColumn, d.startLineNumber, d.startColumn)
                }
                collapseToEnd() {
                    return A.collapseToEnd(this)
                }
                static collapseToEnd(d) {
                    return new A(d.endLineNumber, d.endColumn, d.endLineNumber, d.endColumn)
                }
                delta(d) {
                    return new A(
                        this.startLineNumber + d,
                        this.startColumn,
                        this.endLineNumber + d,
                        this.endColumn
                    )
                }
                static fromPositions(d, g = d) {
                    return new A(d.lineNumber, d.column, g.lineNumber, g.column)
                }
                static lift(d) {
                    return d
                        ? new A(d.startLineNumber, d.startColumn, d.endLineNumber, d.endColumn)
                        : null
                }
                static isIRange(d) {
                    return (
                        d &&
                        typeof d.startLineNumber == 'number' &&
                        typeof d.startColumn == 'number' &&
                        typeof d.endLineNumber == 'number' &&
                        typeof d.endColumn == 'number'
                    )
                }
                static areIntersectingOrTouching(d, g) {
                    return !(
                        d.endLineNumber < g.startLineNumber ||
                        (d.endLineNumber === g.startLineNumber && d.endColumn < g.startColumn) ||
                        g.endLineNumber < d.startLineNumber ||
                        (g.endLineNumber === d.startLineNumber && g.endColumn < d.startColumn)
                    )
                }
                static areIntersecting(d, g) {
                    return !(
                        d.endLineNumber < g.startLineNumber ||
                        (d.endLineNumber === g.startLineNumber && d.endColumn <= g.startColumn) ||
                        g.endLineNumber < d.startLineNumber ||
                        (g.endLineNumber === d.startLineNumber && g.endColumn <= d.startColumn)
                    )
                }
                static compareRangesUsingStarts(d, g) {
                    if (d && g) {
                        const o = d.startLineNumber | 0,
                            C = g.startLineNumber | 0
                        if (o === C) {
                            const e = d.startColumn | 0,
                                a = g.startColumn | 0
                            if (e === a) {
                                const u = d.endLineNumber | 0,
                                    c = g.endLineNumber | 0
                                if (u === c) {
                                    const m = d.endColumn | 0,
                                        f = g.endColumn | 0
                                    return m - f
                                }
                                return u - c
                            }
                            return e - a
                        }
                        return o - C
                    }
                    return (d ? 1 : 0) - (g ? 1 : 0)
                }
                static compareRangesUsingEnds(d, g) {
                    return d.endLineNumber === g.endLineNumber
                        ? d.endColumn === g.endColumn
                            ? d.startLineNumber === g.startLineNumber
                                ? d.startColumn - g.startColumn
                                : d.startLineNumber - g.startLineNumber
                            : d.endColumn - g.endColumn
                        : d.endLineNumber - g.endLineNumber
                }
                static spansMultipleLines(d) {
                    return d.endLineNumber > d.startLineNumber
                }
                toJSON() {
                    return this
                }
            }
            n.Range = A
        }),
        X(J[10], Z([0, 1, 5, 3, 2, 11]), function (q, n, M, A, i, d) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.LineRangeSet = n.LineRange = void 0)
            class g {
                static fromRange(o) {
                    return new g(o.startLineNumber, o.endLineNumber)
                }
                static fromRangeInclusive(o) {
                    return new g(o.startLineNumber, o.endLineNumber + 1)
                }
                static joinMany(o) {
                    if (o.length === 0) return []
                    let C = new L(o[0].slice())
                    for (let e = 1; e < o.length; e++) C = C.getUnion(new L(o[e].slice()))
                    return C.ranges
                }
                static ofLength(o, C) {
                    return new g(o, o + C)
                }
                static deserialize(o) {
                    return new g(o[0], o[1])
                }
                constructor(o, C) {
                    if (o > C)
                        throw new M.BugIndicatingError(
                            `startLineNumber ${o} cannot be after endLineNumberExclusive ${C}`
                        )
                    ;(this.startLineNumber = o), (this.endLineNumberExclusive = C)
                }
                contains(o) {
                    return this.startLineNumber <= o && o < this.endLineNumberExclusive
                }
                get isEmpty() {
                    return this.startLineNumber === this.endLineNumberExclusive
                }
                delta(o) {
                    return new g(this.startLineNumber + o, this.endLineNumberExclusive + o)
                }
                deltaLength(o) {
                    return new g(this.startLineNumber, this.endLineNumberExclusive + o)
                }
                get length() {
                    return this.endLineNumberExclusive - this.startLineNumber
                }
                join(o) {
                    return new g(
                        Math.min(this.startLineNumber, o.startLineNumber),
                        Math.max(this.endLineNumberExclusive, o.endLineNumberExclusive)
                    )
                }
                toString() {
                    return `[${this.startLineNumber},${this.endLineNumberExclusive})`
                }
                intersect(o) {
                    const C = Math.max(this.startLineNumber, o.startLineNumber),
                        e = Math.min(this.endLineNumberExclusive, o.endLineNumberExclusive)
                    if (C <= e) return new g(C, e)
                }
                intersectsStrict(o) {
                    return (
                        this.startLineNumber < o.endLineNumberExclusive &&
                        o.startLineNumber < this.endLineNumberExclusive
                    )
                }
                overlapOrTouch(o) {
                    return (
                        this.startLineNumber <= o.endLineNumberExclusive &&
                        o.startLineNumber <= this.endLineNumberExclusive
                    )
                }
                equals(o) {
                    return (
                        this.startLineNumber === o.startLineNumber &&
                        this.endLineNumberExclusive === o.endLineNumberExclusive
                    )
                }
                toInclusiveRange() {
                    return this.isEmpty
                        ? null
                        : new i.Range(
                              this.startLineNumber,
                              1,
                              this.endLineNumberExclusive - 1,
                              Number.MAX_SAFE_INTEGER
                          )
                }
                toExclusiveRange() {
                    return new i.Range(this.startLineNumber, 1, this.endLineNumberExclusive, 1)
                }
                mapToLineArray(o) {
                    const C = []
                    for (let e = this.startLineNumber; e < this.endLineNumberExclusive; e++)
                        C.push(o(e))
                    return C
                }
                forEach(o) {
                    for (let C = this.startLineNumber; C < this.endLineNumberExclusive; C++) o(C)
                }
                serialize() {
                    return [this.startLineNumber, this.endLineNumberExclusive]
                }
                includes(o) {
                    return this.startLineNumber <= o && o < this.endLineNumberExclusive
                }
                toOffsetRange() {
                    return new A.OffsetRange(
                        this.startLineNumber - 1,
                        this.endLineNumberExclusive - 1
                    )
                }
            }
            n.LineRange = g
            class L {
                constructor(o = []) {
                    this._normalizedRanges = o
                }
                get ranges() {
                    return this._normalizedRanges
                }
                addRange(o) {
                    if (o.length === 0) return
                    const C = (0, d.findFirstIdxMonotonousOrArrLen)(
                            this._normalizedRanges,
                            (a) => a.endLineNumberExclusive >= o.startLineNumber
                        ),
                        e =
                            (0, d.findLastIdxMonotonous)(
                                this._normalizedRanges,
                                (a) => a.startLineNumber <= o.endLineNumberExclusive
                            ) + 1
                    if (C === e) this._normalizedRanges.splice(C, 0, o)
                    else if (C === e - 1) {
                        const a = this._normalizedRanges[C]
                        this._normalizedRanges[C] = a.join(o)
                    } else {
                        const a = this._normalizedRanges[C].join(
                            this._normalizedRanges[e - 1]
                        ).join(o)
                        this._normalizedRanges.splice(C, e - C, a)
                    }
                }
                contains(o) {
                    const C = (0, d.findLastMonotonous)(
                        this._normalizedRanges,
                        (e) => e.startLineNumber <= o
                    )
                    return !!C && C.endLineNumberExclusive > o
                }
                intersects(o) {
                    const C = (0, d.findLastMonotonous)(
                        this._normalizedRanges,
                        (e) => e.startLineNumber < o.endLineNumberExclusive
                    )
                    return !!C && C.endLineNumberExclusive > o.startLineNumber
                }
                getUnion(o) {
                    if (this._normalizedRanges.length === 0) return o
                    if (o._normalizedRanges.length === 0) return this
                    const C = []
                    let e = 0,
                        a = 0,
                        u = null
                    for (; e < this._normalizedRanges.length || a < o._normalizedRanges.length; ) {
                        let c = null
                        if (e < this._normalizedRanges.length && a < o._normalizedRanges.length) {
                            const m = this._normalizedRanges[e],
                                f = o._normalizedRanges[a]
                            m.startLineNumber < f.startLineNumber ? ((c = m), e++) : ((c = f), a++)
                        } else
                            e < this._normalizedRanges.length
                                ? ((c = this._normalizedRanges[e]), e++)
                                : ((c = o._normalizedRanges[a]), a++)
                        u === null
                            ? (u = c)
                            : u.endLineNumberExclusive >= c.startLineNumber
                              ? (u = new g(
                                    u.startLineNumber,
                                    Math.max(u.endLineNumberExclusive, c.endLineNumberExclusive)
                                ))
                              : (C.push(u), (u = c))
                    }
                    return u !== null && C.push(u), new L(C)
                }
                subtractFrom(o) {
                    const C = (0, d.findFirstIdxMonotonousOrArrLen)(
                            this._normalizedRanges,
                            (c) => c.endLineNumberExclusive >= o.startLineNumber
                        ),
                        e =
                            (0, d.findLastIdxMonotonous)(
                                this._normalizedRanges,
                                (c) => c.startLineNumber <= o.endLineNumberExclusive
                            ) + 1
                    if (C === e) return new L([o])
                    const a = []
                    let u = o.startLineNumber
                    for (let c = C; c < e; c++) {
                        const m = this._normalizedRanges[c]
                        m.startLineNumber > u && a.push(new g(u, m.startLineNumber)),
                            (u = m.endLineNumberExclusive)
                    }
                    return (
                        u < o.endLineNumberExclusive && a.push(new g(u, o.endLineNumberExclusive)),
                        new L(a)
                    )
                }
                toString() {
                    return this._normalizedRanges.map((o) => o.toString()).join(', ')
                }
                getIntersection(o) {
                    const C = []
                    let e = 0,
                        a = 0
                    for (; e < this._normalizedRanges.length && a < o._normalizedRanges.length; ) {
                        const u = this._normalizedRanges[e],
                            c = o._normalizedRanges[a],
                            m = u.intersect(c)
                        m && !m.isEmpty && C.push(m),
                            u.endLineNumberExclusive < c.endLineNumberExclusive ? e++ : a++
                    }
                    return new L(C)
                }
                getWithDelta(o) {
                    return new L(this._normalizedRanges.map((C) => C.delta(o)))
                }
            }
            n.LineRangeSet = L
        }),
        X(J[41], Z([0, 1, 4, 2]), function (q, n, M, A) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }), (n.Selection = void 0)
            class i extends A.Range {
                constructor(g, L, h, o) {
                    super(g, L, h, o),
                        (this.selectionStartLineNumber = g),
                        (this.selectionStartColumn = L),
                        (this.positionLineNumber = h),
                        (this.positionColumn = o)
                }
                toString() {
                    return (
                        '[' +
                        this.selectionStartLineNumber +
                        ',' +
                        this.selectionStartColumn +
                        ' -> ' +
                        this.positionLineNumber +
                        ',' +
                        this.positionColumn +
                        ']'
                    )
                }
                equalsSelection(g) {
                    return i.selectionsEqual(this, g)
                }
                static selectionsEqual(g, L) {
                    return (
                        g.selectionStartLineNumber === L.selectionStartLineNumber &&
                        g.selectionStartColumn === L.selectionStartColumn &&
                        g.positionLineNumber === L.positionLineNumber &&
                        g.positionColumn === L.positionColumn
                    )
                }
                getDirection() {
                    return this.selectionStartLineNumber === this.startLineNumber &&
                        this.selectionStartColumn === this.startColumn
                        ? 0
                        : 1
                }
                setEndPosition(g, L) {
                    return this.getDirection() === 0
                        ? new i(this.startLineNumber, this.startColumn, g, L)
                        : new i(g, L, this.startLineNumber, this.startColumn)
                }
                getPosition() {
                    return new M.Position(this.positionLineNumber, this.positionColumn)
                }
                getSelectionStart() {
                    return new M.Position(this.selectionStartLineNumber, this.selectionStartColumn)
                }
                setStartPosition(g, L) {
                    return this.getDirection() === 0
                        ? new i(g, L, this.endLineNumber, this.endColumn)
                        : new i(this.endLineNumber, this.endColumn, g, L)
                }
                static fromPositions(g, L = g) {
                    return new i(g.lineNumber, g.column, L.lineNumber, L.column)
                }
                static fromRange(g, L) {
                    return L === 0
                        ? new i(g.startLineNumber, g.startColumn, g.endLineNumber, g.endColumn)
                        : new i(g.endLineNumber, g.endColumn, g.startLineNumber, g.startColumn)
                }
                static liftSelection(g) {
                    return new i(
                        g.selectionStartLineNumber,
                        g.selectionStartColumn,
                        g.positionLineNumber,
                        g.positionColumn
                    )
                }
                static selectionsArrEqual(g, L) {
                    if ((g && !L) || (!g && L)) return !1
                    if (!g && !L) return !0
                    if (g.length !== L.length) return !1
                    for (let h = 0, o = g.length; h < o; h++)
                        if (!this.selectionsEqual(g[h], L[h])) return !1
                    return !0
                }
                static isISelection(g) {
                    return (
                        g &&
                        typeof g.selectionStartLineNumber == 'number' &&
                        typeof g.selectionStartColumn == 'number' &&
                        typeof g.positionLineNumber == 'number' &&
                        typeof g.positionColumn == 'number'
                    )
                }
                static createWithDirection(g, L, h, o, C) {
                    return C === 0 ? new i(g, L, h, o) : new i(h, o, g, L)
                }
            }
            n.Selection = i
        }),
        X(J[42], Z([0, 1, 27]), function (q, n, M) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.getMapForWordSeparators = n.WordCharacterClassifier = void 0)
            class A extends M.CharacterClassifier {
                constructor(g) {
                    super(0)
                    for (let L = 0, h = g.length; L < h; L++) this.set(g.charCodeAt(L), 2)
                    this.set(32, 1), this.set(9, 1)
                }
            }
            n.WordCharacterClassifier = A
            function i(d) {
                const g = {}
                return (L) => (g.hasOwnProperty(L) || (g[L] = d(L)), g[L])
            }
            n.getMapForWordSeparators = i((d) => new A(d))
        }),
        X(J[28], Z([0, 1, 21, 22]), function (q, n, M, A) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.getWordAtText =
                    n.ensureValidWordDefinition =
                    n.DEFAULT_WORD_REGEXP =
                    n.USUAL_WORD_SEPARATORS =
                        void 0),
                (n.USUAL_WORD_SEPARATORS = '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?')
            function i(o = '') {
                let C = '(-?\\d*\\.\\d\\w*)|([^'
                for (const e of n.USUAL_WORD_SEPARATORS) o.indexOf(e) >= 0 || (C += '\\' + e)
                return (C += '\\s]+)'), new RegExp(C, 'g')
            }
            n.DEFAULT_WORD_REGEXP = i()
            function d(o) {
                let C = n.DEFAULT_WORD_REGEXP
                if (o && o instanceof RegExp)
                    if (o.global) C = o
                    else {
                        let e = 'g'
                        o.ignoreCase && (e += 'i'),
                            o.multiline && (e += 'm'),
                            o.unicode && (e += 'u'),
                            (C = new RegExp(o.source, e))
                    }
                return (C.lastIndex = 0), C
            }
            n.ensureValidWordDefinition = d
            const g = new A.LinkedList()
            g.unshift({ maxLen: 1e3, windowSize: 15, timeBudget: 150 })
            function L(o, C, e, a, u) {
                if (((C = d(C)), u || (u = M.Iterable.first(g)), e.length > u.maxLen)) {
                    let w = o - u.maxLen / 2
                    return (
                        w < 0 ? (w = 0) : (a += w),
                        (e = e.substring(w, o + u.maxLen / 2)),
                        L(o, C, e, a, u)
                    )
                }
                const c = Date.now(),
                    m = o - 1 - a
                let f = -1,
                    S = null
                for (let w = 1; !(Date.now() - c >= u.timeBudget); w++) {
                    const E = m - u.windowSize * w
                    C.lastIndex = Math.max(0, E)
                    const y = h(C, e, m, f)
                    if ((!y && S) || ((S = y), E <= 0)) break
                    f = E
                }
                if (S) {
                    const w = {
                        word: S[0],
                        startColumn: a + 1 + S.index,
                        endColumn: a + 1 + S.index + S[0].length
                    }
                    return (C.lastIndex = 0), w
                }
                return null
            }
            n.getWordAtText = L
            function h(o, C, e, a) {
                let u
                for (; (u = o.exec(C)); ) {
                    const c = u.index || 0
                    if (c <= e && o.lastIndex >= e) return u
                    if (a > 0 && c > a) return null
                }
                return null
            }
        }),
        X(J[8], Z([0, 1, 7, 5, 3]), function (q, n, M, A, i) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.DateTimeout =
                    n.InfiniteTimeout =
                    n.OffsetPair =
                    n.SequenceDiff =
                    n.DiffAlgorithmResult =
                        void 0)
            class d {
                static trivial(e, a) {
                    return new d(
                        [new g(i.OffsetRange.ofLength(e.length), i.OffsetRange.ofLength(a.length))],
                        !1
                    )
                }
                static trivialTimedOut(e, a) {
                    return new d(
                        [new g(i.OffsetRange.ofLength(e.length), i.OffsetRange.ofLength(a.length))],
                        !0
                    )
                }
                constructor(e, a) {
                    ;(this.diffs = e), (this.hitTimeout = a)
                }
            }
            n.DiffAlgorithmResult = d
            class g {
                static invert(e, a) {
                    const u = []
                    return (
                        (0, M.forEachAdjacent)(e, (c, m) => {
                            u.push(
                                g.fromOffsetPairs(
                                    c ? c.getEndExclusives() : L.zero,
                                    m
                                        ? m.getStarts()
                                        : new L(
                                              a,
                                              (c
                                                  ? c.seq2Range.endExclusive -
                                                    c.seq1Range.endExclusive
                                                  : 0) + a
                                          )
                                )
                            )
                        }),
                        u
                    )
                }
                static fromOffsetPairs(e, a) {
                    return new g(
                        new i.OffsetRange(e.offset1, a.offset1),
                        new i.OffsetRange(e.offset2, a.offset2)
                    )
                }
                constructor(e, a) {
                    ;(this.seq1Range = e), (this.seq2Range = a)
                }
                swap() {
                    return new g(this.seq2Range, this.seq1Range)
                }
                toString() {
                    return `${this.seq1Range} <-> ${this.seq2Range}`
                }
                join(e) {
                    return new g(this.seq1Range.join(e.seq1Range), this.seq2Range.join(e.seq2Range))
                }
                delta(e) {
                    return e === 0 ? this : new g(this.seq1Range.delta(e), this.seq2Range.delta(e))
                }
                deltaStart(e) {
                    return e === 0
                        ? this
                        : new g(this.seq1Range.deltaStart(e), this.seq2Range.deltaStart(e))
                }
                deltaEnd(e) {
                    return e === 0
                        ? this
                        : new g(this.seq1Range.deltaEnd(e), this.seq2Range.deltaEnd(e))
                }
                intersect(e) {
                    const a = this.seq1Range.intersect(e.seq1Range),
                        u = this.seq2Range.intersect(e.seq2Range)
                    if (!(!a || !u)) return new g(a, u)
                }
                getStarts() {
                    return new L(this.seq1Range.start, this.seq2Range.start)
                }
                getEndExclusives() {
                    return new L(this.seq1Range.endExclusive, this.seq2Range.endExclusive)
                }
            }
            n.SequenceDiff = g
            class L {
                constructor(e, a) {
                    ;(this.offset1 = e), (this.offset2 = a)
                }
                toString() {
                    return `${this.offset1} <-> ${this.offset2}`
                }
            }
            ;(n.OffsetPair = L),
                (L.zero = new L(0, 0)),
                (L.max = new L(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER))
            class h {
                isValid() {
                    return !0
                }
            }
            ;(n.InfiniteTimeout = h), (h.instance = new h())
            class o {
                constructor(e) {
                    if (
                        ((this.timeout = e),
                        (this.startTime = Date.now()),
                        (this.valid = !0),
                        e <= 0)
                    )
                        throw new A.BugIndicatingError('timeout must be positive')
                }
                isValid() {
                    if (!(Date.now() - this.startTime < this.timeout) && this.valid) {
                        this.valid = !1
                        debugger
                    }
                    return this.valid
                }
            }
            n.DateTimeout = o
        }),
        X(J[29], Z([0, 1, 3, 8]), function (q, n, M, A) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }), (n.MyersDiffAlgorithm = void 0)
            class i {
                compute(o, C, e = A.InfiniteTimeout.instance) {
                    if (o.length === 0 || C.length === 0) return A.DiffAlgorithmResult.trivial(o, C)
                    const a = o,
                        u = C
                    function c(s, l) {
                        for (
                            ;
                            s < a.length && l < u.length && a.getElement(s) === u.getElement(l);

                        )
                            s++, l++
                        return s
                    }
                    let m = 0
                    const f = new g()
                    f.set(0, c(0, 0))
                    const S = new L()
                    S.set(0, f.get(0) === 0 ? null : new d(null, 0, 0, f.get(0)))
                    let w = 0
                    e: for (;;) {
                        if ((m++, !e.isValid())) return A.DiffAlgorithmResult.trivialTimedOut(a, u)
                        const s = -Math.min(m, u.length + (m % 2)),
                            l = Math.min(m, a.length + (m % 2))
                        for (w = s; w <= l; w += 2) {
                            let p = 0
                            const b = w === l ? -1 : f.get(w + 1),
                                v = w === s ? -1 : f.get(w - 1) + 1
                            p++
                            const R = Math.min(Math.max(b, v), a.length),
                                N = R - w
                            if ((p++, R > a.length || N > u.length)) continue
                            const D = c(R, N)
                            f.set(w, D)
                            const x = R === b ? S.get(w + 1) : S.get(w - 1)
                            if (
                                (S.set(w, D !== R ? new d(x, R, N, D - R) : x),
                                f.get(w) === a.length && f.get(w) - w === u.length)
                            )
                                break e
                        }
                    }
                    let E = S.get(w)
                    const y = []
                    let _ = a.length,
                        r = u.length
                    for (;;) {
                        const s = E ? E.x + E.length : 0,
                            l = E ? E.y + E.length : 0
                        if (
                            ((s !== _ || l !== r) &&
                                y.push(
                                    new A.SequenceDiff(
                                        new M.OffsetRange(s, _),
                                        new M.OffsetRange(l, r)
                                    )
                                ),
                            !E)
                        )
                            break
                        ;(_ = E.x), (r = E.y), (E = E.prev)
                    }
                    return y.reverse(), new A.DiffAlgorithmResult(y, !1)
                }
            }
            n.MyersDiffAlgorithm = i
            class d {
                constructor(o, C, e, a) {
                    ;(this.prev = o), (this.x = C), (this.y = e), (this.length = a)
                }
            }
            class g {
                constructor() {
                    ;(this.positiveArr = new Int32Array(10)),
                        (this.negativeArr = new Int32Array(10))
                }
                get(o) {
                    return o < 0 ? ((o = -o - 1), this.negativeArr[o]) : this.positiveArr[o]
                }
                set(o, C) {
                    if (o < 0) {
                        if (((o = -o - 1), o >= this.negativeArr.length)) {
                            const e = this.negativeArr
                            ;(this.negativeArr = new Int32Array(e.length * 2)),
                                this.negativeArr.set(e)
                        }
                        this.negativeArr[o] = C
                    } else {
                        if (o >= this.positiveArr.length) {
                            const e = this.positiveArr
                            ;(this.positiveArr = new Int32Array(e.length * 2)),
                                this.positiveArr.set(e)
                        }
                        this.positiveArr[o] = C
                    }
                }
            }
            class L {
                constructor() {
                    ;(this.positiveArr = []), (this.negativeArr = [])
                }
                get(o) {
                    return o < 0 ? ((o = -o - 1), this.negativeArr[o]) : this.positiveArr[o]
                }
                set(o, C) {
                    o < 0 ? ((o = -o - 1), (this.negativeArr[o] = C)) : (this.positiveArr[o] = C)
                }
            }
        }),
        X(J[43], Z([0, 1, 7, 3, 8]), function (q, n, M, A, i) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.removeVeryShortMatchingTextBetweenLongDiffs =
                    n.removeVeryShortMatchingLinesBetweenDiffs =
                    n.extendDiffsToEntireWordIfAppropriate =
                    n.removeShortMatches =
                    n.optimizeSequenceDiffs =
                        void 0)
            function d(c, m, f) {
                let S = f
                return (S = g(c, m, S)), (S = g(c, m, S)), (S = L(c, m, S)), S
            }
            n.optimizeSequenceDiffs = d
            function g(c, m, f) {
                if (f.length === 0) return f
                const S = []
                S.push(f[0])
                for (let E = 1; E < f.length; E++) {
                    const y = S[S.length - 1]
                    let _ = f[E]
                    if (_.seq1Range.isEmpty || _.seq2Range.isEmpty) {
                        const r = _.seq1Range.start - y.seq1Range.endExclusive
                        let s
                        for (
                            s = 1;
                            s <= r &&
                            !(
                                c.getElement(_.seq1Range.start - s) !==
                                    c.getElement(_.seq1Range.endExclusive - s) ||
                                m.getElement(_.seq2Range.start - s) !==
                                    m.getElement(_.seq2Range.endExclusive - s)
                            );
                            s++
                        );
                        if ((s--, s === r)) {
                            S[S.length - 1] = new i.SequenceDiff(
                                new A.OffsetRange(y.seq1Range.start, _.seq1Range.endExclusive - r),
                                new A.OffsetRange(y.seq2Range.start, _.seq2Range.endExclusive - r)
                            )
                            continue
                        }
                        _ = _.delta(-s)
                    }
                    S.push(_)
                }
                const w = []
                for (let E = 0; E < S.length - 1; E++) {
                    const y = S[E + 1]
                    let _ = S[E]
                    if (_.seq1Range.isEmpty || _.seq2Range.isEmpty) {
                        const r = y.seq1Range.start - _.seq1Range.endExclusive
                        let s
                        for (
                            s = 0;
                            s < r &&
                            !(
                                !c.isStronglyEqual(
                                    _.seq1Range.start + s,
                                    _.seq1Range.endExclusive + s
                                ) ||
                                !m.isStronglyEqual(
                                    _.seq2Range.start + s,
                                    _.seq2Range.endExclusive + s
                                )
                            );
                            s++
                        );
                        if (s === r) {
                            S[E + 1] = new i.SequenceDiff(
                                new A.OffsetRange(_.seq1Range.start + r, y.seq1Range.endExclusive),
                                new A.OffsetRange(_.seq2Range.start + r, y.seq2Range.endExclusive)
                            )
                            continue
                        }
                        s > 0 && (_ = _.delta(s))
                    }
                    w.push(_)
                }
                return S.length > 0 && w.push(S[S.length - 1]), w
            }
            function L(c, m, f) {
                if (!c.getBoundaryScore || !m.getBoundaryScore) return f
                for (let S = 0; S < f.length; S++) {
                    const w = S > 0 ? f[S - 1] : void 0,
                        E = f[S],
                        y = S + 1 < f.length ? f[S + 1] : void 0,
                        _ = new A.OffsetRange(
                            w ? w.seq1Range.start + 1 : 0,
                            y ? y.seq1Range.endExclusive - 1 : c.length
                        ),
                        r = new A.OffsetRange(
                            w ? w.seq2Range.start + 1 : 0,
                            y ? y.seq2Range.endExclusive - 1 : m.length
                        )
                    E.seq1Range.isEmpty
                        ? (f[S] = h(E, c, m, _, r))
                        : E.seq2Range.isEmpty && (f[S] = h(E.swap(), m, c, r, _).swap())
                }
                return f
            }
            function h(c, m, f, S, w) {
                let y = 1
                for (
                    ;
                    c.seq1Range.start - y >= S.start &&
                    c.seq2Range.start - y >= w.start &&
                    f.isStronglyEqual(c.seq2Range.start - y, c.seq2Range.endExclusive - y) &&
                    y < 100;

                )
                    y++
                y--
                let _ = 0
                for (
                    ;
                    c.seq1Range.start + _ < S.endExclusive &&
                    c.seq2Range.endExclusive + _ < w.endExclusive &&
                    f.isStronglyEqual(c.seq2Range.start + _, c.seq2Range.endExclusive + _) &&
                    _ < 100;

                )
                    _++
                if (y === 0 && _ === 0) return c
                let r = 0,
                    s = -1
                for (let l = -y; l <= _; l++) {
                    const p = c.seq2Range.start + l,
                        b = c.seq2Range.endExclusive + l,
                        v = c.seq1Range.start + l,
                        R = m.getBoundaryScore(v) + f.getBoundaryScore(p) + f.getBoundaryScore(b)
                    R > s && ((s = R), (r = l))
                }
                return c.delta(r)
            }
            function o(c, m, f) {
                const S = []
                for (const w of f) {
                    const E = S[S.length - 1]
                    if (!E) {
                        S.push(w)
                        continue
                    }
                    w.seq1Range.start - E.seq1Range.endExclusive <= 2 ||
                    w.seq2Range.start - E.seq2Range.endExclusive <= 2
                        ? (S[S.length - 1] = new i.SequenceDiff(
                              E.seq1Range.join(w.seq1Range),
                              E.seq2Range.join(w.seq2Range)
                          ))
                        : S.push(w)
                }
                return S
            }
            n.removeShortMatches = o
            function C(c, m, f) {
                const S = []
                let w
                function E() {
                    if (!w) return
                    const _ = w.s1Range.length - w.deleted,
                        r = w.s2Range.length - w.added
                    Math.max(w.deleted, w.added) + (w.count - 1) > _ &&
                        S.push(new i.SequenceDiff(w.s1Range, w.s2Range)),
                        (w = void 0)
                }
                for (const _ of f) {
                    let r = function (v, R) {
                        var N, D, x, T
                        if (!w || !w.s1Range.containsRange(v) || !w.s2Range.containsRange(R))
                            if (
                                w &&
                                !(
                                    w.s1Range.endExclusive < v.start &&
                                    w.s2Range.endExclusive < R.start
                                )
                            ) {
                                const z = A.OffsetRange.tryCreate(w.s1Range.endExclusive, v.start),
                                    k = A.OffsetRange.tryCreate(w.s2Range.endExclusive, R.start)
                                ;(w.deleted += (N = z?.length) !== null && N !== void 0 ? N : 0),
                                    (w.added += (D = k?.length) !== null && D !== void 0 ? D : 0),
                                    (w.s1Range = w.s1Range.join(v)),
                                    (w.s2Range = w.s2Range.join(R))
                            } else
                                E(),
                                    (w = { added: 0, deleted: 0, count: 0, s1Range: v, s2Range: R })
                        const F = v.intersect(_.seq1Range),
                            U = R.intersect(_.seq2Range)
                        w.count++,
                            (w.deleted += (x = F?.length) !== null && x !== void 0 ? x : 0),
                            (w.added += (T = U?.length) !== null && T !== void 0 ? T : 0)
                    }
                    const s = c.findWordContaining(_.seq1Range.start - 1),
                        l = m.findWordContaining(_.seq2Range.start - 1),
                        p = c.findWordContaining(_.seq1Range.endExclusive),
                        b = m.findWordContaining(_.seq2Range.endExclusive)
                    s && p && l && b && s.equals(p) && l.equals(b)
                        ? r(s, l)
                        : (s && l && r(s, l), p && b && r(p, b))
                }
                return E(), e(f, S)
            }
            n.extendDiffsToEntireWordIfAppropriate = C
            function e(c, m) {
                const f = []
                for (; c.length > 0 || m.length > 0; ) {
                    const S = c[0],
                        w = m[0]
                    let E
                    S && (!w || S.seq1Range.start < w.seq1Range.start)
                        ? (E = c.shift())
                        : (E = m.shift()),
                        f.length > 0 && f[f.length - 1].seq1Range.endExclusive >= E.seq1Range.start
                            ? (f[f.length - 1] = f[f.length - 1].join(E))
                            : f.push(E)
                }
                return f
            }
            function a(c, m, f) {
                let S = f
                if (S.length === 0) return S
                let w = 0,
                    E
                do {
                    E = !1
                    const y = [S[0]]
                    for (let _ = 1; _ < S.length; _++) {
                        let l = function (b, v) {
                            const R = new A.OffsetRange(s.seq1Range.endExclusive, r.seq1Range.start)
                            return (
                                c.getText(R).replace(/\s/g, '').length <= 4 &&
                                (b.seq1Range.length + b.seq2Range.length > 5 ||
                                    v.seq1Range.length + v.seq2Range.length > 5)
                            )
                        }
                        const r = S[_],
                            s = y[y.length - 1]
                        l(s, r)
                            ? ((E = !0), (y[y.length - 1] = y[y.length - 1].join(r)))
                            : y.push(r)
                    }
                    S = y
                } while (w++ < 10 && E)
                return S
            }
            n.removeVeryShortMatchingLinesBetweenDiffs = a
            function u(c, m, f) {
                let S = f
                if (S.length === 0) return S
                let w = 0,
                    E
                do {
                    E = !1
                    const _ = [S[0]]
                    for (let r = 1; r < S.length; r++) {
                        let p = function (v, R) {
                            const N = new A.OffsetRange(l.seq1Range.endExclusive, s.seq1Range.start)
                            if (c.countLinesIn(N) > 5 || N.length > 500) return !1
                            const x = c.getText(N).trim()
                            if (x.length > 20 || x.split(/\r\n|\r|\n/).length > 1) return !1
                            const T = c.countLinesIn(v.seq1Range),
                                F = v.seq1Range.length,
                                U = m.countLinesIn(v.seq2Range),
                                z = v.seq2Range.length,
                                k = c.countLinesIn(R.seq1Range),
                                O = R.seq1Range.length,
                                I = m.countLinesIn(R.seq2Range),
                                V = R.seq2Range.length,
                                H = 2 * 40 + 50
                            function Y(t) {
                                return Math.min(t, H)
                            }
                            return (
                                Math.pow(
                                    Math.pow(Y(T * 40 + F), 1.5) + Math.pow(Y(U * 40 + z), 1.5),
                                    1.5
                                ) +
                                    Math.pow(
                                        Math.pow(Y(k * 40 + O), 1.5) + Math.pow(Y(I * 40 + V), 1.5),
                                        1.5
                                    ) >
                                (H ** 1.5) ** 1.5 * 1.3
                            )
                        }
                        const s = S[r],
                            l = _[_.length - 1]
                        p(l, s)
                            ? ((E = !0), (_[_.length - 1] = _[_.length - 1].join(s)))
                            : _.push(s)
                    }
                    S = _
                } while (w++ < 10 && E)
                const y = []
                return (
                    (0, M.forEachWithNeighbors)(S, (_, r, s) => {
                        let l = r
                        function p(x) {
                            return (
                                x.length > 0 &&
                                x.trim().length <= 3 &&
                                r.seq1Range.length + r.seq2Range.length > 100
                            )
                        }
                        const b = c.extendToFullLines(r.seq1Range),
                            v = c.getText(new A.OffsetRange(b.start, r.seq1Range.start))
                        p(v) && (l = l.deltaStart(-v.length))
                        const R = c.getText(
                            new A.OffsetRange(r.seq1Range.endExclusive, b.endExclusive)
                        )
                        p(R) && (l = l.deltaEnd(R.length))
                        const N = i.SequenceDiff.fromOffsetPairs(
                                _ ? _.getEndExclusives() : i.OffsetPair.zero,
                                s ? s.getStarts() : i.OffsetPair.max
                            ),
                            D = l.intersect(N)
                        y.push(D)
                    }),
                    y
                )
            }
            n.removeVeryShortMatchingTextBetweenLongDiffs = u
        }),
        X(J[44], Z([0, 1]), function (q, n) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }), (n.LineSequence = void 0)
            class M {
                constructor(d, g) {
                    ;(this.trimmedHash = d), (this.lines = g)
                }
                getElement(d) {
                    return this.trimmedHash[d]
                }
                get length() {
                    return this.trimmedHash.length
                }
                getBoundaryScore(d) {
                    const g = d === 0 ? 0 : A(this.lines[d - 1]),
                        L = d === this.lines.length ? 0 : A(this.lines[d])
                    return 1e3 - (g + L)
                }
                getText(d) {
                    return this.lines.slice(d.start, d.endExclusive).join(`
`)
                }
                isStronglyEqual(d, g) {
                    return this.lines[d] === this.lines[g]
                }
            }
            n.LineSequence = M
            function A(i) {
                let d = 0
                for (; d < i.length && (i.charCodeAt(d) === 32 || i.charCodeAt(d) === 9); ) d++
                return d
            }
        }),
        X(J[15], Z([0, 1]), function (q, n) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.LineRangeFragment = n.isSpace = n.Array2D = void 0)
            class M {
                constructor(g, L) {
                    ;(this.width = g),
                        (this.height = L),
                        (this.array = []),
                        (this.array = new Array(g * L))
                }
                get(g, L) {
                    return this.array[g + L * this.width]
                }
                set(g, L, h) {
                    this.array[g + L * this.width] = h
                }
            }
            n.Array2D = M
            function A(d) {
                return d === 32 || d === 9
            }
            n.isSpace = A
            class i {
                static getKey(g) {
                    let L = this.chrKeys.get(g)
                    return L === void 0 && ((L = this.chrKeys.size), this.chrKeys.set(g, L)), L
                }
                constructor(g, L, h) {
                    ;(this.range = g), (this.lines = L), (this.source = h), (this.histogram = [])
                    let o = 0
                    for (let C = g.startLineNumber - 1; C < g.endLineNumberExclusive - 1; C++) {
                        const e = L[C]
                        for (let u = 0; u < e.length; u++) {
                            o++
                            const c = e[u],
                                m = i.getKey(c)
                            this.histogram[m] = (this.histogram[m] || 0) + 1
                        }
                        o++
                        const a = i.getKey(`
`)
                        this.histogram[a] = (this.histogram[a] || 0) + 1
                    }
                    this.totalCount = o
                }
                computeSimilarity(g) {
                    var L, h
                    let o = 0
                    const C = Math.max(this.histogram.length, g.histogram.length)
                    for (let e = 0; e < C; e++)
                        o += Math.abs(
                            ((L = this.histogram[e]) !== null && L !== void 0 ? L : 0) -
                                ((h = g.histogram[e]) !== null && h !== void 0 ? h : 0)
                        )
                    return 1 - o / (this.totalCount + g.totalCount)
                }
            }
            ;(n.LineRangeFragment = i), (i.chrKeys = new Map())
        }),
        X(J[45], Z([0, 1, 3, 8, 15]), function (q, n, M, A, i) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.DynamicProgrammingDiffing = void 0)
            class d {
                compute(L, h, o = A.InfiniteTimeout.instance, C) {
                    if (L.length === 0 || h.length === 0) return A.DiffAlgorithmResult.trivial(L, h)
                    const e = new i.Array2D(L.length, h.length),
                        a = new i.Array2D(L.length, h.length),
                        u = new i.Array2D(L.length, h.length)
                    for (let y = 0; y < L.length; y++)
                        for (let _ = 0; _ < h.length; _++) {
                            if (!o.isValid()) return A.DiffAlgorithmResult.trivialTimedOut(L, h)
                            const r = y === 0 ? 0 : e.get(y - 1, _),
                                s = _ === 0 ? 0 : e.get(y, _ - 1)
                            let l
                            L.getElement(y) === h.getElement(_)
                                ? (y === 0 || _ === 0 ? (l = 0) : (l = e.get(y - 1, _ - 1)),
                                  y > 0 &&
                                      _ > 0 &&
                                      a.get(y - 1, _ - 1) === 3 &&
                                      (l += u.get(y - 1, _ - 1)),
                                  (l += C ? C(y, _) : 1))
                                : (l = -1)
                            const p = Math.max(r, s, l)
                            if (p === l) {
                                const b = y > 0 && _ > 0 ? u.get(y - 1, _ - 1) : 0
                                u.set(y, _, b + 1), a.set(y, _, 3)
                            } else
                                p === r
                                    ? (u.set(y, _, 0), a.set(y, _, 1))
                                    : p === s && (u.set(y, _, 0), a.set(y, _, 2))
                            e.set(y, _, p)
                        }
                    const c = []
                    let m = L.length,
                        f = h.length
                    function S(y, _) {
                        ;(y + 1 !== m || _ + 1 !== f) &&
                            c.push(
                                new A.SequenceDiff(
                                    new M.OffsetRange(y + 1, m),
                                    new M.OffsetRange(_ + 1, f)
                                )
                            ),
                            (m = y),
                            (f = _)
                    }
                    let w = L.length - 1,
                        E = h.length - 1
                    for (; w >= 0 && E >= 0; )
                        a.get(w, E) === 3 ? (S(w, E), w--, E--) : a.get(w, E) === 1 ? w-- : E--
                    return S(-1, -1), c.reverse(), new A.DiffAlgorithmResult(c, !1)
                }
            }
            n.DynamicProgrammingDiffing = d
        }),
        X(J[30], Z([0, 1, 11, 3, 4, 2, 15]), function (q, n, M, A, i, d, g) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.LinesSliceCharSequence = void 0)
            class L {
                constructor(u, c, m) {
                    ;(this.lines = u),
                        (this.considerWhitespaceChanges = m),
                        (this.elements = []),
                        (this.firstCharOffsetByLine = []),
                        (this.additionalOffsetByLine = [])
                    let f = !1
                    c.start > 0 &&
                        c.endExclusive >= u.length &&
                        ((c = new A.OffsetRange(c.start - 1, c.endExclusive)), (f = !0)),
                        (this.lineRange = c),
                        (this.firstCharOffsetByLine[0] = 0)
                    for (let S = this.lineRange.start; S < this.lineRange.endExclusive; S++) {
                        let w = u[S],
                            E = 0
                        if (f) (E = w.length), (w = ''), (f = !1)
                        else if (!m) {
                            const y = w.trimStart()
                            ;(E = w.length - y.length), (w = y.trimEnd())
                        }
                        this.additionalOffsetByLine.push(E)
                        for (let y = 0; y < w.length; y++) this.elements.push(w.charCodeAt(y))
                        S < u.length - 1 &&
                            (this.elements.push(
                                `
`.charCodeAt(0)
                            ),
                            (this.firstCharOffsetByLine[S - this.lineRange.start + 1] =
                                this.elements.length))
                    }
                    this.additionalOffsetByLine.push(0)
                }
                toString() {
                    return `Slice: "${this.text}"`
                }
                get text() {
                    return this.getText(new A.OffsetRange(0, this.length))
                }
                getText(u) {
                    return this.elements
                        .slice(u.start, u.endExclusive)
                        .map((c) => String.fromCharCode(c))
                        .join('')
                }
                getElement(u) {
                    return this.elements[u]
                }
                get length() {
                    return this.elements.length
                }
                getBoundaryScore(u) {
                    const c = e(u > 0 ? this.elements[u - 1] : -1),
                        m = e(u < this.elements.length ? this.elements[u] : -1)
                    if (c === 7 && m === 8) return 0
                    let f = 0
                    return (
                        c !== m && ((f += 10), c === 0 && m === 1 && (f += 1)),
                        (f += C(c)),
                        (f += C(m)),
                        f
                    )
                }
                translateOffset(u) {
                    if (this.lineRange.isEmpty) return new i.Position(this.lineRange.start + 1, 1)
                    const c = (0, M.findLastIdxMonotonous)(
                        this.firstCharOffsetByLine,
                        (m) => m <= u
                    )
                    return new i.Position(
                        this.lineRange.start + c + 1,
                        u - this.firstCharOffsetByLine[c] + this.additionalOffsetByLine[c] + 1
                    )
                }
                translateRange(u) {
                    return d.Range.fromPositions(
                        this.translateOffset(u.start),
                        this.translateOffset(u.endExclusive)
                    )
                }
                findWordContaining(u) {
                    if (u < 0 || u >= this.elements.length || !h(this.elements[u])) return
                    let c = u
                    for (; c > 0 && h(this.elements[c - 1]); ) c--
                    let m = u
                    for (; m < this.elements.length && h(this.elements[m]); ) m++
                    return new A.OffsetRange(c, m)
                }
                countLinesIn(u) {
                    return (
                        this.translateOffset(u.endExclusive).lineNumber -
                        this.translateOffset(u.start).lineNumber
                    )
                }
                isStronglyEqual(u, c) {
                    return this.elements[u] === this.elements[c]
                }
                extendToFullLines(u) {
                    var c, m
                    const f =
                            (c = (0, M.findLastMonotonous)(
                                this.firstCharOffsetByLine,
                                (w) => w <= u.start
                            )) !== null && c !== void 0
                                ? c
                                : 0,
                        S =
                            (m = (0, M.findFirstMonotonous)(
                                this.firstCharOffsetByLine,
                                (w) => u.endExclusive <= w
                            )) !== null && m !== void 0
                                ? m
                                : this.elements.length
                    return new A.OffsetRange(f, S)
                }
            }
            n.LinesSliceCharSequence = L
            function h(a) {
                return (a >= 97 && a <= 122) || (a >= 65 && a <= 90) || (a >= 48 && a <= 57)
            }
            const o = { [0]: 0, [1]: 0, [2]: 0, [3]: 10, [4]: 2, [5]: 3, [6]: 3, [7]: 10, [8]: 10 }
            function C(a) {
                return o[a]
            }
            function e(a) {
                return a === 10
                    ? 8
                    : a === 13
                      ? 7
                      : (0, g.isSpace)(a)
                        ? 6
                        : a >= 97 && a <= 122
                          ? 0
                          : a >= 65 && a <= 90
                            ? 1
                            : a >= 48 && a <= 57
                              ? 2
                              : a === -1
                                ? 3
                                : a === 44 || a === 59
                                  ? 5
                                  : 4
            }
        }),
        X(J[31], Z([0, 1]), function (q, n) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.MovedText = n.LinesDiff = void 0)
            class M {
                constructor(d, g, L) {
                    ;(this.changes = d), (this.moves = g), (this.hitTimeout = L)
                }
            }
            n.LinesDiff = M
            class A {
                constructor(d, g) {
                    ;(this.lineRangeMapping = d), (this.changes = g)
                }
            }
            n.MovedText = A
        }),
        X(J[16], Z([0, 1, 10]), function (q, n, M) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.RangeMapping = n.DetailedLineRangeMapping = n.LineRangeMapping = void 0)
            class A {
                static inverse(L, h, o) {
                    const C = []
                    let e = 1,
                        a = 1
                    for (const c of L) {
                        const m = new i(
                            new M.LineRange(e, c.original.startLineNumber),
                            new M.LineRange(a, c.modified.startLineNumber),
                            void 0
                        )
                        m.modified.isEmpty || C.push(m),
                            (e = c.original.endLineNumberExclusive),
                            (a = c.modified.endLineNumberExclusive)
                    }
                    const u = new i(new M.LineRange(e, h + 1), new M.LineRange(a, o + 1), void 0)
                    return u.modified.isEmpty || C.push(u), C
                }
                constructor(L, h) {
                    ;(this.original = L), (this.modified = h)
                }
                toString() {
                    return `{${this.original.toString()}->${this.modified.toString()}}`
                }
                flip() {
                    return new A(this.modified, this.original)
                }
                join(L) {
                    return new A(this.original.join(L.original), this.modified.join(L.modified))
                }
            }
            n.LineRangeMapping = A
            class i extends A {
                constructor(L, h, o) {
                    super(L, h), (this.innerChanges = o)
                }
                flip() {
                    var L
                    return new i(
                        this.modified,
                        this.original,
                        (L = this.innerChanges) === null || L === void 0
                            ? void 0
                            : L.map((h) => h.flip())
                    )
                }
            }
            n.DetailedLineRangeMapping = i
            class d {
                constructor(L, h) {
                    ;(this.originalRange = L), (this.modifiedRange = h)
                }
                toString() {
                    return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`
                }
                flip() {
                    return new d(this.modifiedRange, this.originalRange)
                }
            }
            n.RangeMapping = d
        }),
        X(
            J[46],
            Z([0, 1, 8, 16, 7, 11, 37, 10, 3, 30, 15, 29]),
            function (q, n, M, A, i, d, g, L, h, o, C, e) {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.computeMovedLines = void 0)
                function a(E, y, _, r, s, l) {
                    let { moves: p, excludedChanges: b } = c(E, y, _, l)
                    if (!l.isValid()) return []
                    const v = E.filter((N) => !b.has(N)),
                        R = m(v, r, s, y, _, l)
                    return (
                        (0, i.pushMany)(p, R),
                        (p = S(p)),
                        (p = p.filter((N) => {
                            const D = N.original
                                .toOffsetRange()
                                .slice(y)
                                .map((T) => T.trim())
                            return (
                                D.join(`
`).length >= 15 && u(D, (T) => T.length >= 2) >= 2
                            )
                        })),
                        (p = w(E, p)),
                        p
                    )
                }
                n.computeMovedLines = a
                function u(E, y) {
                    let _ = 0
                    for (const r of E) y(r) && _++
                    return _
                }
                function c(E, y, _, r) {
                    const s = [],
                        l = E.filter((v) => v.modified.isEmpty && v.original.length >= 3).map(
                            (v) => new C.LineRangeFragment(v.original, y, v)
                        ),
                        p = new Set(
                            E.filter((v) => v.original.isEmpty && v.modified.length >= 3).map(
                                (v) => new C.LineRangeFragment(v.modified, _, v)
                            )
                        ),
                        b = new Set()
                    for (const v of l) {
                        let R = -1,
                            N
                        for (const D of p) {
                            const x = v.computeSimilarity(D)
                            x > R && ((R = x), (N = D))
                        }
                        if (
                            (R > 0.9 &&
                                N &&
                                (p.delete(N),
                                s.push(new A.LineRangeMapping(v.range, N.range)),
                                b.add(v.source),
                                b.add(N.source)),
                            !r.isValid())
                        )
                            return { moves: s, excludedChanges: b }
                    }
                    return { moves: s, excludedChanges: b }
                }
                function m(E, y, _, r, s, l) {
                    const p = [],
                        b = new g.SetMap()
                    for (const x of E)
                        for (
                            let T = x.original.startLineNumber;
                            T < x.original.endLineNumberExclusive - 2;
                            T++
                        ) {
                            const F = `${y[T - 1]}:${y[T + 1 - 1]}:${y[T + 2 - 1]}`
                            b.add(F, { range: new L.LineRange(T, T + 3) })
                        }
                    const v = []
                    E.sort((0, i.compareBy)((x) => x.modified.startLineNumber, i.numberComparator))
                    for (const x of E) {
                        let T = []
                        for (
                            let F = x.modified.startLineNumber;
                            F < x.modified.endLineNumberExclusive - 2;
                            F++
                        ) {
                            const U = `${_[F - 1]}:${_[F + 1 - 1]}:${_[F + 2 - 1]}`,
                                z = new L.LineRange(F, F + 3),
                                k = []
                            b.forEach(U, ({ range: O }) => {
                                for (const V of T)
                                    if (
                                        V.originalLineRange.endLineNumberExclusive + 1 ===
                                            O.endLineNumberExclusive &&
                                        V.modifiedLineRange.endLineNumberExclusive + 1 ===
                                            z.endLineNumberExclusive
                                    ) {
                                        ;(V.originalLineRange = new L.LineRange(
                                            V.originalLineRange.startLineNumber,
                                            O.endLineNumberExclusive
                                        )),
                                            (V.modifiedLineRange = new L.LineRange(
                                                V.modifiedLineRange.startLineNumber,
                                                z.endLineNumberExclusive
                                            )),
                                            k.push(V)
                                        return
                                    }
                                const I = { modifiedLineRange: z, originalLineRange: O }
                                v.push(I), k.push(I)
                            }),
                                (T = k)
                        }
                        if (!l.isValid()) return []
                    }
                    v.sort(
                        (0, i.reverseOrder)(
                            (0, i.compareBy)((x) => x.modifiedLineRange.length, i.numberComparator)
                        )
                    )
                    const R = new L.LineRangeSet(),
                        N = new L.LineRangeSet()
                    for (const x of v) {
                        const T =
                                x.modifiedLineRange.startLineNumber -
                                x.originalLineRange.startLineNumber,
                            F = R.subtractFrom(x.modifiedLineRange),
                            U = N.subtractFrom(x.originalLineRange).getWithDelta(T),
                            z = F.getIntersection(U)
                        for (const k of z.ranges) {
                            if (k.length < 3) continue
                            const O = k,
                                I = k.delta(-T)
                            p.push(new A.LineRangeMapping(I, O)), R.addRange(O), N.addRange(I)
                        }
                    }
                    p.sort((0, i.compareBy)((x) => x.original.startLineNumber, i.numberComparator))
                    const D = new d.MonotonousArray(E)
                    for (let x = 0; x < p.length; x++) {
                        const T = p[x],
                            F = D.findLastMonotonous(
                                (Y) => Y.original.startLineNumber <= T.original.startLineNumber
                            ),
                            U = (0, d.findLastMonotonous)(
                                E,
                                (Y) => Y.modified.startLineNumber <= T.modified.startLineNumber
                            ),
                            z = Math.max(
                                T.original.startLineNumber - F.original.startLineNumber,
                                T.modified.startLineNumber - U.modified.startLineNumber
                            ),
                            k = D.findLastMonotonous(
                                (Y) =>
                                    Y.original.startLineNumber < T.original.endLineNumberExclusive
                            ),
                            O = (0, d.findLastMonotonous)(
                                E,
                                (Y) =>
                                    Y.modified.startLineNumber < T.modified.endLineNumberExclusive
                            ),
                            I = Math.max(
                                k.original.endLineNumberExclusive -
                                    T.original.endLineNumberExclusive,
                                O.modified.endLineNumberExclusive -
                                    T.modified.endLineNumberExclusive
                            )
                        let V
                        for (V = 0; V < z; V++) {
                            const Y = T.original.startLineNumber - V - 1,
                                t = T.modified.startLineNumber - V - 1
                            if (
                                Y > r.length ||
                                t > s.length ||
                                R.contains(t) ||
                                N.contains(Y) ||
                                !f(r[Y - 1], s[t - 1], l)
                            )
                                break
                        }
                        V > 0 &&
                            (N.addRange(
                                new L.LineRange(
                                    T.original.startLineNumber - V,
                                    T.original.startLineNumber
                                )
                            ),
                            R.addRange(
                                new L.LineRange(
                                    T.modified.startLineNumber - V,
                                    T.modified.startLineNumber
                                )
                            ))
                        let H
                        for (H = 0; H < I; H++) {
                            const Y = T.original.endLineNumberExclusive + H,
                                t = T.modified.endLineNumberExclusive + H
                            if (
                                Y > r.length ||
                                t > s.length ||
                                R.contains(t) ||
                                N.contains(Y) ||
                                !f(r[Y - 1], s[t - 1], l)
                            )
                                break
                        }
                        H > 0 &&
                            (N.addRange(
                                new L.LineRange(
                                    T.original.endLineNumberExclusive,
                                    T.original.endLineNumberExclusive + H
                                )
                            ),
                            R.addRange(
                                new L.LineRange(
                                    T.modified.endLineNumberExclusive,
                                    T.modified.endLineNumberExclusive + H
                                )
                            )),
                            (V > 0 || H > 0) &&
                                (p[x] = new A.LineRangeMapping(
                                    new L.LineRange(
                                        T.original.startLineNumber - V,
                                        T.original.endLineNumberExclusive + H
                                    ),
                                    new L.LineRange(
                                        T.modified.startLineNumber - V,
                                        T.modified.endLineNumberExclusive + H
                                    )
                                ))
                    }
                    return p
                }
                function f(E, y, _) {
                    if (E.trim() === y.trim()) return !0
                    if (E.length > 300 && y.length > 300) return !1
                    const s = new e.MyersDiffAlgorithm().compute(
                        new o.LinesSliceCharSequence([E], new h.OffsetRange(0, 1), !1),
                        new o.LinesSliceCharSequence([y], new h.OffsetRange(0, 1), !1),
                        _
                    )
                    let l = 0
                    const p = M.SequenceDiff.invert(s.diffs, E.length)
                    for (const N of p)
                        N.seq1Range.forEach((D) => {
                            ;(0, C.isSpace)(E.charCodeAt(D)) || l++
                        })
                    function b(N) {
                        let D = 0
                        for (let x = 0; x < E.length; x++) (0, C.isSpace)(N.charCodeAt(x)) || D++
                        return D
                    }
                    const v = b(E.length > y.length ? E : y)
                    return l / v > 0.6 && v > 10
                }
                function S(E) {
                    if (E.length === 0) return E
                    E.sort((0, i.compareBy)((_) => _.original.startLineNumber, i.numberComparator))
                    const y = [E[0]]
                    for (let _ = 1; _ < E.length; _++) {
                        const r = y[y.length - 1],
                            s = E[_],
                            l = s.original.startLineNumber - r.original.endLineNumberExclusive,
                            p = s.modified.startLineNumber - r.modified.endLineNumberExclusive
                        if (l >= 0 && p >= 0 && l + p <= 2) {
                            y[y.length - 1] = r.join(s)
                            continue
                        }
                        y.push(s)
                    }
                    return y
                }
                function w(E, y) {
                    const _ = new d.MonotonousArray(E)
                    return (
                        (y = y.filter((r) => {
                            const s =
                                    _.findLastMonotonous(
                                        (b) =>
                                            b.original.startLineNumber <
                                            r.original.endLineNumberExclusive
                                    ) ||
                                    new A.LineRangeMapping(
                                        new L.LineRange(1, 1),
                                        new L.LineRange(1, 1)
                                    ),
                                l = (0, d.findLastMonotonous)(
                                    E,
                                    (b) =>
                                        b.modified.startLineNumber <
                                        r.modified.endLineNumberExclusive
                                )
                            return s !== l
                        })),
                        y
                    )
                }
            }
        ),
        X(
            J[47],
            Z([0, 1, 7, 12, 10, 3, 2, 8, 45, 29, 46, 43, 31, 16, 30, 44]),
            function (q, n, M, A, i, d, g, L, h, o, C, e, a, u, c, m) {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.getLineRangeMapping =
                        n.lineRangeMappingFromRangeMappings =
                        n.DefaultLinesDiffComputer =
                            void 0)
                class f {
                    constructor() {
                        ;(this.dynamicProgrammingDiffing = new h.DynamicProgrammingDiffing()),
                            (this.myersDiffingAlgorithm = new o.MyersDiffAlgorithm())
                    }
                    computeDiff(y, _, r) {
                        if (y.length <= 1 && (0, M.equals)(y, _, (H, Y) => H === Y))
                            return new a.LinesDiff([], [], !1)
                        if (
                            (y.length === 1 && y[0].length === 0) ||
                            (_.length === 1 && _[0].length === 0)
                        )
                            return new a.LinesDiff(
                                [
                                    new u.DetailedLineRangeMapping(
                                        new i.LineRange(1, y.length + 1),
                                        new i.LineRange(1, _.length + 1),
                                        [
                                            new u.RangeMapping(
                                                new g.Range(1, 1, y.length, y[0].length + 1),
                                                new g.Range(1, 1, _.length, _[0].length + 1)
                                            )
                                        ]
                                    )
                                ],
                                [],
                                !1
                            )
                        const s =
                                r.maxComputationTimeMs === 0
                                    ? L.InfiniteTimeout.instance
                                    : new L.DateTimeout(r.maxComputationTimeMs),
                            l = !r.ignoreTrimWhitespace,
                            p = new Map()
                        function b(H) {
                            let Y = p.get(H)
                            return Y === void 0 && ((Y = p.size), p.set(H, Y)), Y
                        }
                        const v = y.map((H) => b(H.trim())),
                            R = _.map((H) => b(H.trim())),
                            N = new m.LineSequence(v, y),
                            D = new m.LineSequence(R, _),
                            x = (() =>
                                N.length + D.length < 1700
                                    ? this.dynamicProgrammingDiffing.compute(N, D, s, (H, Y) =>
                                          y[H] === _[Y]
                                              ? _[Y].length === 0
                                                  ? 0.1
                                                  : 1 + Math.log(1 + _[Y].length)
                                              : 0.99
                                      )
                                    : this.myersDiffingAlgorithm.compute(N, D))()
                        let T = x.diffs,
                            F = x.hitTimeout
                        ;(T = (0, e.optimizeSequenceDiffs)(N, D, T)),
                            (T = (0, e.removeVeryShortMatchingLinesBetweenDiffs)(N, D, T))
                        const U = [],
                            z = (H) => {
                                if (l)
                                    for (let Y = 0; Y < H; Y++) {
                                        const t = k + Y,
                                            re = O + Y
                                        if (y[t] !== _[re]) {
                                            const le = this.refineDiff(
                                                y,
                                                _,
                                                new L.SequenceDiff(
                                                    new d.OffsetRange(t, t + 1),
                                                    new d.OffsetRange(re, re + 1)
                                                ),
                                                s,
                                                l
                                            )
                                            for (const ge of le.mappings) U.push(ge)
                                            le.hitTimeout && (F = !0)
                                        }
                                    }
                            }
                        let k = 0,
                            O = 0
                        for (const H of T) {
                            ;(0, A.assertFn)(() => H.seq1Range.start - k === H.seq2Range.start - O)
                            const Y = H.seq1Range.start - k
                            z(Y), (k = H.seq1Range.endExclusive), (O = H.seq2Range.endExclusive)
                            const t = this.refineDiff(y, _, H, s, l)
                            t.hitTimeout && (F = !0)
                            for (const re of t.mappings) U.push(re)
                        }
                        z(y.length - k)
                        const I = S(U, y, _)
                        let V = []
                        return (
                            r.computeMoves && (V = this.computeMoves(I, y, _, v, R, s, l)),
                            (0, A.assertFn)(() => {
                                function H(t, re) {
                                    if (t.lineNumber < 1 || t.lineNumber > re.length) return !1
                                    const le = re[t.lineNumber - 1]
                                    return !(t.column < 1 || t.column > le.length + 1)
                                }
                                function Y(t, re) {
                                    return !(
                                        t.startLineNumber < 1 ||
                                        t.startLineNumber > re.length + 1 ||
                                        t.endLineNumberExclusive < 1 ||
                                        t.endLineNumberExclusive > re.length + 1
                                    )
                                }
                                for (const t of I) {
                                    if (!t.innerChanges) return !1
                                    for (const re of t.innerChanges)
                                        if (
                                            !(
                                                H(re.modifiedRange.getStartPosition(), _) &&
                                                H(re.modifiedRange.getEndPosition(), _) &&
                                                H(re.originalRange.getStartPosition(), y) &&
                                                H(re.originalRange.getEndPosition(), y)
                                            )
                                        )
                                            return !1
                                    if (!Y(t.modified, _) || !Y(t.original, y)) return !1
                                }
                                return !0
                            }),
                            new a.LinesDiff(I, V, F)
                        )
                    }
                    computeMoves(y, _, r, s, l, p, b) {
                        return (0, C.computeMovedLines)(y, _, r, s, l, p).map((N) => {
                            const D = this.refineDiff(
                                    _,
                                    r,
                                    new L.SequenceDiff(
                                        N.original.toOffsetRange(),
                                        N.modified.toOffsetRange()
                                    ),
                                    p,
                                    b
                                ),
                                x = S(D.mappings, _, r, !0)
                            return new a.MovedText(N, x)
                        })
                    }
                    refineDiff(y, _, r, s, l) {
                        const p = new c.LinesSliceCharSequence(y, r.seq1Range, l),
                            b = new c.LinesSliceCharSequence(_, r.seq2Range, l),
                            v =
                                p.length + b.length < 500
                                    ? this.dynamicProgrammingDiffing.compute(p, b, s)
                                    : this.myersDiffingAlgorithm.compute(p, b, s)
                        let R = v.diffs
                        return (
                            (R = (0, e.optimizeSequenceDiffs)(p, b, R)),
                            (R = (0, e.extendDiffsToEntireWordIfAppropriate)(p, b, R)),
                            (R = (0, e.removeShortMatches)(p, b, R)),
                            (R = (0, e.removeVeryShortMatchingTextBetweenLongDiffs)(p, b, R)),
                            {
                                mappings: R.map(
                                    (D) =>
                                        new u.RangeMapping(
                                            p.translateRange(D.seq1Range),
                                            b.translateRange(D.seq2Range)
                                        )
                                ),
                                hitTimeout: v.hitTimeout
                            }
                        )
                    }
                }
                n.DefaultLinesDiffComputer = f
                function S(E, y, _, r = !1) {
                    const s = []
                    for (const l of (0, M.groupAdjacentBy)(
                        E.map((p) => w(p, y, _)),
                        (p, b) =>
                            p.original.overlapOrTouch(b.original) ||
                            p.modified.overlapOrTouch(b.modified)
                    )) {
                        const p = l[0],
                            b = l[l.length - 1]
                        s.push(
                            new u.DetailedLineRangeMapping(
                                p.original.join(b.original),
                                p.modified.join(b.modified),
                                l.map((v) => v.innerChanges[0])
                            )
                        )
                    }
                    return (
                        (0, A.assertFn)(() =>
                            !r &&
                            s.length > 0 &&
                            s[0].original.startLineNumber !== s[0].modified.startLineNumber
                                ? !1
                                : (0, A.checkAdjacentItems)(
                                      s,
                                      (l, p) =>
                                          p.original.startLineNumber -
                                              l.original.endLineNumberExclusive ===
                                              p.modified.startLineNumber -
                                                  l.modified.endLineNumberExclusive &&
                                          l.original.endLineNumberExclusive <
                                              p.original.startLineNumber &&
                                          l.modified.endLineNumberExclusive <
                                              p.modified.startLineNumber
                                  )
                        ),
                        s
                    )
                }
                n.lineRangeMappingFromRangeMappings = S
                function w(E, y, _) {
                    let r = 0,
                        s = 0
                    E.modifiedRange.endColumn === 1 &&
                        E.originalRange.endColumn === 1 &&
                        E.originalRange.startLineNumber + r <= E.originalRange.endLineNumber &&
                        E.modifiedRange.startLineNumber + r <= E.modifiedRange.endLineNumber &&
                        (s = -1),
                        E.modifiedRange.startColumn - 1 >=
                            _[E.modifiedRange.startLineNumber - 1].length &&
                            E.originalRange.startColumn - 1 >=
                                y[E.originalRange.startLineNumber - 1].length &&
                            E.originalRange.startLineNumber <= E.originalRange.endLineNumber + s &&
                            E.modifiedRange.startLineNumber <= E.modifiedRange.endLineNumber + s &&
                            (r = 1)
                    const l = new i.LineRange(
                            E.originalRange.startLineNumber + r,
                            E.originalRange.endLineNumber + 1 + s
                        ),
                        p = new i.LineRange(
                            E.modifiedRange.startLineNumber + r,
                            E.modifiedRange.endLineNumber + 1 + s
                        )
                    return new u.DetailedLineRangeMapping(l, p, [E])
                }
                n.getLineRangeMapping = w
            }
        ),
        X(J[48], Z([0, 1, 24, 31, 16, 6, 2, 12, 10]), function (q, n, M, A, i, d, g, L, h) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.DiffComputer = n.LegacyLinesDiffComputer = void 0)
            const o = 3
            class C {
                computeDiff(r, s, l) {
                    var p
                    const v = new S(r, s, {
                            maxComputationTime: l.maxComputationTimeMs,
                            shouldIgnoreTrimWhitespace: l.ignoreTrimWhitespace,
                            shouldComputeCharChanges: !0,
                            shouldMakePrettyDiff: !0,
                            shouldPostProcessCharChanges: !0
                        }).computeDiff(),
                        R = []
                    let N = null
                    for (const D of v.changes) {
                        let x
                        D.originalEndLineNumber === 0
                            ? (x = new h.LineRange(
                                  D.originalStartLineNumber + 1,
                                  D.originalStartLineNumber + 1
                              ))
                            : (x = new h.LineRange(
                                  D.originalStartLineNumber,
                                  D.originalEndLineNumber + 1
                              ))
                        let T
                        D.modifiedEndLineNumber === 0
                            ? (T = new h.LineRange(
                                  D.modifiedStartLineNumber + 1,
                                  D.modifiedStartLineNumber + 1
                              ))
                            : (T = new h.LineRange(
                                  D.modifiedStartLineNumber,
                                  D.modifiedEndLineNumber + 1
                              ))
                        let F = new i.DetailedLineRangeMapping(
                            x,
                            T,
                            (p = D.charChanges) === null || p === void 0
                                ? void 0
                                : p.map(
                                      (U) =>
                                          new i.RangeMapping(
                                              new g.Range(
                                                  U.originalStartLineNumber,
                                                  U.originalStartColumn,
                                                  U.originalEndLineNumber,
                                                  U.originalEndColumn
                                              ),
                                              new g.Range(
                                                  U.modifiedStartLineNumber,
                                                  U.modifiedStartColumn,
                                                  U.modifiedEndLineNumber,
                                                  U.modifiedEndColumn
                                              )
                                          )
                                  )
                        )
                        N &&
                            (N.modified.endLineNumberExclusive === F.modified.startLineNumber ||
                                N.original.endLineNumberExclusive === F.original.startLineNumber) &&
                            ((F = new i.DetailedLineRangeMapping(
                                N.original.join(F.original),
                                N.modified.join(F.modified),
                                N.innerChanges && F.innerChanges
                                    ? N.innerChanges.concat(F.innerChanges)
                                    : void 0
                            )),
                            R.pop()),
                            R.push(F),
                            (N = F)
                    }
                    return (
                        (0, L.assertFn)(() =>
                            (0, L.checkAdjacentItems)(
                                R,
                                (D, x) =>
                                    x.original.startLineNumber -
                                        D.original.endLineNumberExclusive ===
                                        x.modified.startLineNumber -
                                            D.modified.endLineNumberExclusive &&
                                    D.original.endLineNumberExclusive <
                                        x.original.startLineNumber &&
                                    D.modified.endLineNumberExclusive < x.modified.startLineNumber
                            )
                        ),
                        new A.LinesDiff(R, [], v.quitEarly)
                    )
                }
            }
            n.LegacyLinesDiffComputer = C
            function e(_, r, s, l) {
                return new M.LcsDiff(_, r, s).ComputeDiff(l)
            }
            class a {
                constructor(r) {
                    const s = [],
                        l = []
                    for (let p = 0, b = r.length; p < b; p++)
                        (s[p] = w(r[p], 1)), (l[p] = E(r[p], 1))
                    ;(this.lines = r), (this._startColumns = s), (this._endColumns = l)
                }
                getElements() {
                    const r = []
                    for (let s = 0, l = this.lines.length; s < l; s++)
                        r[s] = this.lines[s].substring(
                            this._startColumns[s] - 1,
                            this._endColumns[s] - 1
                        )
                    return r
                }
                getStrictElement(r) {
                    return this.lines[r]
                }
                getStartLineNumber(r) {
                    return r + 1
                }
                getEndLineNumber(r) {
                    return r + 1
                }
                createCharSequence(r, s, l) {
                    const p = [],
                        b = [],
                        v = []
                    let R = 0
                    for (let N = s; N <= l; N++) {
                        const D = this.lines[N],
                            x = r ? this._startColumns[N] : 1,
                            T = r ? this._endColumns[N] : D.length + 1
                        for (let F = x; F < T; F++)
                            (p[R] = D.charCodeAt(F - 1)), (b[R] = N + 1), (v[R] = F), R++
                        !r && N < l && ((p[R] = 10), (b[R] = N + 1), (v[R] = D.length + 1), R++)
                    }
                    return new u(p, b, v)
                }
            }
            class u {
                constructor(r, s, l) {
                    ;(this._charCodes = r), (this._lineNumbers = s), (this._columns = l)
                }
                toString() {
                    return (
                        '[' +
                        this._charCodes
                            .map(
                                (r, s) =>
                                    (r === 10 ? '\\n' : String.fromCharCode(r)) +
                                    `-(${this._lineNumbers[s]},${this._columns[s]})`
                            )
                            .join(', ') +
                        ']'
                    )
                }
                _assertIndex(r, s) {
                    if (r < 0 || r >= s.length) throw new Error('Illegal index')
                }
                getElements() {
                    return this._charCodes
                }
                getStartLineNumber(r) {
                    return r > 0 && r === this._lineNumbers.length
                        ? this.getEndLineNumber(r - 1)
                        : (this._assertIndex(r, this._lineNumbers), this._lineNumbers[r])
                }
                getEndLineNumber(r) {
                    return r === -1
                        ? this.getStartLineNumber(r + 1)
                        : (this._assertIndex(r, this._lineNumbers),
                          this._charCodes[r] === 10
                              ? this._lineNumbers[r] + 1
                              : this._lineNumbers[r])
                }
                getStartColumn(r) {
                    return r > 0 && r === this._columns.length
                        ? this.getEndColumn(r - 1)
                        : (this._assertIndex(r, this._columns), this._columns[r])
                }
                getEndColumn(r) {
                    return r === -1
                        ? this.getStartColumn(r + 1)
                        : (this._assertIndex(r, this._columns),
                          this._charCodes[r] === 10 ? 1 : this._columns[r] + 1)
                }
            }
            class c {
                constructor(r, s, l, p, b, v, R, N) {
                    ;(this.originalStartLineNumber = r),
                        (this.originalStartColumn = s),
                        (this.originalEndLineNumber = l),
                        (this.originalEndColumn = p),
                        (this.modifiedStartLineNumber = b),
                        (this.modifiedStartColumn = v),
                        (this.modifiedEndLineNumber = R),
                        (this.modifiedEndColumn = N)
                }
                static createFromDiffChange(r, s, l) {
                    const p = s.getStartLineNumber(r.originalStart),
                        b = s.getStartColumn(r.originalStart),
                        v = s.getEndLineNumber(r.originalStart + r.originalLength - 1),
                        R = s.getEndColumn(r.originalStart + r.originalLength - 1),
                        N = l.getStartLineNumber(r.modifiedStart),
                        D = l.getStartColumn(r.modifiedStart),
                        x = l.getEndLineNumber(r.modifiedStart + r.modifiedLength - 1),
                        T = l.getEndColumn(r.modifiedStart + r.modifiedLength - 1)
                    return new c(p, b, v, R, N, D, x, T)
                }
            }
            function m(_) {
                if (_.length <= 1) return _
                const r = [_[0]]
                let s = r[0]
                for (let l = 1, p = _.length; l < p; l++) {
                    const b = _[l],
                        v = b.originalStart - (s.originalStart + s.originalLength),
                        R = b.modifiedStart - (s.modifiedStart + s.modifiedLength)
                    Math.min(v, R) < o
                        ? ((s.originalLength =
                              b.originalStart + b.originalLength - s.originalStart),
                          (s.modifiedLength = b.modifiedStart + b.modifiedLength - s.modifiedStart))
                        : (r.push(b), (s = b))
                }
                return r
            }
            class f {
                constructor(r, s, l, p, b) {
                    ;(this.originalStartLineNumber = r),
                        (this.originalEndLineNumber = s),
                        (this.modifiedStartLineNumber = l),
                        (this.modifiedEndLineNumber = p),
                        (this.charChanges = b)
                }
                static createFromDiffResult(r, s, l, p, b, v, R) {
                    let N, D, x, T, F
                    if (
                        (s.originalLength === 0
                            ? ((N = l.getStartLineNumber(s.originalStart) - 1), (D = 0))
                            : ((N = l.getStartLineNumber(s.originalStart)),
                              (D = l.getEndLineNumber(s.originalStart + s.originalLength - 1))),
                        s.modifiedLength === 0
                            ? ((x = p.getStartLineNumber(s.modifiedStart) - 1), (T = 0))
                            : ((x = p.getStartLineNumber(s.modifiedStart)),
                              (T = p.getEndLineNumber(s.modifiedStart + s.modifiedLength - 1))),
                        v &&
                            s.originalLength > 0 &&
                            s.originalLength < 20 &&
                            s.modifiedLength > 0 &&
                            s.modifiedLength < 20 &&
                            b())
                    ) {
                        const U = l.createCharSequence(
                                r,
                                s.originalStart,
                                s.originalStart + s.originalLength - 1
                            ),
                            z = p.createCharSequence(
                                r,
                                s.modifiedStart,
                                s.modifiedStart + s.modifiedLength - 1
                            )
                        if (U.getElements().length > 0 && z.getElements().length > 0) {
                            let k = e(U, z, b, !0).changes
                            R && (k = m(k)), (F = [])
                            for (let O = 0, I = k.length; O < I; O++)
                                F.push(c.createFromDiffChange(k[O], U, z))
                        }
                    }
                    return new f(N, D, x, T, F)
                }
            }
            class S {
                constructor(r, s, l) {
                    ;(this.shouldComputeCharChanges = l.shouldComputeCharChanges),
                        (this.shouldPostProcessCharChanges = l.shouldPostProcessCharChanges),
                        (this.shouldIgnoreTrimWhitespace = l.shouldIgnoreTrimWhitespace),
                        (this.shouldMakePrettyDiff = l.shouldMakePrettyDiff),
                        (this.originalLines = r),
                        (this.modifiedLines = s),
                        (this.original = new a(r)),
                        (this.modified = new a(s)),
                        (this.continueLineDiff = y(l.maxComputationTime)),
                        (this.continueCharDiff = y(
                            l.maxComputationTime === 0 ? 0 : Math.min(l.maxComputationTime, 5e3)
                        ))
                }
                computeDiff() {
                    if (this.original.lines.length === 1 && this.original.lines[0].length === 0)
                        return this.modified.lines.length === 1 &&
                            this.modified.lines[0].length === 0
                            ? { quitEarly: !1, changes: [] }
                            : {
                                  quitEarly: !1,
                                  changes: [
                                      {
                                          originalStartLineNumber: 1,
                                          originalEndLineNumber: 1,
                                          modifiedStartLineNumber: 1,
                                          modifiedEndLineNumber: this.modified.lines.length,
                                          charChanges: void 0
                                      }
                                  ]
                              }
                    if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0)
                        return {
                            quitEarly: !1,
                            changes: [
                                {
                                    originalStartLineNumber: 1,
                                    originalEndLineNumber: this.original.lines.length,
                                    modifiedStartLineNumber: 1,
                                    modifiedEndLineNumber: 1,
                                    charChanges: void 0
                                }
                            ]
                        }
                    const r = e(
                            this.original,
                            this.modified,
                            this.continueLineDiff,
                            this.shouldMakePrettyDiff
                        ),
                        s = r.changes,
                        l = r.quitEarly
                    if (this.shouldIgnoreTrimWhitespace) {
                        const R = []
                        for (let N = 0, D = s.length; N < D; N++)
                            R.push(
                                f.createFromDiffResult(
                                    this.shouldIgnoreTrimWhitespace,
                                    s[N],
                                    this.original,
                                    this.modified,
                                    this.continueCharDiff,
                                    this.shouldComputeCharChanges,
                                    this.shouldPostProcessCharChanges
                                )
                            )
                        return { quitEarly: l, changes: R }
                    }
                    const p = []
                    let b = 0,
                        v = 0
                    for (let R = -1, N = s.length; R < N; R++) {
                        const D = R + 1 < N ? s[R + 1] : null,
                            x = D ? D.originalStart : this.originalLines.length,
                            T = D ? D.modifiedStart : this.modifiedLines.length
                        for (; b < x && v < T; ) {
                            const F = this.originalLines[b],
                                U = this.modifiedLines[v]
                            if (F !== U) {
                                {
                                    let z = w(F, 1),
                                        k = w(U, 1)
                                    for (; z > 1 && k > 1; ) {
                                        const O = F.charCodeAt(z - 2),
                                            I = U.charCodeAt(k - 2)
                                        if (O !== I) break
                                        z--, k--
                                    }
                                    ;(z > 1 || k > 1) &&
                                        this._pushTrimWhitespaceCharChange(
                                            p,
                                            b + 1,
                                            1,
                                            z,
                                            v + 1,
                                            1,
                                            k
                                        )
                                }
                                {
                                    let z = E(F, 1),
                                        k = E(U, 1)
                                    const O = F.length + 1,
                                        I = U.length + 1
                                    for (; z < O && k < I; ) {
                                        const V = F.charCodeAt(z - 1),
                                            H = F.charCodeAt(k - 1)
                                        if (V !== H) break
                                        z++, k++
                                    }
                                    ;(z < O || k < I) &&
                                        this._pushTrimWhitespaceCharChange(
                                            p,
                                            b + 1,
                                            z,
                                            O,
                                            v + 1,
                                            k,
                                            I
                                        )
                                }
                            }
                            b++, v++
                        }
                        D &&
                            (p.push(
                                f.createFromDiffResult(
                                    this.shouldIgnoreTrimWhitespace,
                                    D,
                                    this.original,
                                    this.modified,
                                    this.continueCharDiff,
                                    this.shouldComputeCharChanges,
                                    this.shouldPostProcessCharChanges
                                )
                            ),
                            (b += D.originalLength),
                            (v += D.modifiedLength))
                    }
                    return { quitEarly: l, changes: p }
                }
                _pushTrimWhitespaceCharChange(r, s, l, p, b, v, R) {
                    if (this._mergeTrimWhitespaceCharChange(r, s, l, p, b, v, R)) return
                    let N
                    this.shouldComputeCharChanges && (N = [new c(s, l, s, p, b, v, b, R)]),
                        r.push(new f(s, s, b, b, N))
                }
                _mergeTrimWhitespaceCharChange(r, s, l, p, b, v, R) {
                    const N = r.length
                    if (N === 0) return !1
                    const D = r[N - 1]
                    return D.originalEndLineNumber === 0 || D.modifiedEndLineNumber === 0
                        ? !1
                        : D.originalEndLineNumber === s && D.modifiedEndLineNumber === b
                          ? (this.shouldComputeCharChanges &&
                                D.charChanges &&
                                D.charChanges.push(new c(s, l, s, p, b, v, b, R)),
                            !0)
                          : D.originalEndLineNumber + 1 === s && D.modifiedEndLineNumber + 1 === b
                            ? ((D.originalEndLineNumber = s),
                              (D.modifiedEndLineNumber = b),
                              this.shouldComputeCharChanges &&
                                  D.charChanges &&
                                  D.charChanges.push(new c(s, l, s, p, b, v, b, R)),
                              !0)
                            : !1
                }
            }
            n.DiffComputer = S
            function w(_, r) {
                const s = d.firstNonWhitespaceIndex(_)
                return s === -1 ? r : s + 1
            }
            function E(_, r) {
                const s = d.lastNonWhitespaceIndex(_)
                return s === -1 ? r : s + 2
            }
            function y(_) {
                if (_ === 0) return () => !0
                const r = Date.now()
                return () => Date.now() - r < _
            }
        }),
        X(J[49], Z([0, 1, 48, 47]), function (q, n, M, A) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.linesDiffComputers = void 0),
                (n.linesDiffComputers = {
                    getLegacy: () => new M.LegacyLinesDiffComputer(),
                    getDefault: () => new A.DefaultLinesDiffComputer()
                })
        }),
        X(J[50], Z([0, 1, 33]), function (q, n, M) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.computeDefaultDocumentColors = void 0)
            function A(a) {
                const u = []
                for (const c of a) {
                    const m = Number(c)
                    ;(m || (m === 0 && c.replace(/\s/g, '') !== '')) && u.push(m)
                }
                return u
            }
            function i(a, u, c, m) {
                return { red: a / 255, blue: c / 255, green: u / 255, alpha: m }
            }
            function d(a, u) {
                const c = u.index,
                    m = u[0].length
                if (!c) return
                const f = a.positionAt(c)
                return {
                    startLineNumber: f.lineNumber,
                    startColumn: f.column,
                    endLineNumber: f.lineNumber,
                    endColumn: f.column + m
                }
            }
            function g(a, u) {
                if (!a) return
                const c = M.Color.Format.CSS.parseHex(u)
                if (c) return { range: a, color: i(c.rgba.r, c.rgba.g, c.rgba.b, c.rgba.a) }
            }
            function L(a, u, c) {
                if (!a || u.length !== 1) return
                const f = u[0].values(),
                    S = A(f)
                return { range: a, color: i(S[0], S[1], S[2], c ? S[3] : 1) }
            }
            function h(a, u, c) {
                if (!a || u.length !== 1) return
                const f = u[0].values(),
                    S = A(f),
                    w = new M.Color(new M.HSLA(S[0], S[1] / 100, S[2] / 100, c ? S[3] : 1))
                return { range: a, color: i(w.rgba.r, w.rgba.g, w.rgba.b, w.rgba.a) }
            }
            function o(a, u) {
                return typeof a == 'string' ? [...a.matchAll(u)] : a.findMatches(u)
            }
            function C(a) {
                const u = [],
                    m = o(
                        a,
                        /\b(rgb|rgba|hsl|hsla)(\([0-9\s,.\%]*\))|(#)([A-Fa-f0-9]{3})\b|(#)([A-Fa-f0-9]{4})\b|(#)([A-Fa-f0-9]{6})\b|(#)([A-Fa-f0-9]{8})\b/gm
                    )
                if (m.length > 0)
                    for (const f of m) {
                        const S = f.filter((_) => _ !== void 0),
                            w = S[1],
                            E = S[2]
                        if (!E) continue
                        let y
                        if (w === 'rgb') {
                            const _ =
                                /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*\)$/gm
                            y = L(d(a, f), o(E, _), !1)
                        } else if (w === 'rgba') {
                            const _ =
                                /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm
                            y = L(d(a, f), o(E, _), !0)
                        } else if (w === 'hsl') {
                            const _ =
                                /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*\)$/gm
                            y = h(d(a, f), o(E, _), !1)
                        } else if (w === 'hsla') {
                            const _ =
                                /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm
                            y = h(d(a, f), o(E, _), !0)
                        } else w === '#' && (y = g(d(a, f), w + E))
                        y && u.push(y)
                    }
                return u
            }
            function e(a) {
                return !a || typeof a.getValue != 'function' || typeof a.positionAt != 'function'
                    ? []
                    : C(a)
            }
            n.computeDefaultDocumentColors = e
        }),
        X(J[51], Z([0, 1, 27]), function (q, n, M) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.computeLinks = n.LinkComputer = n.StateMachine = void 0)
            class A {
                constructor(a, u, c) {
                    const m = new Uint8Array(a * u)
                    for (let f = 0, S = a * u; f < S; f++) m[f] = c
                    ;(this._data = m), (this.rows = a), (this.cols = u)
                }
                get(a, u) {
                    return this._data[a * this.cols + u]
                }
                set(a, u, c) {
                    this._data[a * this.cols + u] = c
                }
            }
            class i {
                constructor(a) {
                    let u = 0,
                        c = 0
                    for (let f = 0, S = a.length; f < S; f++) {
                        const [w, E, y] = a[f]
                        E > u && (u = E), w > c && (c = w), y > c && (c = y)
                    }
                    u++, c++
                    const m = new A(c, u, 0)
                    for (let f = 0, S = a.length; f < S; f++) {
                        const [w, E, y] = a[f]
                        m.set(w, E, y)
                    }
                    ;(this._states = m), (this._maxCharCode = u)
                }
                nextState(a, u) {
                    return u < 0 || u >= this._maxCharCode ? 0 : this._states.get(a, u)
                }
            }
            n.StateMachine = i
            let d = null
            function g() {
                return (
                    d === null &&
                        (d = new i([
                            [1, 104, 2],
                            [1, 72, 2],
                            [1, 102, 6],
                            [1, 70, 6],
                            [2, 116, 3],
                            [2, 84, 3],
                            [3, 116, 4],
                            [3, 84, 4],
                            [4, 112, 5],
                            [4, 80, 5],
                            [5, 115, 9],
                            [5, 83, 9],
                            [5, 58, 10],
                            [6, 105, 7],
                            [6, 73, 7],
                            [7, 108, 8],
                            [7, 76, 8],
                            [8, 101, 9],
                            [8, 69, 9],
                            [9, 58, 10],
                            [10, 47, 11],
                            [11, 47, 12]
                        ])),
                    d
                )
            }
            let L = null
            function h() {
                if (L === null) {
                    L = new M.CharacterClassifier(0)
                    const e = ` 	<>'"\u3001\u3002\uFF61\uFF64\uFF0C\uFF0E\uFF1A\uFF1B\u2018\u3008\u300C\u300E\u3014\uFF08\uFF3B\uFF5B\uFF62\uFF63\uFF5D\uFF3D\uFF09\u3015\u300F\u300D\u3009\u2019\uFF40\uFF5E\u2026`
                    for (let u = 0; u < e.length; u++) L.set(e.charCodeAt(u), 1)
                    const a = '.,;:'
                    for (let u = 0; u < a.length; u++) L.set(a.charCodeAt(u), 2)
                }
                return L
            }
            class o {
                static _createLink(a, u, c, m, f) {
                    let S = f - 1
                    do {
                        const w = u.charCodeAt(S)
                        if (a.get(w) !== 2) break
                        S--
                    } while (S > m)
                    if (m > 0) {
                        const w = u.charCodeAt(m - 1),
                            E = u.charCodeAt(S)
                        ;((w === 40 && E === 41) ||
                            (w === 91 && E === 93) ||
                            (w === 123 && E === 125)) &&
                            S--
                    }
                    return {
                        range: {
                            startLineNumber: c,
                            startColumn: m + 1,
                            endLineNumber: c,
                            endColumn: S + 2
                        },
                        url: u.substring(m, S + 1)
                    }
                }
                static computeLinks(a, u = g()) {
                    const c = h(),
                        m = []
                    for (let f = 1, S = a.getLineCount(); f <= S; f++) {
                        const w = a.getLineContent(f),
                            E = w.length
                        let y = 0,
                            _ = 0,
                            r = 0,
                            s = 1,
                            l = !1,
                            p = !1,
                            b = !1,
                            v = !1
                        for (; y < E; ) {
                            let R = !1
                            const N = w.charCodeAt(y)
                            if (s === 13) {
                                let D
                                switch (N) {
                                    case 40:
                                        ;(l = !0), (D = 0)
                                        break
                                    case 41:
                                        D = l ? 0 : 1
                                        break
                                    case 91:
                                        ;(b = !0), (p = !0), (D = 0)
                                        break
                                    case 93:
                                        ;(b = !1), (D = p ? 0 : 1)
                                        break
                                    case 123:
                                        ;(v = !0), (D = 0)
                                        break
                                    case 125:
                                        D = v ? 0 : 1
                                        break
                                    case 39:
                                    case 34:
                                    case 96:
                                        r === N
                                            ? (D = 1)
                                            : r === 39 || r === 34 || r === 96
                                              ? (D = 0)
                                              : (D = 1)
                                        break
                                    case 42:
                                        D = r === 42 ? 1 : 0
                                        break
                                    case 124:
                                        D = r === 124 ? 1 : 0
                                        break
                                    case 32:
                                        D = b ? 0 : 1
                                        break
                                    default:
                                        D = c.get(N)
                                }
                                D === 1 && (m.push(o._createLink(c, w, f, _, y)), (R = !0))
                            } else if (s === 12) {
                                let D
                                N === 91 ? ((p = !0), (D = 0)) : (D = c.get(N)),
                                    D === 1 ? (R = !0) : (s = 13)
                            } else (s = u.nextState(s, N)), s === 0 && (R = !0)
                            R && ((s = 1), (l = !1), (p = !1), (v = !1), (_ = y + 1), (r = N)), y++
                        }
                        s === 13 && m.push(o._createLink(c, w, f, _, E))
                    }
                    return m
                }
            }
            n.LinkComputer = o
            function C(e) {
                return !e ||
                    typeof e.getLineCount != 'function' ||
                    typeof e.getLineContent != 'function'
                    ? []
                    : o.computeLinks(e)
            }
            n.computeLinks = C
        }),
        X(J[52], Z([0, 1]), function (q, n) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }), (n.BasicInplaceReplace = void 0)
            class M {
                constructor() {
                    this._defaultValueSet = [
                        ['true', 'false'],
                        ['True', 'False'],
                        [
                            'Private',
                            'Public',
                            'Friend',
                            'ReadOnly',
                            'Partial',
                            'Protected',
                            'WriteOnly'
                        ],
                        ['public', 'protected', 'private']
                    ]
                }
                navigateValueSet(i, d, g, L, h) {
                    if (i && d) {
                        const o = this.doNavigateValueSet(d, h)
                        if (o) return { range: i, value: o }
                    }
                    if (g && L) {
                        const o = this.doNavigateValueSet(L, h)
                        if (o) return { range: g, value: o }
                    }
                    return null
                }
                doNavigateValueSet(i, d) {
                    const g = this.numberReplace(i, d)
                    return g !== null ? g : this.textReplace(i, d)
                }
                numberReplace(i, d) {
                    const g = Math.pow(10, i.length - (i.lastIndexOf('.') + 1))
                    let L = Number(i)
                    const h = parseFloat(i)
                    return !isNaN(L) && !isNaN(h) && L === h
                        ? L === 0 && !d
                            ? null
                            : ((L = Math.floor(L * g)), (L += d ? g : -g), String(L / g))
                        : null
                }
                textReplace(i, d) {
                    return this.valueSetsReplace(this._defaultValueSet, i, d)
                }
                valueSetsReplace(i, d, g) {
                    let L = null
                    for (let h = 0, o = i.length; L === null && h < o; h++)
                        L = this.valueSetReplace(i[h], d, g)
                    return L
                }
                valueSetReplace(i, d, g) {
                    let L = i.indexOf(d)
                    return L >= 0
                        ? ((L += g ? 1 : -1), L < 0 ? (L = i.length - 1) : (L %= i.length), i[L])
                        : null
                }
            }
            ;(n.BasicInplaceReplace = M), (M.INSTANCE = new M())
        }),
        X(J[53], Z([0, 1, 14]), function (q, n, M) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.shouldSynchronizeModel =
                    n.ApplyEditsResult =
                    n.SearchData =
                    n.ValidAnnotatedEditOperation =
                    n.isITextSnapshot =
                    n.FindMatch =
                    n.TextModelResolvedOptions =
                    n.InjectedTextCursorStops =
                    n.MinimapPosition =
                    n.GlyphMarginLane =
                    n.OverviewRulerLane =
                        void 0)
            var A
            ;(function (c) {
                ;(c[(c.Left = 1)] = 'Left'),
                    (c[(c.Center = 2)] = 'Center'),
                    (c[(c.Right = 4)] = 'Right'),
                    (c[(c.Full = 7)] = 'Full')
            })(A || (n.OverviewRulerLane = A = {}))
            var i
            ;(function (c) {
                ;(c[(c.Left = 1)] = 'Left'), (c[(c.Right = 2)] = 'Right')
            })(i || (n.GlyphMarginLane = i = {}))
            var d
            ;(function (c) {
                ;(c[(c.Inline = 1)] = 'Inline'), (c[(c.Gutter = 2)] = 'Gutter')
            })(d || (n.MinimapPosition = d = {}))
            var g
            ;(function (c) {
                ;(c[(c.Both = 0)] = 'Both'),
                    (c[(c.Right = 1)] = 'Right'),
                    (c[(c.Left = 2)] = 'Left'),
                    (c[(c.None = 3)] = 'None')
            })(g || (n.InjectedTextCursorStops = g = {}))
            class L {
                get originalIndentSize() {
                    return this._indentSizeIsTabSize ? 'tabSize' : this.indentSize
                }
                constructor(m) {
                    ;(this._textModelResolvedOptionsBrand = void 0),
                        (this.tabSize = Math.max(1, m.tabSize | 0)),
                        m.indentSize === 'tabSize'
                            ? ((this.indentSize = this.tabSize), (this._indentSizeIsTabSize = !0))
                            : ((this.indentSize = Math.max(1, m.indentSize | 0)),
                              (this._indentSizeIsTabSize = !1)),
                        (this.insertSpaces = !!m.insertSpaces),
                        (this.defaultEOL = m.defaultEOL | 0),
                        (this.trimAutoWhitespace = !!m.trimAutoWhitespace),
                        (this.bracketPairColorizationOptions = m.bracketPairColorizationOptions)
                }
                equals(m) {
                    return (
                        this.tabSize === m.tabSize &&
                        this._indentSizeIsTabSize === m._indentSizeIsTabSize &&
                        this.indentSize === m.indentSize &&
                        this.insertSpaces === m.insertSpaces &&
                        this.defaultEOL === m.defaultEOL &&
                        this.trimAutoWhitespace === m.trimAutoWhitespace &&
                        (0, M.equals)(
                            this.bracketPairColorizationOptions,
                            m.bracketPairColorizationOptions
                        )
                    )
                }
                createChangeEvent(m) {
                    return {
                        tabSize: this.tabSize !== m.tabSize,
                        indentSize: this.indentSize !== m.indentSize,
                        insertSpaces: this.insertSpaces !== m.insertSpaces,
                        trimAutoWhitespace: this.trimAutoWhitespace !== m.trimAutoWhitespace
                    }
                }
            }
            n.TextModelResolvedOptions = L
            class h {
                constructor(m, f) {
                    ;(this._findMatchBrand = void 0), (this.range = m), (this.matches = f)
                }
            }
            n.FindMatch = h
            function o(c) {
                return c && typeof c.read == 'function'
            }
            n.isITextSnapshot = o
            class C {
                constructor(m, f, S, w, E, y) {
                    ;(this.identifier = m),
                        (this.range = f),
                        (this.text = S),
                        (this.forceMoveMarkers = w),
                        (this.isAutoWhitespaceEdit = E),
                        (this._isTracked = y)
                }
            }
            n.ValidAnnotatedEditOperation = C
            class e {
                constructor(m, f, S) {
                    ;(this.regex = m), (this.wordSeparators = f), (this.simpleSearch = S)
                }
            }
            n.SearchData = e
            class a {
                constructor(m, f, S) {
                    ;(this.reverseEdits = m),
                        (this.changes = f),
                        (this.trimAutoWhitespaceLineNumbers = S)
                }
            }
            n.ApplyEditsResult = a
            function u(c) {
                return !c.isTooLargeForSyncing() && !c.isForSimpleWidget
            }
            n.shouldSynchronizeModel = u
        }),
        X(J[54], Z([0, 1, 7, 26]), function (q, n, M, A) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.PrefixSumIndexOfResult =
                    n.ConstantTimePrefixSumComputer =
                    n.PrefixSumComputer =
                        void 0)
            class i {
                constructor(h) {
                    ;(this.values = h),
                        (this.prefixSum = new Uint32Array(h.length)),
                        (this.prefixSumValidIndex = new Int32Array(1)),
                        (this.prefixSumValidIndex[0] = -1)
                }
                insertValues(h, o) {
                    h = (0, A.toUint32)(h)
                    const C = this.values,
                        e = this.prefixSum,
                        a = o.length
                    return a === 0
                        ? !1
                        : ((this.values = new Uint32Array(C.length + a)),
                          this.values.set(C.subarray(0, h), 0),
                          this.values.set(C.subarray(h), h + a),
                          this.values.set(o, h),
                          h - 1 < this.prefixSumValidIndex[0] &&
                              (this.prefixSumValidIndex[0] = h - 1),
                          (this.prefixSum = new Uint32Array(this.values.length)),
                          this.prefixSumValidIndex[0] >= 0 &&
                              this.prefixSum.set(e.subarray(0, this.prefixSumValidIndex[0] + 1)),
                          !0)
                }
                setValue(h, o) {
                    return (
                        (h = (0, A.toUint32)(h)),
                        (o = (0, A.toUint32)(o)),
                        this.values[h] === o
                            ? !1
                            : ((this.values[h] = o),
                              h - 1 < this.prefixSumValidIndex[0] &&
                                  (this.prefixSumValidIndex[0] = h - 1),
                              !0)
                    )
                }
                removeValues(h, o) {
                    ;(h = (0, A.toUint32)(h)), (o = (0, A.toUint32)(o))
                    const C = this.values,
                        e = this.prefixSum
                    if (h >= C.length) return !1
                    const a = C.length - h
                    return (
                        o >= a && (o = a),
                        o === 0
                            ? !1
                            : ((this.values = new Uint32Array(C.length - o)),
                              this.values.set(C.subarray(0, h), 0),
                              this.values.set(C.subarray(h + o), h),
                              (this.prefixSum = new Uint32Array(this.values.length)),
                              h - 1 < this.prefixSumValidIndex[0] &&
                                  (this.prefixSumValidIndex[0] = h - 1),
                              this.prefixSumValidIndex[0] >= 0 &&
                                  this.prefixSum.set(
                                      e.subarray(0, this.prefixSumValidIndex[0] + 1)
                                  ),
                              !0)
                    )
                }
                getTotalSum() {
                    return this.values.length === 0 ? 0 : this._getPrefixSum(this.values.length - 1)
                }
                getPrefixSum(h) {
                    return h < 0 ? 0 : ((h = (0, A.toUint32)(h)), this._getPrefixSum(h))
                }
                _getPrefixSum(h) {
                    if (h <= this.prefixSumValidIndex[0]) return this.prefixSum[h]
                    let o = this.prefixSumValidIndex[0] + 1
                    o === 0 && ((this.prefixSum[0] = this.values[0]), o++),
                        h >= this.values.length && (h = this.values.length - 1)
                    for (let C = o; C <= h; C++)
                        this.prefixSum[C] = this.prefixSum[C - 1] + this.values[C]
                    return (
                        (this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], h)),
                        this.prefixSum[h]
                    )
                }
                getIndexOf(h) {
                    ;(h = Math.floor(h)), this.getTotalSum()
                    let o = 0,
                        C = this.values.length - 1,
                        e = 0,
                        a = 0,
                        u = 0
                    for (; o <= C; )
                        if (
                            ((e = (o + (C - o) / 2) | 0),
                            (a = this.prefixSum[e]),
                            (u = a - this.values[e]),
                            h < u)
                        )
                            C = e - 1
                        else if (h >= a) o = e + 1
                        else break
                    return new g(e, h - u)
                }
            }
            n.PrefixSumComputer = i
            class d {
                constructor(h) {
                    ;(this._values = h),
                        (this._isValid = !1),
                        (this._validEndIndex = -1),
                        (this._prefixSum = []),
                        (this._indexBySum = [])
                }
                getTotalSum() {
                    return this._ensureValid(), this._indexBySum.length
                }
                getPrefixSum(h) {
                    return this._ensureValid(), h === 0 ? 0 : this._prefixSum[h - 1]
                }
                getIndexOf(h) {
                    this._ensureValid()
                    const o = this._indexBySum[h],
                        C = o > 0 ? this._prefixSum[o - 1] : 0
                    return new g(o, h - C)
                }
                removeValues(h, o) {
                    this._values.splice(h, o), this._invalidate(h)
                }
                insertValues(h, o) {
                    ;(this._values = (0, M.arrayInsert)(this._values, h, o)), this._invalidate(h)
                }
                _invalidate(h) {
                    ;(this._isValid = !1),
                        (this._validEndIndex = Math.min(this._validEndIndex, h - 1))
                }
                _ensureValid() {
                    if (!this._isValid) {
                        for (let h = this._validEndIndex + 1, o = this._values.length; h < o; h++) {
                            const C = this._values[h],
                                e = h > 0 ? this._prefixSum[h - 1] : 0
                            this._prefixSum[h] = e + C
                            for (let a = 0; a < C; a++) this._indexBySum[e + a] = h
                        }
                        ;(this._prefixSum.length = this._values.length),
                            (this._indexBySum.length = this._prefixSum[this._prefixSum.length - 1]),
                            (this._isValid = !0),
                            (this._validEndIndex = this._values.length - 1)
                    }
                }
                setValue(h, o) {
                    this._values[h] !== o && ((this._values[h] = o), this._invalidate(h))
                }
            }
            n.ConstantTimePrefixSumComputer = d
            class g {
                constructor(h, o) {
                    ;(this.index = h),
                        (this.remainder = o),
                        (this._prefixSumIndexOfResultBrand = void 0),
                        (this.index = h),
                        (this.remainder = o)
                }
            }
            n.PrefixSumIndexOfResult = g
        }),
        X(J[55], Z([0, 1, 6, 4, 54]), function (q, n, M, A, i) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }), (n.MirrorTextModel = void 0)
            class d {
                constructor(L, h, o, C) {
                    ;(this._uri = L),
                        (this._lines = h),
                        (this._eol = o),
                        (this._versionId = C),
                        (this._lineStarts = null),
                        (this._cachedTextValue = null)
                }
                dispose() {
                    this._lines.length = 0
                }
                get version() {
                    return this._versionId
                }
                getText() {
                    return (
                        this._cachedTextValue === null &&
                            (this._cachedTextValue = this._lines.join(this._eol)),
                        this._cachedTextValue
                    )
                }
                onEvents(L) {
                    L.eol && L.eol !== this._eol && ((this._eol = L.eol), (this._lineStarts = null))
                    const h = L.changes
                    for (const o of h)
                        this._acceptDeleteRange(o.range),
                            this._acceptInsertText(
                                new A.Position(o.range.startLineNumber, o.range.startColumn),
                                o.text
                            )
                    ;(this._versionId = L.versionId), (this._cachedTextValue = null)
                }
                _ensureLineStarts() {
                    if (!this._lineStarts) {
                        const L = this._eol.length,
                            h = this._lines.length,
                            o = new Uint32Array(h)
                        for (let C = 0; C < h; C++) o[C] = this._lines[C].length + L
                        this._lineStarts = new i.PrefixSumComputer(o)
                    }
                }
                _setLineText(L, h) {
                    ;(this._lines[L] = h),
                        this._lineStarts &&
                            this._lineStarts.setValue(L, this._lines[L].length + this._eol.length)
                }
                _acceptDeleteRange(L) {
                    if (L.startLineNumber === L.endLineNumber) {
                        if (L.startColumn === L.endColumn) return
                        this._setLineText(
                            L.startLineNumber - 1,
                            this._lines[L.startLineNumber - 1].substring(0, L.startColumn - 1) +
                                this._lines[L.startLineNumber - 1].substring(L.endColumn - 1)
                        )
                        return
                    }
                    this._setLineText(
                        L.startLineNumber - 1,
                        this._lines[L.startLineNumber - 1].substring(0, L.startColumn - 1) +
                            this._lines[L.endLineNumber - 1].substring(L.endColumn - 1)
                    ),
                        this._lines.splice(L.startLineNumber, L.endLineNumber - L.startLineNumber),
                        this._lineStarts &&
                            this._lineStarts.removeValues(
                                L.startLineNumber,
                                L.endLineNumber - L.startLineNumber
                            )
                }
                _acceptInsertText(L, h) {
                    if (h.length === 0) return
                    const o = (0, M.splitLines)(h)
                    if (o.length === 1) {
                        this._setLineText(
                            L.lineNumber - 1,
                            this._lines[L.lineNumber - 1].substring(0, L.column - 1) +
                                o[0] +
                                this._lines[L.lineNumber - 1].substring(L.column - 1)
                        )
                        return
                    }
                    ;(o[o.length - 1] += this._lines[L.lineNumber - 1].substring(L.column - 1)),
                        this._setLineText(
                            L.lineNumber - 1,
                            this._lines[L.lineNumber - 1].substring(0, L.column - 1) + o[0]
                        )
                    const C = new Uint32Array(o.length - 1)
                    for (let e = 1; e < o.length; e++)
                        this._lines.splice(L.lineNumber + e - 1, 0, o[e]),
                            (C[e - 1] = o[e].length + this._eol.length)
                    this._lineStarts && this._lineStarts.insertValues(L.lineNumber, C)
                }
            }
            n.MirrorTextModel = d
        }),
        X(J[56], Z([0, 1, 6, 42, 4, 2, 53]), function (q, n, M, A, i, d, g) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.Searcher =
                    n.isValidMatch =
                    n.TextModelSearch =
                    n.createFindMatch =
                    n.isMultilineRegexSource =
                    n.SearchParams =
                        void 0)
            const L = 999
            class h {
                constructor(w, E, y, _) {
                    ;(this.searchString = w),
                        (this.isRegex = E),
                        (this.matchCase = y),
                        (this.wordSeparators = _)
                }
                parseSearchRequest() {
                    if (this.searchString === '') return null
                    let w
                    this.isRegex
                        ? (w = o(this.searchString))
                        : (w =
                              this.searchString.indexOf(`
`) >= 0)
                    let E = null
                    try {
                        E = M.createRegExp(this.searchString, this.isRegex, {
                            matchCase: this.matchCase,
                            wholeWord: !1,
                            multiline: w,
                            global: !0,
                            unicode: !0
                        })
                    } catch {
                        return null
                    }
                    if (!E) return null
                    let y = !this.isRegex && !w
                    return (
                        y &&
                            this.searchString.toLowerCase() !== this.searchString.toUpperCase() &&
                            (y = this.matchCase),
                        new g.SearchData(
                            E,
                            this.wordSeparators
                                ? (0, A.getMapForWordSeparators)(this.wordSeparators)
                                : null,
                            y ? this.searchString : null
                        )
                    )
                }
            }
            n.SearchParams = h
            function o(S) {
                if (!S || S.length === 0) return !1
                for (let w = 0, E = S.length; w < E; w++) {
                    const y = S.charCodeAt(w)
                    if (y === 10) return !0
                    if (y === 92) {
                        if ((w++, w >= E)) break
                        const _ = S.charCodeAt(w)
                        if (_ === 110 || _ === 114 || _ === 87) return !0
                    }
                }
                return !1
            }
            n.isMultilineRegexSource = o
            function C(S, w, E) {
                if (!E) return new g.FindMatch(S, null)
                const y = []
                for (let _ = 0, r = w.length; _ < r; _++) y[_] = w[_]
                return new g.FindMatch(S, y)
            }
            n.createFindMatch = C
            class e {
                constructor(w) {
                    const E = []
                    let y = 0
                    for (let _ = 0, r = w.length; _ < r; _++) w.charCodeAt(_) === 10 && (E[y++] = _)
                    this._lineFeedsOffsets = E
                }
                findLineFeedCountBeforeOffset(w) {
                    const E = this._lineFeedsOffsets
                    let y = 0,
                        _ = E.length - 1
                    if (_ === -1 || w <= E[0]) return 0
                    for (; y < _; ) {
                        const r = y + (((_ - y) / 2) >> 0)
                        E[r] >= w ? (_ = r - 1) : E[r + 1] >= w ? ((y = r), (_ = r)) : (y = r + 1)
                    }
                    return y + 1
                }
            }
            class a {
                static findMatches(w, E, y, _, r) {
                    const s = E.parseSearchRequest()
                    return s
                        ? s.regex.multiline
                            ? this._doFindMatchesMultiline(
                                  w,
                                  y,
                                  new f(s.wordSeparators, s.regex),
                                  _,
                                  r
                              )
                            : this._doFindMatchesLineByLine(w, y, s, _, r)
                        : []
                }
                static _getMultilineMatchRange(w, E, y, _, r, s) {
                    let l,
                        p = 0
                    _ ? ((p = _.findLineFeedCountBeforeOffset(r)), (l = E + r + p)) : (l = E + r)
                    let b
                    if (_) {
                        const D = _.findLineFeedCountBeforeOffset(r + s.length) - p
                        b = l + s.length + D
                    } else b = l + s.length
                    const v = w.getPositionAt(l),
                        R = w.getPositionAt(b)
                    return new d.Range(v.lineNumber, v.column, R.lineNumber, R.column)
                }
                static _doFindMatchesMultiline(w, E, y, _, r) {
                    const s = w.getOffsetAt(E.getStartPosition()),
                        l = w.getValueInRange(E, 1),
                        p =
                            w.getEOL() ===
                            `\r
`
                                ? new e(l)
                                : null,
                        b = []
                    let v = 0,
                        R
                    for (y.reset(0); (R = y.next(l)); )
                        if (
                            ((b[v++] = C(
                                this._getMultilineMatchRange(w, s, l, p, R.index, R[0]),
                                R,
                                _
                            )),
                            v >= r)
                        )
                            return b
                    return b
                }
                static _doFindMatchesLineByLine(w, E, y, _, r) {
                    const s = []
                    let l = 0
                    if (E.startLineNumber === E.endLineNumber) {
                        const b = w
                            .getLineContent(E.startLineNumber)
                            .substring(E.startColumn - 1, E.endColumn - 1)
                        return (
                            (l = this._findMatchesInLine(
                                y,
                                b,
                                E.startLineNumber,
                                E.startColumn - 1,
                                l,
                                s,
                                _,
                                r
                            )),
                            s
                        )
                    }
                    const p = w.getLineContent(E.startLineNumber).substring(E.startColumn - 1)
                    l = this._findMatchesInLine(
                        y,
                        p,
                        E.startLineNumber,
                        E.startColumn - 1,
                        l,
                        s,
                        _,
                        r
                    )
                    for (let b = E.startLineNumber + 1; b < E.endLineNumber && l < r; b++)
                        l = this._findMatchesInLine(y, w.getLineContent(b), b, 0, l, s, _, r)
                    if (l < r) {
                        const b = w.getLineContent(E.endLineNumber).substring(0, E.endColumn - 1)
                        l = this._findMatchesInLine(y, b, E.endLineNumber, 0, l, s, _, r)
                    }
                    return s
                }
                static _findMatchesInLine(w, E, y, _, r, s, l, p) {
                    const b = w.wordSeparators
                    if (!l && w.simpleSearch) {
                        const N = w.simpleSearch,
                            D = N.length,
                            x = E.length
                        let T = -D
                        for (; (T = E.indexOf(N, T + D)) !== -1; )
                            if (
                                (!b || m(b, E, x, T, D)) &&
                                ((s[r++] = new g.FindMatch(
                                    new d.Range(y, T + 1 + _, y, T + 1 + D + _),
                                    null
                                )),
                                r >= p)
                            )
                                return r
                        return r
                    }
                    const v = new f(w.wordSeparators, w.regex)
                    let R
                    v.reset(0)
                    do
                        if (
                            ((R = v.next(E)),
                            R &&
                                ((s[r++] = C(
                                    new d.Range(
                                        y,
                                        R.index + 1 + _,
                                        y,
                                        R.index + 1 + R[0].length + _
                                    ),
                                    R,
                                    l
                                )),
                                r >= p))
                        )
                            return r
                    while (R)
                    return r
                }
                static findNextMatch(w, E, y, _) {
                    const r = E.parseSearchRequest()
                    if (!r) return null
                    const s = new f(r.wordSeparators, r.regex)
                    return r.regex.multiline
                        ? this._doFindNextMatchMultiline(w, y, s, _)
                        : this._doFindNextMatchLineByLine(w, y, s, _)
                }
                static _doFindNextMatchMultiline(w, E, y, _) {
                    const r = new i.Position(E.lineNumber, 1),
                        s = w.getOffsetAt(r),
                        l = w.getLineCount(),
                        p = w.getValueInRange(
                            new d.Range(r.lineNumber, r.column, l, w.getLineMaxColumn(l)),
                            1
                        ),
                        b =
                            w.getEOL() ===
                            `\r
`
                                ? new e(p)
                                : null
                    y.reset(E.column - 1)
                    const v = y.next(p)
                    return v
                        ? C(this._getMultilineMatchRange(w, s, p, b, v.index, v[0]), v, _)
                        : E.lineNumber !== 1 || E.column !== 1
                          ? this._doFindNextMatchMultiline(w, new i.Position(1, 1), y, _)
                          : null
                }
                static _doFindNextMatchLineByLine(w, E, y, _) {
                    const r = w.getLineCount(),
                        s = E.lineNumber,
                        l = w.getLineContent(s),
                        p = this._findFirstMatchInLine(y, l, s, E.column, _)
                    if (p) return p
                    for (let b = 1; b <= r; b++) {
                        const v = (s + b - 1) % r,
                            R = w.getLineContent(v + 1),
                            N = this._findFirstMatchInLine(y, R, v + 1, 1, _)
                        if (N) return N
                    }
                    return null
                }
                static _findFirstMatchInLine(w, E, y, _, r) {
                    w.reset(_ - 1)
                    const s = w.next(E)
                    return s
                        ? C(new d.Range(y, s.index + 1, y, s.index + 1 + s[0].length), s, r)
                        : null
                }
                static findPreviousMatch(w, E, y, _) {
                    const r = E.parseSearchRequest()
                    if (!r) return null
                    const s = new f(r.wordSeparators, r.regex)
                    return r.regex.multiline
                        ? this._doFindPreviousMatchMultiline(w, y, s, _)
                        : this._doFindPreviousMatchLineByLine(w, y, s, _)
                }
                static _doFindPreviousMatchMultiline(w, E, y, _) {
                    const r = this._doFindMatchesMultiline(
                        w,
                        new d.Range(1, 1, E.lineNumber, E.column),
                        y,
                        _,
                        10 * L
                    )
                    if (r.length > 0) return r[r.length - 1]
                    const s = w.getLineCount()
                    return E.lineNumber !== s || E.column !== w.getLineMaxColumn(s)
                        ? this._doFindPreviousMatchMultiline(
                              w,
                              new i.Position(s, w.getLineMaxColumn(s)),
                              y,
                              _
                          )
                        : null
                }
                static _doFindPreviousMatchLineByLine(w, E, y, _) {
                    const r = w.getLineCount(),
                        s = E.lineNumber,
                        l = w.getLineContent(s).substring(0, E.column - 1),
                        p = this._findLastMatchInLine(y, l, s, _)
                    if (p) return p
                    for (let b = 1; b <= r; b++) {
                        const v = (r + s - b - 1) % r,
                            R = w.getLineContent(v + 1),
                            N = this._findLastMatchInLine(y, R, v + 1, _)
                        if (N) return N
                    }
                    return null
                }
                static _findLastMatchInLine(w, E, y, _) {
                    let r = null,
                        s
                    for (w.reset(0); (s = w.next(E)); )
                        r = C(new d.Range(y, s.index + 1, y, s.index + 1 + s[0].length), s, _)
                    return r
                }
            }
            n.TextModelSearch = a
            function u(S, w, E, y, _) {
                if (y === 0) return !0
                const r = w.charCodeAt(y - 1)
                if (S.get(r) !== 0 || r === 13 || r === 10) return !0
                if (_ > 0) {
                    const s = w.charCodeAt(y)
                    if (S.get(s) !== 0) return !0
                }
                return !1
            }
            function c(S, w, E, y, _) {
                if (y + _ === E) return !0
                const r = w.charCodeAt(y + _)
                if (S.get(r) !== 0 || r === 13 || r === 10) return !0
                if (_ > 0) {
                    const s = w.charCodeAt(y + _ - 1)
                    if (S.get(s) !== 0) return !0
                }
                return !1
            }
            function m(S, w, E, y, _) {
                return u(S, w, E, y, _) && c(S, w, E, y, _)
            }
            n.isValidMatch = m
            class f {
                constructor(w, E) {
                    ;(this._wordSeparators = w),
                        (this._searchRegex = E),
                        (this._prevMatchStartIndex = -1),
                        (this._prevMatchLength = 0)
                }
                reset(w) {
                    ;(this._searchRegex.lastIndex = w),
                        (this._prevMatchStartIndex = -1),
                        (this._prevMatchLength = 0)
                }
                next(w) {
                    const E = w.length
                    let y
                    do {
                        if (
                            this._prevMatchStartIndex + this._prevMatchLength === E ||
                            ((y = this._searchRegex.exec(w)), !y)
                        )
                            return null
                        const _ = y.index,
                            r = y[0].length
                        if (_ === this._prevMatchStartIndex && r === this._prevMatchLength) {
                            if (r === 0) {
                                M.getNextCodePoint(w, E, this._searchRegex.lastIndex) > 65535
                                    ? (this._searchRegex.lastIndex += 2)
                                    : (this._searchRegex.lastIndex += 1)
                                continue
                            }
                            return null
                        }
                        if (
                            ((this._prevMatchStartIndex = _),
                            (this._prevMatchLength = r),
                            !this._wordSeparators || m(this._wordSeparators, w, E, _, r))
                        )
                            return y
                    } while (y)
                    return null
                }
            }
            n.Searcher = f
        }),
        X(J[57], Z([0, 1, 2, 56, 6, 12, 28]), function (q, n, M, A, i, d, g) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.UnicodeTextModelHighlighter = void 0)
            class L {
                static computeUnicodeHighlights(a, u, c) {
                    const m = c ? c.startLineNumber : 1,
                        f = c ? c.endLineNumber : a.getLineCount(),
                        S = new o(u),
                        w = S.getCandidateCodePoints()
                    let E
                    w === 'allNonBasicAscii'
                        ? (E = new RegExp('[^\\t\\n\\r\\x20-\\x7E]', 'g'))
                        : (E = new RegExp(`${h(Array.from(w))}`, 'g'))
                    const y = new A.Searcher(null, E),
                        _ = []
                    let r = !1,
                        s,
                        l = 0,
                        p = 0,
                        b = 0
                    e: for (let v = m, R = f; v <= R; v++) {
                        const N = a.getLineContent(v),
                            D = N.length
                        y.reset(0)
                        do
                            if (((s = y.next(N)), s)) {
                                let x = s.index,
                                    T = s.index + s[0].length
                                if (x > 0) {
                                    const k = N.charCodeAt(x - 1)
                                    i.isHighSurrogate(k) && x--
                                }
                                if (T + 1 < D) {
                                    const k = N.charCodeAt(T - 1)
                                    i.isHighSurrogate(k) && T++
                                }
                                const F = N.substring(x, T)
                                let U = (0, g.getWordAtText)(x + 1, g.DEFAULT_WORD_REGEXP, N, 0)
                                U && U.endColumn <= x + 1 && (U = null)
                                const z = S.shouldHighlightNonBasicASCII(F, U ? U.word : null)
                                if (z !== 0) {
                                    z === 3
                                        ? l++
                                        : z === 2
                                          ? p++
                                          : z === 1
                                            ? b++
                                            : (0, d.assertNever)(z)
                                    const k = 1e3
                                    if (_.length >= k) {
                                        r = !0
                                        break e
                                    }
                                    _.push(new M.Range(v, x + 1, v, T + 1))
                                }
                            }
                        while (s)
                    }
                    return {
                        ranges: _,
                        hasMore: r,
                        ambiguousCharacterCount: l,
                        invisibleCharacterCount: p,
                        nonBasicAsciiCharacterCount: b
                    }
                }
                static computeUnicodeHighlightReason(a, u) {
                    const c = new o(u)
                    switch (c.shouldHighlightNonBasicASCII(a, null)) {
                        case 0:
                            return null
                        case 2:
                            return { kind: 1 }
                        case 3: {
                            const f = a.codePointAt(0),
                                S = c.ambiguousCharacters.getPrimaryConfusable(f),
                                w = i.AmbiguousCharacters.getLocales().filter(
                                    (E) =>
                                        !i.AmbiguousCharacters.getInstance(
                                            new Set([...u.allowedLocales, E])
                                        ).isAmbiguous(f)
                                )
                            return {
                                kind: 0,
                                confusableWith: String.fromCodePoint(S),
                                notAmbiguousInLocales: w
                            }
                        }
                        case 1:
                            return { kind: 2 }
                    }
                }
            }
            n.UnicodeTextModelHighlighter = L
            function h(e, a) {
                return `[${i.escapeRegExpCharacters(e.map((c) => String.fromCodePoint(c)).join(''))}]`
            }
            class o {
                constructor(a) {
                    ;(this.options = a),
                        (this.allowedCodePoints = new Set(a.allowedCodePoints)),
                        (this.ambiguousCharacters = i.AmbiguousCharacters.getInstance(
                            new Set(a.allowedLocales)
                        ))
                }
                getCandidateCodePoints() {
                    if (this.options.nonBasicASCII) return 'allNonBasicAscii'
                    const a = new Set()
                    if (this.options.invisibleCharacters)
                        for (const u of i.InvisibleCharacters.codePoints)
                            C(String.fromCodePoint(u)) || a.add(u)
                    if (this.options.ambiguousCharacters)
                        for (const u of this.ambiguousCharacters.getConfusableCodePoints()) a.add(u)
                    for (const u of this.allowedCodePoints) a.delete(u)
                    return a
                }
                shouldHighlightNonBasicASCII(a, u) {
                    const c = a.codePointAt(0)
                    if (this.allowedCodePoints.has(c)) return 0
                    if (this.options.nonBasicASCII) return 1
                    let m = !1,
                        f = !1
                    if (u)
                        for (const S of u) {
                            const w = S.codePointAt(0),
                                E = i.isBasicASCII(S)
                            ;(m = m || E),
                                !E &&
                                    !this.ambiguousCharacters.isAmbiguous(w) &&
                                    !i.InvisibleCharacters.isInvisibleCharacter(w) &&
                                    (f = !0)
                        }
                    return !m && f
                        ? 0
                        : this.options.invisibleCharacters &&
                            !C(a) &&
                            i.InvisibleCharacters.isInvisibleCharacter(c)
                          ? 2
                          : this.options.ambiguousCharacters &&
                              this.ambiguousCharacters.isAmbiguous(c)
                            ? 3
                            : 0
                }
            }
            function C(e) {
                return (
                    e === ' ' ||
                    e ===
                        `
` ||
                    e === '	'
                )
            }
        }),
        X(J[58], Z([0, 1]), function (q, n) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.WrappingIndent =
                    n.TrackedRangeStickiness =
                    n.TextEditorCursorStyle =
                    n.TextEditorCursorBlinkingStyle =
                    n.SymbolTag =
                    n.SymbolKind =
                    n.SignatureHelpTriggerKind =
                    n.ShowAiIconMode =
                    n.SelectionDirection =
                    n.ScrollbarVisibility =
                    n.ScrollType =
                    n.RenderMinimap =
                    n.RenderLineNumbersType =
                    n.PositionAffinity =
                    n.OverviewRulerLane =
                    n.OverlayWidgetPositionPreference =
                    n.MouseTargetType =
                    n.MinimapPosition =
                    n.MarkerTag =
                    n.MarkerSeverity =
                    n.KeyCode =
                    n.InlineCompletionTriggerKind =
                    n.InlayHintKind =
                    n.InjectedTextCursorStops =
                    n.IndentAction =
                    n.GlyphMarginLane =
                    n.EndOfLineSequence =
                    n.EndOfLinePreference =
                    n.EditorOption =
                    n.EditorAutoIndentStrategy =
                    n.DocumentHighlightKind =
                    n.DefaultEndOfLine =
                    n.CursorChangeReason =
                    n.ContentWidgetPositionPreference =
                    n.CompletionTriggerKind =
                    n.CompletionItemTag =
                    n.CompletionItemKind =
                    n.CompletionItemInsertTextRule =
                    n.CodeActionTriggerType =
                    n.AccessibilitySupport =
                        void 0)
            var M
            ;(function (t) {
                ;(t[(t.Unknown = 0)] = 'Unknown'),
                    (t[(t.Disabled = 1)] = 'Disabled'),
                    (t[(t.Enabled = 2)] = 'Enabled')
            })(M || (n.AccessibilitySupport = M = {}))
            var A
            ;(function (t) {
                ;(t[(t.Invoke = 1)] = 'Invoke'), (t[(t.Auto = 2)] = 'Auto')
            })(A || (n.CodeActionTriggerType = A = {}))
            var i
            ;(function (t) {
                ;(t[(t.None = 0)] = 'None'),
                    (t[(t.KeepWhitespace = 1)] = 'KeepWhitespace'),
                    (t[(t.InsertAsSnippet = 4)] = 'InsertAsSnippet')
            })(i || (n.CompletionItemInsertTextRule = i = {}))
            var d
            ;(function (t) {
                ;(t[(t.Method = 0)] = 'Method'),
                    (t[(t.Function = 1)] = 'Function'),
                    (t[(t.Constructor = 2)] = 'Constructor'),
                    (t[(t.Field = 3)] = 'Field'),
                    (t[(t.Variable = 4)] = 'Variable'),
                    (t[(t.Class = 5)] = 'Class'),
                    (t[(t.Struct = 6)] = 'Struct'),
                    (t[(t.Interface = 7)] = 'Interface'),
                    (t[(t.Module = 8)] = 'Module'),
                    (t[(t.Property = 9)] = 'Property'),
                    (t[(t.Event = 10)] = 'Event'),
                    (t[(t.Operator = 11)] = 'Operator'),
                    (t[(t.Unit = 12)] = 'Unit'),
                    (t[(t.Value = 13)] = 'Value'),
                    (t[(t.Constant = 14)] = 'Constant'),
                    (t[(t.Enum = 15)] = 'Enum'),
                    (t[(t.EnumMember = 16)] = 'EnumMember'),
                    (t[(t.Keyword = 17)] = 'Keyword'),
                    (t[(t.Text = 18)] = 'Text'),
                    (t[(t.Color = 19)] = 'Color'),
                    (t[(t.File = 20)] = 'File'),
                    (t[(t.Reference = 21)] = 'Reference'),
                    (t[(t.Customcolor = 22)] = 'Customcolor'),
                    (t[(t.Folder = 23)] = 'Folder'),
                    (t[(t.TypeParameter = 24)] = 'TypeParameter'),
                    (t[(t.User = 25)] = 'User'),
                    (t[(t.Issue = 26)] = 'Issue'),
                    (t[(t.Snippet = 27)] = 'Snippet')
            })(d || (n.CompletionItemKind = d = {}))
            var g
            ;(function (t) {
                t[(t.Deprecated = 1)] = 'Deprecated'
            })(g || (n.CompletionItemTag = g = {}))
            var L
            ;(function (t) {
                ;(t[(t.Invoke = 0)] = 'Invoke'),
                    (t[(t.TriggerCharacter = 1)] = 'TriggerCharacter'),
                    (t[(t.TriggerForIncompleteCompletions = 2)] = 'TriggerForIncompleteCompletions')
            })(L || (n.CompletionTriggerKind = L = {}))
            var h
            ;(function (t) {
                ;(t[(t.EXACT = 0)] = 'EXACT'),
                    (t[(t.ABOVE = 1)] = 'ABOVE'),
                    (t[(t.BELOW = 2)] = 'BELOW')
            })(h || (n.ContentWidgetPositionPreference = h = {}))
            var o
            ;(function (t) {
                ;(t[(t.NotSet = 0)] = 'NotSet'),
                    (t[(t.ContentFlush = 1)] = 'ContentFlush'),
                    (t[(t.RecoverFromMarkers = 2)] = 'RecoverFromMarkers'),
                    (t[(t.Explicit = 3)] = 'Explicit'),
                    (t[(t.Paste = 4)] = 'Paste'),
                    (t[(t.Undo = 5)] = 'Undo'),
                    (t[(t.Redo = 6)] = 'Redo')
            })(o || (n.CursorChangeReason = o = {}))
            var C
            ;(function (t) {
                ;(t[(t.LF = 1)] = 'LF'), (t[(t.CRLF = 2)] = 'CRLF')
            })(C || (n.DefaultEndOfLine = C = {}))
            var e
            ;(function (t) {
                ;(t[(t.Text = 0)] = 'Text'),
                    (t[(t.Read = 1)] = 'Read'),
                    (t[(t.Write = 2)] = 'Write')
            })(e || (n.DocumentHighlightKind = e = {}))
            var a
            ;(function (t) {
                ;(t[(t.None = 0)] = 'None'),
                    (t[(t.Keep = 1)] = 'Keep'),
                    (t[(t.Brackets = 2)] = 'Brackets'),
                    (t[(t.Advanced = 3)] = 'Advanced'),
                    (t[(t.Full = 4)] = 'Full')
            })(a || (n.EditorAutoIndentStrategy = a = {}))
            var u
            ;(function (t) {
                ;(t[(t.acceptSuggestionOnCommitCharacter = 0)] =
                    'acceptSuggestionOnCommitCharacter'),
                    (t[(t.acceptSuggestionOnEnter = 1)] = 'acceptSuggestionOnEnter'),
                    (t[(t.accessibilitySupport = 2)] = 'accessibilitySupport'),
                    (t[(t.accessibilityPageSize = 3)] = 'accessibilityPageSize'),
                    (t[(t.ariaLabel = 4)] = 'ariaLabel'),
                    (t[(t.ariaRequired = 5)] = 'ariaRequired'),
                    (t[(t.autoClosingBrackets = 6)] = 'autoClosingBrackets'),
                    (t[(t.autoClosingComments = 7)] = 'autoClosingComments'),
                    (t[(t.screenReaderAnnounceInlineSuggestion = 8)] =
                        'screenReaderAnnounceInlineSuggestion'),
                    (t[(t.autoClosingDelete = 9)] = 'autoClosingDelete'),
                    (t[(t.autoClosingOvertype = 10)] = 'autoClosingOvertype'),
                    (t[(t.autoClosingQuotes = 11)] = 'autoClosingQuotes'),
                    (t[(t.autoIndent = 12)] = 'autoIndent'),
                    (t[(t.automaticLayout = 13)] = 'automaticLayout'),
                    (t[(t.autoSurround = 14)] = 'autoSurround'),
                    (t[(t.bracketPairColorization = 15)] = 'bracketPairColorization'),
                    (t[(t.guides = 16)] = 'guides'),
                    (t[(t.codeLens = 17)] = 'codeLens'),
                    (t[(t.codeLensFontFamily = 18)] = 'codeLensFontFamily'),
                    (t[(t.codeLensFontSize = 19)] = 'codeLensFontSize'),
                    (t[(t.colorDecorators = 20)] = 'colorDecorators'),
                    (t[(t.colorDecoratorsLimit = 21)] = 'colorDecoratorsLimit'),
                    (t[(t.columnSelection = 22)] = 'columnSelection'),
                    (t[(t.comments = 23)] = 'comments'),
                    (t[(t.contextmenu = 24)] = 'contextmenu'),
                    (t[(t.copyWithSyntaxHighlighting = 25)] = 'copyWithSyntaxHighlighting'),
                    (t[(t.cursorBlinking = 26)] = 'cursorBlinking'),
                    (t[(t.cursorSmoothCaretAnimation = 27)] = 'cursorSmoothCaretAnimation'),
                    (t[(t.cursorStyle = 28)] = 'cursorStyle'),
                    (t[(t.cursorSurroundingLines = 29)] = 'cursorSurroundingLines'),
                    (t[(t.cursorSurroundingLinesStyle = 30)] = 'cursorSurroundingLinesStyle'),
                    (t[(t.cursorWidth = 31)] = 'cursorWidth'),
                    (t[(t.disableLayerHinting = 32)] = 'disableLayerHinting'),
                    (t[(t.disableMonospaceOptimizations = 33)] = 'disableMonospaceOptimizations'),
                    (t[(t.domReadOnly = 34)] = 'domReadOnly'),
                    (t[(t.dragAndDrop = 35)] = 'dragAndDrop'),
                    (t[(t.dropIntoEditor = 36)] = 'dropIntoEditor'),
                    (t[(t.emptySelectionClipboard = 37)] = 'emptySelectionClipboard'),
                    (t[(t.experimentalWhitespaceRendering = 38)] =
                        'experimentalWhitespaceRendering'),
                    (t[(t.extraEditorClassName = 39)] = 'extraEditorClassName'),
                    (t[(t.fastScrollSensitivity = 40)] = 'fastScrollSensitivity'),
                    (t[(t.find = 41)] = 'find'),
                    (t[(t.fixedOverflowWidgets = 42)] = 'fixedOverflowWidgets'),
                    (t[(t.folding = 43)] = 'folding'),
                    (t[(t.foldingStrategy = 44)] = 'foldingStrategy'),
                    (t[(t.foldingHighlight = 45)] = 'foldingHighlight'),
                    (t[(t.foldingImportsByDefault = 46)] = 'foldingImportsByDefault'),
                    (t[(t.foldingMaximumRegions = 47)] = 'foldingMaximumRegions'),
                    (t[(t.unfoldOnClickAfterEndOfLine = 48)] = 'unfoldOnClickAfterEndOfLine'),
                    (t[(t.fontFamily = 49)] = 'fontFamily'),
                    (t[(t.fontInfo = 50)] = 'fontInfo'),
                    (t[(t.fontLigatures = 51)] = 'fontLigatures'),
                    (t[(t.fontSize = 52)] = 'fontSize'),
                    (t[(t.fontWeight = 53)] = 'fontWeight'),
                    (t[(t.fontVariations = 54)] = 'fontVariations'),
                    (t[(t.formatOnPaste = 55)] = 'formatOnPaste'),
                    (t[(t.formatOnType = 56)] = 'formatOnType'),
                    (t[(t.glyphMargin = 57)] = 'glyphMargin'),
                    (t[(t.gotoLocation = 58)] = 'gotoLocation'),
                    (t[(t.hideCursorInOverviewRuler = 59)] = 'hideCursorInOverviewRuler'),
                    (t[(t.hover = 60)] = 'hover'),
                    (t[(t.inDiffEditor = 61)] = 'inDiffEditor'),
                    (t[(t.inlineSuggest = 62)] = 'inlineSuggest'),
                    (t[(t.letterSpacing = 63)] = 'letterSpacing'),
                    (t[(t.lightbulb = 64)] = 'lightbulb'),
                    (t[(t.lineDecorationsWidth = 65)] = 'lineDecorationsWidth'),
                    (t[(t.lineHeight = 66)] = 'lineHeight'),
                    (t[(t.lineNumbers = 67)] = 'lineNumbers'),
                    (t[(t.lineNumbersMinChars = 68)] = 'lineNumbersMinChars'),
                    (t[(t.linkedEditing = 69)] = 'linkedEditing'),
                    (t[(t.links = 70)] = 'links'),
                    (t[(t.matchBrackets = 71)] = 'matchBrackets'),
                    (t[(t.minimap = 72)] = 'minimap'),
                    (t[(t.mouseStyle = 73)] = 'mouseStyle'),
                    (t[(t.mouseWheelScrollSensitivity = 74)] = 'mouseWheelScrollSensitivity'),
                    (t[(t.mouseWheelZoom = 75)] = 'mouseWheelZoom'),
                    (t[(t.multiCursorMergeOverlapping = 76)] = 'multiCursorMergeOverlapping'),
                    (t[(t.multiCursorModifier = 77)] = 'multiCursorModifier'),
                    (t[(t.multiCursorPaste = 78)] = 'multiCursorPaste'),
                    (t[(t.multiCursorLimit = 79)] = 'multiCursorLimit'),
                    (t[(t.occurrencesHighlight = 80)] = 'occurrencesHighlight'),
                    (t[(t.overviewRulerBorder = 81)] = 'overviewRulerBorder'),
                    (t[(t.overviewRulerLanes = 82)] = 'overviewRulerLanes'),
                    (t[(t.padding = 83)] = 'padding'),
                    (t[(t.pasteAs = 84)] = 'pasteAs'),
                    (t[(t.parameterHints = 85)] = 'parameterHints'),
                    (t[(t.peekWidgetDefaultFocus = 86)] = 'peekWidgetDefaultFocus'),
                    (t[(t.definitionLinkOpensInPeek = 87)] = 'definitionLinkOpensInPeek'),
                    (t[(t.quickSuggestions = 88)] = 'quickSuggestions'),
                    (t[(t.quickSuggestionsDelay = 89)] = 'quickSuggestionsDelay'),
                    (t[(t.readOnly = 90)] = 'readOnly'),
                    (t[(t.readOnlyMessage = 91)] = 'readOnlyMessage'),
                    (t[(t.renameOnType = 92)] = 'renameOnType'),
                    (t[(t.renderControlCharacters = 93)] = 'renderControlCharacters'),
                    (t[(t.renderFinalNewline = 94)] = 'renderFinalNewline'),
                    (t[(t.renderLineHighlight = 95)] = 'renderLineHighlight'),
                    (t[(t.renderLineHighlightOnlyWhenFocus = 96)] =
                        'renderLineHighlightOnlyWhenFocus'),
                    (t[(t.renderValidationDecorations = 97)] = 'renderValidationDecorations'),
                    (t[(t.renderWhitespace = 98)] = 'renderWhitespace'),
                    (t[(t.revealHorizontalRightPadding = 99)] = 'revealHorizontalRightPadding'),
                    (t[(t.roundedSelection = 100)] = 'roundedSelection'),
                    (t[(t.rulers = 101)] = 'rulers'),
                    (t[(t.scrollbar = 102)] = 'scrollbar'),
                    (t[(t.scrollBeyondLastColumn = 103)] = 'scrollBeyondLastColumn'),
                    (t[(t.scrollBeyondLastLine = 104)] = 'scrollBeyondLastLine'),
                    (t[(t.scrollPredominantAxis = 105)] = 'scrollPredominantAxis'),
                    (t[(t.selectionClipboard = 106)] = 'selectionClipboard'),
                    (t[(t.selectionHighlight = 107)] = 'selectionHighlight'),
                    (t[(t.selectOnLineNumbers = 108)] = 'selectOnLineNumbers'),
                    (t[(t.showFoldingControls = 109)] = 'showFoldingControls'),
                    (t[(t.showUnused = 110)] = 'showUnused'),
                    (t[(t.snippetSuggestions = 111)] = 'snippetSuggestions'),
                    (t[(t.smartSelect = 112)] = 'smartSelect'),
                    (t[(t.smoothScrolling = 113)] = 'smoothScrolling'),
                    (t[(t.stickyScroll = 114)] = 'stickyScroll'),
                    (t[(t.stickyTabStops = 115)] = 'stickyTabStops'),
                    (t[(t.stopRenderingLineAfter = 116)] = 'stopRenderingLineAfter'),
                    (t[(t.suggest = 117)] = 'suggest'),
                    (t[(t.suggestFontSize = 118)] = 'suggestFontSize'),
                    (t[(t.suggestLineHeight = 119)] = 'suggestLineHeight'),
                    (t[(t.suggestOnTriggerCharacters = 120)] = 'suggestOnTriggerCharacters'),
                    (t[(t.suggestSelection = 121)] = 'suggestSelection'),
                    (t[(t.tabCompletion = 122)] = 'tabCompletion'),
                    (t[(t.tabIndex = 123)] = 'tabIndex'),
                    (t[(t.unicodeHighlighting = 124)] = 'unicodeHighlighting'),
                    (t[(t.unusualLineTerminators = 125)] = 'unusualLineTerminators'),
                    (t[(t.useShadowDOM = 126)] = 'useShadowDOM'),
                    (t[(t.useTabStops = 127)] = 'useTabStops'),
                    (t[(t.wordBreak = 128)] = 'wordBreak'),
                    (t[(t.wordSeparators = 129)] = 'wordSeparators'),
                    (t[(t.wordWrap = 130)] = 'wordWrap'),
                    (t[(t.wordWrapBreakAfterCharacters = 131)] = 'wordWrapBreakAfterCharacters'),
                    (t[(t.wordWrapBreakBeforeCharacters = 132)] = 'wordWrapBreakBeforeCharacters'),
                    (t[(t.wordWrapColumn = 133)] = 'wordWrapColumn'),
                    (t[(t.wordWrapOverride1 = 134)] = 'wordWrapOverride1'),
                    (t[(t.wordWrapOverride2 = 135)] = 'wordWrapOverride2'),
                    (t[(t.wrappingIndent = 136)] = 'wrappingIndent'),
                    (t[(t.wrappingStrategy = 137)] = 'wrappingStrategy'),
                    (t[(t.showDeprecated = 138)] = 'showDeprecated'),
                    (t[(t.inlayHints = 139)] = 'inlayHints'),
                    (t[(t.editorClassName = 140)] = 'editorClassName'),
                    (t[(t.pixelRatio = 141)] = 'pixelRatio'),
                    (t[(t.tabFocusMode = 142)] = 'tabFocusMode'),
                    (t[(t.layoutInfo = 143)] = 'layoutInfo'),
                    (t[(t.wrappingInfo = 144)] = 'wrappingInfo'),
                    (t[(t.defaultColorDecorators = 145)] = 'defaultColorDecorators'),
                    (t[(t.colorDecoratorsActivatedOn = 146)] = 'colorDecoratorsActivatedOn'),
                    (t[(t.inlineCompletionsAccessibilityVerbose = 147)] =
                        'inlineCompletionsAccessibilityVerbose')
            })(u || (n.EditorOption = u = {}))
            var c
            ;(function (t) {
                ;(t[(t.TextDefined = 0)] = 'TextDefined'),
                    (t[(t.LF = 1)] = 'LF'),
                    (t[(t.CRLF = 2)] = 'CRLF')
            })(c || (n.EndOfLinePreference = c = {}))
            var m
            ;(function (t) {
                ;(t[(t.LF = 0)] = 'LF'), (t[(t.CRLF = 1)] = 'CRLF')
            })(m || (n.EndOfLineSequence = m = {}))
            var f
            ;(function (t) {
                ;(t[(t.Left = 1)] = 'Left'), (t[(t.Right = 2)] = 'Right')
            })(f || (n.GlyphMarginLane = f = {}))
            var S
            ;(function (t) {
                ;(t[(t.None = 0)] = 'None'),
                    (t[(t.Indent = 1)] = 'Indent'),
                    (t[(t.IndentOutdent = 2)] = 'IndentOutdent'),
                    (t[(t.Outdent = 3)] = 'Outdent')
            })(S || (n.IndentAction = S = {}))
            var w
            ;(function (t) {
                ;(t[(t.Both = 0)] = 'Both'),
                    (t[(t.Right = 1)] = 'Right'),
                    (t[(t.Left = 2)] = 'Left'),
                    (t[(t.None = 3)] = 'None')
            })(w || (n.InjectedTextCursorStops = w = {}))
            var E
            ;(function (t) {
                ;(t[(t.Type = 1)] = 'Type'), (t[(t.Parameter = 2)] = 'Parameter')
            })(E || (n.InlayHintKind = E = {}))
            var y
            ;(function (t) {
                ;(t[(t.Automatic = 0)] = 'Automatic'), (t[(t.Explicit = 1)] = 'Explicit')
            })(y || (n.InlineCompletionTriggerKind = y = {}))
            var _
            ;(function (t) {
                ;(t[(t.DependsOnKbLayout = -1)] = 'DependsOnKbLayout'),
                    (t[(t.Unknown = 0)] = 'Unknown'),
                    (t[(t.Backspace = 1)] = 'Backspace'),
                    (t[(t.Tab = 2)] = 'Tab'),
                    (t[(t.Enter = 3)] = 'Enter'),
                    (t[(t.Shift = 4)] = 'Shift'),
                    (t[(t.Ctrl = 5)] = 'Ctrl'),
                    (t[(t.Alt = 6)] = 'Alt'),
                    (t[(t.PauseBreak = 7)] = 'PauseBreak'),
                    (t[(t.CapsLock = 8)] = 'CapsLock'),
                    (t[(t.Escape = 9)] = 'Escape'),
                    (t[(t.Space = 10)] = 'Space'),
                    (t[(t.PageUp = 11)] = 'PageUp'),
                    (t[(t.PageDown = 12)] = 'PageDown'),
                    (t[(t.End = 13)] = 'End'),
                    (t[(t.Home = 14)] = 'Home'),
                    (t[(t.LeftArrow = 15)] = 'LeftArrow'),
                    (t[(t.UpArrow = 16)] = 'UpArrow'),
                    (t[(t.RightArrow = 17)] = 'RightArrow'),
                    (t[(t.DownArrow = 18)] = 'DownArrow'),
                    (t[(t.Insert = 19)] = 'Insert'),
                    (t[(t.Delete = 20)] = 'Delete'),
                    (t[(t.Digit0 = 21)] = 'Digit0'),
                    (t[(t.Digit1 = 22)] = 'Digit1'),
                    (t[(t.Digit2 = 23)] = 'Digit2'),
                    (t[(t.Digit3 = 24)] = 'Digit3'),
                    (t[(t.Digit4 = 25)] = 'Digit4'),
                    (t[(t.Digit5 = 26)] = 'Digit5'),
                    (t[(t.Digit6 = 27)] = 'Digit6'),
                    (t[(t.Digit7 = 28)] = 'Digit7'),
                    (t[(t.Digit8 = 29)] = 'Digit8'),
                    (t[(t.Digit9 = 30)] = 'Digit9'),
                    (t[(t.KeyA = 31)] = 'KeyA'),
                    (t[(t.KeyB = 32)] = 'KeyB'),
                    (t[(t.KeyC = 33)] = 'KeyC'),
                    (t[(t.KeyD = 34)] = 'KeyD'),
                    (t[(t.KeyE = 35)] = 'KeyE'),
                    (t[(t.KeyF = 36)] = 'KeyF'),
                    (t[(t.KeyG = 37)] = 'KeyG'),
                    (t[(t.KeyH = 38)] = 'KeyH'),
                    (t[(t.KeyI = 39)] = 'KeyI'),
                    (t[(t.KeyJ = 40)] = 'KeyJ'),
                    (t[(t.KeyK = 41)] = 'KeyK'),
                    (t[(t.KeyL = 42)] = 'KeyL'),
                    (t[(t.KeyM = 43)] = 'KeyM'),
                    (t[(t.KeyN = 44)] = 'KeyN'),
                    (t[(t.KeyO = 45)] = 'KeyO'),
                    (t[(t.KeyP = 46)] = 'KeyP'),
                    (t[(t.KeyQ = 47)] = 'KeyQ'),
                    (t[(t.KeyR = 48)] = 'KeyR'),
                    (t[(t.KeyS = 49)] = 'KeyS'),
                    (t[(t.KeyT = 50)] = 'KeyT'),
                    (t[(t.KeyU = 51)] = 'KeyU'),
                    (t[(t.KeyV = 52)] = 'KeyV'),
                    (t[(t.KeyW = 53)] = 'KeyW'),
                    (t[(t.KeyX = 54)] = 'KeyX'),
                    (t[(t.KeyY = 55)] = 'KeyY'),
                    (t[(t.KeyZ = 56)] = 'KeyZ'),
                    (t[(t.Meta = 57)] = 'Meta'),
                    (t[(t.ContextMenu = 58)] = 'ContextMenu'),
                    (t[(t.F1 = 59)] = 'F1'),
                    (t[(t.F2 = 60)] = 'F2'),
                    (t[(t.F3 = 61)] = 'F3'),
                    (t[(t.F4 = 62)] = 'F4'),
                    (t[(t.F5 = 63)] = 'F5'),
                    (t[(t.F6 = 64)] = 'F6'),
                    (t[(t.F7 = 65)] = 'F7'),
                    (t[(t.F8 = 66)] = 'F8'),
                    (t[(t.F9 = 67)] = 'F9'),
                    (t[(t.F10 = 68)] = 'F10'),
                    (t[(t.F11 = 69)] = 'F11'),
                    (t[(t.F12 = 70)] = 'F12'),
                    (t[(t.F13 = 71)] = 'F13'),
                    (t[(t.F14 = 72)] = 'F14'),
                    (t[(t.F15 = 73)] = 'F15'),
                    (t[(t.F16 = 74)] = 'F16'),
                    (t[(t.F17 = 75)] = 'F17'),
                    (t[(t.F18 = 76)] = 'F18'),
                    (t[(t.F19 = 77)] = 'F19'),
                    (t[(t.F20 = 78)] = 'F20'),
                    (t[(t.F21 = 79)] = 'F21'),
                    (t[(t.F22 = 80)] = 'F22'),
                    (t[(t.F23 = 81)] = 'F23'),
                    (t[(t.F24 = 82)] = 'F24'),
                    (t[(t.NumLock = 83)] = 'NumLock'),
                    (t[(t.ScrollLock = 84)] = 'ScrollLock'),
                    (t[(t.Semicolon = 85)] = 'Semicolon'),
                    (t[(t.Equal = 86)] = 'Equal'),
                    (t[(t.Comma = 87)] = 'Comma'),
                    (t[(t.Minus = 88)] = 'Minus'),
                    (t[(t.Period = 89)] = 'Period'),
                    (t[(t.Slash = 90)] = 'Slash'),
                    (t[(t.Backquote = 91)] = 'Backquote'),
                    (t[(t.BracketLeft = 92)] = 'BracketLeft'),
                    (t[(t.Backslash = 93)] = 'Backslash'),
                    (t[(t.BracketRight = 94)] = 'BracketRight'),
                    (t[(t.Quote = 95)] = 'Quote'),
                    (t[(t.OEM_8 = 96)] = 'OEM_8'),
                    (t[(t.IntlBackslash = 97)] = 'IntlBackslash'),
                    (t[(t.Numpad0 = 98)] = 'Numpad0'),
                    (t[(t.Numpad1 = 99)] = 'Numpad1'),
                    (t[(t.Numpad2 = 100)] = 'Numpad2'),
                    (t[(t.Numpad3 = 101)] = 'Numpad3'),
                    (t[(t.Numpad4 = 102)] = 'Numpad4'),
                    (t[(t.Numpad5 = 103)] = 'Numpad5'),
                    (t[(t.Numpad6 = 104)] = 'Numpad6'),
                    (t[(t.Numpad7 = 105)] = 'Numpad7'),
                    (t[(t.Numpad8 = 106)] = 'Numpad8'),
                    (t[(t.Numpad9 = 107)] = 'Numpad9'),
                    (t[(t.NumpadMultiply = 108)] = 'NumpadMultiply'),
                    (t[(t.NumpadAdd = 109)] = 'NumpadAdd'),
                    (t[(t.NUMPAD_SEPARATOR = 110)] = 'NUMPAD_SEPARATOR'),
                    (t[(t.NumpadSubtract = 111)] = 'NumpadSubtract'),
                    (t[(t.NumpadDecimal = 112)] = 'NumpadDecimal'),
                    (t[(t.NumpadDivide = 113)] = 'NumpadDivide'),
                    (t[(t.KEY_IN_COMPOSITION = 114)] = 'KEY_IN_COMPOSITION'),
                    (t[(t.ABNT_C1 = 115)] = 'ABNT_C1'),
                    (t[(t.ABNT_C2 = 116)] = 'ABNT_C2'),
                    (t[(t.AudioVolumeMute = 117)] = 'AudioVolumeMute'),
                    (t[(t.AudioVolumeUp = 118)] = 'AudioVolumeUp'),
                    (t[(t.AudioVolumeDown = 119)] = 'AudioVolumeDown'),
                    (t[(t.BrowserSearch = 120)] = 'BrowserSearch'),
                    (t[(t.BrowserHome = 121)] = 'BrowserHome'),
                    (t[(t.BrowserBack = 122)] = 'BrowserBack'),
                    (t[(t.BrowserForward = 123)] = 'BrowserForward'),
                    (t[(t.MediaTrackNext = 124)] = 'MediaTrackNext'),
                    (t[(t.MediaTrackPrevious = 125)] = 'MediaTrackPrevious'),
                    (t[(t.MediaStop = 126)] = 'MediaStop'),
                    (t[(t.MediaPlayPause = 127)] = 'MediaPlayPause'),
                    (t[(t.LaunchMediaPlayer = 128)] = 'LaunchMediaPlayer'),
                    (t[(t.LaunchMail = 129)] = 'LaunchMail'),
                    (t[(t.LaunchApp2 = 130)] = 'LaunchApp2'),
                    (t[(t.Clear = 131)] = 'Clear'),
                    (t[(t.MAX_VALUE = 132)] = 'MAX_VALUE')
            })(_ || (n.KeyCode = _ = {}))
            var r
            ;(function (t) {
                ;(t[(t.Hint = 1)] = 'Hint'),
                    (t[(t.Info = 2)] = 'Info'),
                    (t[(t.Warning = 4)] = 'Warning'),
                    (t[(t.Error = 8)] = 'Error')
            })(r || (n.MarkerSeverity = r = {}))
            var s
            ;(function (t) {
                ;(t[(t.Unnecessary = 1)] = 'Unnecessary'), (t[(t.Deprecated = 2)] = 'Deprecated')
            })(s || (n.MarkerTag = s = {}))
            var l
            ;(function (t) {
                ;(t[(t.Inline = 1)] = 'Inline'), (t[(t.Gutter = 2)] = 'Gutter')
            })(l || (n.MinimapPosition = l = {}))
            var p
            ;(function (t) {
                ;(t[(t.UNKNOWN = 0)] = 'UNKNOWN'),
                    (t[(t.TEXTAREA = 1)] = 'TEXTAREA'),
                    (t[(t.GUTTER_GLYPH_MARGIN = 2)] = 'GUTTER_GLYPH_MARGIN'),
                    (t[(t.GUTTER_LINE_NUMBERS = 3)] = 'GUTTER_LINE_NUMBERS'),
                    (t[(t.GUTTER_LINE_DECORATIONS = 4)] = 'GUTTER_LINE_DECORATIONS'),
                    (t[(t.GUTTER_VIEW_ZONE = 5)] = 'GUTTER_VIEW_ZONE'),
                    (t[(t.CONTENT_TEXT = 6)] = 'CONTENT_TEXT'),
                    (t[(t.CONTENT_EMPTY = 7)] = 'CONTENT_EMPTY'),
                    (t[(t.CONTENT_VIEW_ZONE = 8)] = 'CONTENT_VIEW_ZONE'),
                    (t[(t.CONTENT_WIDGET = 9)] = 'CONTENT_WIDGET'),
                    (t[(t.OVERVIEW_RULER = 10)] = 'OVERVIEW_RULER'),
                    (t[(t.SCROLLBAR = 11)] = 'SCROLLBAR'),
                    (t[(t.OVERLAY_WIDGET = 12)] = 'OVERLAY_WIDGET'),
                    (t[(t.OUTSIDE_EDITOR = 13)] = 'OUTSIDE_EDITOR')
            })(p || (n.MouseTargetType = p = {}))
            var b
            ;(function (t) {
                ;(t[(t.TOP_RIGHT_CORNER = 0)] = 'TOP_RIGHT_CORNER'),
                    (t[(t.BOTTOM_RIGHT_CORNER = 1)] = 'BOTTOM_RIGHT_CORNER'),
                    (t[(t.TOP_CENTER = 2)] = 'TOP_CENTER')
            })(b || (n.OverlayWidgetPositionPreference = b = {}))
            var v
            ;(function (t) {
                ;(t[(t.Left = 1)] = 'Left'),
                    (t[(t.Center = 2)] = 'Center'),
                    (t[(t.Right = 4)] = 'Right'),
                    (t[(t.Full = 7)] = 'Full')
            })(v || (n.OverviewRulerLane = v = {}))
            var R
            ;(function (t) {
                ;(t[(t.Left = 0)] = 'Left'),
                    (t[(t.Right = 1)] = 'Right'),
                    (t[(t.None = 2)] = 'None'),
                    (t[(t.LeftOfInjectedText = 3)] = 'LeftOfInjectedText'),
                    (t[(t.RightOfInjectedText = 4)] = 'RightOfInjectedText')
            })(R || (n.PositionAffinity = R = {}))
            var N
            ;(function (t) {
                ;(t[(t.Off = 0)] = 'Off'),
                    (t[(t.On = 1)] = 'On'),
                    (t[(t.Relative = 2)] = 'Relative'),
                    (t[(t.Interval = 3)] = 'Interval'),
                    (t[(t.Custom = 4)] = 'Custom')
            })(N || (n.RenderLineNumbersType = N = {}))
            var D
            ;(function (t) {
                ;(t[(t.None = 0)] = 'None'),
                    (t[(t.Text = 1)] = 'Text'),
                    (t[(t.Blocks = 2)] = 'Blocks')
            })(D || (n.RenderMinimap = D = {}))
            var x
            ;(function (t) {
                ;(t[(t.Smooth = 0)] = 'Smooth'), (t[(t.Immediate = 1)] = 'Immediate')
            })(x || (n.ScrollType = x = {}))
            var T
            ;(function (t) {
                ;(t[(t.Auto = 1)] = 'Auto'),
                    (t[(t.Hidden = 2)] = 'Hidden'),
                    (t[(t.Visible = 3)] = 'Visible')
            })(T || (n.ScrollbarVisibility = T = {}))
            var F
            ;(function (t) {
                ;(t[(t.LTR = 0)] = 'LTR'), (t[(t.RTL = 1)] = 'RTL')
            })(F || (n.SelectionDirection = F = {}))
            var U
            ;(function (t) {
                ;(t.Off = 'off'), (t.OnCode = 'onCode'), (t.On = 'on')
            })(U || (n.ShowAiIconMode = U = {}))
            var z
            ;(function (t) {
                ;(t[(t.Invoke = 1)] = 'Invoke'),
                    (t[(t.TriggerCharacter = 2)] = 'TriggerCharacter'),
                    (t[(t.ContentChange = 3)] = 'ContentChange')
            })(z || (n.SignatureHelpTriggerKind = z = {}))
            var k
            ;(function (t) {
                ;(t[(t.File = 0)] = 'File'),
                    (t[(t.Module = 1)] = 'Module'),
                    (t[(t.Namespace = 2)] = 'Namespace'),
                    (t[(t.Package = 3)] = 'Package'),
                    (t[(t.Class = 4)] = 'Class'),
                    (t[(t.Method = 5)] = 'Method'),
                    (t[(t.Property = 6)] = 'Property'),
                    (t[(t.Field = 7)] = 'Field'),
                    (t[(t.Constructor = 8)] = 'Constructor'),
                    (t[(t.Enum = 9)] = 'Enum'),
                    (t[(t.Interface = 10)] = 'Interface'),
                    (t[(t.Function = 11)] = 'Function'),
                    (t[(t.Variable = 12)] = 'Variable'),
                    (t[(t.Constant = 13)] = 'Constant'),
                    (t[(t.String = 14)] = 'String'),
                    (t[(t.Number = 15)] = 'Number'),
                    (t[(t.Boolean = 16)] = 'Boolean'),
                    (t[(t.Array = 17)] = 'Array'),
                    (t[(t.Object = 18)] = 'Object'),
                    (t[(t.Key = 19)] = 'Key'),
                    (t[(t.Null = 20)] = 'Null'),
                    (t[(t.EnumMember = 21)] = 'EnumMember'),
                    (t[(t.Struct = 22)] = 'Struct'),
                    (t[(t.Event = 23)] = 'Event'),
                    (t[(t.Operator = 24)] = 'Operator'),
                    (t[(t.TypeParameter = 25)] = 'TypeParameter')
            })(k || (n.SymbolKind = k = {}))
            var O
            ;(function (t) {
                t[(t.Deprecated = 1)] = 'Deprecated'
            })(O || (n.SymbolTag = O = {}))
            var I
            ;(function (t) {
                ;(t[(t.Hidden = 0)] = 'Hidden'),
                    (t[(t.Blink = 1)] = 'Blink'),
                    (t[(t.Smooth = 2)] = 'Smooth'),
                    (t[(t.Phase = 3)] = 'Phase'),
                    (t[(t.Expand = 4)] = 'Expand'),
                    (t[(t.Solid = 5)] = 'Solid')
            })(I || (n.TextEditorCursorBlinkingStyle = I = {}))
            var V
            ;(function (t) {
                ;(t[(t.Line = 1)] = 'Line'),
                    (t[(t.Block = 2)] = 'Block'),
                    (t[(t.Underline = 3)] = 'Underline'),
                    (t[(t.LineThin = 4)] = 'LineThin'),
                    (t[(t.BlockOutline = 5)] = 'BlockOutline'),
                    (t[(t.UnderlineThin = 6)] = 'UnderlineThin')
            })(V || (n.TextEditorCursorStyle = V = {}))
            var H
            ;(function (t) {
                ;(t[(t.AlwaysGrowsWhenTypingAtEdges = 0)] = 'AlwaysGrowsWhenTypingAtEdges'),
                    (t[(t.NeverGrowsWhenTypingAtEdges = 1)] = 'NeverGrowsWhenTypingAtEdges'),
                    (t[(t.GrowsOnlyWhenTypingBefore = 2)] = 'GrowsOnlyWhenTypingBefore'),
                    (t[(t.GrowsOnlyWhenTypingAfter = 3)] = 'GrowsOnlyWhenTypingAfter')
            })(H || (n.TrackedRangeStickiness = H = {}))
            var Y
            ;(function (t) {
                ;(t[(t.None = 0)] = 'None'),
                    (t[(t.Same = 1)] = 'Same'),
                    (t[(t.Indent = 2)] = 'Indent'),
                    (t[(t.DeepIndent = 3)] = 'DeepIndent')
            })(Y || (n.WrappingIndent = Y = {}))
        }),
        X(J[59], Z([0, 1, 9, 13]), function (q, n, M, A) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }), (n.TokenizationRegistry = void 0)
            class i {
                constructor() {
                    ;(this._tokenizationSupports = new Map()),
                        (this._factories = new Map()),
                        (this._onDidChange = new M.Emitter()),
                        (this.onDidChange = this._onDidChange.event),
                        (this._colorMap = null)
                }
                handleChange(L) {
                    this._onDidChange.fire({ changedLanguages: L, changedColorMap: !1 })
                }
                register(L, h) {
                    return (
                        this._tokenizationSupports.set(L, h),
                        this.handleChange([L]),
                        (0, A.toDisposable)(() => {
                            this._tokenizationSupports.get(L) === h &&
                                (this._tokenizationSupports.delete(L), this.handleChange([L]))
                        })
                    )
                }
                get(L) {
                    return this._tokenizationSupports.get(L) || null
                }
                registerFactory(L, h) {
                    var o
                    ;(o = this._factories.get(L)) === null || o === void 0 || o.dispose()
                    const C = new d(this, L, h)
                    return (
                        this._factories.set(L, C),
                        (0, A.toDisposable)(() => {
                            const e = this._factories.get(L)
                            !e || e !== C || (this._factories.delete(L), e.dispose())
                        })
                    )
                }
                async getOrCreate(L) {
                    const h = this.get(L)
                    if (h) return h
                    const o = this._factories.get(L)
                    return !o || o.isResolved ? null : (await o.resolve(), this.get(L))
                }
                isResolved(L) {
                    if (this.get(L)) return !0
                    const o = this._factories.get(L)
                    return !!(!o || o.isResolved)
                }
                setColorMap(L) {
                    ;(this._colorMap = L),
                        this._onDidChange.fire({
                            changedLanguages: Array.from(this._tokenizationSupports.keys()),
                            changedColorMap: !0
                        })
                }
                getColorMap() {
                    return this._colorMap
                }
                getDefaultBackground() {
                    return this._colorMap && this._colorMap.length > 2 ? this._colorMap[2] : null
                }
            }
            n.TokenizationRegistry = i
            class d extends A.Disposable {
                get isResolved() {
                    return this._isResolved
                }
                constructor(L, h, o) {
                    super(),
                        (this._registry = L),
                        (this._languageId = h),
                        (this._factory = o),
                        (this._isDisposed = !1),
                        (this._resolvePromise = null),
                        (this._isResolved = !1)
                }
                dispose() {
                    ;(this._isDisposed = !0), super.dispose()
                }
                async resolve() {
                    return (
                        this._resolvePromise || (this._resolvePromise = this._create()),
                        this._resolvePromise
                    )
                }
                async _create() {
                    const L = await this._factory.tokenizationSupport
                    ;(this._isResolved = !0),
                        L &&
                            !this._isDisposed &&
                            this._register(this._registry.register(this._languageId, L))
                }
            }
        }),
        X(J[60], Z([19, 61]), function (q, n) {
            return q.create('vs/base/common/platform', n)
        }),
        X(J[17], Z([0, 1, 60]), function (q, n, M) {
            'use strict'
            var A
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.isAndroid =
                    n.isEdge =
                    n.isSafari =
                    n.isFirefox =
                    n.isChrome =
                    n.isLittleEndian =
                    n.OS =
                    n.setTimeout0 =
                    n.setTimeout0IsFaster =
                    n.language =
                    n.userAgent =
                    n.isMobile =
                    n.isIOS =
                    n.webWorkerOrigin =
                    n.isWebWorker =
                    n.isWeb =
                    n.isNative =
                    n.isLinux =
                    n.isMacintosh =
                    n.isWindows =
                    n.LANGUAGE_DEFAULT =
                        void 0),
                (n.LANGUAGE_DEFAULT = 'en')
            let i = !1,
                d = !1,
                g = !1,
                L = !1,
                h = !1,
                o = !1,
                C = !1,
                e = !1,
                a = !1,
                u = !1,
                c,
                m = n.LANGUAGE_DEFAULT,
                f = n.LANGUAGE_DEFAULT,
                S,
                w
            const E = globalThis
            let y
            typeof E.vscode < 'u' && typeof E.vscode.process < 'u'
                ? (y = E.vscode.process)
                : typeof process < 'u' && (y = process)
            const _ =
                    typeof ((A = y?.versions) === null || A === void 0 ? void 0 : A.electron) ==
                    'string',
                r = _ && y?.type === 'renderer'
            if (typeof navigator == 'object' && !r)
                (w = navigator.userAgent),
                    (i = w.indexOf('Windows') >= 0),
                    (d = w.indexOf('Macintosh') >= 0),
                    (e =
                        (w.indexOf('Macintosh') >= 0 ||
                            w.indexOf('iPad') >= 0 ||
                            w.indexOf('iPhone') >= 0) &&
                        !!navigator.maxTouchPoints &&
                        navigator.maxTouchPoints > 0),
                    (g = w.indexOf('Linux') >= 0),
                    (u = w?.indexOf('Mobi') >= 0),
                    (o = !0),
                    (c = M.getConfiguredDefaultLocale(M.localize(0, null)) || n.LANGUAGE_DEFAULT),
                    (m = c),
                    (f = navigator.language)
            else if (typeof y == 'object') {
                ;(i = y.platform === 'win32'),
                    (d = y.platform === 'darwin'),
                    (g = y.platform === 'linux'),
                    (L = g && !!y.env.SNAP && !!y.env.SNAP_REVISION),
                    (C = _),
                    (a = !!y.env.CI || !!y.env.BUILD_ARTIFACTSTAGINGDIRECTORY),
                    (c = n.LANGUAGE_DEFAULT),
                    (m = n.LANGUAGE_DEFAULT)
                const v = y.env.VSCODE_NLS_CONFIG
                if (v)
                    try {
                        const R = JSON.parse(v),
                            N = R.availableLanguages['*']
                        ;(c = R.locale),
                            (f = R.osLocale),
                            (m = N || n.LANGUAGE_DEFAULT),
                            (S = R._translationsConfigFile)
                    } catch {}
                h = !0
            } else console.error('Unable to resolve platform.')
            let s = 0
            d ? (s = 1) : i ? (s = 3) : g && (s = 2),
                (n.isWindows = i),
                (n.isMacintosh = d),
                (n.isLinux = g),
                (n.isNative = h),
                (n.isWeb = o),
                (n.isWebWorker = o && typeof E.importScripts == 'function'),
                (n.webWorkerOrigin = n.isWebWorker ? E.origin : void 0),
                (n.isIOS = e),
                (n.isMobile = u),
                (n.userAgent = w),
                (n.language = m),
                (n.setTimeout0IsFaster = typeof E.postMessage == 'function' && !E.importScripts),
                (n.setTimeout0 = (() => {
                    if (n.setTimeout0IsFaster) {
                        const v = []
                        E.addEventListener('message', (N) => {
                            if (N.data && N.data.vscodeScheduleAsyncWork)
                                for (let D = 0, x = v.length; D < x; D++) {
                                    const T = v[D]
                                    if (T.id === N.data.vscodeScheduleAsyncWork) {
                                        v.splice(D, 1), T.callback()
                                        return
                                    }
                                }
                        })
                        let R = 0
                        return (N) => {
                            const D = ++R
                            v.push({ id: D, callback: N }),
                                E.postMessage({ vscodeScheduleAsyncWork: D }, '*')
                        }
                    }
                    return (v) => setTimeout(v)
                })()),
                (n.OS = d || e ? 2 : i ? 1 : 3)
            let l = !0,
                p = !1
            function b() {
                if (!p) {
                    p = !0
                    const v = new Uint8Array(2)
                    ;(v[0] = 1), (v[1] = 2), (l = new Uint16Array(v.buffer)[0] === (2 << 8) + 1)
                }
                return l
            }
            ;(n.isLittleEndian = b),
                (n.isChrome = !!(n.userAgent && n.userAgent.indexOf('Chrome') >= 0)),
                (n.isFirefox = !!(n.userAgent && n.userAgent.indexOf('Firefox') >= 0)),
                (n.isSafari = !!(!n.isChrome && n.userAgent && n.userAgent.indexOf('Safari') >= 0)),
                (n.isEdge = !!(n.userAgent && n.userAgent.indexOf('Edg/') >= 0)),
                (n.isAndroid = !!(n.userAgent && n.userAgent.indexOf('Android') >= 0))
        }),
        X(J[62], Z([0, 1, 17]), function (q, n, M) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.platform = n.env = n.cwd = void 0)
            let A
            const i = globalThis.vscode
            if (typeof i < 'u' && typeof i.process < 'u') {
                const d = i.process
                A = {
                    get platform() {
                        return d.platform
                    },
                    get arch() {
                        return d.arch
                    },
                    get env() {
                        return d.env
                    },
                    cwd() {
                        return d.cwd()
                    }
                }
            } else
                typeof process < 'u'
                    ? (A = {
                          get platform() {
                              return process.platform
                          },
                          get arch() {
                              return process.arch
                          },
                          get env() {
                              return process.env
                          },
                          cwd() {
                              return process.env.VSCODE_CWD || process.cwd()
                          }
                      })
                    : (A = {
                          get platform() {
                              return M.isWindows ? 'win32' : M.isMacintosh ? 'darwin' : 'linux'
                          },
                          get arch() {},
                          get env() {
                              return {}
                          },
                          cwd() {
                              return '/'
                          }
                      })
            ;(n.cwd = A.cwd), (n.env = A.env), (n.platform = A.platform)
        }),
        X(J[63], Z([0, 1, 62]), function (q, n, M) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.sep =
                    n.extname =
                    n.basename =
                    n.dirname =
                    n.relative =
                    n.resolve =
                    n.normalize =
                    n.posix =
                    n.win32 =
                        void 0)
            const A = 65,
                i = 97,
                d = 90,
                g = 122,
                L = 46,
                h = 47,
                o = 92,
                C = 58,
                e = 63
            class a extends Error {
                constructor(s, l, p) {
                    let b
                    typeof l == 'string' && l.indexOf('not ') === 0
                        ? ((b = 'must not be'), (l = l.replace(/^not /, '')))
                        : (b = 'must be')
                    const v = s.indexOf('.') !== -1 ? 'property' : 'argument'
                    let R = `The "${s}" ${v} ${b} of type ${l}`
                    ;(R += `. Received type ${typeof p}`),
                        super(R),
                        (this.code = 'ERR_INVALID_ARG_TYPE')
                }
            }
            function u(r, s) {
                if (r === null || typeof r != 'object') throw new a(s, 'Object', r)
            }
            function c(r, s) {
                if (typeof r != 'string') throw new a(s, 'string', r)
            }
            const m = M.platform === 'win32'
            function f(r) {
                return r === h || r === o
            }
            function S(r) {
                return r === h
            }
            function w(r) {
                return (r >= A && r <= d) || (r >= i && r <= g)
            }
            function E(r, s, l, p) {
                let b = '',
                    v = 0,
                    R = -1,
                    N = 0,
                    D = 0
                for (let x = 0; x <= r.length; ++x) {
                    if (x < r.length) D = r.charCodeAt(x)
                    else {
                        if (p(D)) break
                        D = h
                    }
                    if (p(D)) {
                        if (!(R === x - 1 || N === 1))
                            if (N === 2) {
                                if (
                                    b.length < 2 ||
                                    v !== 2 ||
                                    b.charCodeAt(b.length - 1) !== L ||
                                    b.charCodeAt(b.length - 2) !== L
                                ) {
                                    if (b.length > 2) {
                                        const T = b.lastIndexOf(l)
                                        T === -1
                                            ? ((b = ''), (v = 0))
                                            : ((b = b.slice(0, T)),
                                              (v = b.length - 1 - b.lastIndexOf(l))),
                                            (R = x),
                                            (N = 0)
                                        continue
                                    } else if (b.length !== 0) {
                                        ;(b = ''), (v = 0), (R = x), (N = 0)
                                        continue
                                    }
                                }
                                s && ((b += b.length > 0 ? `${l}..` : '..'), (v = 2))
                            } else
                                b.length > 0
                                    ? (b += `${l}${r.slice(R + 1, x)}`)
                                    : (b = r.slice(R + 1, x)),
                                    (v = x - R - 1)
                        ;(R = x), (N = 0)
                    } else D === L && N !== -1 ? ++N : (N = -1)
                }
                return b
            }
            function y(r, s) {
                u(s, 'pathObject')
                const l = s.dir || s.root,
                    p = s.base || `${s.name || ''}${s.ext || ''}`
                return l ? (l === s.root ? `${l}${p}` : `${l}${r}${p}`) : p
            }
            n.win32 = {
                resolve(...r) {
                    let s = '',
                        l = '',
                        p = !1
                    for (let b = r.length - 1; b >= -1; b--) {
                        let v
                        if (b >= 0) {
                            if (((v = r[b]), c(v, 'path'), v.length === 0)) continue
                        } else
                            s.length === 0
                                ? (v = M.cwd())
                                : ((v = M.env[`=${s}`] || M.cwd()),
                                  (v === void 0 ||
                                      (v.slice(0, 2).toLowerCase() !== s.toLowerCase() &&
                                          v.charCodeAt(2) === o)) &&
                                      (v = `${s}\\`))
                        const R = v.length
                        let N = 0,
                            D = '',
                            x = !1
                        const T = v.charCodeAt(0)
                        if (R === 1) f(T) && ((N = 1), (x = !0))
                        else if (f(T))
                            if (((x = !0), f(v.charCodeAt(1)))) {
                                let F = 2,
                                    U = F
                                for (; F < R && !f(v.charCodeAt(F)); ) F++
                                if (F < R && F !== U) {
                                    const z = v.slice(U, F)
                                    for (U = F; F < R && f(v.charCodeAt(F)); ) F++
                                    if (F < R && F !== U) {
                                        for (U = F; F < R && !f(v.charCodeAt(F)); ) F++
                                        ;(F === R || F !== U) &&
                                            ((D = `\\\\${z}\\${v.slice(U, F)}`), (N = F))
                                    }
                                }
                            } else N = 1
                        else
                            w(T) &&
                                v.charCodeAt(1) === C &&
                                ((D = v.slice(0, 2)),
                                (N = 2),
                                R > 2 && f(v.charCodeAt(2)) && ((x = !0), (N = 3)))
                        if (D.length > 0)
                            if (s.length > 0) {
                                if (D.toLowerCase() !== s.toLowerCase()) continue
                            } else s = D
                        if (p) {
                            if (s.length > 0) break
                        } else if (((l = `${v.slice(N)}\\${l}`), (p = x), x && s.length > 0)) break
                    }
                    return (l = E(l, !p, '\\', f)), p ? `${s}\\${l}` : `${s}${l}` || '.'
                },
                normalize(r) {
                    c(r, 'path')
                    const s = r.length
                    if (s === 0) return '.'
                    let l = 0,
                        p,
                        b = !1
                    const v = r.charCodeAt(0)
                    if (s === 1) return S(v) ? '\\' : r
                    if (f(v))
                        if (((b = !0), f(r.charCodeAt(1)))) {
                            let N = 2,
                                D = N
                            for (; N < s && !f(r.charCodeAt(N)); ) N++
                            if (N < s && N !== D) {
                                const x = r.slice(D, N)
                                for (D = N; N < s && f(r.charCodeAt(N)); ) N++
                                if (N < s && N !== D) {
                                    for (D = N; N < s && !f(r.charCodeAt(N)); ) N++
                                    if (N === s) return `\\\\${x}\\${r.slice(D)}\\`
                                    N !== D && ((p = `\\\\${x}\\${r.slice(D, N)}`), (l = N))
                                }
                            }
                        } else l = 1
                    else
                        w(v) &&
                            r.charCodeAt(1) === C &&
                            ((p = r.slice(0, 2)),
                            (l = 2),
                            s > 2 && f(r.charCodeAt(2)) && ((b = !0), (l = 3)))
                    let R = l < s ? E(r.slice(l), !b, '\\', f) : ''
                    return (
                        R.length === 0 && !b && (R = '.'),
                        R.length > 0 && f(r.charCodeAt(s - 1)) && (R += '\\'),
                        p === void 0 ? (b ? `\\${R}` : R) : b ? `${p}\\${R}` : `${p}${R}`
                    )
                },
                isAbsolute(r) {
                    c(r, 'path')
                    const s = r.length
                    if (s === 0) return !1
                    const l = r.charCodeAt(0)
                    return f(l) || (s > 2 && w(l) && r.charCodeAt(1) === C && f(r.charCodeAt(2)))
                },
                join(...r) {
                    if (r.length === 0) return '.'
                    let s, l
                    for (let v = 0; v < r.length; ++v) {
                        const R = r[v]
                        c(R, 'path'), R.length > 0 && (s === void 0 ? (s = l = R) : (s += `\\${R}`))
                    }
                    if (s === void 0) return '.'
                    let p = !0,
                        b = 0
                    if (typeof l == 'string' && f(l.charCodeAt(0))) {
                        ++b
                        const v = l.length
                        v > 1 &&
                            f(l.charCodeAt(1)) &&
                            (++b, v > 2 && (f(l.charCodeAt(2)) ? ++b : (p = !1)))
                    }
                    if (p) {
                        for (; b < s.length && f(s.charCodeAt(b)); ) b++
                        b >= 2 && (s = `\\${s.slice(b)}`)
                    }
                    return n.win32.normalize(s)
                },
                relative(r, s) {
                    if ((c(r, 'from'), c(s, 'to'), r === s)) return ''
                    const l = n.win32.resolve(r),
                        p = n.win32.resolve(s)
                    if (l === p || ((r = l.toLowerCase()), (s = p.toLowerCase()), r === s))
                        return ''
                    let b = 0
                    for (; b < r.length && r.charCodeAt(b) === o; ) b++
                    let v = r.length
                    for (; v - 1 > b && r.charCodeAt(v - 1) === o; ) v--
                    const R = v - b
                    let N = 0
                    for (; N < s.length && s.charCodeAt(N) === o; ) N++
                    let D = s.length
                    for (; D - 1 > N && s.charCodeAt(D - 1) === o; ) D--
                    const x = D - N,
                        T = R < x ? R : x
                    let F = -1,
                        U = 0
                    for (; U < T; U++) {
                        const k = r.charCodeAt(b + U)
                        if (k !== s.charCodeAt(N + U)) break
                        k === o && (F = U)
                    }
                    if (U !== T) {
                        if (F === -1) return p
                    } else {
                        if (x > T) {
                            if (s.charCodeAt(N + U) === o) return p.slice(N + U + 1)
                            if (U === 2) return p.slice(N + U)
                        }
                        R > T && (r.charCodeAt(b + U) === o ? (F = U) : U === 2 && (F = 3)),
                            F === -1 && (F = 0)
                    }
                    let z = ''
                    for (U = b + F + 1; U <= v; ++U)
                        (U === v || r.charCodeAt(U) === o) && (z += z.length === 0 ? '..' : '\\..')
                    return (
                        (N += F),
                        z.length > 0
                            ? `${z}${p.slice(N, D)}`
                            : (p.charCodeAt(N) === o && ++N, p.slice(N, D))
                    )
                },
                toNamespacedPath(r) {
                    if (typeof r != 'string' || r.length === 0) return r
                    const s = n.win32.resolve(r)
                    if (s.length <= 2) return r
                    if (s.charCodeAt(0) === o) {
                        if (s.charCodeAt(1) === o) {
                            const l = s.charCodeAt(2)
                            if (l !== e && l !== L) return `\\\\?\\UNC\\${s.slice(2)}`
                        }
                    } else if (w(s.charCodeAt(0)) && s.charCodeAt(1) === C && s.charCodeAt(2) === o)
                        return `\\\\?\\${s}`
                    return r
                },
                dirname(r) {
                    c(r, 'path')
                    const s = r.length
                    if (s === 0) return '.'
                    let l = -1,
                        p = 0
                    const b = r.charCodeAt(0)
                    if (s === 1) return f(b) ? r : '.'
                    if (f(b)) {
                        if (((l = p = 1), f(r.charCodeAt(1)))) {
                            let N = 2,
                                D = N
                            for (; N < s && !f(r.charCodeAt(N)); ) N++
                            if (N < s && N !== D) {
                                for (D = N; N < s && f(r.charCodeAt(N)); ) N++
                                if (N < s && N !== D) {
                                    for (D = N; N < s && !f(r.charCodeAt(N)); ) N++
                                    if (N === s) return r
                                    N !== D && (l = p = N + 1)
                                }
                            }
                        }
                    } else
                        w(b) &&
                            r.charCodeAt(1) === C &&
                            ((l = s > 2 && f(r.charCodeAt(2)) ? 3 : 2), (p = l))
                    let v = -1,
                        R = !0
                    for (let N = s - 1; N >= p; --N)
                        if (f(r.charCodeAt(N))) {
                            if (!R) {
                                v = N
                                break
                            }
                        } else R = !1
                    if (v === -1) {
                        if (l === -1) return '.'
                        v = l
                    }
                    return r.slice(0, v)
                },
                basename(r, s) {
                    s !== void 0 && c(s, 'ext'), c(r, 'path')
                    let l = 0,
                        p = -1,
                        b = !0,
                        v
                    if (
                        (r.length >= 2 && w(r.charCodeAt(0)) && r.charCodeAt(1) === C && (l = 2),
                        s !== void 0 && s.length > 0 && s.length <= r.length)
                    ) {
                        if (s === r) return ''
                        let R = s.length - 1,
                            N = -1
                        for (v = r.length - 1; v >= l; --v) {
                            const D = r.charCodeAt(v)
                            if (f(D)) {
                                if (!b) {
                                    l = v + 1
                                    break
                                }
                            } else
                                N === -1 && ((b = !1), (N = v + 1)),
                                    R >= 0 &&
                                        (D === s.charCodeAt(R)
                                            ? --R === -1 && (p = v)
                                            : ((R = -1), (p = N)))
                        }
                        return l === p ? (p = N) : p === -1 && (p = r.length), r.slice(l, p)
                    }
                    for (v = r.length - 1; v >= l; --v)
                        if (f(r.charCodeAt(v))) {
                            if (!b) {
                                l = v + 1
                                break
                            }
                        } else p === -1 && ((b = !1), (p = v + 1))
                    return p === -1 ? '' : r.slice(l, p)
                },
                extname(r) {
                    c(r, 'path')
                    let s = 0,
                        l = -1,
                        p = 0,
                        b = -1,
                        v = !0,
                        R = 0
                    r.length >= 2 && r.charCodeAt(1) === C && w(r.charCodeAt(0)) && (s = p = 2)
                    for (let N = r.length - 1; N >= s; --N) {
                        const D = r.charCodeAt(N)
                        if (f(D)) {
                            if (!v) {
                                p = N + 1
                                break
                            }
                            continue
                        }
                        b === -1 && ((v = !1), (b = N + 1)),
                            D === L
                                ? l === -1
                                    ? (l = N)
                                    : R !== 1 && (R = 1)
                                : l !== -1 && (R = -1)
                    }
                    return l === -1 ||
                        b === -1 ||
                        R === 0 ||
                        (R === 1 && l === b - 1 && l === p + 1)
                        ? ''
                        : r.slice(l, b)
                },
                format: y.bind(null, '\\'),
                parse(r) {
                    c(r, 'path')
                    const s = { root: '', dir: '', base: '', ext: '', name: '' }
                    if (r.length === 0) return s
                    const l = r.length
                    let p = 0,
                        b = r.charCodeAt(0)
                    if (l === 1)
                        return f(b) ? ((s.root = s.dir = r), s) : ((s.base = s.name = r), s)
                    if (f(b)) {
                        if (((p = 1), f(r.charCodeAt(1)))) {
                            let F = 2,
                                U = F
                            for (; F < l && !f(r.charCodeAt(F)); ) F++
                            if (F < l && F !== U) {
                                for (U = F; F < l && f(r.charCodeAt(F)); ) F++
                                if (F < l && F !== U) {
                                    for (U = F; F < l && !f(r.charCodeAt(F)); ) F++
                                    F === l ? (p = F) : F !== U && (p = F + 1)
                                }
                            }
                        }
                    } else if (w(b) && r.charCodeAt(1) === C) {
                        if (l <= 2) return (s.root = s.dir = r), s
                        if (((p = 2), f(r.charCodeAt(2)))) {
                            if (l === 3) return (s.root = s.dir = r), s
                            p = 3
                        }
                    }
                    p > 0 && (s.root = r.slice(0, p))
                    let v = -1,
                        R = p,
                        N = -1,
                        D = !0,
                        x = r.length - 1,
                        T = 0
                    for (; x >= p; --x) {
                        if (((b = r.charCodeAt(x)), f(b))) {
                            if (!D) {
                                R = x + 1
                                break
                            }
                            continue
                        }
                        N === -1 && ((D = !1), (N = x + 1)),
                            b === L
                                ? v === -1
                                    ? (v = x)
                                    : T !== 1 && (T = 1)
                                : v !== -1 && (T = -1)
                    }
                    return (
                        N !== -1 &&
                            (v === -1 || T === 0 || (T === 1 && v === N - 1 && v === R + 1)
                                ? (s.base = s.name = r.slice(R, N))
                                : ((s.name = r.slice(R, v)),
                                  (s.base = r.slice(R, N)),
                                  (s.ext = r.slice(v, N)))),
                        R > 0 && R !== p ? (s.dir = r.slice(0, R - 1)) : (s.dir = s.root),
                        s
                    )
                },
                sep: '\\',
                delimiter: ';',
                win32: null,
                posix: null
            }
            const _ = (() => {
                if (m) {
                    const r = /\\/g
                    return () => {
                        const s = M.cwd().replace(r, '/')
                        return s.slice(s.indexOf('/'))
                    }
                }
                return () => M.cwd()
            })()
            ;(n.posix = {
                resolve(...r) {
                    let s = '',
                        l = !1
                    for (let p = r.length - 1; p >= -1 && !l; p--) {
                        const b = p >= 0 ? r[p] : _()
                        c(b, 'path'),
                            b.length !== 0 && ((s = `${b}/${s}`), (l = b.charCodeAt(0) === h))
                    }
                    return (s = E(s, !l, '/', S)), l ? `/${s}` : s.length > 0 ? s : '.'
                },
                normalize(r) {
                    if ((c(r, 'path'), r.length === 0)) return '.'
                    const s = r.charCodeAt(0) === h,
                        l = r.charCodeAt(r.length - 1) === h
                    return (
                        (r = E(r, !s, '/', S)),
                        r.length === 0
                            ? s
                                ? '/'
                                : l
                                  ? './'
                                  : '.'
                            : (l && (r += '/'), s ? `/${r}` : r)
                    )
                },
                isAbsolute(r) {
                    return c(r, 'path'), r.length > 0 && r.charCodeAt(0) === h
                },
                join(...r) {
                    if (r.length === 0) return '.'
                    let s
                    for (let l = 0; l < r.length; ++l) {
                        const p = r[l]
                        c(p, 'path'), p.length > 0 && (s === void 0 ? (s = p) : (s += `/${p}`))
                    }
                    return s === void 0 ? '.' : n.posix.normalize(s)
                },
                relative(r, s) {
                    if (
                        (c(r, 'from'),
                        c(s, 'to'),
                        r === s || ((r = n.posix.resolve(r)), (s = n.posix.resolve(s)), r === s))
                    )
                        return ''
                    const l = 1,
                        p = r.length,
                        b = p - l,
                        v = 1,
                        R = s.length - v,
                        N = b < R ? b : R
                    let D = -1,
                        x = 0
                    for (; x < N; x++) {
                        const F = r.charCodeAt(l + x)
                        if (F !== s.charCodeAt(v + x)) break
                        F === h && (D = x)
                    }
                    if (x === N)
                        if (R > N) {
                            if (s.charCodeAt(v + x) === h) return s.slice(v + x + 1)
                            if (x === 0) return s.slice(v + x)
                        } else b > N && (r.charCodeAt(l + x) === h ? (D = x) : x === 0 && (D = 0))
                    let T = ''
                    for (x = l + D + 1; x <= p; ++x)
                        (x === p || r.charCodeAt(x) === h) && (T += T.length === 0 ? '..' : '/..')
                    return `${T}${s.slice(v + D)}`
                },
                toNamespacedPath(r) {
                    return r
                },
                dirname(r) {
                    if ((c(r, 'path'), r.length === 0)) return '.'
                    const s = r.charCodeAt(0) === h
                    let l = -1,
                        p = !0
                    for (let b = r.length - 1; b >= 1; --b)
                        if (r.charCodeAt(b) === h) {
                            if (!p) {
                                l = b
                                break
                            }
                        } else p = !1
                    return l === -1 ? (s ? '/' : '.') : s && l === 1 ? '//' : r.slice(0, l)
                },
                basename(r, s) {
                    s !== void 0 && c(s, 'ext'), c(r, 'path')
                    let l = 0,
                        p = -1,
                        b = !0,
                        v
                    if (s !== void 0 && s.length > 0 && s.length <= r.length) {
                        if (s === r) return ''
                        let R = s.length - 1,
                            N = -1
                        for (v = r.length - 1; v >= 0; --v) {
                            const D = r.charCodeAt(v)
                            if (D === h) {
                                if (!b) {
                                    l = v + 1
                                    break
                                }
                            } else
                                N === -1 && ((b = !1), (N = v + 1)),
                                    R >= 0 &&
                                        (D === s.charCodeAt(R)
                                            ? --R === -1 && (p = v)
                                            : ((R = -1), (p = N)))
                        }
                        return l === p ? (p = N) : p === -1 && (p = r.length), r.slice(l, p)
                    }
                    for (v = r.length - 1; v >= 0; --v)
                        if (r.charCodeAt(v) === h) {
                            if (!b) {
                                l = v + 1
                                break
                            }
                        } else p === -1 && ((b = !1), (p = v + 1))
                    return p === -1 ? '' : r.slice(l, p)
                },
                extname(r) {
                    c(r, 'path')
                    let s = -1,
                        l = 0,
                        p = -1,
                        b = !0,
                        v = 0
                    for (let R = r.length - 1; R >= 0; --R) {
                        const N = r.charCodeAt(R)
                        if (N === h) {
                            if (!b) {
                                l = R + 1
                                break
                            }
                            continue
                        }
                        p === -1 && ((b = !1), (p = R + 1)),
                            N === L
                                ? s === -1
                                    ? (s = R)
                                    : v !== 1 && (v = 1)
                                : s !== -1 && (v = -1)
                    }
                    return s === -1 ||
                        p === -1 ||
                        v === 0 ||
                        (v === 1 && s === p - 1 && s === l + 1)
                        ? ''
                        : r.slice(s, p)
                },
                format: y.bind(null, '/'),
                parse(r) {
                    c(r, 'path')
                    const s = { root: '', dir: '', base: '', ext: '', name: '' }
                    if (r.length === 0) return s
                    const l = r.charCodeAt(0) === h
                    let p
                    l ? ((s.root = '/'), (p = 1)) : (p = 0)
                    let b = -1,
                        v = 0,
                        R = -1,
                        N = !0,
                        D = r.length - 1,
                        x = 0
                    for (; D >= p; --D) {
                        const T = r.charCodeAt(D)
                        if (T === h) {
                            if (!N) {
                                v = D + 1
                                break
                            }
                            continue
                        }
                        R === -1 && ((N = !1), (R = D + 1)),
                            T === L
                                ? b === -1
                                    ? (b = D)
                                    : x !== 1 && (x = 1)
                                : b !== -1 && (x = -1)
                    }
                    if (R !== -1) {
                        const T = v === 0 && l ? 1 : v
                        b === -1 || x === 0 || (x === 1 && b === R - 1 && b === v + 1)
                            ? (s.base = s.name = r.slice(T, R))
                            : ((s.name = r.slice(T, b)),
                              (s.base = r.slice(T, R)),
                              (s.ext = r.slice(b, R)))
                    }
                    return v > 0 ? (s.dir = r.slice(0, v - 1)) : l && (s.dir = '/'), s
                },
                sep: '/',
                delimiter: ':',
                win32: null,
                posix: null
            }),
                (n.posix.win32 = n.win32.win32 = n.win32),
                (n.posix.posix = n.win32.posix = n.posix),
                (n.normalize = m ? n.win32.normalize : n.posix.normalize),
                (n.resolve = m ? n.win32.resolve : n.posix.resolve),
                (n.relative = m ? n.win32.relative : n.posix.relative),
                (n.dirname = m ? n.win32.dirname : n.posix.dirname),
                (n.basename = m ? n.win32.basename : n.posix.basename),
                (n.extname = m ? n.win32.extname : n.posix.extname),
                (n.sep = m ? n.win32.sep : n.posix.sep)
        }),
        X(J[18], Z([0, 1, 63, 17]), function (q, n, M, A) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }), (n.uriToFsPath = n.URI = void 0)
            const i = /^\w[\w\d+.-]*$/,
                d = /^\//,
                g = /^\/\//
            function L(l, p) {
                if (!l.scheme && p)
                    throw new Error(
                        `[UriError]: Scheme is missing: {scheme: "", authority: "${l.authority}", path: "${l.path}", query: "${l.query}", fragment: "${l.fragment}"}`
                    )
                if (l.scheme && !i.test(l.scheme))
                    throw new Error('[UriError]: Scheme contains illegal characters.')
                if (l.path) {
                    if (l.authority) {
                        if (!d.test(l.path))
                            throw new Error(
                                '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
                            )
                    } else if (g.test(l.path))
                        throw new Error(
                            '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
                        )
                }
            }
            function h(l, p) {
                return !l && !p ? 'file' : l
            }
            function o(l, p) {
                switch (l) {
                    case 'https':
                    case 'http':
                    case 'file':
                        p ? p[0] !== e && (p = e + p) : (p = e)
                        break
                }
                return p
            }
            const C = '',
                e = '/',
                a = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/
            class u {
                static isUri(p) {
                    return p instanceof u
                        ? !0
                        : p
                          ? typeof p.authority == 'string' &&
                            typeof p.fragment == 'string' &&
                            typeof p.path == 'string' &&
                            typeof p.query == 'string' &&
                            typeof p.scheme == 'string' &&
                            typeof p.fsPath == 'string' &&
                            typeof p.with == 'function' &&
                            typeof p.toString == 'function'
                          : !1
                }
                constructor(p, b, v, R, N, D = !1) {
                    typeof p == 'object'
                        ? ((this.scheme = p.scheme || C),
                          (this.authority = p.authority || C),
                          (this.path = p.path || C),
                          (this.query = p.query || C),
                          (this.fragment = p.fragment || C))
                        : ((this.scheme = h(p, D)),
                          (this.authority = b || C),
                          (this.path = o(this.scheme, v || C)),
                          (this.query = R || C),
                          (this.fragment = N || C),
                          L(this, D))
                }
                get fsPath() {
                    return E(this, !1)
                }
                with(p) {
                    if (!p) return this
                    let { scheme: b, authority: v, path: R, query: N, fragment: D } = p
                    return (
                        b === void 0 ? (b = this.scheme) : b === null && (b = C),
                        v === void 0 ? (v = this.authority) : v === null && (v = C),
                        R === void 0 ? (R = this.path) : R === null && (R = C),
                        N === void 0 ? (N = this.query) : N === null && (N = C),
                        D === void 0 ? (D = this.fragment) : D === null && (D = C),
                        b === this.scheme &&
                        v === this.authority &&
                        R === this.path &&
                        N === this.query &&
                        D === this.fragment
                            ? this
                            : new m(b, v, R, N, D)
                    )
                }
                static parse(p, b = !1) {
                    const v = a.exec(p)
                    return v
                        ? new m(
                              v[2] || C,
                              s(v[4] || C),
                              s(v[5] || C),
                              s(v[7] || C),
                              s(v[9] || C),
                              b
                          )
                        : new m(C, C, C, C, C)
                }
                static file(p) {
                    let b = C
                    if ((A.isWindows && (p = p.replace(/\\/g, e)), p[0] === e && p[1] === e)) {
                        const v = p.indexOf(e, 2)
                        v === -1
                            ? ((b = p.substring(2)), (p = e))
                            : ((b = p.substring(2, v)), (p = p.substring(v) || e))
                    }
                    return new m('file', b, p, C, C)
                }
                static from(p, b) {
                    return new m(p.scheme, p.authority, p.path, p.query, p.fragment, b)
                }
                static joinPath(p, ...b) {
                    if (!p.path)
                        throw new Error('[UriError]: cannot call joinPath on URI without path')
                    let v
                    return (
                        A.isWindows && p.scheme === 'file'
                            ? (v = u.file(M.win32.join(E(p, !0), ...b)).path)
                            : (v = M.posix.join(p.path, ...b)),
                        p.with({ path: v })
                    )
                }
                toString(p = !1) {
                    return y(this, p)
                }
                toJSON() {
                    return this
                }
                static revive(p) {
                    var b, v
                    if (p) {
                        if (p instanceof u) return p
                        {
                            const R = new m(p)
                            return (
                                (R._formatted =
                                    (b = p.external) !== null && b !== void 0 ? b : null),
                                (R._fsPath =
                                    p._sep === c && (v = p.fsPath) !== null && v !== void 0
                                        ? v
                                        : null),
                                R
                            )
                        }
                    } else return p
                }
            }
            n.URI = u
            const c = A.isWindows ? 1 : void 0
            class m extends u {
                constructor() {
                    super(...arguments), (this._formatted = null), (this._fsPath = null)
                }
                get fsPath() {
                    return this._fsPath || (this._fsPath = E(this, !1)), this._fsPath
                }
                toString(p = !1) {
                    return p
                        ? y(this, !0)
                        : (this._formatted || (this._formatted = y(this, !1)), this._formatted)
                }
                toJSON() {
                    const p = { $mid: 1 }
                    return (
                        this._fsPath && ((p.fsPath = this._fsPath), (p._sep = c)),
                        this._formatted && (p.external = this._formatted),
                        this.path && (p.path = this.path),
                        this.scheme && (p.scheme = this.scheme),
                        this.authority && (p.authority = this.authority),
                        this.query && (p.query = this.query),
                        this.fragment && (p.fragment = this.fragment),
                        p
                    )
                }
            }
            const f = {
                [58]: '%3A',
                [47]: '%2F',
                [63]: '%3F',
                [35]: '%23',
                [91]: '%5B',
                [93]: '%5D',
                [64]: '%40',
                [33]: '%21',
                [36]: '%24',
                [38]: '%26',
                [39]: '%27',
                [40]: '%28',
                [41]: '%29',
                [42]: '%2A',
                [43]: '%2B',
                [44]: '%2C',
                [59]: '%3B',
                [61]: '%3D',
                [32]: '%20'
            }
            function S(l, p, b) {
                let v,
                    R = -1
                for (let N = 0; N < l.length; N++) {
                    const D = l.charCodeAt(N)
                    if (
                        (D >= 97 && D <= 122) ||
                        (D >= 65 && D <= 90) ||
                        (D >= 48 && D <= 57) ||
                        D === 45 ||
                        D === 46 ||
                        D === 95 ||
                        D === 126 ||
                        (p && D === 47) ||
                        (b && D === 91) ||
                        (b && D === 93) ||
                        (b && D === 58)
                    )
                        R !== -1 && ((v += encodeURIComponent(l.substring(R, N))), (R = -1)),
                            v !== void 0 && (v += l.charAt(N))
                    else {
                        v === void 0 && (v = l.substr(0, N))
                        const x = f[D]
                        x !== void 0
                            ? (R !== -1 && ((v += encodeURIComponent(l.substring(R, N))), (R = -1)),
                              (v += x))
                            : R === -1 && (R = N)
                    }
                }
                return R !== -1 && (v += encodeURIComponent(l.substring(R))), v !== void 0 ? v : l
            }
            function w(l) {
                let p
                for (let b = 0; b < l.length; b++) {
                    const v = l.charCodeAt(b)
                    v === 35 || v === 63
                        ? (p === void 0 && (p = l.substr(0, b)), (p += f[v]))
                        : p !== void 0 && (p += l[b])
                }
                return p !== void 0 ? p : l
            }
            function E(l, p) {
                let b
                return (
                    l.authority && l.path.length > 1 && l.scheme === 'file'
                        ? (b = `//${l.authority}${l.path}`)
                        : l.path.charCodeAt(0) === 47 &&
                            ((l.path.charCodeAt(1) >= 65 && l.path.charCodeAt(1) <= 90) ||
                                (l.path.charCodeAt(1) >= 97 && l.path.charCodeAt(1) <= 122)) &&
                            l.path.charCodeAt(2) === 58
                          ? p
                              ? (b = l.path.substr(1))
                              : (b = l.path[1].toLowerCase() + l.path.substr(2))
                          : (b = l.path),
                    A.isWindows && (b = b.replace(/\//g, '\\')),
                    b
                )
            }
            n.uriToFsPath = E
            function y(l, p) {
                const b = p ? w : S
                let v = '',
                    { scheme: R, authority: N, path: D, query: x, fragment: T } = l
                if ((R && ((v += R), (v += ':')), (N || R === 'file') && ((v += e), (v += e)), N)) {
                    let F = N.indexOf('@')
                    if (F !== -1) {
                        const U = N.substr(0, F)
                        ;(N = N.substr(F + 1)),
                            (F = U.lastIndexOf(':')),
                            F === -1
                                ? (v += b(U, !1, !1))
                                : ((v += b(U.substr(0, F), !1, !1)),
                                  (v += ':'),
                                  (v += b(U.substr(F + 1), !1, !0))),
                            (v += '@')
                    }
                    ;(N = N.toLowerCase()),
                        (F = N.lastIndexOf(':')),
                        F === -1
                            ? (v += b(N, !1, !0))
                            : ((v += b(N.substr(0, F), !1, !0)), (v += N.substr(F)))
                }
                if (D) {
                    if (D.length >= 3 && D.charCodeAt(0) === 47 && D.charCodeAt(2) === 58) {
                        const F = D.charCodeAt(1)
                        F >= 65 && F <= 90 && (D = `/${String.fromCharCode(F + 32)}:${D.substr(3)}`)
                    } else if (D.length >= 2 && D.charCodeAt(1) === 58) {
                        const F = D.charCodeAt(0)
                        F >= 65 && F <= 90 && (D = `${String.fromCharCode(F + 32)}:${D.substr(2)}`)
                    }
                    v += b(D, !0, !1)
                }
                return (
                    x && ((v += '?'), (v += b(x, !1, !1))),
                    T && ((v += '#'), (v += p ? T : S(T, !1, !1))),
                    v
                )
            }
            function _(l) {
                try {
                    return decodeURIComponent(l)
                } catch {
                    return l.length > 3 ? l.substr(0, 3) + _(l.substr(3)) : l
                }
            }
            const r = /(%[0-9A-Za-z][0-9A-Za-z])+/g
            function s(l) {
                return l.match(r) ? l.replace(r, (p) => _(p)) : l
            }
        }),
        X(J[67], Z([0, 1, 5, 9, 13, 14, 17, 6]), function (q, n, M, A, i, d, g, L) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.create =
                    n.SimpleWorkerServer =
                    n.SimpleWorkerClient =
                    n.logOnceWebWorkerWarning =
                        void 0)
            const h = '$initialize'
            let o = !1
            function C(s) {
                g.isWeb &&
                    (o ||
                        ((o = !0),
                        console.warn(
                            'Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/microsoft/monaco-editor#faq'
                        )),
                    console.warn(s.message))
            }
            n.logOnceWebWorkerWarning = C
            class e {
                constructor(l, p, b, v) {
                    ;(this.vsWorker = l),
                        (this.req = p),
                        (this.method = b),
                        (this.args = v),
                        (this.type = 0)
                }
            }
            class a {
                constructor(l, p, b, v) {
                    ;(this.vsWorker = l),
                        (this.seq = p),
                        (this.res = b),
                        (this.err = v),
                        (this.type = 1)
                }
            }
            class u {
                constructor(l, p, b, v) {
                    ;(this.vsWorker = l),
                        (this.req = p),
                        (this.eventName = b),
                        (this.arg = v),
                        (this.type = 2)
                }
            }
            class c {
                constructor(l, p, b) {
                    ;(this.vsWorker = l), (this.req = p), (this.event = b), (this.type = 3)
                }
            }
            class m {
                constructor(l, p) {
                    ;(this.vsWorker = l), (this.req = p), (this.type = 4)
                }
            }
            class f {
                constructor(l) {
                    ;(this._workerId = -1),
                        (this._handler = l),
                        (this._lastSentReq = 0),
                        (this._pendingReplies = Object.create(null)),
                        (this._pendingEmitters = new Map()),
                        (this._pendingEvents = new Map())
                }
                setWorkerId(l) {
                    this._workerId = l
                }
                sendMessage(l, p) {
                    const b = String(++this._lastSentReq)
                    return new Promise((v, R) => {
                        ;(this._pendingReplies[b] = { resolve: v, reject: R }),
                            this._send(new e(this._workerId, b, l, p))
                    })
                }
                listen(l, p) {
                    let b = null
                    const v = new A.Emitter({
                        onWillAddFirstListener: () => {
                            ;(b = String(++this._lastSentReq)),
                                this._pendingEmitters.set(b, v),
                                this._send(new u(this._workerId, b, l, p))
                        },
                        onDidRemoveLastListener: () => {
                            this._pendingEmitters.delete(b),
                                this._send(new m(this._workerId, b)),
                                (b = null)
                        }
                    })
                    return v.event
                }
                handleMessage(l) {
                    !l ||
                        !l.vsWorker ||
                        (this._workerId !== -1 && l.vsWorker !== this._workerId) ||
                        this._handleMessage(l)
                }
                _handleMessage(l) {
                    switch (l.type) {
                        case 1:
                            return this._handleReplyMessage(l)
                        case 0:
                            return this._handleRequestMessage(l)
                        case 2:
                            return this._handleSubscribeEventMessage(l)
                        case 3:
                            return this._handleEventMessage(l)
                        case 4:
                            return this._handleUnsubscribeEventMessage(l)
                    }
                }
                _handleReplyMessage(l) {
                    if (!this._pendingReplies[l.seq]) {
                        console.warn('Got reply to unknown seq')
                        return
                    }
                    const p = this._pendingReplies[l.seq]
                    if ((delete this._pendingReplies[l.seq], l.err)) {
                        let b = l.err
                        l.err.$isError &&
                            ((b = new Error()),
                            (b.name = l.err.name),
                            (b.message = l.err.message),
                            (b.stack = l.err.stack)),
                            p.reject(b)
                        return
                    }
                    p.resolve(l.res)
                }
                _handleRequestMessage(l) {
                    const p = l.req
                    this._handler.handleMessage(l.method, l.args).then(
                        (v) => {
                            this._send(new a(this._workerId, p, v, void 0))
                        },
                        (v) => {
                            v.detail instanceof Error &&
                                (v.detail = (0, M.transformErrorForSerialization)(v.detail)),
                                this._send(
                                    new a(
                                        this._workerId,
                                        p,
                                        void 0,
                                        (0, M.transformErrorForSerialization)(v)
                                    )
                                )
                        }
                    )
                }
                _handleSubscribeEventMessage(l) {
                    const p = l.req,
                        b = this._handler.handleEvent(
                            l.eventName,
                            l.arg
                        )((v) => {
                            this._send(new c(this._workerId, p, v))
                        })
                    this._pendingEvents.set(p, b)
                }
                _handleEventMessage(l) {
                    if (!this._pendingEmitters.has(l.req)) {
                        console.warn('Got event for unknown req')
                        return
                    }
                    this._pendingEmitters.get(l.req).fire(l.event)
                }
                _handleUnsubscribeEventMessage(l) {
                    if (!this._pendingEvents.has(l.req)) {
                        console.warn('Got unsubscribe for unknown req')
                        return
                    }
                    this._pendingEvents.get(l.req).dispose(), this._pendingEvents.delete(l.req)
                }
                _send(l) {
                    const p = []
                    if (l.type === 0)
                        for (let b = 0; b < l.args.length; b++)
                            l.args[b] instanceof ArrayBuffer && p.push(l.args[b])
                    else l.type === 1 && l.res instanceof ArrayBuffer && p.push(l.res)
                    this._handler.sendMessage(l, p)
                }
            }
            class S extends i.Disposable {
                constructor(l, p, b) {
                    super()
                    let v = null
                    ;(this._worker = this._register(
                        l.create(
                            'vs/base/common/worker/simpleWorker',
                            (F) => {
                                this._protocol.handleMessage(F)
                            },
                            (F) => {
                                v?.(F)
                            }
                        )
                    )),
                        (this._protocol = new f({
                            sendMessage: (F, U) => {
                                this._worker.postMessage(F, U)
                            },
                            handleMessage: (F, U) => {
                                if (typeof b[F] != 'function')
                                    return Promise.reject(
                                        new Error('Missing method ' + F + ' on main thread host.')
                                    )
                                try {
                                    return Promise.resolve(b[F].apply(b, U))
                                } catch (z) {
                                    return Promise.reject(z)
                                }
                            },
                            handleEvent: (F, U) => {
                                if (E(F)) {
                                    const z = b[F].call(b, U)
                                    if (typeof z != 'function')
                                        throw new Error(
                                            `Missing dynamic event ${F} on main thread host.`
                                        )
                                    return z
                                }
                                if (w(F)) {
                                    const z = b[F]
                                    if (typeof z != 'function')
                                        throw new Error(`Missing event ${F} on main thread host.`)
                                    return z
                                }
                                throw new Error(`Malformed event name ${F}`)
                            }
                        })),
                        this._protocol.setWorkerId(this._worker.getId())
                    let R = null
                    const N = globalThis.require
                    typeof N < 'u' && typeof N.getConfig == 'function'
                        ? (R = N.getConfig())
                        : typeof globalThis.requirejs < 'u' &&
                          (R = globalThis.requirejs.s.contexts._.config)
                    const D = (0, d.getAllMethodNames)(b)
                    this._onModuleLoaded = this._protocol.sendMessage(h, [
                        this._worker.getId(),
                        JSON.parse(JSON.stringify(R)),
                        p,
                        D
                    ])
                    const x = (F, U) => this._request(F, U),
                        T = (F, U) => this._protocol.listen(F, U)
                    this._lazyProxy = new Promise((F, U) => {
                        ;(v = U),
                            this._onModuleLoaded.then(
                                (z) => {
                                    F(y(z, x, T))
                                },
                                (z) => {
                                    U(z), this._onError('Worker failed to load ' + p, z)
                                }
                            )
                    })
                }
                getProxyObject() {
                    return this._lazyProxy
                }
                _request(l, p) {
                    return new Promise((b, v) => {
                        this._onModuleLoaded.then(() => {
                            this._protocol.sendMessage(l, p).then(b, v)
                        }, v)
                    })
                }
                _onError(l, p) {
                    console.error(l), console.info(p)
                }
            }
            n.SimpleWorkerClient = S
            function w(s) {
                return s[0] === 'o' && s[1] === 'n' && L.isUpperAsciiLetter(s.charCodeAt(2))
            }
            function E(s) {
                return /^onDynamic/.test(s) && L.isUpperAsciiLetter(s.charCodeAt(9))
            }
            function y(s, l, p) {
                const b = (N) =>
                        function () {
                            const D = Array.prototype.slice.call(arguments, 0)
                            return l(N, D)
                        },
                    v = (N) =>
                        function (D) {
                            return p(N, D)
                        },
                    R = {}
                for (const N of s) {
                    if (E(N)) {
                        R[N] = v(N)
                        continue
                    }
                    if (w(N)) {
                        R[N] = p(N, void 0)
                        continue
                    }
                    R[N] = b(N)
                }
                return R
            }
            class _ {
                constructor(l, p) {
                    ;(this._requestHandlerFactory = p),
                        (this._requestHandler = null),
                        (this._protocol = new f({
                            sendMessage: (b, v) => {
                                l(b, v)
                            },
                            handleMessage: (b, v) => this._handleMessage(b, v),
                            handleEvent: (b, v) => this._handleEvent(b, v)
                        }))
                }
                onmessage(l) {
                    this._protocol.handleMessage(l)
                }
                _handleMessage(l, p) {
                    if (l === h) return this.initialize(p[0], p[1], p[2], p[3])
                    if (!this._requestHandler || typeof this._requestHandler[l] != 'function')
                        return Promise.reject(new Error('Missing requestHandler or method: ' + l))
                    try {
                        return Promise.resolve(
                            this._requestHandler[l].apply(this._requestHandler, p)
                        )
                    } catch (b) {
                        return Promise.reject(b)
                    }
                }
                _handleEvent(l, p) {
                    if (!this._requestHandler) throw new Error('Missing requestHandler')
                    if (E(l)) {
                        const b = this._requestHandler[l].call(this._requestHandler, p)
                        if (typeof b != 'function')
                            throw new Error(`Missing dynamic event ${l} on request handler.`)
                        return b
                    }
                    if (w(l)) {
                        const b = this._requestHandler[l]
                        if (typeof b != 'function')
                            throw new Error(`Missing event ${l} on request handler.`)
                        return b
                    }
                    throw new Error(`Malformed event name ${l}`)
                }
                initialize(l, p, b, v) {
                    this._protocol.setWorkerId(l)
                    const D = y(
                        v,
                        (x, T) => this._protocol.sendMessage(x, T),
                        (x, T) => this._protocol.listen(x, T)
                    )
                    return this._requestHandlerFactory
                        ? ((this._requestHandler = this._requestHandlerFactory(D)),
                          Promise.resolve((0, d.getAllMethodNames)(this._requestHandler)))
                        : (p &&
                              (typeof p.baseUrl < 'u' && delete p.baseUrl,
                              typeof p.paths < 'u' && typeof p.paths.vs < 'u' && delete p.paths.vs,
                              typeof p.trustedTypesPolicy !== void 0 && delete p.trustedTypesPolicy,
                              (p.catchError = !0),
                              globalThis.require.config(p)),
                          new Promise((x, T) => {
                              ;(globalThis.require || q)(
                                  [b],
                                  (U) => {
                                      if (
                                          ((this._requestHandler = U.create(D)),
                                          !this._requestHandler)
                                      ) {
                                          T(new Error('No RequestHandler!'))
                                          return
                                      }
                                      x((0, d.getAllMethodNames)(this._requestHandler))
                                  },
                                  T
                              )
                          }))
                }
            }
            n.SimpleWorkerServer = _
            function r(s) {
                return new _(s, null)
            }
            n.create = r
        }),
        X(J[64], Z([19, 61]), function (q, n) {
            return q.create('vs/editor/common/languages', n)
        }),
        X(J[65], Z([0, 1, 40, 18, 2, 59, 64]), function (q, n, M, A, i, d, g) {
            'use strict'
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.TokenizationRegistry =
                    n.LazyTokenizationSupport =
                    n.InlayHintKind =
                    n.Command =
                    n.FoldingRangeKind =
                    n.TextEdit =
                    n.SymbolKinds =
                    n.getAriaLabelForSymbol =
                    n.symbolKindNames =
                    n.isLocationLink =
                    n.DocumentHighlightKind =
                    n.SignatureHelpTriggerKind =
                    n.SelectedSuggestionInfo =
                    n.InlineCompletionTriggerKind =
                    n.CompletionItemKinds =
                    n.EncodedTokenizationResult =
                    n.TokenizationResult =
                    n.Token =
                        void 0)
            class L {
                constructor(l, p, b) {
                    ;(this.offset = l),
                        (this.type = p),
                        (this.language = b),
                        (this._tokenBrand = void 0)
                }
                toString() {
                    return '(' + this.offset + ', ' + this.type + ')'
                }
            }
            n.Token = L
            class h {
                constructor(l, p) {
                    ;(this.tokens = l),
                        (this.endState = p),
                        (this._tokenizationResultBrand = void 0)
                }
            }
            n.TokenizationResult = h
            class o {
                constructor(l, p) {
                    ;(this.tokens = l),
                        (this.endState = p),
                        (this._encodedTokenizationResultBrand = void 0)
                }
            }
            n.EncodedTokenizationResult = o
            var C
            ;(function (s) {
                const l = new Map()
                l.set(0, M.Codicon.symbolMethod),
                    l.set(1, M.Codicon.symbolFunction),
                    l.set(2, M.Codicon.symbolConstructor),
                    l.set(3, M.Codicon.symbolField),
                    l.set(4, M.Codicon.symbolVariable),
                    l.set(5, M.Codicon.symbolClass),
                    l.set(6, M.Codicon.symbolStruct),
                    l.set(7, M.Codicon.symbolInterface),
                    l.set(8, M.Codicon.symbolModule),
                    l.set(9, M.Codicon.symbolProperty),
                    l.set(10, M.Codicon.symbolEvent),
                    l.set(11, M.Codicon.symbolOperator),
                    l.set(12, M.Codicon.symbolUnit),
                    l.set(13, M.Codicon.symbolValue),
                    l.set(15, M.Codicon.symbolEnum),
                    l.set(14, M.Codicon.symbolConstant),
                    l.set(15, M.Codicon.symbolEnum),
                    l.set(16, M.Codicon.symbolEnumMember),
                    l.set(17, M.Codicon.symbolKeyword),
                    l.set(27, M.Codicon.symbolSnippet),
                    l.set(18, M.Codicon.symbolText),
                    l.set(19, M.Codicon.symbolColor),
                    l.set(20, M.Codicon.symbolFile),
                    l.set(21, M.Codicon.symbolReference),
                    l.set(22, M.Codicon.symbolCustomColor),
                    l.set(23, M.Codicon.symbolFolder),
                    l.set(24, M.Codicon.symbolTypeParameter),
                    l.set(25, M.Codicon.account),
                    l.set(26, M.Codicon.issues)
                function p(R) {
                    let N = l.get(R)
                    return (
                        N ||
                            (console.info('No codicon found for CompletionItemKind ' + R),
                            (N = M.Codicon.symbolProperty)),
                        N
                    )
                }
                s.toIcon = p
                const b = new Map()
                b.set('method', 0),
                    b.set('function', 1),
                    b.set('constructor', 2),
                    b.set('field', 3),
                    b.set('variable', 4),
                    b.set('class', 5),
                    b.set('struct', 6),
                    b.set('interface', 7),
                    b.set('module', 8),
                    b.set('property', 9),
                    b.set('event', 10),
                    b.set('operator', 11),
                    b.set('unit', 12),
                    b.set('value', 13),
                    b.set('constant', 14),
                    b.set('enum', 15),
                    b.set('enum-member', 16),
                    b.set('enumMember', 16),
                    b.set('keyword', 17),
                    b.set('snippet', 27),
                    b.set('text', 18),
                    b.set('color', 19),
                    b.set('file', 20),
                    b.set('reference', 21),
                    b.set('customcolor', 22),
                    b.set('folder', 23),
                    b.set('type-parameter', 24),
                    b.set('typeParameter', 24),
                    b.set('account', 25),
                    b.set('issue', 26)
                function v(R, N) {
                    let D = b.get(R)
                    return typeof D > 'u' && !N && (D = 9), D
                }
                s.fromString = v
            })(C || (n.CompletionItemKinds = C = {}))
            var e
            ;(function (s) {
                ;(s[(s.Automatic = 0)] = 'Automatic'), (s[(s.Explicit = 1)] = 'Explicit')
            })(e || (n.InlineCompletionTriggerKind = e = {}))
            class a {
                constructor(l, p, b, v) {
                    ;(this.range = l),
                        (this.text = p),
                        (this.completionKind = b),
                        (this.isSnippetText = v)
                }
                equals(l) {
                    return (
                        i.Range.lift(this.range).equalsRange(l.range) &&
                        this.text === l.text &&
                        this.completionKind === l.completionKind &&
                        this.isSnippetText === l.isSnippetText
                    )
                }
            }
            n.SelectedSuggestionInfo = a
            var u
            ;(function (s) {
                ;(s[(s.Invoke = 1)] = 'Invoke'),
                    (s[(s.TriggerCharacter = 2)] = 'TriggerCharacter'),
                    (s[(s.ContentChange = 3)] = 'ContentChange')
            })(u || (n.SignatureHelpTriggerKind = u = {}))
            var c
            ;(function (s) {
                ;(s[(s.Text = 0)] = 'Text'),
                    (s[(s.Read = 1)] = 'Read'),
                    (s[(s.Write = 2)] = 'Write')
            })(c || (n.DocumentHighlightKind = c = {}))
            function m(s) {
                return (
                    s &&
                    A.URI.isUri(s.uri) &&
                    i.Range.isIRange(s.range) &&
                    (i.Range.isIRange(s.originSelectionRange) ||
                        i.Range.isIRange(s.targetSelectionRange))
                )
            }
            ;(n.isLocationLink = m),
                (n.symbolKindNames = {
                    [17]: (0, g.localize)(0, null),
                    [16]: (0, g.localize)(1, null),
                    [4]: (0, g.localize)(2, null),
                    [13]: (0, g.localize)(3, null),
                    [8]: (0, g.localize)(4, null),
                    [9]: (0, g.localize)(5, null),
                    [21]: (0, g.localize)(6, null),
                    [23]: (0, g.localize)(7, null),
                    [7]: (0, g.localize)(8, null),
                    [0]: (0, g.localize)(9, null),
                    [11]: (0, g.localize)(10, null),
                    [10]: (0, g.localize)(11, null),
                    [19]: (0, g.localize)(12, null),
                    [5]: (0, g.localize)(13, null),
                    [1]: (0, g.localize)(14, null),
                    [2]: (0, g.localize)(15, null),
                    [20]: (0, g.localize)(16, null),
                    [15]: (0, g.localize)(17, null),
                    [18]: (0, g.localize)(18, null),
                    [24]: (0, g.localize)(19, null),
                    [3]: (0, g.localize)(20, null),
                    [6]: (0, g.localize)(21, null),
                    [14]: (0, g.localize)(22, null),
                    [22]: (0, g.localize)(23, null),
                    [25]: (0, g.localize)(24, null),
                    [12]: (0, g.localize)(25, null)
                })
            function f(s, l) {
                return (0, g.localize)(26, null, s, n.symbolKindNames[l])
            }
            n.getAriaLabelForSymbol = f
            var S
            ;(function (s) {
                const l = new Map()
                l.set(0, M.Codicon.symbolFile),
                    l.set(1, M.Codicon.symbolModule),
                    l.set(2, M.Codicon.symbolNamespace),
                    l.set(3, M.Codicon.symbolPackage),
                    l.set(4, M.Codicon.symbolClass),
                    l.set(5, M.Codicon.symbolMethod),
                    l.set(6, M.Codicon.symbolProperty),
                    l.set(7, M.Codicon.symbolField),
                    l.set(8, M.Codicon.symbolConstructor),
                    l.set(9, M.Codicon.symbolEnum),
                    l.set(10, M.Codicon.symbolInterface),
                    l.set(11, M.Codicon.symbolFunction),
                    l.set(12, M.Codicon.symbolVariable),
                    l.set(13, M.Codicon.symbolConstant),
                    l.set(14, M.Codicon.symbolString),
                    l.set(15, M.Codicon.symbolNumber),
                    l.set(16, M.Codicon.symbolBoolean),
                    l.set(17, M.Codicon.symbolArray),
                    l.set(18, M.Codicon.symbolObject),
                    l.set(19, M.Codicon.symbolKey),
                    l.set(20, M.Codicon.symbolNull),
                    l.set(21, M.Codicon.symbolEnumMember),
                    l.set(22, M.Codicon.symbolStruct),
                    l.set(23, M.Codicon.symbolEvent),
                    l.set(24, M.Codicon.symbolOperator),
                    l.set(25, M.Codicon.symbolTypeParameter)
                function p(b) {
                    let v = l.get(b)
                    return (
                        v ||
                            (console.info('No codicon found for SymbolKind ' + b),
                            (v = M.Codicon.symbolProperty)),
                        v
                    )
                }
                s.toIcon = p
            })(S || (n.SymbolKinds = S = {}))
            class w {}
            n.TextEdit = w
            class E {
                static fromValue(l) {
                    switch (l) {
                        case 'comment':
                            return E.Comment
                        case 'imports':
                            return E.Imports
                        case 'region':
                            return E.Region
                    }
                    return new E(l)
                }
                constructor(l) {
                    this.value = l
                }
            }
            ;(n.FoldingRangeKind = E),
                (E.Comment = new E('comment')),
                (E.Imports = new E('imports')),
                (E.Region = new E('region'))
            var y
            ;(function (s) {
                function l(p) {
                    return !p || typeof p != 'object'
                        ? !1
                        : typeof p.id == 'string' && typeof p.title == 'string'
                }
                s.is = l
            })(y || (n.Command = y = {}))
            var _
            ;(function (s) {
                ;(s[(s.Type = 1)] = 'Type'), (s[(s.Parameter = 2)] = 'Parameter')
            })(_ || (n.InlayHintKind = _ = {}))
            class r {
                constructor(l) {
                    ;(this.createSupport = l), (this._tokenizationSupport = null)
                }
                dispose() {
                    this._tokenizationSupport &&
                        this._tokenizationSupport.then((l) => {
                            l && l.dispose()
                        })
                }
                get tokenizationSupport() {
                    return (
                        this._tokenizationSupport ||
                            (this._tokenizationSupport = this.createSupport()),
                        this._tokenizationSupport
                    )
                }
            }
            ;(n.LazyTokenizationSupport = r),
                (n.TokenizationRegistry = new d.TokenizationRegistry())
        }),
        X(
            J[66],
            Z([0, 1, 38, 9, 35, 18, 4, 2, 41, 65, 58]),
            function (q, n, M, A, i, d, g, L, h, o, C) {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.createMonacoBaseAPI = n.KeyMod = void 0)
                class e {
                    static chord(c, m) {
                        return (0, i.KeyChord)(c, m)
                    }
                }
                ;(n.KeyMod = e),
                    (e.CtrlCmd = 2048),
                    (e.Shift = 1024),
                    (e.Alt = 512),
                    (e.WinCtrl = 256)
                function a() {
                    return {
                        editor: void 0,
                        languages: void 0,
                        CancellationTokenSource: M.CancellationTokenSource,
                        Emitter: A.Emitter,
                        KeyCode: C.KeyCode,
                        KeyMod: e,
                        Position: g.Position,
                        Range: L.Range,
                        Selection: h.Selection,
                        SelectionDirection: C.SelectionDirection,
                        MarkerSeverity: C.MarkerSeverity,
                        MarkerTag: C.MarkerTag,
                        Uri: d.URI,
                        Token: o.Token
                    }
                }
                n.createMonacoBaseAPI = a
            }
        ),
        X(
            J[68],
            Z([0, 1, 24, 18, 4, 2, 55, 28, 51, 52, 66, 23, 57, 49, 14, 50]),
            function (q, n, M, A, i, d, g, L, h, o, C, e, a, u, c, m) {
                'use strict'
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.create = n.EditorSimpleWorker = void 0)
                class f extends g.MirrorTextModel {
                    get uri() {
                        return this._uri
                    }
                    get eol() {
                        return this._eol
                    }
                    getValue() {
                        return this.getText()
                    }
                    findMatches(y) {
                        const _ = []
                        for (let r = 0; r < this._lines.length; r++) {
                            const s = this._lines[r],
                                l = this.offsetAt(new i.Position(r + 1, 1)),
                                p = s.matchAll(y)
                            for (const b of p)
                                (b.index || b.index === 0) && (b.index = b.index + l), _.push(b)
                        }
                        return _
                    }
                    getLinesContent() {
                        return this._lines.slice(0)
                    }
                    getLineCount() {
                        return this._lines.length
                    }
                    getLineContent(y) {
                        return this._lines[y - 1]
                    }
                    getWordAtPosition(y, _) {
                        const r = (0, L.getWordAtText)(
                            y.column,
                            (0, L.ensureValidWordDefinition)(_),
                            this._lines[y.lineNumber - 1],
                            0
                        )
                        return r
                            ? new d.Range(y.lineNumber, r.startColumn, y.lineNumber, r.endColumn)
                            : null
                    }
                    words(y) {
                        const _ = this._lines,
                            r = this._wordenize.bind(this)
                        let s = 0,
                            l = '',
                            p = 0,
                            b = []
                        return {
                            *[Symbol.iterator]() {
                                for (;;)
                                    if (p < b.length) {
                                        const v = l.substring(b[p].start, b[p].end)
                                        ;(p += 1), yield v
                                    } else if (s < _.length)
                                        (l = _[s]), (b = r(l, y)), (p = 0), (s += 1)
                                    else break
                            }
                        }
                    }
                    getLineWords(y, _) {
                        const r = this._lines[y - 1],
                            s = this._wordenize(r, _),
                            l = []
                        for (const p of s)
                            l.push({
                                word: r.substring(p.start, p.end),
                                startColumn: p.start + 1,
                                endColumn: p.end + 1
                            })
                        return l
                    }
                    _wordenize(y, _) {
                        const r = []
                        let s
                        for (_.lastIndex = 0; (s = _.exec(y)) && s[0].length !== 0; )
                            r.push({ start: s.index, end: s.index + s[0].length })
                        return r
                    }
                    getValueInRange(y) {
                        if (((y = this._validateRange(y)), y.startLineNumber === y.endLineNumber))
                            return this._lines[y.startLineNumber - 1].substring(
                                y.startColumn - 1,
                                y.endColumn - 1
                            )
                        const _ = this._eol,
                            r = y.startLineNumber - 1,
                            s = y.endLineNumber - 1,
                            l = []
                        l.push(this._lines[r].substring(y.startColumn - 1))
                        for (let p = r + 1; p < s; p++) l.push(this._lines[p])
                        return l.push(this._lines[s].substring(0, y.endColumn - 1)), l.join(_)
                    }
                    offsetAt(y) {
                        return (
                            (y = this._validatePosition(y)),
                            this._ensureLineStarts(),
                            this._lineStarts.getPrefixSum(y.lineNumber - 2) + (y.column - 1)
                        )
                    }
                    positionAt(y) {
                        ;(y = Math.floor(y)), (y = Math.max(0, y)), this._ensureLineStarts()
                        const _ = this._lineStarts.getIndexOf(y),
                            r = this._lines[_.index].length
                        return { lineNumber: 1 + _.index, column: 1 + Math.min(_.remainder, r) }
                    }
                    _validateRange(y) {
                        const _ = this._validatePosition({
                                lineNumber: y.startLineNumber,
                                column: y.startColumn
                            }),
                            r = this._validatePosition({
                                lineNumber: y.endLineNumber,
                                column: y.endColumn
                            })
                        return _.lineNumber !== y.startLineNumber ||
                            _.column !== y.startColumn ||
                            r.lineNumber !== y.endLineNumber ||
                            r.column !== y.endColumn
                            ? {
                                  startLineNumber: _.lineNumber,
                                  startColumn: _.column,
                                  endLineNumber: r.lineNumber,
                                  endColumn: r.column
                              }
                            : y
                    }
                    _validatePosition(y) {
                        if (!i.Position.isIPosition(y)) throw new Error('bad position')
                        let { lineNumber: _, column: r } = y,
                            s = !1
                        if (_ < 1) (_ = 1), (r = 1), (s = !0)
                        else if (_ > this._lines.length)
                            (_ = this._lines.length), (r = this._lines[_ - 1].length + 1), (s = !0)
                        else {
                            const l = this._lines[_ - 1].length + 1
                            r < 1 ? ((r = 1), (s = !0)) : r > l && ((r = l), (s = !0))
                        }
                        return s ? { lineNumber: _, column: r } : y
                    }
                }
                class S {
                    constructor(y, _) {
                        ;(this._host = y),
                            (this._models = Object.create(null)),
                            (this._foreignModuleFactory = _),
                            (this._foreignModule = null)
                    }
                    dispose() {
                        this._models = Object.create(null)
                    }
                    _getModel(y) {
                        return this._models[y]
                    }
                    _getModels() {
                        const y = []
                        return Object.keys(this._models).forEach((_) => y.push(this._models[_])), y
                    }
                    acceptNewModel(y) {
                        this._models[y.url] = new f(A.URI.parse(y.url), y.lines, y.EOL, y.versionId)
                    }
                    acceptModelChanged(y, _) {
                        if (!this._models[y]) return
                        this._models[y].onEvents(_)
                    }
                    acceptRemovedModel(y) {
                        this._models[y] && delete this._models[y]
                    }
                    async computeUnicodeHighlights(y, _, r) {
                        const s = this._getModel(y)
                        return s
                            ? a.UnicodeTextModelHighlighter.computeUnicodeHighlights(s, _, r)
                            : {
                                  ranges: [],
                                  hasMore: !1,
                                  ambiguousCharacterCount: 0,
                                  invisibleCharacterCount: 0,
                                  nonBasicAsciiCharacterCount: 0
                              }
                    }
                    async computeDiff(y, _, r, s) {
                        const l = this._getModel(y),
                            p = this._getModel(_)
                        return !l || !p ? null : S.computeDiff(l, p, r, s)
                    }
                    static computeDiff(y, _, r, s) {
                        const l =
                                s === 'advanced'
                                    ? u.linesDiffComputers.getDefault()
                                    : u.linesDiffComputers.getLegacy(),
                            p = y.getLinesContent(),
                            b = _.getLinesContent(),
                            v = l.computeDiff(p, b, r),
                            R = v.changes.length > 0 ? !1 : this._modelsAreIdentical(y, _)
                        function N(D) {
                            return D.map((x) => {
                                var T
                                return [
                                    x.original.startLineNumber,
                                    x.original.endLineNumberExclusive,
                                    x.modified.startLineNumber,
                                    x.modified.endLineNumberExclusive,
                                    (T = x.innerChanges) === null || T === void 0
                                        ? void 0
                                        : T.map((F) => [
                                              F.originalRange.startLineNumber,
                                              F.originalRange.startColumn,
                                              F.originalRange.endLineNumber,
                                              F.originalRange.endColumn,
                                              F.modifiedRange.startLineNumber,
                                              F.modifiedRange.startColumn,
                                              F.modifiedRange.endLineNumber,
                                              F.modifiedRange.endColumn
                                          ])
                                ]
                            })
                        }
                        return {
                            identical: R,
                            quitEarly: v.hitTimeout,
                            changes: N(v.changes),
                            moves: v.moves.map((D) => [
                                D.lineRangeMapping.original.startLineNumber,
                                D.lineRangeMapping.original.endLineNumberExclusive,
                                D.lineRangeMapping.modified.startLineNumber,
                                D.lineRangeMapping.modified.endLineNumberExclusive,
                                N(D.changes)
                            ])
                        }
                    }
                    static _modelsAreIdentical(y, _) {
                        const r = y.getLineCount(),
                            s = _.getLineCount()
                        if (r !== s) return !1
                        for (let l = 1; l <= r; l++) {
                            const p = y.getLineContent(l),
                                b = _.getLineContent(l)
                            if (p !== b) return !1
                        }
                        return !0
                    }
                    async computeMoreMinimalEdits(y, _, r) {
                        const s = this._getModel(y)
                        if (!s) return _
                        const l = []
                        let p
                        _ = _.slice(0).sort((v, R) => {
                            if (v.range && R.range)
                                return d.Range.compareRangesUsingStarts(v.range, R.range)
                            const N = v.range ? 0 : 1,
                                D = R.range ? 0 : 1
                            return N - D
                        })
                        let b = 0
                        for (let v = 1; v < _.length; v++)
                            d.Range.getEndPosition(_[b].range).equals(
                                d.Range.getStartPosition(_[v].range)
                            )
                                ? ((_[b].range = d.Range.fromPositions(
                                      d.Range.getStartPosition(_[b].range),
                                      d.Range.getEndPosition(_[v].range)
                                  )),
                                  (_[b].text += _[v].text))
                                : (b++, (_[b] = _[v]))
                        _.length = b + 1
                        for (let { range: v, text: R, eol: N } of _) {
                            if ((typeof N == 'number' && (p = N), d.Range.isEmpty(v) && !R))
                                continue
                            const D = s.getValueInRange(v)
                            if (((R = R.replace(/\r\n|\n|\r/g, s.eol)), D === R)) continue
                            if (Math.max(R.length, D.length) > S._diffLimit) {
                                l.push({ range: v, text: R })
                                continue
                            }
                            const x = (0, M.stringDiff)(D, R, r),
                                T = s.offsetAt(d.Range.lift(v).getStartPosition())
                            for (const F of x) {
                                const U = s.positionAt(T + F.originalStart),
                                    z = s.positionAt(T + F.originalStart + F.originalLength),
                                    k = {
                                        text: R.substr(F.modifiedStart, F.modifiedLength),
                                        range: {
                                            startLineNumber: U.lineNumber,
                                            startColumn: U.column,
                                            endLineNumber: z.lineNumber,
                                            endColumn: z.column
                                        }
                                    }
                                s.getValueInRange(k.range) !== k.text && l.push(k)
                            }
                        }
                        return (
                            typeof p == 'number' &&
                                l.push({
                                    eol: p,
                                    text: '',
                                    range: {
                                        startLineNumber: 0,
                                        startColumn: 0,
                                        endLineNumber: 0,
                                        endColumn: 0
                                    }
                                }),
                            l
                        )
                    }
                    async computeLinks(y) {
                        const _ = this._getModel(y)
                        return _ ? (0, h.computeLinks)(_) : null
                    }
                    async computeDefaultDocumentColors(y) {
                        const _ = this._getModel(y)
                        return _ ? (0, m.computeDefaultDocumentColors)(_) : null
                    }
                    async textualSuggest(y, _, r, s) {
                        const l = new e.StopWatch(),
                            p = new RegExp(r, s),
                            b = new Set()
                        e: for (const v of y) {
                            const R = this._getModel(v)
                            if (R) {
                                for (const N of R.words(p))
                                    if (
                                        !(N === _ || !isNaN(Number(N))) &&
                                        (b.add(N), b.size > S._suggestionsLimit)
                                    )
                                        break e
                            }
                        }
                        return { words: Array.from(b), duration: l.elapsed() }
                    }
                    async computeWordRanges(y, _, r, s) {
                        const l = this._getModel(y)
                        if (!l) return Object.create(null)
                        const p = new RegExp(r, s),
                            b = Object.create(null)
                        for (let v = _.startLineNumber; v < _.endLineNumber; v++) {
                            const R = l.getLineWords(v, p)
                            for (const N of R) {
                                if (!isNaN(Number(N.word))) continue
                                let D = b[N.word]
                                D || ((D = []), (b[N.word] = D)),
                                    D.push({
                                        startLineNumber: v,
                                        startColumn: N.startColumn,
                                        endLineNumber: v,
                                        endColumn: N.endColumn
                                    })
                            }
                        }
                        return b
                    }
                    async navigateValueSet(y, _, r, s, l) {
                        const p = this._getModel(y)
                        if (!p) return null
                        const b = new RegExp(s, l)
                        _.startColumn === _.endColumn &&
                            (_ = {
                                startLineNumber: _.startLineNumber,
                                startColumn: _.startColumn,
                                endLineNumber: _.endLineNumber,
                                endColumn: _.endColumn + 1
                            })
                        const v = p.getValueInRange(_),
                            R = p.getWordAtPosition(
                                { lineNumber: _.startLineNumber, column: _.startColumn },
                                b
                            )
                        if (!R) return null
                        const N = p.getValueInRange(R)
                        return o.BasicInplaceReplace.INSTANCE.navigateValueSet(_, v, R, N, r)
                    }
                    loadForeignModule(y, _, r) {
                        const s = (b, v) => this._host.fhr(b, v),
                            p = {
                                host: (0, c.createProxyObject)(r, s),
                                getMirrorModels: () => this._getModels()
                            }
                        return this._foreignModuleFactory
                            ? ((this._foreignModule = this._foreignModuleFactory(p, _)),
                              Promise.resolve((0, c.getAllMethodNames)(this._foreignModule)))
                            : new Promise((b, v) => {
                                  q(
                                      [y],
                                      (R) => {
                                          ;(this._foreignModule = R.create(p, _)),
                                              b((0, c.getAllMethodNames)(this._foreignModule))
                                      },
                                      v
                                  )
                              })
                    }
                    fmr(y, _) {
                        if (!this._foreignModule || typeof this._foreignModule[y] != 'function')
                            return Promise.reject(
                                new Error('Missing requestHandler or method: ' + y)
                            )
                        try {
                            return Promise.resolve(
                                this._foreignModule[y].apply(this._foreignModule, _)
                            )
                        } catch (r) {
                            return Promise.reject(r)
                        }
                    }
                }
                ;(n.EditorSimpleWorker = S), (S._diffLimit = 1e5), (S._suggestionsLimit = 1e4)
                function w(E) {
                    return new S(E, null)
                }
                ;(n.create = w),
                    typeof importScripts == 'function' &&
                        (globalThis.monaco = (0, C.createMonacoBaseAPI)())
            }
        )
}).call(this)

//# sourceMappingURL=../../../../min-maps/vs/base/worker/workerMain.js.map
