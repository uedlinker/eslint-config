const eslint = require('eslint')
const CLIEngine = eslint.CLIEngine

test('@uedlinker/eslint-config-base', () => {
  const code = `console.log('Uedlinker')\n`
  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: require.resolve('../index.js'),
  })
  expect(cli.executeOnText(code).errorCount).toBe(0)
})
