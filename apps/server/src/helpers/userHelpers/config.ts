import type { Secret, SignOptions, CookieOptions } from './types';
import env from '../../env';

export const SECRET_ACCESS_TOKEN: Secret = env.secretTokens.access;

const TOKEN_EXPIRATION_DAYS: number = 30;

export const JWT_SIGN_OPTIONS: SignOptions = {
	expiresIn: `${TOKEN_EXPIRATION_DAYS}d`
};

export const AUTH_COOKIE_NAME: string = 'jwt';

const IS_COOKIE_HTTP_ONLY: boolean = true;
const IS_COOKIE_SECURE: boolean = env.node.env !== 'development';
const SAME_SITE_COOKIE_OPTION = 'strict';

const DAYS_IN_MS: number = 24 * 60 * 60 * 1000;

const AUTH_COOKIE_MAX_AGE = TOKEN_EXPIRATION_DAYS * DAYS_IN_MS;

export const AUTH_COOKIE_OPTIONS: CookieOptions = {
	httpOnly: IS_COOKIE_HTTP_ONLY,
	secure: IS_COOKIE_SECURE,
	sameSite: SAME_SITE_COOKIE_OPTION,
	maxAge: AUTH_COOKIE_MAX_AGE
};

const PAST_DATE = new Date(0);

export const EXPIRED_COOKIE_OPTIONS: CookieOptions = {
	httpOnly: IS_COOKIE_HTTP_ONLY,
	expires: PAST_DATE
};
