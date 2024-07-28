import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test("render initial count", () =>{
  render(<App />);

  const initialCount = screen.getByText(/Counter: 0/i);
  expect(initialCount).toBeInTheDocument();

})


test('increments count when clicking increment button', async () => {
  render(<App />);
  
  const incrementButton = screen.getByText(/Increment/i);
  userEvent.click(incrementButton);

  const count = await screen.findByText(/Counter: 1/i);
  expect(count).toBeInTheDocument();
});

test('Decrements count when clicking Decrement button', async () => {
  render(<App />);
  
  const incrementButton = screen.getByText(/Decrement/i);
  userEvent.click(incrementButton);

  const count = await screen.findByText(/Counter: -1/i);
  expect(count).toBeInTheDocument();
});