const { createContainer, asClass, asValue, asFunction } = require('awilix');
const config = require('../config');
const app = require('.');

const Service = require('../services/service');

const Controller = require('../controllers/controller');

const Routes = require('../routes/routes');

const Router = require('../routes');

const Model = require('../models/user');

const Repository = require('../repositories/repository');

const container = createContainer();


container.register({
    app: asClass(app).singleton(),
    router: asFunction(Router).singleton(),
    config: asValue(config),
}).register({
    Service: asClass(Service).singleton()
}).register({
    Controller: asClass(Controller.bind(Controller)).singleton(),
}).register({
    Routes: asFunction(Routes).singleton()
}).register({
    Model:asValue(Model)
}).register({
    Repository: asClass(Repository).singleton()
});

module.exports = container;
