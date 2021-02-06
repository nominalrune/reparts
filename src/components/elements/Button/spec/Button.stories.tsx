import React from 'react';
import { Story,Meta } from '@storybook/react/types-6-0';
import Button,{ButtonPropType} from '../Button';

const Template: Story<ButtonPropType> = (args:ButtonPropType) => <Button {...args} />

export default {
title: 'Button',
component: Button
} as Meta<ButtonPropType>;

export const Default = Template.bind({});
Default.args = {
	children:'hi'
}