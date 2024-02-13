import React from 'react';
import { AppNavigation } from './src/navigation';
import UserContextProvider from './src/context/UserContextProvider';

const App = () => {
  return (
    <UserContextProvider>
      <AppNavigation />
    </UserContextProvider>
  );
};

export default App;
