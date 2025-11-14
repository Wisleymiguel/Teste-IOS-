exports.config = {
  runner: 'local',
  port: 4723,

  specs: ['./test/specs/**/*.js'],


  suites: {
    login: [
        './test/specs/login.test.js'
    ],
    product: [
        './test/specs/product.test.js'
    ],
    search: [
        './test/specs/search.test.js'
    ]
},
  
  capabilities: [
      {
          "platformName": "iOS",
          "appium:deviceName": "iPhone 15",
          "appium:platformVersion": "17.2",
          "appium:automationName": "XCUITest",
          "appium:app": "${process.cwd()}/app/LojaEBAC-sim.app"
      }
  ],
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  // ✅ Necessário para Sauce Labs funcionar
  services: ['sauce'],

  framework: 'mocha',

  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};