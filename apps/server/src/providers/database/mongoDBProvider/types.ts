import type { ConnectOptions } from 'mongoose';

export type MongooseEvents = {
	CONNECTED: string;
	ERROR: string;
	DISCONNECTED: string;
};

export type { ConnectOptions };
