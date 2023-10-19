import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate
      loading={<div>Local Storage is loading...</div>}
      persistor={persistor}
    >
      <App />
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
