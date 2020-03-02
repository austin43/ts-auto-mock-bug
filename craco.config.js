module.exports = {
  jest: {
    configure: {
      transform: {
        ".(ts|tsx)": "ts-jest"
      },
      globals: {
        "ts-jest": {
          compiler: "ttypescript"
        }
      },
      setupFiles: ["<rootDir>config.ts"]
    }
  }
};
