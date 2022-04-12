import React from 'react'
import styled, { css } from 'styled-components'
import * as ButtonStyles from './ButtonStyles'

export interface ButtonProps {
  /**
   * Style of button to be used
   */
  variant: "text" | "filled" | "outlined";
  /**
   * Size of the component
   */
  size: "small" | "medium" | "large";
  /**
   * Button label
   */
  children?: string;
  /**
   * Disables button functionality
   */
  disabled?: boolean;
  /**
   * Makes button full width of it's container
   */
  fullWidth?: boolean;
  /**
   * Optional click handler
   */
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const StyledButton = styled.button<ButtonProps>`
    ${ButtonStyles.buttonBase};
    ${({ size }) => ButtonStyles[size]};
    ${({ variant }) => ButtonStyles[variant]};
    ${({ fullWidth }) => fullWidth && css`
      width: 100%;
      display: block;
    `}
`

/**
 * Primary UI component for user interaction
 */
 const Button = ({
  variant,
  size,
  children,
  disabled,
  fullWidth,
  onClick,
}: ButtonProps) => {
  return (
   <StyledButton
    variant={variant}
    size={size}
    disabled={disabled}
    fullWidth={fullWidth}
    onClick={onClick}
   >
     {children}
   </StyledButton>
  );
}
  
  Button.defaultProps = {
    variant: "text",
    size: "medium",
    disabled: false,
    fullWidth: false,
  }

export default Button