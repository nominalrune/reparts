import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Editor, { EditorProps } from '../Editor';

const Template = (args: EditorProps) => <Editor {...args} />

export default {
	title: 'Editor',
	component: Editor,
	args: {
	},
} as Meta<EditorProps>;
const ExampleCase01: Story<EditorProps> = Template.bind({});
ExampleCase01.args = {
	height: '1200px',
	previewStyle: "tab",
	initialValue: "# Hallo!\n\t- my name\n\t- is\n\t\t1. Santa\n\t\t\t1. you\n\t\t\t2. don\n\t\t\t3. 't\n\t\t\t4. even\n\t\t\t\t- believe\n\t\t\t\t- it,\n\t\t\t\t- I\n\t\t\t\t- know.\n\t## Clause!",
	initialEditType: "markdown",
	useCommandShortcut: true
};

export { ExampleCase01 }

const ExampleCase02: Story<EditorProps> = Template.bind({});
ExampleCase02.args = {
	height: '100%',
	previewStyle: "vertical",
	initialValue: "hello"
};

export { ExampleCase02 }