import { useState, createRef, useEffect } from 'react'
import useStyles from './styles';

import 'codemirror/lib/codemirror.css';
import './editor.css';
import toastui from '@toast-ui/editor';

export interface EditorProps {
	height?: string,
	minHeight?: string,
	width?: string,
	minWidth?: string,
	initialEditType?: 'markdown' | 'WYSIWYG',
	previewStyle?: "vertical" | "tab",
	hideModeSwitch?: boolean,
	initialValue?: string,
	useCommandShortcut?: boolean
}


export default function Editor(props?: EditorProps) {
	const styles = useStyles();
	const [text, setText] = useState("");

	// const TEditor = Container("") as unknown as HTMLElement;
	const TEditor = createRef<HTMLDivElement>();
	const [controll, setControll] = useState<toastui>();

	useEffect(() => {
		TEditor.current&&setControll(new toastui({ el: TEditor.current, usageStatistics: false, initialEditType: 'markdown', previewStyle: 'tab', hideModeSwitch: true, initialValue: "hello", height: "100vh", ...props }))
	}, [])
	function handleChange(e: React.FormEvent<HTMLFormElement>) {
		const md= controll?.getMarkdown()
		setText(md || "");
		console.log("text", text);
	}
	return (
		<div aria-label='editor' className={styles.base}>
			<form onInput={handleChange} onKeyDown={handleChange} >
				<div ref={TEditor} />
			</form>
		</div>
	);
};