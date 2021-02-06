import { useState, useEffect, useReducer, useRef } from 'react';
import { Button as MuiButton } from '@material-ui/core'

import styles from './styles';

export interface ButtonPropType {
	children: string | React.FC,
	variant?: 'contained' | 'outlined' | 'text',
	highlight?: boolean,
	error?: boolean,
	large?: boolean,
	small?: boolean,
	medium?:boolean,
	disabled?: boolean
}

export default function Button(props: ButtonPropType = { children: '', variant:'contained' }) {
	const { children, variant, highlight, error, large, small, disabled } = props;
	const [color, setColor] = useState<'primary'|'default'>(highlight?'primary':'default');
	const [size, setSize] = useState<"small" | "large" | "medium">(large?'large':small?'small':'medium');
	const ariaLabel = 'button';
	return (
		<div aria-label={ariaLabel} style={styles.base} >
			<MuiButton color={color} size={size} {...disabled ? 'disabled':''} >
				{children}
			</MuiButton>
		</div>
	);
};