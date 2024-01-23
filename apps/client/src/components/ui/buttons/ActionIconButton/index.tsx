import { ComponentProps } from 'react';
import { StyledActionIconButton, StyledIcon } from './style';
import './styles.css';

interface ActionIconButtonProps extends ComponentProps<'button'> {
	label: string;
}

const ActionIconButton = ({
	children,
	label,
	...props
}: ActionIconButtonProps) => {
	return (
		<StyledActionIconButton {...props}>
			<StyledIcon className="icon-button__icon">{children}</StyledIcon>
			<span className="icon-button__label">{label}</span>
		</StyledActionIconButton>
	);
};

export default ActionIconButton;
