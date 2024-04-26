import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from '@/components/App';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { BackgroundLoader } from '@/components/Router/styled';
import { Spinner } from '@/components/Spinner';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ToastProvider } from '@/context/ToastProvider';
import { store } from '@/store';

import '@/firabase';

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
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
          <ThemeProvider>
            <BrowserRouter>
              <ToastProvider>
                <App />
              </ToastProvider>
            </BrowserRouter>
          </ThemeProvider>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
