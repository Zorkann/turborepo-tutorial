module.exports = {
  ...require('config/jest-next'),
  rootDir: 'src',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
  },
}
