import express from 'express';
import cookieParser from 'cookie-parser';
import router from './routes';
import cors from 'cors';
import { CORS_OPTIONS, PRIMARY_ROUTE, PORT } from './config';
import { pageNotFound, errorHandler } from './middleware/errorMiddleware';

const start = async () => {
	const app = express();

	app.use(cors(CORS_OPTIONS));
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(cookieParser());
	app.use(PRIMARY_ROUTE, router);
	app.use(pageNotFound);
	app.use(errorHandler);

	app.listen(PORT, () => {
		console.info(`Server running on port ${PORT}...`);
	});
};

export { start };
