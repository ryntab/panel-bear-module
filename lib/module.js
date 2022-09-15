const { resolve } = require('path')

function panelBearModule (moduleOptions) {
  const options = {
    ...this.options['panel-bear'],
    ...this.options.panelBear,
    ...moduleOptions
  }

  this.addPlugin({
    ssr: false,
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'panel-bear.js',
    options
  })
}

module.exports = panelBearModule
module.exports.meta = require('../package.json')
