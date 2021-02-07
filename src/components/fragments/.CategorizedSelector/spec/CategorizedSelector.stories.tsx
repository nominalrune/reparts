import React from 'react';
import { Story,Meta } from '@storybook/react/types-6-0';
import CategorizedSelector,{CategorizedSelectorProps} from '../CategorizedSelector';

const Template: Story<CategorizedSelectorProps> = (args?:CategorizedSelectorProps) => <CategorizedSelector {...args} />

export default {
	title: 'CategorizedSelector',
	component: CategorizedSelector
} as Meta<CategorizedSelectorProps>;

export const Default = Template.bind({});
Default.args = {
	children:'hi'
}