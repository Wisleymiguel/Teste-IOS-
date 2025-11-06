exports.config = {
  runner: 'local',
  port: 4723,

  // 🔐 Autenticação do Sauce Labs
  user: 'oauth-wisleymiguel4032x-4019b',
  key: 'a1a34a93-fd52-4f85-a4d1-c08246ef704e',
  region: 'us', // ou 'eu' se sua conta for na Europa

  specs: ['./test/specs/**/*.js'],
  exclude: [],
  maxInstances: 1,

  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'Google Pixel 5', // ⚠️ Tem que existir na região que você está usando
      'appium:platformVersion': '14.0',
      'appium:automationName': 'UiAutomator2',
      'appium:app': 'storage:filename=ebacshop.aab', // Nome exato enviado para o storage
      'appium:appWaitActivity': 'MainActivity',
      'appium:disableIdLocatorAutocompletion': true,

      'sauce:options': {
        build: 'appium-build-teste-Ebac',
        name: 'EBAC Shop Test',
        deviceOrientation: 'PORTRAIT',
        appiumVersion: '2.0.0' // 🔧 Necessário definir uma versão suportada!
      }
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