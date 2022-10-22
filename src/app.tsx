import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary, Landing } from 'components/pages';

export default function App() {
    return (
        <ErrorBoundary>
            <Router basename="/react-based-shopify-craft-theme">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    {/* <Route path="/collections/:slug" element={<Collection />} />
                <Route path="/products/:slug" element={<Product />} />
                <Route path="/search/:query" element={<Search />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<Post />} /> */}
                </Routes>
            </Router>
        </ErrorBoundary>
    );
}
