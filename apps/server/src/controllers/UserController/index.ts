import type {
	IUserController,
	IUserService,
	IUser,
	UpdatedUserFields,
	UserData,
	UpdatedUserSettings
} from './types';
import {
	INVALID_CREDENTIALS_ERROR_MESSAGE,
	FAILED_TO_SIGN_UP_ERROR_MESSAGE,
	USER_NOT_FOUND_ERROR_MESSAGE,
	NEW_PASSWORD_NOT_DIFFERENT_ERROR_MESSAGE,
	FAILED_TO_UPDATE_SETTINGS_ERROR_MESSAGE,
	USERNAME_IS_TAKEN_ERROR_MESSAGE,
	EMAIL_IS_TAKEN_ERROR_MESSAGE
} from './config';

class UserController implements IUserController {
	private userService: IUserService;

	constructor(userService: IUserService) {
		this.userService = userService;
	}

	public async logIn(username: string, password: string): Promise<UserData> {
		const user = await this.userService.getUserByUsername(username);

		if (!user || !(await user.matchPassword(password))) {
			throw new Error(INVALID_CREDENTIALS_ERROR_MESSAGE);
		}

		return this.getUserData(user);
	}

	public async signUp(
		username: string,
		email: string,
		password: string
	): Promise<UserData> {
		await this.checkUserExists(username, email);

		const user = await this.userService.createUser(username, email, password);

		if (!user) {
			throw new Error(FAILED_TO_SIGN_UP_ERROR_MESSAGE);
		}

		return this.getUserData(user);
	}

	public async updateSettings(
		id: string,
		{ newUsername, newEmail, newPassword }: UpdatedUserSettings
	): Promise<UserData | null> {
		if (newUsername || newEmail) {
			await this.checkUserExists(newUsername, newEmail);
		}

		const user = await this.userService.getUserById(id);

		if (!user) {
			throw new Error(USER_NOT_FOUND_ERROR_MESSAGE);
		}

		if (newPassword && (await user.matchPassword(newPassword))) {
			throw new Error(NEW_PASSWORD_NOT_DIFFERENT_ERROR_MESSAGE);
		}

		const updatedFields = this.getUpdatedFields(
			newUsername,
			newEmail,
			newPassword
		);

		const updatedUser = await this.userService.updateUserById(
			id,
			updatedFields
		);

		if (!updatedUser) {
			throw new Error(FAILED_TO_UPDATE_SETTINGS_ERROR_MESSAGE);
		}

		return this.getUserData(updatedUser);
	}

	private getUserData(user: IUser): UserData {
		return {
			id: user.id,
			username: user.username,
			email: user.email
		};
	}

	private getUpdatedFields(
		newUsername?: string,
		newEmail?: string,
		newPassword?: string
	): UpdatedUserFields {
		const updatedFields: UpdatedUserFields = {};

		if (newUsername) {
			updatedFields.username = newUsername;
		}

		if (newEmail) {
			updatedFields.email = newEmail;
		}

		if (newPassword) {
			updatedFields.password = newPassword;
		}

		return updatedFields;
	}

	private async checkUserExists(
		username?: string,
		email?: string
	): Promise<void> {
		const existingUser = await this.userService.getUserByUsernameOrEmail(
			username,
			email
		);

		if (existingUser) {
			if (existingUser.username === username) {
				throw new Error(USERNAME_IS_TAKEN_ERROR_MESSAGE);
			} else {
				throw new Error(EMAIL_IS_TAKEN_ERROR_MESSAGE);
			}
		}
	}
}

export default UserController;

export type { IUserController };
