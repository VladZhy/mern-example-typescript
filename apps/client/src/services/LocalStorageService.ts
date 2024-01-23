class LocalStorageService {
	static setItem(key: string, value: any): void {
		localStorage.setItem(key, JSON.stringify(value));
	}

	static getValue(key: string, defaultValue: any = null): any {
		const storedValue = localStorage.getItem(key);

		return storedValue ? JSON.parse(storedValue) : defaultValue;
	}

	static removeItem(key: string): void {
		localStorage.removeItem(key);
	}
}

export default LocalStorageService;
