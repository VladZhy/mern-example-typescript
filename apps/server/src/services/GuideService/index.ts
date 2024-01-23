import type {
	IGuideService,
	IMongoDBGuideRepository,
	IGuide,
	IMongoDBGuide
} from './types';
import { Guide } from './classes';

class GuideService implements IGuideService {
	private mongoDBGuideRepository: IMongoDBGuideRepository;

	constructor(mongoDBGuideRepository: IMongoDBGuideRepository) {
		this.mongoDBGuideRepository = mongoDBGuideRepository;
	}

	public async createGuide(
		title: string,
		description: string,
		thumbnail: string
	): Promise<IGuide | null> {
		const mongoDBGuide = await this.mongoDBGuideRepository.createGuide(
			title,
			description,
			thumbnail
		);

		return this.getGuideFromMongoDBGuide(mongoDBGuide);
	}

	private getGuideFromMongoDBGuide(
		mongoDBGuide?: IMongoDBGuide | null
	): IGuide | null {
		if (!mongoDBGuide) {
			return null;
		}

		return new Guide(
			mongoDBGuide._id.toString(),
			mongoDBGuide.title,
			mongoDBGuide.description,
			mongoDBGuide.thumbnail
		);
	}
}

export default GuideService;

export type { IGuideService, IGuide };
