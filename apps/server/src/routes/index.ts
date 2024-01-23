import { Router } from 'express';
import { userRouter, guideRouter } from './routers';
import { USERS_ROUTE, GUIDES_ROUTE } from './config';

const router: Router = Router();

router.use(USERS_ROUTE, userRouter);
router.use(GUIDES_ROUTE, guideRouter);

export default router;
