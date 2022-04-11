import React from 'react'
import styled from 'styled-components'
import * as ButtonStyles from './ButtonStyles'

export interface ButtonProps {
  /**
   * Defines the variant style of button
   */
  variant: "text" | "filled" | "outlined";
  /**
   * How large should the button be?
   */
  size: "small" | "medium" | "large";
  /**
   * Button text contents
   */
  label?: string;
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
`

/**
 * Primary UI component for user interaction
 */
 const Button = ({
  variant,
  size,
  onClick,
  label
}: ButtonProps) => {
  return (
   <StyledButton
    variant={variant}
    size={size}
    onClick={onClick}
   >
     {label}
   </StyledButton>
  );
}
  
  Button.defaultProps = {
    variant: "text",
    size: "medium",
  }

export default Button