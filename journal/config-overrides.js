const webpack = require('webpack');
module.exports = function override(config, env){
    console.log('override!')
    let plugins = config.plugins
    plugins.splice(plugins.length, 0, new webpack.DefinePlugin({
        'process.env': {
          REACT_APP_apiKey: JSON.stringify(process.env.REACT_APP_apiKey),
          REACT_APP_authDomain: JSON.stringify(process.env.REACT_APP_authDomain),
          REACT_APP_projectId: JSON.stringify(process.env.REACT_APP_projectId),
          REACT_APP_storageBucket: JSON.stringify(process.env.REACT_APP_storageBucket),
          REACT_APP_messagingSenderId: JSON.stringify(process.env.REACT_APP_messagingSenderId),
          REACT_APP_appId: JSON.stringify(process.env.REACT_APP_appId),
          REACT_APP_measurementId: JSON.stringify(process.env.REACT_APP_measurementId),
        },
      }))
    return config;
}