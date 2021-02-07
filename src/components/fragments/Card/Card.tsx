import {useState, useEffect, useReducer, useRef} from 'react';
import styles from './styles';
import {Card as MuiCard} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

export interface CardProps {
	hidden:boolean
}

export default function Card(props:CardProps={hidden:false}) {
	const {hidden} = props;
	const [count,setCount] = useState();
	const ariaLabel= 'card';
	return (
			<div aria-label={ariaLabel} style={styles.base} >
				<MuiCard>
					
				</MuiCard>
			</div>
	);
};