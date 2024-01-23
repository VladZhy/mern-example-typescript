import { Router } from 'express';
import {
	handleLogin,
	handleSignup,
	handleLogout,
	handleUpdateSettings
} from '../../../handlers/userHandlers';
import {
	LOGIN_ROUTE,
	SIGNUP_ROUTE,
	LOGOUT_ROUTE,
	SETTINGS_ROUTE
} from './config';
import { protect } from '../../../middleware/authMiddleware';

const userRouter: Router = Router();

userRouter.post(LOGIN_ROUTE, handleLogin);
userRouter.post(SIGNUP_ROUTE, handleSignup);
userRouter.post(LOGOUT_ROUTE, handleLogout);
userRouter.route(SETTINGS_ROUTE).put(protect, handleUpdateSettings);

export default userRouter;
