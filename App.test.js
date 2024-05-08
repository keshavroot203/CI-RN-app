import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from './App';

describe('App', () => {
  test('renders login screen', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');

    expect(usernameInput).toBeDefined();
    expect(passwordInput).toBeDefined();
    expect(loginButton).toBeDefined();
  });

  test('logs in with correct credentials', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Loginn');

    fireEvent.changeText(usernameInput, 'keshav');
    fireEvent.changeText(passwordInput, 'keshav');
    fireEvent.press(loginButton);

    const loginSuccessfulText = getByText('Logged in Successful');
    expect(loginSuccessfulText).toBeDefined();
  });

  test('displays error message with incorrect credentials', () => {
    const { getByPlaceholderText, getByText,queryByText } = render(<App />);
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');

    fireEvent.changeText(usernameInput, 'incorrect');
    fireEvent.changeText(passwordInput, 'password');
    fireEvent.press(loginButton);

    const errorMessage = queryByText('Invalid username or password');
    expect(errorMessage).toBeDefined();
  });
});
