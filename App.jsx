import React from 'react';
import { AppNavigation } from './src/navigation';
import UserContextProvider from './src/context/UserContextProvider';
import { Provider } from 'react-redux';
import { configureStore } from './src/store/store';

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <AppNavigation />
      </UserContextProvider>
    </Provider>
  );
};

export default App;
