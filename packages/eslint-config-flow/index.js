module.exports = {
  extends: '@uedlinker/eslint-config-base',

  parser: 'babel-eslint',

  plugins: [
    'flowtype',
  ],

  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },

  rules: {
    'flowtype/array-style-complex-type': [2, 'verbose'],
    'flowtype/array-style-simple-type': [2, 'verbose'],
    'flowtype/boolean-style': [2, 'boolean'],
    'flowtype/define-flow-type': 1,
    'flowtype/delimiter-dangle': 2,
    'flowtype/generic-spacing': [2, 'never'],
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/no-types-missing-file-annotation': 2,
    'flowtype/no-unused-expressions': 2,
    'flowtype/object-type-delimiter': [2, 'comma'],
    'flowtype/semi': [2, 'never'],
    'flowtype/space-before-type-colon': [2, 'never'],
    'flowtype/space-after-type-colon': [2, 'always', { allowLineBreak: true }],
    'flowtype/space-before-generic-bracket': [2, 'never'],
    'flowtype/union-intersection-spacing': [2, 'always'],
  },
}
