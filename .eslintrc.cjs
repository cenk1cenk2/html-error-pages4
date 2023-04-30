/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [ '@cenk1cenk2/eslint-config/svelte-typescript' ],
  overrides: [ ...require('@cenk1cenk2/eslint-config/utils').generateImportGroupsWithOverride({ tsconfigDir: __dirname, tsconfig: 'tsconfig.json' }) ]
}
