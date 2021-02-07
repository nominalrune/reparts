import React from 'react';
import { cleanup, render, fireEvent, waitFor, screen } from '@testing-library/react';

import Card,{CardPropType} from '../Card';

beforeAll(() => { })
afterEach(cleanup)
afterAll(() => { })
it('labeled component should be rendered', async () => {
	//const args:CardPropType = {};
	render(<Card />);

	expect(screen.getByLabelText('card')).toBeDefined();
});