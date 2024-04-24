import { ColorModeScript, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import {Provider as ReduxProvider} from 'react-redux' // import redux provider  to rp App and chakraProvider
import store from './redux/store'; // import store.js

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
   <ReduxProvider store={store}>
   <ChakraProvider>
   <ColorModeScript theme={theme}/>
    <App />
   </ChakraProvider>
   </ReduxProvider>
  </StrictMode>
);

