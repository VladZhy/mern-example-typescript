import type { ObjectId } from '../types';

export interface IMongoDBGuide {
	_id: ObjectId;
	title: string;
	description: string;
	thumbnail: string;
}
