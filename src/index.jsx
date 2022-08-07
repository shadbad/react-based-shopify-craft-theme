import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from 'components/pages';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
