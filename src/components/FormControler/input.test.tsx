import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TextInput from './input';

test('renders the TextInput component', () => {
    render(<TextInput value="" onHandleChange={() => { }} />);

    const textInputElement = screen.getByTestId('text-input');
    expect(textInputElement).toBeInTheDocument();
});

test('handles input change', () => {
    let textValue = '';
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        textValue = event.target.value;
    };

    render(<TextInput value={textValue} onHandleChange={handleChange} />);

    const inputElement = screen.getByTestId('text-input');

    const newText = 'Sample text';

    fireEvent.change(inputElement, { target: { value: newText } });
    expect(textValue).toBe(newText);
});

test('displays placeholder when no value is provided', () => {
    render(<TextInput value="" onHandleChange={() => { }} />);


    const textInputElement = screen.getByTestId('text-input');
    expect(textInputElement).toBeInTheDocument();
});
