import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing, Collection, Search } from 'pages';
import { Provider } from 'react-redux';
import store from 'store/store';
import initializeStore from 'store/initialize';
import reportWebVitals from './reportWebVitals';

initializeStore();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/collections/:slug" element={<Collection />} />
                <Route path="/search/:query" element={<Search />} />
            </Routes>
        </Router>
    </Provider>

);

reportWebVitals();
