import type { GuideData } from '../types';

export interface IGuideController {
	createGuide(
		title: string,
		description: string,
		thumbnail: string
	): Promise<GuideData>;
}
