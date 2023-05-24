const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      "window": global.window,
      "document": global.document,
      "GH_ACCESS_TOKEN": JSON.stringify(process.env.GH_ACCESS_TOKEN),
      "FIREBASE_API_KEY": JSON.stringify(process.env.FIREBASE_API_KEY),
    })
  ]
}
