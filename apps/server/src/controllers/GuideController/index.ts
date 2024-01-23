import type {
	IGuideController,
	IGuideService,
	IGuide,
	GuideData
} from './types';
import { FAILED_TO_CREATE_GUIDE_ERROR_MESSAGE } from './config';

class GuideController implements IGuideController {
	private guideService: IGuideService;

	constructor(guideService: IGuideService) {
		this.guideService = guideService;
	}

	public async createGuide(
		title: string,
		description: string,
		thumbnail: string
	): Promise<GuideData> {
		const guide = await this.guideService.createGuide(
			title,
			description,
			thumbnail
		);

		if (!guide) {
			throw new Error(FAILED_TO_CREATE_GUIDE_ERROR_MESSAGE);
		}

		return this.getGuideData(guide);
	}

	private getGuideData(guide: IGuide): GuideData {
		return {
			id: guide.id,
			title: guide.title,
			description: guide.description,
			thumbnail: guide.thumbnail
		};
	}
}

export default GuideController;

export type { IGuideController };
