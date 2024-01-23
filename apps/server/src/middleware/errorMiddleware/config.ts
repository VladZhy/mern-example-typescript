import env from '../../env';
import { STATUS_CODES } from '../../config';

export const NOT_FOUND_ERROR_MESSAGE_PREFIX = 'Not Found - ';

export const CAST_ERROR_NAME = 'CastError';
export const OBJECT_ID_ERROR_KIND = 'ObjectId';
export const RESOURCE_NOT_FOUND_MESSAGE = 'Resource not found';

export const IS_DEV_ENV = env.node.env === 'development';

export { STATUS_CODES };
