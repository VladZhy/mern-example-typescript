import type { IMongoDBGuide } from '../types';

export interface IMongoDBGuideRepository {
	createGuide(
		title: string,
		description: string,
		thumbnail: string
	): Promise<IMongoDBGuide>;
}
