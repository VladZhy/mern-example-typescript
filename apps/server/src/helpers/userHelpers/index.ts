import type { Response } from './types';
import jwt from 'jsonwebtoken';
import {
	SECRET_ACCESS_TOKEN,
	JWT_SIGN_OPTIONS,
	AUTH_COOKIE_NAME,
	AUTH_COOKIE_OPTIONS,
	EXPIRED_COOKIE_OPTIONS
} from './config';

function generateToken(userId: string): string {
	return jwt.sign({ userId }, SECRET_ACCESS_TOKEN, JWT_SIGN_OPTIONS);
}

function setAuthCookie(res: Response, token: string): void {
	res.cookie(AUTH_COOKIE_NAME, token, AUTH_COOKIE_OPTIONS);
}

function deleteAuthCookie(res: Response): void {
	res.cookie(AUTH_COOKIE_NAME, '', EXPIRED_COOKIE_OPTIONS);
}

export { generateToken, setAuthCookie, deleteAuthCookie };
