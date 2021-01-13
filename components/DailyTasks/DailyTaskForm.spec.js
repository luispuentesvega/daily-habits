import { render, screen } from '@testing-library/react';
import DailyTasksForm from './DailyTaskForm';

describe('DailyTasksForm', () => {
  beforeEach(() => {
    render(<DailyTasksForm />);
  });
  it('Should render Daily Activities title', () => {
    expect(screen.getByText('Daily Activities')).toBeInTheDocument();
  });
  it('Should render From select with 38 items', () => {
    const fromItems = screen.getByTestId('from');
    expect(fromItems.length).toBe(38);
  });
  it('Should render To select with 38 items', () => {
    const fromItems = screen.getByTestId('from');
    expect(fromItems.length).toBe(38);
  });
  it('Should render Add Activity button', () => {
    expect(screen.getByText('Add Activity')).toBeInTheDocument();
  });
});
