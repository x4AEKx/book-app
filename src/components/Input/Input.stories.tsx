import React from "react";
import {Story, Meta} from "@storybook/react";
import {Input, InputPropsType} from "./Input";

export default {
		title: "Components/Input",
		component: Input,
} as Meta;

const Template: Story<InputPropsType> = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
		placeholder: "Type for search",
};
