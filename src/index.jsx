import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing, Collection } from 'pages';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/collections/:slug" element={<Collection />} />
            </Routes>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
