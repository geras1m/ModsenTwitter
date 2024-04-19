import React, { ErrorInfo, ReactNode } from 'react';

import {
  Button,
  ErrorBoundaryWrapper,
  ErrorMessage,
  ErrorWrapper,
} from '@/components/ErrorBoundary/styled';

export interface IErrorBoundaryProps {
  children: ReactNode | undefined;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  onRefresh;

  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
    this.onRefresh = () => window.location.reload();
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <ErrorBoundaryWrapper>
          <ErrorWrapper>
            <ErrorMessage>Sorry.. there was an error :(</ErrorMessage>
            <Button onClick={this.onRefresh}>Reload the page</Button>
          </ErrorWrapper>
        </ErrorBoundaryWrapper>
      );
    }

    return children;
  }
}
