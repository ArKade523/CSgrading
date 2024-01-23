'use strict' /*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
define('vs/basic-languages/kotlin/kotlin', ['require', 'require'], (require) => {
    var moduleExports = (() => {
        var o = Object.defineProperty
        var a = Object.getOwnPropertyDescriptor
        var r = Object.getOwnPropertyNames
        var c = Object.prototype.hasOwnProperty
        var l = (n, e) => {
                for (var i in e) o(n, i, { get: e[i], enumerable: !0 })
            },
            d = (n, e, i, s) => {
                if ((e && typeof e == 'object') || typeof e == 'function')
                    for (let t of r(e))
                        !c.call(n, t) &&
                            t !== i &&
                            o(n, t, { get: () => e[t], enumerable: !(s = a(e, t)) || s.enumerable })
                return n
            }
        var g = (n) => d(o({}, '__esModule', { value: !0 }), n)
        var f = {}
        l(f, { conf: () => m, language: () => p })
        var m = {
                wordPattern:
                    /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
                comments: { lineComment: '//', blockComment: ['/*', '*/'] },
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
                    { open: "'", close: "'" },
                    { open: '<', close: '>' }
                ],
                folding: {
                    markers: {
                        start: new RegExp('^\\s*//\\s*(?:(?:#?region\\b)|(?:<editor-fold\\b))'),
                        end: new RegExp('^\\s*//\\s*(?:(?:#?endregion\\b)|(?:</editor-fold>))')
                    }
                }
            },
            p = {
                defaultToken: '',
                tokenPostfix: '.kt',
                keywords: [
                    'as',
                    'as?',
                    'break',
                    'class',
                    'continue',
                    'do',
                    'else',
                    'false',
                    'for',
                    'fun',
                    'if',
                    'in',
                    '!in',
                    'interface',
                    'is',
                    '!is',
                    'null',
                    'object',
                    'package',
                    'return',
                    'super',
                    'this',
                    'throw',
                    'true',
                    'try',
                    'typealias',
                    'val',
                    'var',
                    'when',
                    'while',
                    'by',
                    'catch',
                    'constructor',
                    'delegate',
                    'dynamic',
                    'field',
                    'file',
                    'finally',
                    'get',
                    'import',
                    'init',
                    'param',
                    'property',
                    'receiver',
                    'set',
                    'setparam',
                    'where',
                    'actual',
                    'abstract',
                    'annotation',
                    'companion',
                    'const',
                    'crossinline',
                    'data',
                    'enum',
                    'expect',
                    'external',
                    'final',
                    'infix',
                    'inline',
                    'inner',
                    'internal',
                    'lateinit',
                    'noinline',
                    'open',
                    'operator',
                    'out',
                    'override',
                    'private',
                    'protected',
                    'public',
                    'reified',
                    'sealed',
                    'suspend',
                    'tailrec',
                    'vararg',
                    'field',
                    'it'
                ],
                operators: [
                    '+',
                    '-',
                    '*',
                    '/',
                    '%',
                    '=',
                    '+=',
                    '-=',
                    '*=',
                    '/=',
                    '%=',
                    '++',
                    '--',
                    '&&',
                    '||',
                    '!',
                    '==',
                    '!=',
                    '===',
                    '!==',
                    '>',
                    '<',
                    '<=',
                    '>=',
                    '[',
                    ']',
                    '!!',
                    '?.',
                    '?:',
                    '::',
                    '..',
                    ':',
                    '?',
                    '->',
                    '@',
                    ';',
                    '$',
                    '_'
                ],
                symbols: /[=><!~?:&|+\-*\/\^%]+/,
                escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
                digits: /\d+(_+\d+)*/,
                octaldigits: /[0-7]+(_+[0-7]+)*/,
                binarydigits: /[0-1]+(_+[0-1]+)*/,
                hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
                tokenizer: {
                    root: [
                        [/[A-Z][\w\$]*/, 'type.identifier'],
                        [
                            /[a-zA-Z_$][\w$]*/,
                            {
                                cases: {
                                    '@keywords': { token: 'keyword.$0' },
                                    '@default': 'identifier'
                                }
                            }
                        ],
                        { include: '@whitespace' },
                        [/[{}()\[\]]/, '@brackets'],
                        [/[<>](?!@symbols)/, '@brackets'],
                        [/@symbols/, { cases: { '@operators': 'delimiter', '@default': '' } }],
                        [/@\s*[a-zA-Z_\$][\w\$]*/, 'annotation'],
                        [/(@digits)[eE]([\-+]?(@digits))?[fFdD]?/, 'number.float'],
                        [/(@digits)\.(@digits)([eE][\-+]?(@digits))?[fFdD]?/, 'number.float'],
                        [/0[xX](@hexdigits)[Ll]?/, 'number.hex'],
                        [/0(@octaldigits)[Ll]?/, 'number.octal'],
                        [/0[bB](@binarydigits)[Ll]?/, 'number.binary'],
                        [/(@digits)[fFdD]/, 'number.float'],
                        [/(@digits)[lL]?/, 'number'],
                        [/[;,.]/, 'delimiter'],
                        [/"([^"\\]|\\.)*$/, 'string.invalid'],
                        [/"""/, 'string', '@multistring'],
                        [/"/, 'string', '@string'],
                        [/'[^\\']'/, 'string'],
                        [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
                        [/'/, 'string.invalid']
                    ],
                    whitespace: [
                        [/[ \t\r\n]+/, ''],
                        [/\/\*\*(?!\/)/, 'comment.doc', '@javadoc'],
                        [/\/\*/, 'comment', '@comment'],
                        [/\/\/.*$/, 'comment']
                    ],
                    comment: [
                        [/[^\/*]+/, 'comment'],
                        [/\/\*/, 'comment', '@comment'],
                        [/\*\//, 'comment', '@pop'],
                        [/[\/*]/, 'comment']
                    ],
                    javadoc: [
                        [/[^\/*]+/, 'comment.doc'],
                        [/\/\*/, 'comment.doc', '@push'],
                        [/\/\*/, 'comment.doc.invalid'],
                        [/\*\//, 'comment.doc', '@pop'],
                        [/[\/*]/, 'comment.doc']
                    ],
                    string: [
                        [/[^\\"]+/, 'string'],
                        [/@escapes/, 'string.escape'],
                        [/\\./, 'string.escape.invalid'],
                        [/"/, 'string', '@pop']
                    ],
                    multistring: [
                        [/[^\\"]+/, 'string'],
                        [/@escapes/, 'string.escape'],
                        [/\\./, 'string.escape.invalid'],
                        [/"""/, 'string', '@pop'],
                        [/./, 'string']
                    ]
                }
            }
        return g(f)
    })()
    return moduleExports
})
