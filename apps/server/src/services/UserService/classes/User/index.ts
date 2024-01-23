import type { IUser } from './types';
import bcrypt from 'bcrypt';

class User implements IUser {
	private readonly _id: string;
	private readonly _username: string;
	private readonly _email: string;
	private readonly _password: string;

	constructor(id: string, username: string, email: string, password: string) {
		this._id = id;
		this._username = username;
		this._email = email;
		this._password = password;
	}

	public get id(): string {
		return this._id;
	}

	public get username(): string {
		return this._username;
	}

	public get email(): string {
		return this._email;
	}

	public async matchPassword(enteredPassword: string): Promise<boolean> {
		return await bcrypt.compare(enteredPassword, this._password);
	}
}

export default User;

export type { IUser };
