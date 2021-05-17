import React from 'react';
import { Story, Meta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Button, ButtonPropsType} from "./Button";

export default {
		title: 'Components/Button',
		component: Button,
} as Meta;

const Template: Story<ButtonPropsType> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
		label: 'Search',
		onClickCallback: action('button clicked')
};