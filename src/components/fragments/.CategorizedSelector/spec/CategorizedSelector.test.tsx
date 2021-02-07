import React from 'react';
import { cleanup, render, fireEvent, waitFor, screen } from '@testing-library/react';

import CategorizedSelector,{CategorizedSelectorPropType} from '../CategorizedSelector';

beforeAll(() => { })
afterEach(cleanup)
afterAll(() => { })
it('labeled component should be rendered', async () => {
	//const args:CategorizedSelectorPropType = {};
	render(<CategorizedSelector />);

	expect(screen.getByLabelText('categorizedselector')).toBeDefined();
});