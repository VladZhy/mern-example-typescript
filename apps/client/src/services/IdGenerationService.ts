import { v4 as uuidv4 } from 'uuid';

class IdGenerationService {
	static generate(): string {
		return uuidv4();
	}
}

export default IdGenerationService;
