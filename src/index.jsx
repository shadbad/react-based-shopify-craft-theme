import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'components/organisms';
import { Landing, Collection, Product, Search, Cart, ErrorBoundary, Blog, Post } from 'pages';
import { Provider } from 'react-redux';
import store from 'store/store';
import initializeStore from 'store/initialize';
import reportWebVitals from './reportWebVitals';

initializeStore();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <ErrorBoundary>
        <Provider store={store}>
            <Router basename="/react-based-shopify-craft-theme/">
                <Layout>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/collections/:slug" element={<Collection />} />
                        <Route path="/products/:slug" element={<Product />} />
                        <Route path="/search/:query" element={<Search />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:slug" element={<Post />} />
                    </Routes>
                </Layout>
            </Router>
        </Provider>
    </ErrorBoundary>

);

reportWebVitals();
