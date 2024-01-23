import type {
	IMongoDBUserDAO,
	MongoDBUserModel,
	IMongoDBUser,
	FilterQuery,
	ProjectionType,
	QueryOptions,
	UpdateQuery
} from './types';

class MongoDBUserDAO implements IMongoDBUserDAO {
	private model: MongoDBUserModel;

	constructor(model: MongoDBUserModel) {
		this.model = model;
	}

	public create(
		username: string,
		email: string,
		password: string
	): Promise<IMongoDBUser> {
		return this.model.create({ username, email, password });
	}

	public findById(
		id: string,
		projection?: ProjectionType<IMongoDBUser>,
		options?: QueryOptions<IMongoDBUser>
	): Promise<IMongoDBUser | null> {
		return this.model.findById(id, projection, options);
	}

	public findOne(
		filter?: FilterQuery<IMongoDBUser>,
		projection?: ProjectionType<IMongoDBUser>,
		options?: QueryOptions<IMongoDBUser>
	): Promise<IMongoDBUser | null> {
		return this.model.findOne(filter, projection, options);
	}

	public findOneAndUpdate(
		filter?: FilterQuery<IMongoDBUser>,
		update?: UpdateQuery<IMongoDBUser>,
		options?: QueryOptions<IMongoDBUser>
	): Promise<IMongoDBUser | null> {
		return this.model.findOneAndUpdate(filter, update, options);
	}
}

export default MongoDBUserDAO;

export type { IMongoDBUserDAO };
