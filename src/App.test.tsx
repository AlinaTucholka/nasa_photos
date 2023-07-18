import {App, WrappedApp} from './App';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
    it('Renders hello world', () => {
        render(<WrappedApp />);
        expect(
            screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('Hello World');
    });

    it('Renders not found if invalid path', () => {
        render(
            <MemoryRouter initialEntries={['/bad/path']}>
                <App />
            </MemoryRouter>
        );
        expect(
            screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('Not found');
    });
});
