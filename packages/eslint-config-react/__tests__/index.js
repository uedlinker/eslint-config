const eslint = require('eslint')
const CLIEngine = eslint.CLIEngine

test('@uedlinker/eslint-config-react', () => {
  const code =
`import React from 'react'

export default () => (
  <h1>Hello React</h1>
)
`
  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: require.resolve('../index.js'),
  })
  expect(cli.executeOnText(code).errorCount).toBe(0)
})
