import { LoginController } from "../controllers/login.controller";
import express, {Router} from 'express';

export const LoginRoutes  = ():Router => {
    const router: Router = express.Router();
    
    router.post('/', LoginController.post);

    return router;
}