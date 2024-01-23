import type { ObjectId } from '../types';

export interface IMongoDBUser {
	_id: ObjectId;
	username: string;
	email: string;
	password: string;
}
