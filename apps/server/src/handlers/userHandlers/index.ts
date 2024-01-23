import type {
	Request,
	Response,
	NextFunction,
	IMongoDBUserDAO,
	IMongoDBUserRepository,
	IUserService,
	IUserController
} from './types';
import mongoDBUserModel from '../../models/mongoDB/userModel';
import MongoDBUserDAO from '../../dao/mongoDB/UserDAO';
import MongoDBUserRepository from '../../repositories/mongoDB/UserRepository';
import UserService from '../../services/UserService';
import UserController from '../../controllers/UserController';
import {
	generateToken,
	setAuthCookie,
	deleteAuthCookie
} from '../../helpers/userHelpers';
import {
	STATUS_CODES,
	LOGIN_SUCCESS_MESSAGE,
	SIGNUP_SUCCESS_MESSAGE,
	LOGOUT_SUCCESS_MESSAGE,
	UPDATE_SETTINGS_SUCCESS_MESSAGE
} from './config';

const mongoDBUserDAO: IMongoDBUserDAO = new MongoDBUserDAO(mongoDBUserModel);
const mongoDBUserRepository: IMongoDBUserRepository = new MongoDBUserRepository(
	mongoDBUserDAO
);
const userService: IUserService = new UserService(mongoDBUserRepository);
const userController: IUserController = new UserController(userService);

/**
 * @desc Log in user & get token
 * @route POST /users/login
 * @access Public
 */
async function handleLogin(
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> {
	try {
		const { username, password } = req.body;
		const user = await userController.logIn(username, password);
		const token = generateToken(user.id);

		setAuthCookie(res, token);
		res.json({ user, message: LOGIN_SUCCESS_MESSAGE });
	} catch (error) {
		res.status(STATUS_CODES.BAD_REQUEST);
		next(error);
	}
}

/**
 * @desc Sign up a new user & get token
 * @route POST /users/signup
 * @access Public
 */
async function handleSignup(
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> {
	try {
		const { username, email, password } = req.body;
		const user = await userController.signUp(username, email, password);
		const token = generateToken(user.id);

		setAuthCookie(res, token);
		res
			.status(STATUS_CODES.CREATED)
			.json({ user, message: SIGNUP_SUCCESS_MESSAGE });
	} catch (error) {
		res.status(STATUS_CODES.BAD_REQUEST);
		next(error);
	}
}

/**
 * @desc Log out user / clear cookie
 * @route POST /users/logout
 * @access Public
 */
function handleLogout(req: Request, res: Response): void {
	deleteAuthCookie(res);
	res.json({ message: LOGOUT_SUCCESS_MESSAGE });
}

/**
 * @desc Update user settings
 * @route PUT /users/settings
 * @access Private
 */
async function handleUpdateSettings(
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> {
	try {
		const { id, ...updatedFields } = req.body;
		const user = await userController.updateSettings(id, updatedFields);

		res.json({ user, message: UPDATE_SETTINGS_SUCCESS_MESSAGE });
	} catch (error) {
		res.status(STATUS_CODES.NOT_FOUND);
		next(error);
	}
}

export { handleLogin, handleSignup, handleLogout, handleUpdateSettings };
