import { UsersRoutes } from './routes/users.route';
import { LoginRoutes } from './routes/login.route';
import { SamplesRoutes } from './routes/samples.route';
import { ErrorController, NotFoundController } from './controllers/error.controller';
import { AuthController } from './controllers/auth.controller';
import dotenv from 'dotenv';
import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';

dotenv.config();

// app port
const port: number|string = process.env.SERVER_PORT;

const app = express();

app.use(cors());
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.use('/login', LoginRoutes());
app.use(AuthController);
app.use('/users', UsersRoutes());
app.use('/samples', SamplesRoutes());
app.use(NotFoundController);
app.use(ErrorController)

app.listen(port, ()=> {
    // log
    console.log("init");
});