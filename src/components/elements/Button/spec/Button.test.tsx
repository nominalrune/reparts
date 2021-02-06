import React from 'react';
import { cleanup, render, fireEvent, waitFor, screen } from '@testing-library/react';

import Button, {ButtonPropType} from '../Button';

beforeAll(() => { });
afterEach(cleanup);
afterAll(() => { });

it('should be rendered', async () => {
	render(<Button> </Button>);
	expect(screen.getByLabelText('button')).toBeDefined();
});
test('when the component has a word as a child, it should render the word', async () => {
	render(<Button>hi</Button>);
	expect(screen.getByText('hi')).toBeDefined();
});