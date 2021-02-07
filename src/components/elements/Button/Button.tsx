import { useState, useEffect} from 'react';
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
	const { children, variant, highlight=false, error=false, large, small, disabled=false, medium } = props;
	const [color, setColor] = useState<'primary'|'default'>(error?'default':highlight?'primary':'default');
	const [size, setSize] = useState<"small" | "large" | "medium">(large?'large':small?'small':'medium');
	useEffect(()=>{setColor(error?'default':highlight?'primary':'default')},[highlight,error]);
	useEffect(()=>{setSize(large?'large':small?'small':'medium')},[small , large , medium]);
	const ariaLabel = 'button';
	return (
		<div aria-label={ariaLabel} style={styles.base} >
			<MuiButton color={color} size={size} disabled={disabled} variant={variant} >
				{children}
			</MuiButton>
		</div>
	);
};