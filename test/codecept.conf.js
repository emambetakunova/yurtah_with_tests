exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:3000/',
      show: true
    },
    GeneralHelper: {
      require: './helpers.js',
    },
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: [
      './step_definitions/generalSteps.js',
      './step_definitions/setNumberOfListings.js',
      './step_definitions/errorSetNumberOfListings.js'
    ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'tests'
};
