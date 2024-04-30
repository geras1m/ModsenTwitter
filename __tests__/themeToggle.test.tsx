import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../src/constants/theme';
import { ThemeToggle } from '../src/components/ThemeToggle';
import { Provider } from 'react-redux';
import { store } from '../src/store';

describe('Theme toggle component', () => {
  it('should render the theme toggle', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <ThemeToggle />
        </ThemeProvider>
      </Provider>,
    );

    expect(screen.getByTestId('toggle')).toBeInTheDocument();
    expect(screen.getByTestId('toggle-element')).toBeInTheDocument();
  });
});
