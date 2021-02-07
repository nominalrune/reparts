import React from 'react';
import { Story,Meta } from '@storybook/react/types-6-0';
import Card,{CardProps} from '../Card';

const Template: Story<CardProps> = (args?:CardProps) => <Card {...args} />

export default {
	title: 'Card',
	component: Card
} as Meta<CardProps>;

export const Default = Template.bind({});
Default.args = {
	children:'hi'
}