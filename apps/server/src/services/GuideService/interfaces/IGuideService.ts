import type { IGuide } from '../types';

export interface IGuideService {
	createGuide(
		title: string,
		description: string,
		thumbnail: string
	): Promise<IGuide | null>;
}
