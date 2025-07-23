import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if user is logged in by checking 'loggedIn' flag in localStorage
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setIsLoading(false);
  }, [location.key]);

  if (isLoading) {
    // Optionally, show a loading spinner or nothing while checking auth
    return null;
  }

  if (!isAuthenticated) {
    // If not authenticated, redirect to login and preserve the intended path
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If authenticated, render the protected route
  return <Outlet />;
};

export default ProtectedRoute;