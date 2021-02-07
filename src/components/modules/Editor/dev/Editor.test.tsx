import React from 'react';
import {cleanup, render, screen } from '@testing-library/react';

import Editor from '../Editor';

beforeAll(() => { })
afterEach(cleanup)

it('should be rendered', () => {
	render(<html><body><Editor /></body></html>);
	expect(screen.getByLabelText('editor')).toBeDefined();
});
