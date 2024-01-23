import type { IMongoDBGuide } from '../types';

export interface IMongoDBGuideDAO {
	create(
		title: string,
		description: string,
		thumbnail: string
	): Promise<IMongoDBGuide>;
}
