import type {
	Request,
	Response,
	NextFunction,
	IMongoDBGuideDAO,
	IMongoDBGuideRepository,
	IGuideService,
	IGuideController
} from './types';
import mongoDBGuideModel from '../../models/mongoDB/guideModel';
import MongoDBGuideDAO from '../../dao/mongoDB/GuideDAO';
import MongoDBGuideRepository from '../../repositories/mongoDB/GuideRepository';
import GuideService from '../../services/GuideService';
import GuideController from '../../controllers/GuideController';
import { STATUS_CODES, CREATE_GUIDE_SUCCESS_MESSAGE } from './config';

const mongoDBGuideDAO: IMongoDBGuideDAO = new MongoDBGuideDAO(
	mongoDBGuideModel
);
const mongoDBGuideRepository: IMongoDBGuideRepository =
	new MongoDBGuideRepository(mongoDBGuideDAO);
const guideService: IGuideService = new GuideService(mongoDBGuideRepository);
const guideController: IGuideController = new GuideController(guideService);

/**
 * @desc Create a new guide
 * @route POST /guides/create-guide
 * @access Private
 */
async function handleCreateGuide(
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> {
	try {
		const { title, description, thumbnail } = req.body;
		const guide = await guideController.createGuide(
			title,
			description,
			thumbnail
		);

		res
			.status(STATUS_CODES.CREATED)
			.json({ guide, message: CREATE_GUIDE_SUCCESS_MESSAGE });
	} catch (error) {
		res.status(STATUS_CODES.BAD_REQUEST);
		next(error);
	}
}
export { handleCreateGuide };
