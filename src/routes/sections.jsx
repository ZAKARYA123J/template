import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

// Import your lazy-loaded components
const IndexPage = lazy(() => import('src/pages/app'));
const ProductsPage = lazy(() => import('src/pages/products'));
const LoginPage = lazy(() => import('src/pages/login'));
const BlogPage = lazy(() => import('src/pages/blog'));
const Page404 = lazy(() => import('src/pages/page-not-found'));
const Insert = lazy(() => import('src/sections/societe/Insert'));
const InsertCompte = lazy(() => import('src/sections/comptes/Insert'));
const InsertCarnet = lazy(() => import('src/sections/carnets/Insert'));
const Effecte = lazy(() => import('src/pages/Effecte'));

export default function Router() {
  const routes = useRoutes([
    {
      // Wrap your DashboardLayout with Suspense to handle lazy loading
      element: (
        <DashboardLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        // Define your routes
        { path: '/', element: <IndexPage />, index: true }, // Make sure the index route has the correct path
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> }, // Add the blog route
        { path: 'login', element: <LoginPage /> }, // Add the login route
        { path: 'cheque', element: <Navigate to="/login" replace /> }, // Redirect /cheque to login page
        { path: 'cheque/insert', element: <Insert /> }, // Define the cheque insert route
        { path: 'compte/insert/:id', element: <InsertCompte /> }, // Define the compte insert route
        { path: 'carnet/insert/:id', element: <InsertCarnet /> }, // Define the carnet insert route
        { path: 'effecte', element: <Effecte /> }, // Define the effecte route
      ],
    },
    // Define 404 and fallback routes
    { path: '404', element: <Page404 /> },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);

  return routes;
}
