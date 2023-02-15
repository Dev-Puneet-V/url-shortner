const moduleResolver = require('module-alias')
const path = require('path');
const appDir = path.dirname(require.main.filename);

moduleResolver.addAlias('utils', path.join(appDir, './utils'));
moduleResolver.addAlias('payment-service', path.join(appDir, './services/payment'));
moduleResolver.addAlias('token-reader-service', path.join(appDir, './services/token-reader'));
moduleResolver.addAlias('token-generator-service', path.join(appDir, './services/token-generator'));
moduleResolver.addAlias('controller', path.join(appDir, './controllers'));
moduleResolver.addAlias('middleware', path.join(appDir, './middlewares'));
moduleResolver.addAlias('routes', path.join(appDir, './routes'));
moduleResolver.addAlias('app', path.join(appDir, './app.js'));