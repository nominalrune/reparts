import { useState, useEffect, useReducer, useRef } from 'react';
import styles from './styles';

import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';

import List from '@material-ui/core/List';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			maxWidth: 360,
			backgroundColor: theme.palette.background.paper,
		},
		nested: {
			paddingLeft: theme.spacing(4),
		},
	}),
);
export interface CategorizedSelectorProps {
	hidden: boolean
}

export default function CategorizedSelector(props: CategorizedSelectorProps = { hidden: false }) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const ref01 = useRef<typeof MenuItem>();

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget); setOpen(!open);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const { hidden } = props;
	const [count, setCount] = useState();
	const ariaLabel = 'categorizedselector';
	return (
		<div aria-label={ariaLabel} style={styles.base} >
			<Select className={classes.root} >
				<MenuItem button onClick={handleClick} >
					<ListItemText primary={"Inbox" + (open ? 'open' : 'closed')} />
					<Menu getContentAnchorEl={null}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',}}
					open={open} >
					<MenuItem button className={classes.nested}>
						<ListItemText primary="Starred" />
					</MenuItem>
					<MenuItem button className={classes.nested}>
						<ListItemText primary="Starred" />
					</MenuItem>
					<MenuItem button className={classes.nested}>
						<ListItemText primary="Starred" />
					</MenuItem>
				</Menu>
				</MenuItem>
									<MenuItem button className={classes.nested}>
						<ListItemText primary="Starred" />
					</MenuItem>
					<MenuItem button className={classes.nested}>
						<ListItemText primary="Starred" />
					</MenuItem>
					<MenuItem button className={classes.nested}>
						<ListItemText primary="Starred" />
					</MenuItem>
				<MenuItem button onClick={handleClick}>
					<ListItemText primary={"Inbox" + (open ? 'open' : 'closed')} />
				</MenuItem>
				<List
				>
					<MenuItem button className={classes.nested}>
						<ListItemText primary="Starred" />
					</MenuItem>
					<MenuItem button className={classes.nested}>
						<ListItemText primary="Starred" />
					</MenuItem>
				</List>
			</Select>
		</div>
	);
};