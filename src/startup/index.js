const express = require('express')
const cors = require('cors')

let _express = null
let _config = null

class Server {
    constructor({ config, router }) {
        _config = config;
        let app = express();
        app.use(cors());
        app.use(router);
        _express = app;
    }
    start() {
        return new Promise(resolve => {
            _express.listen(_config.PORT, () => {
                console.log(`[MICRO ${_config.APPLICATION_NAME}] CORRIENDO EN PUERTO: ${_config.PORT}`.toUpperCase());
            });
            resolve();
        })
    }
}

module.exports = Server;
