import { useState, useCallback } from 'react';

const useModal = (): [boolean, () => void, () => void] => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const openModal = useCallback((): void => setIsModalOpen(true), []);

	const closeModal = useCallback((): void => setIsModalOpen(false), []);

	return [isModalOpen, openModal, closeModal];
};

export default useModal;
