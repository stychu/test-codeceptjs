exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https//:www.google.com',
      browser: 'chrome'
    }
  },
  plugins: {
    wdio: {
      services: ['selenium-standalone']
    }
  },
  include: {
    I: './steps_file.js',
    testPOPage: './pages/testPO.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'testDelete'
}
