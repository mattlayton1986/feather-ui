import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from './Button';

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const TextButton = Template.bind({});
TextButton.args = { label: "Text Button" };

export const OutlinedButton = Template.bind({});
OutlinedButton.args = { variant: "outlined", label: "Outlined Button" };

export const FilledButton = Template.bind({});
FilledButton.args = { variant: "filled", label: "Filled Button" };
