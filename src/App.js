import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AutoScrollTop from './components/AutoScrollTop';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';

import AdminLogin from './components/AdminLogin';
import AdminPage from './pages/AdminPage';

import './styles/global.css';

// Protected Route
const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />;
    }

    return children;
};

// Layout wrapper
const Layout = ({ children }) => {
    const location = useLocation();
    const isAdminPage = location.pathname.startsWith('/admin');

    return (
        <>
            <AutoScrollTop />
            <ScrollToTop />

            {!isAdminPage && <Navbar />}

            {children}

            {!isAdminPage && <Footer />}
        </>
    );
};

function App() {

    const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

    useEffect(() => {
        const auth = localStorage.getItem('adminAuthenticated') === 'true';
        setIsAdminAuthenticated(auth);
    }, []);

    const handleLogin = () => {
        localStorage.setItem('adminAuthenticated', 'true');
        setIsAdminAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('adminAuthenticated');
        localStorage.removeItem('adminToken');
        setIsAdminAuthenticated(false);
    };

    return (
        <Router>
            <Layout>
                <Routes>

                    {/* Public Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/testimonials" element={<TestimonialsPage />} />
                    <Route path="/contact" element={<ContactPage />} />

                    {/* Admin Routes */}
                    <Route path="/admin/login" element={<AdminLogin onLogin={handleLogin} />} />

                    <Route
                        path="/admin/dashboard"
                        element={
                            <ProtectedRoute>
                                <AdminPage onLogout={handleLogout} />
                            </ProtectedRoute>
                        }
                    />

                    <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />

                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
