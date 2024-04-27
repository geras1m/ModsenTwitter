import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from '@/components/App';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { BackgroundLoader } from '@/components/Router/styled';
import { Spinner } from '@/components/Spinner';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ToastProvider } from '@/context/ToastProvider';
import { persistor, store } from '@/store';

import '@/firabase';

// const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <PersistGate
          loading={
            <BackgroundLoader>
              <Spinner
                width='100px'
                border='10px'
              />
            </BackgroundLoader>
          }
          persistor={persistor}
        >
          <ErrorBoundary>
            <BrowserRouter>
              <ToastProvider>
                <App />
              </ToastProvider>
            </BrowserRouter>
          </ErrorBoundary>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
