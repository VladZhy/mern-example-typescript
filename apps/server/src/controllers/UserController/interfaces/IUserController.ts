import type { UserData, UpdatedUserSettings } from '../types';

export interface IUserController {
	logIn(username: string, password: string): Promise<UserData>;
	signUp(username: string, email: string, password: string): Promise<UserData>;
	updateSettings(
		id: string,
		updatedUserSettings: UpdatedUserSettings
	): Promise<UserData | null>;
}
