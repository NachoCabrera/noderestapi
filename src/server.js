import express from 'express';
import dotenv from 'dotenv/config';
import morgan from 'morgan';

const app = express();


// Settings 
app.set('port', process.env.SERVER_PORT || 3000);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Routes
import IndexRoutes from './routes/index.routes';
app.use(IndexRoutes);
import MoviesRoutes from './routes/movies.routes';
app.use('/movies', MoviesRoutes);


//Middleware






export default app;