const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const { NotFoundMiddleware, errorMiddleware } = require('../middleware/index');
require('express-async-errors');
const swaggerUI = require('swagger-ui-express');
const { SWAGGER_PATH } = require('../config/index');

module.exports = function ({ Routes }) {
    const router = express.Router();
    const apiRoutes = express.Router();
    apiRoutes.
        use(express.json()).
        use(cors()).
        use(helmet()).
        use(compression());
    apiRoutes.use('/', Routes);
    router.get('/ping', (req, res) => res.send('pong'));
    router.use(apiRoutes);
    router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(SWAGGER_PATH));
    router.use(NotFoundMiddleware);
    router.use(errorMiddleware);
    return router;
}
