'use strict' /*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
define('vs/basic-languages/lua/lua', ['require', 'require'], (require) => {
    var moduleExports = (() => {
        var s = Object.defineProperty
        var a = Object.getOwnPropertyDescriptor
        var i = Object.getOwnPropertyNames
        var l = Object.prototype.hasOwnProperty
        var c = (o, e) => {
                for (var t in e) s(o, t, { get: e[t], enumerable: !0 })
            },
            m = (o, e, t, r) => {
                if ((e && typeof e == 'object') || typeof e == 'function')
                    for (let n of i(e))
                        !l.call(o, n) &&
                            n !== t &&
                            s(o, n, { get: () => e[n], enumerable: !(r = a(e, n)) || r.enumerable })
                return o
            }
        var p = (o) => m(s({}, '__esModule', { value: !0 }), o)
        var u = {}
        c(u, { conf: () => d, language: () => g })
        var d = {
                comments: { lineComment: '--', blockComment: ['--[[', ']]'] },
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
                ]
            },
            g = {
                defaultToken: '',
                tokenPostfix: '.lua',
                keywords: [
                    'and',
                    'break',
                    'do',
                    'else',
                    'elseif',
                    'end',
                    'false',
                    'for',
                    'function',
                    'goto',
                    'if',
                    'in',
                    'local',
                    'nil',
                    'not',
                    'or',
                    'repeat',
                    'return',
                    'then',
                    'true',
                    'until',
                    'while'
                ],
                brackets: [
                    { token: 'delimiter.bracket', open: '{', close: '}' },
                    { token: 'delimiter.array', open: '[', close: ']' },
                    { token: 'delimiter.parenthesis', open: '(', close: ')' }
                ],
                operators: [
                    '+',
                    '-',
                    '*',
                    '/',
                    '%',
                    '^',
                    '#',
                    '==',
                    '~=',
                    '<=',
                    '>=',
                    '<',
                    '>',
                    '=',
                    ';',
                    ':',
                    ',',
                    '.',
                    '..',
                    '...'
                ],
                symbols: /[=><!~?:&|+\-*\/\^%]+/,
                escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
                tokenizer: {
                    root: [
                        [
                            /[a-zA-Z_]\w*/,
                            {
                                cases: {
                                    '@keywords': { token: 'keyword.$0' },
                                    '@default': 'identifier'
                                }
                            }
                        ],
                        { include: '@whitespace' },
                        [
                            /(,)(\s*)([a-zA-Z_]\w*)(\s*)(:)(?!:)/,
                            ['delimiter', '', 'key', '', 'delimiter']
                        ],
                        [
                            /({)(\s*)([a-zA-Z_]\w*)(\s*)(:)(?!:)/,
                            ['@brackets', '', 'key', '', 'delimiter']
                        ],
                        [/[{}()\[\]]/, '@brackets'],
                        [/@symbols/, { cases: { '@operators': 'delimiter', '@default': '' } }],
                        [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
                        [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, 'number.hex'],
                        [/\d+?/, 'number'],
                        [/[;,.]/, 'delimiter'],
                        [/"([^"\\]|\\.)*$/, 'string.invalid'],
                        [/'([^'\\]|\\.)*$/, 'string.invalid'],
                        [/"/, 'string', '@string."'],
                        [/'/, 'string', "@string.'"]
                    ],
                    whitespace: [
                        [/[ \t\r\n]+/, ''],
                        [/--\[([=]*)\[/, 'comment', '@comment.$1'],
                        [/--.*$/, 'comment']
                    ],
                    comment: [
                        [/[^\]]+/, 'comment'],
                        [
                            /\]([=]*)\]/,
                            {
                                cases: {
                                    '$1==$S2': { token: 'comment', next: '@pop' },
                                    '@default': 'comment'
                                }
                            }
                        ],
                        [/./, 'comment']
                    ],
                    string: [
                        [/[^\\"']+/, 'string'],
                        [/@escapes/, 'string.escape'],
                        [/\\./, 'string.escape.invalid'],
                        [
                            /["']/,
                            {
                                cases: {
                                    '$#==$S2': { token: 'string', next: '@pop' },
                                    '@default': 'string'
                                }
                            }
                        ]
                    ]
                }
            }
        return p(u)
    })()
    return moduleExports
})
