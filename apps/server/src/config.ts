import type { CorsOptions } from 'cors';
import env from './env';

export enum STATUS_CODES {
	OK = 200,
	CREATED = 201,
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	NOT_FOUND = 404,
	INTERNAL_SERVER_ERROR = 500
}

const WHITELIST: string[] = ['http://localhost:3000'];
const NOT_ALLOWED_ORIGIN_ERROR_MESSAGE: string = 'Not allowed by CORS';
const IS_CORS_CREDENTIALS_OPTION_ENABLED: boolean = true;

export const CORS_OPTIONS: CorsOptions = {
	origin: (origin, callback) => {
		if (!origin || WHITELIST.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error(NOT_ALLOWED_ORIGIN_ERROR_MESSAGE));
		}
	},
	credentials: IS_CORS_CREDENTIALS_OPTION_ENABLED,
	optionsSuccessStatus: STATUS_CODES.OK
};

export const PRIMARY_ROUTE: string = '/';

export const PORT: number = env.node.port;
