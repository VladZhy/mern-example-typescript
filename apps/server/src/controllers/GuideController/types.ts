import type { IGuideController } from './interfaces/IGuideController';
import type { IGuideService, IGuide } from '../../services/GuideService';

export type GuideData = {
	id: string;
	title: string;
	description: string;
	thumbnail: string;
};

export type { IGuideController, IGuideService, IGuide };
