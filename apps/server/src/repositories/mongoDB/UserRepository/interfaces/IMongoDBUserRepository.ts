import type { IMongoDBUser, UpdatedUserFields } from '../types';

export interface IMongoDBUserRepository {
	createUser(
		username: string,
		email: string,
		password: string
	): Promise<IMongoDBUser>;
	updateUserById(
		_id: string,
		updatedFields: UpdatedUserFields
	): Promise<IMongoDBUser | null>;
	getUserById(id: string): Promise<IMongoDBUser | null>;
	getUserByUsername(username: string): Promise<IMongoDBUser | null>;
	getUserByUsernameOrEmail(
		username?: string,
		email?: string
	): Promise<IMongoDBUser | null>;
}
