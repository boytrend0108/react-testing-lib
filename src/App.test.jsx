import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('test App component', () => {
  test('loads and displays greeting', async () => {
    render(<App />);

    const title = screen.getByText(/Hello world!/i);
    const button = screen.getByTestId('button1');
    const input = screen.getByPlaceholderText(/enter name/i);

    screen.debug();
    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test('loads and displays greeting2', async () => {
    render(<App />);

    const title = screen.queryByText('some text');
    expect(title).toBeNull();
  });

  test('check style', async () => {
    render(<App />);

    const title = screen.queryByText(/Hello world!/i);
    expect(title).toHaveStyle({ color: 'red' });
  });

  test('check async ', async () => {
    render(<App />);

    const data = await screen.findByText(/data/i);
    expect(data).toBeInTheDocument();
    screen.debug();
  });

  test('check click on button', async () => {
    render(<App />);

    const btn = screen.getByTestId('button1');
    const toggleDiv = screen.queryByTestId('toggle-div');
    expect(toggleDiv).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-div')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(toggleDiv).toBeNull();
  });

  test('check input', async () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/enter name/i);
    const value = screen.getByTestId('value');
    expect(value).toContainHTML('');
    fireEvent.input(input, {
      target: { value: '123' },
    });
    expect(value).toContainHTML('123');
  });
});
