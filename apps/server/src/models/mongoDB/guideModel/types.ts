import type { ObjectId, Model } from 'mongoose';
import type { IMongoDBGuide } from './interfaces/IMongoDBGuide';

export type MongoDBGuideModel = Model<IMongoDBGuide>;

export type { ObjectId, IMongoDBGuide };
