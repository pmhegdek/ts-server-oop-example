import * as express from 'express'
import router from './routes/index'
import * as bodyParser  from 'body-parser';
//import request from 'express';
class App {
    public express
    constructor() {
        this.express = express()
        this.express.use(bodyParser.json({ limit: '50mb' }))
        this.loadRoutes()
    }

    private loadRoutes() : void {
        this.express.use('/', router);
    }
}

export default new App().express;