import { cleanup, render,  screen } from '@testing-library/react';
import React from 'react';


import useStyles from '../styles';

beforeAll(cleanup)
afterEach(cleanup)
//
//
it.todo('`useStyle()` should offer `base` object', () => {

	function TestComponent(){
		const classes=useStyles();
		return <div className={classes.base} >test</div>
	}
	render(<TestComponent />)
	expect(screen.findByText('test')).not.toHaveClass()

});