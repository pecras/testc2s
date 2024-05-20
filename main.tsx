import React from 'react';
import {AppProvider} from './context/AppContext';
import App from './App/App';

export default function Main(): JSX.Element {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}
