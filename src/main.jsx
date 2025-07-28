import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';


const theme = extendTheme({
    colors: {
        brand: {
            100: '#e0e0e0',
            900: '#000000',
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <ChakraProvider  value={theme}>
                <App />
            </ChakraProvider>
        </Provider>
    </React.StrictMode>
);
