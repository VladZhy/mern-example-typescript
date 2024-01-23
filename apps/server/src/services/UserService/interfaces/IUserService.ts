import type { IUser, UpdatedUserFields } from '../types';

export interface IUserService {
	createUser(
		username: string,
		email: string,
		password: string
	): Promise<IUser | null>;
	updateUserById(
		id: string,
		updatedFields: UpdatedUserFields
	): Promise<IUser | null>;
	getUserById(id: string): Promise<IUser | null>;
	getUserByUsername(username: string): Promise<IUser | null>;
	getUserByUsernameOrEmail(
		username?: string,
		email?: string
	): Promise<IUser | null>;
}
