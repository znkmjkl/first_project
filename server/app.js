import express from 'express'
import historyApiFallback from 'connect-history-api-fallback'
import config from '../config'
import databaseConnector from '../database/databaseConnector.js'
import initializeDB from '../database/initialize/initializeDB.js'
import password from '../database/model/password.js'

const app = express()
const debug = require('debug')('app:server')
const paths = config.utils_paths

databaseConnector(config);
initializeDB();

// it will be replaced soon with authentication 
// only testing issue      
app.get('/login', function(req, res){
	password.find({}, function(error, passwords){
		if(error)
		{ 
			console.log('Could not get password :' + error);
		}
		else 
		{ 
			console.log(passwords);
		}
	});
});

app.use(historyApiFallback({
  verbose: false
}))

// Serve app with Webpack if HMR is enabled
if (config.compiler_enable_hmr) {
  const webpack = require('webpack')
  const webpackConfig = require('../build/webpack')
  const compiler = webpack(webpackConfig)

  app.use(require('./middleware/webpack-dev')({
    compiler,
    publicPath: webpackConfig.output.publicPath
  }))
  app.use(require('./middleware/webpack-hmr')({ compiler }))
} else {
  debug(
    'Application is being run outside of development mode. This starter kit ' +
    'does not provide any production-specific server functionality. To learn ' +
    'more about deployment strategies, check out the "deployment" section ' +
    'in the README.'
  )

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(express.static(paths.base(config.dir_dist)))
}

export default app
