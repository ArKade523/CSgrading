/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.45.0(5e5af013f8d295555a7210df0d5f2cea0bf5dd56)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/msdax/msdax.contribution.ts
import { registerLanguage } from '../_.contribution.js'
registerLanguage({
    id: 'msdax',
    extensions: ['.dax', '.msdax'],
    aliases: ['DAX', 'MSDAX'],
    loader: () => {
        if (false) {
            return new Promise((resolve, reject) => {
                __require(['vs/basic-languages/msdax/msdax'], resolve, reject)
            })
        } else {
            return import('./msdax.js')
        }
    }
})
