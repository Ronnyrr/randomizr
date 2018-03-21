import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from './app/store';
import theme from './app/config/theme';
import App from './app/index';

const Root = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>
);

export default Root;
