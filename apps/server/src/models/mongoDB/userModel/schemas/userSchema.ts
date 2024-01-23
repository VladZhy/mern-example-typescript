import type { IMongoDBUser, MongoDBUserModel } from '../types';
import { Schema } from 'mongoose';

const userSchema = new Schema<IMongoDBUser, MongoDBUserModel>({
	username: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
});

export default userSchema;
