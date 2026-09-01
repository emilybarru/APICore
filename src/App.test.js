// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders APICore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/APICore/i);
    expect(titleElement).toBeInTheDocument();
});
