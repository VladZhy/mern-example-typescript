import type { ReactNode } from 'react';
import { IconContext } from 'react-icons';

interface IconContextProviderProps {
	children: ReactNode;
	className: string;
}

const IconContextProvider = ({
	children,
	className
}: IconContextProviderProps) => (
	<IconContext.Provider value={{ className }}>{children}</IconContext.Provider>
);

export default IconContextProvider;
