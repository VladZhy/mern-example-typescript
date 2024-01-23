import type { IUserService } from './interfaces/IUserService';
import type { IMongoDBUserRepository } from '../../repositories/mongoDB/UserRepository';
import type { IUser } from './classes/User';
import type { IMongoDBUser } from '../../models/mongoDB/userModel';

export type UpdatedUserFields = {
	username?: string;
	email?: string;
	password?: string;
};

export { IUserService, IMongoDBUserRepository, IUser, IMongoDBUser };
