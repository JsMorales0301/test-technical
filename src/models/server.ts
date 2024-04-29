import express from 'express';
import { router } from '../routes/wordsRoutes';
import { WordsMiddleware } from '../middlewares/wordsMiddleware';

interface Options {
    port: number;
}

export class Server {

    private readonly app = express();
    private readonly port: number;

    constructor( options: Options ){
        const { port = 3100 } = options
        this.port = port;
    }

    async start() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.routes()
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }

    routes(){
        this.app.use('/api/words', router)
    }

}