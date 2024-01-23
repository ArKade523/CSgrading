'use strict' /*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
define('vs/basic-languages/yaml/yaml', ['require', 'require'], (require) => {
    var moduleExports = (() => {
        var m = Object.create
        var l = Object.defineProperty
        var b = Object.getOwnPropertyDescriptor
        var p = Object.getOwnPropertyNames
        var g = Object.getPrototypeOf,
            f = Object.prototype.hasOwnProperty
        var w = ((e) =>
            typeof require != 'undefined'
                ? require
                : typeof Proxy != 'undefined'
                  ? new Proxy(e, {
                        get: (n, t) => (typeof require != 'undefined' ? require : n)[t]
                    })
                  : e)(function (e) {
            if (typeof require != 'undefined') return require.apply(this, arguments)
            throw new Error('Dynamic require of "' + e + '" is not supported')
        })
        var S = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports),
            k = (e, n) => {
                for (var t in n) l(e, t, { get: n[t], enumerable: !0 })
            },
            a = (e, n, t, i) => {
                if ((n && typeof n == 'object') || typeof n == 'function')
                    for (let r of p(n))
                        !f.call(e, r) &&
                            r !== t &&
                            l(e, r, { get: () => n[r], enumerable: !(i = b(n, r)) || i.enumerable })
                return e
            },
            c = (e, n, t) => (a(e, n, 'default'), t && a(t, n, 'default')),
            u = (e, n, t) => (
                (t = e != null ? m(g(e)) : {}),
                a(n || !e || !e.__esModule ? l(t, 'default', { value: e, enumerable: !0 }) : t, e)
            ),
            y = (e) => a(l({}, '__esModule', { value: !0 }), e)
        var d = S((C, s) => {
            var h = u(w('vs/editor/editor.api'))
            s.exports = h
        })
        var $ = {}
        k($, { conf: () => N, language: () => x })
        var o = {}
        c(o, u(d()))
        var N = {
                comments: { lineComment: '#' },
                brackets: [
                    ['{', '}'],
                    ['[', ']'],
                    ['(', ')']
                ],
                autoClosingPairs: [
                    { open: '{', close: '}' },
                    { open: '[', close: ']' },
                    { open: '(', close: ')' },
                    { open: '"', close: '"' },
                    { open: "'", close: "'" }
                ],
                surroundingPairs: [
                    { open: '{', close: '}' },
                    { open: '[', close: ']' },
                    { open: '(', close: ')' },
                    { open: '"', close: '"' },
                    { open: "'", close: "'" }
                ],
                folding: { offSide: !0 },
                onEnterRules: [
                    {
                        beforeText: /:\s*$/,
                        action: { indentAction: o.languages.IndentAction.Indent }
                    }
                ]
            },
            x = {
                tokenPostfix: '.yaml',
                brackets: [
                    { token: 'delimiter.bracket', open: '{', close: '}' },
                    { token: 'delimiter.square', open: '[', close: ']' }
                ],
                keywords: [
                    'true',
                    'True',
                    'TRUE',
                    'false',
                    'False',
                    'FALSE',
                    'null',
                    'Null',
                    'Null',
                    '~'
                ],
                numberInteger: /(?:0|[+-]?[0-9]+)/,
                numberFloat: /(?:0|[+-]?[0-9]+)(?:\.[0-9]+)?(?:e[-+][1-9][0-9]*)?/,
                numberOctal: /0o[0-7]+/,
                numberHex: /0x[0-9a-fA-F]+/,
                numberInfinity: /[+-]?\.(?:inf|Inf|INF)/,
                numberNaN: /\.(?:nan|Nan|NAN)/,
                numberDate:
                    /\d{4}-\d\d-\d\d([Tt ]\d\d:\d\d:\d\d(\.\d+)?(( ?[+-]\d\d?(:\d\d)?)|Z)?)?/,
                escapes: /\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,
                tokenizer: {
                    root: [
                        { include: '@whitespace' },
                        { include: '@comment' },
                        [/%[^ ]+.*$/, 'meta.directive'],
                        [/---/, 'operators.directivesEnd'],
                        [/\.{3}/, 'operators.documentEnd'],
                        [/[-?:](?= )/, 'operators'],
                        { include: '@anchor' },
                        { include: '@tagHandle' },
                        { include: '@flowCollections' },
                        { include: '@blockStyle' },
                        [/@numberInteger(?![ \t]*\S+)/, 'number'],
                        [/@numberFloat(?![ \t]*\S+)/, 'number.float'],
                        [/@numberOctal(?![ \t]*\S+)/, 'number.octal'],
                        [/@numberHex(?![ \t]*\S+)/, 'number.hex'],
                        [/@numberInfinity(?![ \t]*\S+)/, 'number.infinity'],
                        [/@numberNaN(?![ \t]*\S+)/, 'number.nan'],
                        [/@numberDate(?![ \t]*\S+)/, 'number.date'],
                        [
                            /(".*?"|'.*?'|[^#'"]*?)([ \t]*)(:)( |$)/,
                            ['type', 'white', 'operators', 'white']
                        ],
                        { include: '@flowScalars' },
                        [
                            /.+?(?=(\s+#|$))/,
                            { cases: { '@keywords': 'keyword', '@default': 'string' } }
                        ]
                    ],
                    object: [
                        { include: '@whitespace' },
                        { include: '@comment' },
                        [/\}/, '@brackets', '@pop'],
                        [/,/, 'delimiter.comma'],
                        [/:(?= )/, 'operators'],
                        [/(?:".*?"|'.*?'|[^,\{\[]+?)(?=: )/, 'type'],
                        { include: '@flowCollections' },
                        { include: '@flowScalars' },
                        { include: '@tagHandle' },
                        { include: '@anchor' },
                        { include: '@flowNumber' },
                        [/[^\},]+/, { cases: { '@keywords': 'keyword', '@default': 'string' } }]
                    ],
                    array: [
                        { include: '@whitespace' },
                        { include: '@comment' },
                        [/\]/, '@brackets', '@pop'],
                        [/,/, 'delimiter.comma'],
                        { include: '@flowCollections' },
                        { include: '@flowScalars' },
                        { include: '@tagHandle' },
                        { include: '@anchor' },
                        { include: '@flowNumber' },
                        [/[^\],]+/, { cases: { '@keywords': 'keyword', '@default': 'string' } }]
                    ],
                    multiString: [[/^( +).+$/, 'string', '@multiStringContinued.$1']],
                    multiStringContinued: [
                        [
                            /^( *).+$/,
                            {
                                cases: {
                                    '$1==$S2': 'string',
                                    '@default': { token: '@rematch', next: '@popall' }
                                }
                            }
                        ]
                    ],
                    whitespace: [[/[ \t\r\n]+/, 'white']],
                    comment: [[/#.*$/, 'comment']],
                    flowCollections: [
                        [/\[/, '@brackets', '@array'],
                        [/\{/, '@brackets', '@object']
                    ],
                    flowScalars: [
                        [/"([^"\\]|\\.)*$/, 'string.invalid'],
                        [/'([^'\\]|\\.)*$/, 'string.invalid'],
                        [/'[^']*'/, 'string'],
                        [/"/, 'string', '@doubleQuotedString']
                    ],
                    doubleQuotedString: [
                        [/[^\\"]+/, 'string'],
                        [/@escapes/, 'string.escape'],
                        [/\\./, 'string.escape.invalid'],
                        [/"/, 'string', '@pop']
                    ],
                    blockStyle: [[/[>|][0-9]*[+-]?$/, 'operators', '@multiString']],
                    flowNumber: [
                        [/@numberInteger(?=[ \t]*[,\]\}])/, 'number'],
                        [/@numberFloat(?=[ \t]*[,\]\}])/, 'number.float'],
                        [/@numberOctal(?=[ \t]*[,\]\}])/, 'number.octal'],
                        [/@numberHex(?=[ \t]*[,\]\}])/, 'number.hex'],
                        [/@numberInfinity(?=[ \t]*[,\]\}])/, 'number.infinity'],
                        [/@numberNaN(?=[ \t]*[,\]\}])/, 'number.nan'],
                        [/@numberDate(?=[ \t]*[,\]\}])/, 'number.date']
                    ],
                    tagHandle: [[/\![^ ]*/, 'tag']],
                    anchor: [[/[&*][^ ]+/, 'namespace']]
                }
            }
        return y($)
    })()
    return moduleExports
})
