import * as mongoDBProvider from './providers/database/mongoDBProvider';
import * as server from './server';

(async () => {
	await Promise.all([mongoDBProvider.connect(), server.start()]);
})();
