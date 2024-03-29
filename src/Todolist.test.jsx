import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from './Todolist';

test('adds a todo', () => {
  render(<TodoList />);

  const input = screen.getByRole('textbox'); 
  const addButton = screen.getByText('Add Todo');

  fireEvent.change(input, { target: { value: 'Test Todo' } });
  fireEvent.click(addButton);

  expect(screen.getByText('Test Todo')).toBeInTheDocument();
});
