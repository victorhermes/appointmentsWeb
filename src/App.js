import React from 'react';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import Routes from './routes';
import history from './services/history';

import GlobalStyle from './styles/global';

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <GlobalStyle />
                <Routes />
            </Router>
        </Provider>
    );
}

export default App;
