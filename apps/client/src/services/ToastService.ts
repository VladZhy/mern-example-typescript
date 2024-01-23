import { toast } from 'react-toastify';

class ToastService {
	static showSuccess(successMessage: string, toastId: string): void {
		toast.success(successMessage, {
			toastId
		});
	}

	static showError(errorMessage: string, toastId: string): void {
		toast.error(errorMessage, {
			toastId
		});
	}
}

export default ToastService;
