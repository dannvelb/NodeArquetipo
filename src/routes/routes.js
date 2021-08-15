const { Router } = require('express');
const { AuthAdminMiddleware } = require('../middleware/index');

module.exports = function ({ Controller }) {
    const router = Router();
    router.post('/', Controller.create);
    router.get('/:id', Controller.get);
    router.put('/:id', Controller.update);
    return router;
};