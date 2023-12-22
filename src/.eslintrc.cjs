/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-airbnb-with-typescript',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    // 設置規則
    rules: {
        // 所有命名格式相關的
        '@typescript-eslint/naming-convention': ['error',
            {
                // function的命名格式
                selector: 'function',
                format: ['camelCase', 'PascalCase'],
                leadingUnderscore: 'allow',
            },
        ],

        // 冒號後面要有空格
        '@typescript-eslint/type-annotation-spacing': ['error', {
            before: false,
            after: true,
            overrides: {
                arrow: {
                    before: true,
                    after: true,
                },
            },
        }],

        // class內的排序
        '@typescript-eslint/member-ordering': ['error', {
            default: [
                // 靜態成員
                'signature',
                'public-static-field',
                'protected-static-field',
                'private-static-field',
                'static-field',

                'public-static-method',
                'protected-static-method',
                'private-static-method',
                'static-method',

                // 公共成員
                'public-instance-field',
                'protected-instance-field',
                'private-instance-field',
                'instance-field',

                'constructor',

                'public-instance-method',
                'protected-instance-method',
                'private-instance-method',
                'instance-method'
            ]
        }],

        '@typescript-eslint/indent': 'off',

        // 禁止使用any
        '@typescript-eslint/no-explicit-any': ['error', {
            fixToUnknown: false,
            ignoreRestArgs: false
        }],

        // 需要宣告型別
        '@typescript-eslint/typedef': ['error', {
            'arrowParameter': false,
            'parameter': true,
            'memberVariableDeclaration': true,
            'propertyDeclaration': true,
            'variableDeclaration': false,
        }],

        // 行別宣告統一在左側
        '@typescript-eslint/consistent-generic-constructors': ['error', 'type-annotation'],

        // 宣告變數類型用小寫
        '@typescript-eslint/ban-types': ['error', {
            'extendDefaults': true,
        }],

        // 禁止創建空interface
        '@typescript-eslint/no-empty-interface': ['error', {
            'allowSingleExtends': false,
        }],

        // 要求Array始終使用T[]定義
        '@typescript-eslint/array-type': ['error', { default: 'array' }],

        // enum不可多種型別
        '@typescript-eslint/no-mixed-enums': 'error',

        // enum一定要有預設值
        '@typescript-eslint/prefer-enum-initializers': 'error',

        // 不要使用for(...in...)遍歷陣列
        '@typescript-eslint/no-for-in-array': 'error',

        // 當要判斷列表中是否存在特定元素時，使用includes
        '@typescript-eslint/prefer-includes': 'error',

        // 當正在排序Array時，不能直接使用sort()而沒寫上排序邏輯
        '@typescript-eslint/require-array-sort-compare': 'error',

        "@typescript-eslint/no-inferrable-types": "off",

        // 不要使用@ts-ignore等註解
        '@typescript-eslint/ban-ts-comment': ['error', {
            'ts-expect-error': true,
            'ts-ignore': true,
            'ts-nocheck': true,
            'ts-check': true,
        }],

        // 只要是 type、interface，輸出一律要用 export type
        '@typescript-eslint/consistent-type-exports': ['error', {
            fixMixedExportsWithInlineTypeSpecifier: false,
        }],

        // 當宣告型別時， 禁止在聯合和交叉 type 中包含冗餘或重複的型別
        '@typescript-eslint/no-redundant-type-constituents': 'error',

        // 不需要不必要的boolean比對
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

        // 不需要不必要的條件判斷式
        '@typescript-eslint/no-unnecessary-condition': 'error',

        // 當要判斷Property是否存在時，使用Chain expressions
        '@typescript-eslint/prefer-optional-chain': 'error',

        // 當要判斷String的起始值或結尾值時，使用startsWith及endsWith
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',

        // type的屬性會依照類別排序，相同類別則按照字母、數字排序
        '@typescript-eslint/sort-type-constituents': 'error',

        // 最後面的分號前面不能有空格
        'semi-spacing': ['error', { before: false, after: true }],

        // keyword 前後要有空格
        'keyword-spacing': ["error", { "before": true, "after": true }],

        // 允許有底線
        'no-underscore-dangle': 'off',

        // 一定要用三等號去做condition
        eqeqeq: 2,

        // 不允許多個變數賦值
        'no-multi-assign': 'warn',

        // 不允許不給函數命名
        'func-names': ["error", "as-needed"],

        // 箭頭函示只有必要的時候才要寫return
        'arrow-body-style': ['error', 'as-needed'],

        // 逗號後要有空格
        'comma-spacing': ['error', { before: false, after: true }],

        // 括號配置，起始括號不換行，if 後的 else 不換行
        'brace-style': [1, '1tbs', {
            allowSingleLine: true
        }],

        // 不允許多個無意義的空格
        'no-multi-spaces': ['error', { ignoreEOLComments: true }],

        // 設置駝峰式命名的規則，必須用小駝峰命名
        camelcase: [
            'error',
            { ignoreDestructuring: true, properties: 'never' },
        ],

        // Object 的花括號內兩側須要有空格
        'object-curly-spacing': ["error", "always"],

        // block 內不允許無謂的空格
        'padded-blocks': ["error", "never"],

        // 小括號內 兩側不要有空格
        'space-in-parens': ["error", "never"],

        // 中括號內 兩側不要有空格
        'array-bracket-spacing': ["error", "never"],

        // 禁止使用var
        'no-var': 'error',

        // 設置縮排為4個空格
        indent: [2, 4, { SwitchCase: 1 }],

        // 警告未使用到的參數
        'no-unused-vars': 1,

        // 禁止使用new建立物件
        'no-new-object': 'error',

        // 允許有console
        'no-console': 'off',

        // 使用屬性值簡寫
        'object-shorthand': ['error', 'always'],

        // 如果有多個屬性且有換行時，屬性必須對齊
        'object-curly-newline': ['error', {
            'ImportDeclaration': 'never',
            'ExportDeclaration': { 'minProperties': 2 },
        }],

        // 使用簡潔語法建立Array
        'no-array-constructor': 'error',

        // 使用單引號
        'quotes': ['error', 'single'],

        // 組合字串時，請使用模板字串而不是字串連接
        'template-curly-spacing': ['error', 'never'],

        // 勿變更參數的值
        'no-param-reassign': ['error', { 'props': true }],

        // 大括號前加一個空格
        'space-before-blocks': 'error',

        // 運算元之間要用空格隔開
        'space-infix-ops': ['error', { 'int32Hint': false }],

        // 不要將逗號放在前面
        'comma-style': ['error', 'last'],

        // 增加結尾的逗號
        'comma-dangle': ['error', 'always-multiline'],

        // 語句結尾加分號
        'semi': ['error', 'always'],

        // if、for、while嵌套層數
        'max-depth': ['error', 3],
        // function前空行
        'padding-line-between-statements': ['error',
            { 'blankLine': 'always', 'prev': '*', 'next': 'function' },
            {
                'blankLine': 'always',
                'prev': 'if',
                'next': 'if'
            }
        ],
        // 最大行長
        'vue/max-len': 0,
        // 允許使用 click 事件而不必要求使用對應的鍵盤事件
        'vuejs-accessibility/click-events-have-key-events': 'off',
        // 允許多字詞的組件名稱
        'vue/multi-word-component-names': 'off',
        // 排序attribute
        'vue/attributes-order': [
            'warn',
            {
                order: [
                    // 定義
                    'DEFINITION',
                    // v-for
                    'LIST_RENDERING',
                    // 顯示條件 v-if、v-show
                    'CONDITIONALS',
                    // 渲染條件 v-once
                    'RENDER_MODIFIERS',
                    // id
                    'GLOBAL',
                    // ref key
                    ['UNIQUE', 'SLOT'],
                    // v-model
                    'TWO_WAY_BINDING',
                    // v-bind
                    'OTHER_DIRECTIVES',
                    'OTHER_ATTR',
                    // v-on
                    'EVENTS',
                    // 內容
                    'CONTENT',
                ],
            },
        ],
        // 傳入props的組建要用dash格式
        'vue/attribute-hyphenation': ['error', 'always', {
            ignore: [],
        }],
        // 組建的name要用大駝峰寫
        'vue/component-definition-name-casing': ['error', 'PascalCase'],
        // html tag的尾巴角括號要換行
        'vue/html-closing-bracket-newline': ['warn', {
            singleline: 'never',
            multiline: 'always',
        }],
        // 超過一個attribute的div，要換行
        'vue/max-attributes-per-line': ['warn', {
            singleline: {
                max: 2,
            },
            multiline: {
                max: 2,
            },
        }],
        // 三元表示多行時要換行
        'multiline-ternary': ['error', 'always-multiline'],
        // operator都放句子前面
        'operator-linebreak': ['error', 'before'],
        // div tag的排版
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: [],
        }],
        // vue的div內{{}}中要有空格
        'vue/mustache-interpolation-spacing': ['warn', 'always'],
        // 不能有無謂的空格
        'vue/no-multi-spaces': ['warn', {
            ignoreProperties: false,
        }],
        // attribute的等號左右不能有空格（例如<div class = "123"）
        'vue/no-spaces-around-equal-signs-in-attribute': ['warn'],
        // 組建內的props要用小駝峰命名
        'vue/prop-name-casing': ['warn', 'camelCase'],
        // div的v-bind前綴省略
        'vue/v-bind-style': ['warn', 'shorthand'],
        // div的v-on前綴省略
        'vue/v-on-style': ['warn', 'shorthand'],
        // vue block order
        'vue/block-order': ['error', {
            order: ['script', 'template', 'style'],
        }],
        'import/prefer-default-export': 'off',
    },
};
