import { Router } from 'express';
import { handleCreateGuide } from '../../../handlers/guideHandlers';
import { CREATE_GUIDE_ROUTE } from './config';
import { protect } from '../../../middleware/authMiddleware';

const guideRouter: Router = Router();

guideRouter.route(CREATE_GUIDE_ROUTE).put(protect, handleCreateGuide);

export default guideRouter;
