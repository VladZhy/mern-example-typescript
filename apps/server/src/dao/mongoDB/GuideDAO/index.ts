import type {
	IMongoDBGuideDAO,
	MongoDBGuideModel,
	IMongoDBGuide
} from './types';

class MongoDBGuideDAO implements IMongoDBGuideDAO {
	private model: MongoDBGuideModel;

	constructor(model: MongoDBGuideModel) {
		this.model = model;
	}

	public create(
		title: string,
		description: string,
		thumbnail: string
	): Promise<IMongoDBGuide> {
		return this.model.create({ title, description, thumbnail });
	}
}

export default MongoDBGuideDAO;

export type { IMongoDBGuideDAO };
