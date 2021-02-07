import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

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
describe('size', () => {
	test.todo('when the component has a word as a child, it should render the word', async () => {
		render(<Button large>hi</Button>);
		expect(screen.getByText('hi')).toHaveAttribute('','large');
	});
	test.todo.each([[['large'],'0.9375rem'],[["medium"],'0.85rem'],[["small"],'0.8125rem']])(
		'size changes %d',
		(input, expected) => {
			render(<Button {...input}>hi</Button>);
			expect(screen.getByText('hi').attributes.getNamedItem('font-size')?.value).toHaveAttribute('font-size','0.9375rem');
		}
	);
});