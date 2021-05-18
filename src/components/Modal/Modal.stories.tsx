import React, {useState} from "react";
import { Story, Meta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Modal, ModalPropsType} from "./Modal";

export default {
		title: 'Components/Modal',
		component: Modal,
} as Meta;

const Template: Story<ModalPropsType> = (args) => <Modal {...args} />;

export const OpenedModal = Template.bind({});
OpenedModal.args = {
		title: 'Lord of the ring',
		visible: true,
		onClickCallback: action('modal clicked')
};

export const ClosedModal = Template.bind({});
ClosedModal.args = {
		title: 'Lord of the ring',
		visible: false,
		onClickCallback: action('modal clicked')
};

export const ToggleModal = () => {
		const [isModal, setModal] = useState(true)

		const toggleVisible = () => {
				setModal(!isModal)
		}

		return <Modal coverId={0} visible={isModal} title={'Lord of the ring'} onClickCallback={toggleVisible}/>
}