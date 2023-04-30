/** @type {import("prettier").Config} */
module.exports = {
  ...require('@cenk1cenk2/eslint-config/.prettierrc.js'),
  plugins: ['prettier-plugin-svelte'],
  pluginSearchDirs: ['.'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
}
