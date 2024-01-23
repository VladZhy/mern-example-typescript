import type { IUserController } from './interfaces/IUserController';
import type {
	IUserService,
	IUser,
	UpdatedUserFields
} from '../../services/UserService';

export type UserData = {
	id: string;
	username: string;
	email: string;
};

export type UpdatedUserSettings = {
	newUsername?: string;
	newEmail?: string;
	newPassword?: string;
};

export type { IUserController, IUserService, IUser, UpdatedUserFields };
