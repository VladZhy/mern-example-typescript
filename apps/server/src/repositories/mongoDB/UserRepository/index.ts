import type {
	IMongoDBUserRepository,
	IMongoDBUserDAO,
	IMongoDBUser,
	UpdatedUserFields
} from './types';

class MongoDBUserRepository implements IMongoDBUserRepository {
	private mongoDBUserDAO: IMongoDBUserDAO;

	constructor(mongoDBUserDAO: IMongoDBUserDAO) {
		this.mongoDBUserDAO = mongoDBUserDAO;
	}

	public async createUser(
		username: string,
		email: string,
		password: string
	): Promise<IMongoDBUser> {
		return await this.mongoDBUserDAO.create(username, email, password);
	}

	public async updateUserById(
		_id: string,
		updatedFields: UpdatedUserFields
	): Promise<IMongoDBUser | null> {
		return await this.mongoDBUserDAO.findOneAndUpdate({ _id }, updatedFields);
	}

	public async getUserById(id: string): Promise<IMongoDBUser | null> {
		return await this.mongoDBUserDAO.findById(id);
	}

	public async getUserByUsername(
		username: string
	): Promise<IMongoDBUser | null> {
		return await this.mongoDBUserDAO.findOne({ username });
	}

	public async getUserByUsernameOrEmail(
		username?: string,
		email?: string
	): Promise<IMongoDBUser | null> {
		return await this.mongoDBUserDAO.findOne({
			$or: [{ username }, { email }]
		});
	}
}

export default MongoDBUserRepository;

export type { IMongoDBUserRepository };
