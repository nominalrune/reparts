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
	disabled?: boolean
}

export default function Button(props: ButtonPropType = { children: '', variant:'contained' }) {
	const { children, variant, highlight, error, large, small, disabled } = props;
	const [disable, setDisable] = useState(!!disabled);
	const ariaLabel = 'button';
	return (
		<div aria-label={ariaLabel} style={styles.base} >
			<MuiButton {...disable && 'disabled'}>
				{children}
			</MuiButton>
		</div>
	);
};