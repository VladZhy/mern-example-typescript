import { connection, connect as mongooseConnect } from 'mongoose';
import env from '../../../env';
import { CONNECT_OPTIONS, MONGOOSE_EVENTS } from './config';

export const connect = async (): Promise<void> => {
	const {
		db: { username, password, cluster, name }
	} = env;
	const URI = getURI(username, password, cluster, name);

	addMongooseListeners(name);

	try {
		await mongooseConnect(URI, CONNECT_OPTIONS);
	} catch (error) {
		if (error instanceof Error) {
			console.error(error);
		}
	}
};

function addMongooseListeners(dbName: string): void {
	connection.on(MONGOOSE_EVENTS.CONNECTED, () => {
		console.log(`MongoDB connected: ${dbName}`);
	});

	connection.on(MONGOOSE_EVENTS.ERROR, (err) => {
		console.log(`Mongoose connection error: ${err?.message}`);
	});

	connection.on(MONGOOSE_EVENTS.DISCONNECTED, () => {
		console.log('Mongoose disconnected');
	});
}

function getURI(
	username: string,
	password: string,
	cluster: string,
	name: string
): string {
	return `mongodb+srv://${username}:${password}@${cluster}.tjco8bp.mongodb.net/${name}`;
}
