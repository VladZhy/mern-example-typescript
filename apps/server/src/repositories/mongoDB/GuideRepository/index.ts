import type {
	IMongoDBGuideRepository,
	IMongoDBGuideDAO,
	IMongoDBGuide
} from './types';

class MongoDBGuideRepository implements IMongoDBGuideRepository {
	private mongoDBGuideDAO: IMongoDBGuideDAO;

	constructor(mongoDBGuideDAO: IMongoDBGuideDAO) {
		this.mongoDBGuideDAO = mongoDBGuideDAO;
	}

	public async createGuide(
		title: string,
		description: string,
		thumbnail: string
	): Promise<IMongoDBGuide> {
		return await this.mongoDBGuideDAO.create(title, description, thumbnail);
	}
}

export default MongoDBGuideRepository;

export type { IMongoDBGuideRepository };
