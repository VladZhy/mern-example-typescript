import type { Request, Response, NextFunction } from './types';
import {
	NOT_FOUND_ERROR_MESSAGE_PREFIX,
	STATUS_CODES,
	CAST_ERROR_NAME,
	OBJECT_ID_ERROR_KIND,
	RESOURCE_NOT_FOUND_MESSAGE,
	IS_DEV_ENV
} from './config';

const pageNotFound = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	const notFoundErrorMessage = NOT_FOUND_ERROR_MESSAGE_PREFIX + req.originalUrl;
	const error = new Error(notFoundErrorMessage);

	res.status(STATUS_CODES.NOT_FOUND);
	next(error);
};

const errorHandler = (
	err: any,
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	let statusCode =
		res.statusCode === STATUS_CODES.OK
			? STATUS_CODES.INTERNAL_SERVER_ERROR
			: res.statusCode;
	let message = err.message;

	/**
	 * @desc handles Mongoose not found error
	 */
	if (err.name === CAST_ERROR_NAME && err.kind === OBJECT_ID_ERROR_KIND) {
		statusCode = STATUS_CODES.NOT_FOUND;
		message = RESOURCE_NOT_FOUND_MESSAGE;
	}

	res.status(statusCode).json({
		message,
		stack: IS_DEV_ENV ? err.stack : null
	});
};

export { pageNotFound, errorHandler };
