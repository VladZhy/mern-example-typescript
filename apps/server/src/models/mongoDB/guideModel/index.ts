import type { IMongoDBGuide, MongoDBGuideModel } from './types';
import { model } from 'mongoose';
import { MODEL_NAME } from './config';
import { guideSchema } from './schemas';

const mongoDBGuideModel = model<IMongoDBGuide, MongoDBGuideModel>(
	MODEL_NAME,
	guideSchema
);

export default mongoDBGuideModel;

export type { IMongoDBGuide, MongoDBGuideModel };
