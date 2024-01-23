import type { ConnectOptions, MongooseEvents } from './types';

export const CONNECT_OPTIONS: ConnectOptions = {
	writeConcern: { w: 'majority' },
	retryWrites: true
};

export const MONGOOSE_EVENTS: MongooseEvents = {
	CONNECTED: 'connected',
	ERROR: 'error',
	DISCONNECTED: 'disconnected'
};
