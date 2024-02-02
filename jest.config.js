/** @type{import('jest').Config} */
const config = {
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest'
  }
}

export default config
