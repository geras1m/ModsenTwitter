import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from '@/components/App';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ToastProvider } from '@/context/ToastProvider';
import { store } from '@/store';

import '@/firabase';

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={<p>Loading...</p>}
        persistor={persistor}
      >
        <ErrorBoundary>
          <ThemeProvider>
            <HashRouter>
              <ToastProvider>
                <App />
              </ToastProvider>
            </HashRouter>
          </ThemeProvider>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
