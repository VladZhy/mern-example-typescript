import type { ObjectId, Model } from 'mongoose';
import type { IMongoDBUser } from './interfaces/IMongoDBUser';

export type MongoDBUserModel = Model<IMongoDBUser>;

export type { ObjectId, IMongoDBUser };
