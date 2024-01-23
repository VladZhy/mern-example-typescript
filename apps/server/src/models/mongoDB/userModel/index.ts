import type { IMongoDBUser, MongoDBUserModel } from './types';
import { model } from 'mongoose';
import { MODEL_NAME } from './config';
import { userSchema } from './schemas';

const mongoDBUserModel = model<IMongoDBUser, MongoDBUserModel>(
	MODEL_NAME,
	userSchema
);

export default mongoDBUserModel;

export type { IMongoDBUser, MongoDBUserModel };
