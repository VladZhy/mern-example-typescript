import type { IMongoDBGuide, MongoDBGuideModel } from '../types';
import { Schema } from 'mongoose';

const guideSchema = new Schema<IMongoDBGuide, MongoDBGuideModel>(
	{
		title: {
			type: String,
			required: true,
			unique: true
		},
		description: {
			type: String
		},
		thumbnail: {
			type: String
		}
	},
	{
		timestamps: true
	}
);

export default guideSchema;
