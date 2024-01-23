import { ComponentProps } from 'react';
import styled from 'styled-components';

interface StyledButtonWrapperProps extends ComponentProps<'button'> {}

const StyledButtonWrapper = styled.button.attrs(() => ({
	type: 'button'
}))<StyledButtonWrapperProps>`
	border: none;
	background-color: transparent;
	padding: 0;
	line-height: 0;
`;

export default StyledButtonWrapper;
