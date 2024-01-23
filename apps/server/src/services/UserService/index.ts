import type {
	IUserService,
	IMongoDBUserRepository,
	IUser,
	IMongoDBUser,
	UpdatedUserFields
} from './types';
import User from './classes/User';
import bcrypt from 'bcrypt';

class UserService implements IUserService {
	private mongoDBUserRepository: IMongoDBUserRepository;

	constructor(mongoDBUserRepository: IMongoDBUserRepository) {
		this.mongoDBUserRepository = mongoDBUserRepository;
	}

	public async createUser(
		username: string,
		email: string,
		password: string
	): Promise<IUser | null> {
		const encryptedPassword = await this.encryptPassword(password);

		const mongoDBUser = await this.mongoDBUserRepository.createUser(
			username,
			email,
			encryptedPassword
		);

		return this.getUserFromMongoDBUser(mongoDBUser);
	}

	public async updateUserById(
		id: string,
		updatedFields: UpdatedUserFields
	): Promise<IUser | null> {
		if (updatedFields.password) {
			updatedFields.password = await this.encryptPassword(
				updatedFields.password
			);
		}

		const updatedMongoDBUser = await this.mongoDBUserRepository.updateUserById(
			id,
			updatedFields
		);

		return this.getUserFromMongoDBUser(updatedMongoDBUser);
	}

	public async getUserById(id: string): Promise<IUser | null> {
		const mongoDBUser = await this.mongoDBUserRepository.getUserById(id);

		return this.getUserFromMongoDBUser(mongoDBUser);
	}

	public async getUserByUsername(username: string): Promise<IUser | null> {
		const mongoDBUser =
			await this.mongoDBUserRepository.getUserByUsername(username);

		return this.getUserFromMongoDBUser(mongoDBUser);
	}

	public async getUserByUsernameOrEmail(
		username?: string,
		email?: string
	): Promise<IUser | null> {
		const mongoDBUser =
			await this.mongoDBUserRepository.getUserByUsernameOrEmail(
				username,
				email
			);

		return this.getUserFromMongoDBUser(mongoDBUser);
	}

	private async encryptPassword(password: string): Promise<string> {
		const salt = await bcrypt.genSalt(10);

		return await bcrypt.hash(password, salt);
	}

	private getUserFromMongoDBUser(
		mongoDBUser?: IMongoDBUser | null
	): IUser | null {
		if (!mongoDBUser) {
			return null;
		}

		return new User(
			mongoDBUser._id.toString(),
			mongoDBUser.username,
			mongoDBUser.email,
			mongoDBUser.password
		);
	}
}

export default UserService;

export type { IUserService, IUser, UpdatedUserFields };
