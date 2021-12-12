import express, {Router} from 'express';
import { UserController } from '../controllers/users.controller';

export const UsersRoutes = ():Router => {
    const router: Router = express.Router();
    router.get('/', UserController.get);
    return router;
}