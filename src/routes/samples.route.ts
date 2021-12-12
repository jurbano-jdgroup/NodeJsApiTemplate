import { SamplesController } from '../controllers/samples.controller';
import express, {Router} from 'express';

export const SamplesRoutes  = ():Router => {
    const router: Router = express.Router();
    router.get('/', SamplesController.get);
    return router;
}