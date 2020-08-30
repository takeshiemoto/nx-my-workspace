const tasks = arr => arr.join(' && ')

module.exports = {
  'hooks': {
    'pre-commit': tasks([
      "yarn run affected:lint  -- --uncommitted --parallel -- --fix",
      "yarn run format:write -- --uncommitted"
    ])
  }
}
