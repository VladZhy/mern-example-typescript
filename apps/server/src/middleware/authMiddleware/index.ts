import type { Request, Response, NextFunction } from './types';
import jwt from 'jsonwebtoken';
import env from '../../env';
import {
	STATUS_CODES,
	TOKEN_VERIFICATION_ERROR_MESSAGE,
	NO_TOKEN_ERROR_MESSAGE
} from './config';

const protect = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const token = req.cookies.jwt;

		if (token) {
			try {
				jwt.verify(token, env.secretTokens.access);

				next();
			} catch {
				throw new Error(TOKEN_VERIFICATION_ERROR_MESSAGE);
			}
		} else {
			throw new Error(NO_TOKEN_ERROR_MESSAGE);
		}
	} catch (error) {
		res.status(STATUS_CODES.UNAUTHORIZED);
		next(error);
	}
};

export { protect };
