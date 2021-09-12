import React from 'react'
import { Provider } from 'react-redux';
import configureStore from './core/store';
import { router as AppRouter } from './routes';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
