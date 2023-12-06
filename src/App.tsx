import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { MDBSpinner } from 'mdb-react-ui-kit';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './utils/auth-provider';
import { ErrorBoundary } from 'react-error-boundary';
import Loader from './components/UI/loader';
import ErrorFallback from './components/UI/error-fallback';

// Lazy-loaded components
const HomePage = lazy(() => import('./pages/home'));
const CartPage = lazy(() => import('./pages/cart/cart-page'));
const ProductDetails = lazy(() => import('./pages/product-details'));
const Login = lazy(() => import('./pages/users/login'));
const DashboardPage = lazy(() => import('./pages/dashboard/dashboard-page'));
const ProductTable = lazy(() => import('./pages/dashboard/products/product-table'));
const UserTable = lazy(() => import('./pages/dashboard/users/users-table'));
const ProductUpdate = lazy(() => import('./pages/dashboard/products/product-update'));
const Register = lazy(() => import('./pages/users/regitser'));
const Profile = lazy(() => import('./pages/users/profile'));
const Contact = lazy(() => import('./pages/contact/contact'));
const OrdersTable = lazy(() => import('./pages/dashboard/orders/order-table'));
const Products = lazy(() => import('./pages/products'));
const NotFound = lazy(() => import('./pages/404/404'));
const DashboardLayout = lazy(() => import('./components/layouts/dashboard-layout'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense
              fallback={
                <Container
                  className='mt-5 d-flex align-items-center justify-content-center'
                  style={{ minHeight: '70vh' }}
                >
                  <MDBSpinner grow>
                    <span className='visually-hidden'>Loading</span>
                  </MDBSpinner>{' '}
                  <span className='ms-3'>Loading</span>
                </Container>
              }
            >
              <HomePage />
            </Suspense>
          }
        />

        <Route path='/home' element={<Suspense fallback={<Loader />}><Products /></Suspense>} />
        <Route path='/search/:keyword' element={<Suspense fallback={<Loader />}><Products /></Suspense>} />
        <Route path='/page/:pageNumber' element={<Suspense fallback={<Loader />}><Products /></Suspense>} />
        <Route path='/products/:id' element={<Suspense fallback={<Loader />}><ProductDetails /></Suspense>} />
        <Route path='/cart' element={<Suspense fallback={<Loader />}><CartPage /></Suspense>} />

        <Route
          path='/profile/:id'
          element={
            <AuthProvider>
              <Suspense fallback={<Loader />}><Profile /></Suspense>
            </AuthProvider>
          }
        />
        <Route path='/login' element={<Suspense fallback={<Loader />}><Login /></Suspense>} />
        <Route path='/register' element={<Suspense fallback={<Loader />}><Register /></Suspense>} />

        <Route
          path='/dashboard'
          element={
            <ErrorBoundary
              onReset={() => location.href === '/'}
              FallbackComponent={ErrorFallback}
            >
              <Suspense fallback={<Loader />}>
                <DashboardLayout />
              </Suspense>
            </ErrorBoundary>
          }
        >
          <Route index element={<Suspense fallback={<Loader />}><DashboardPage /></Suspense>} />
          <Route path='product-list' element={<Suspense fallback={<Loader />}><ProductTable /></Suspense>} />
          <Route path='product-list/:pageNumber' element={<Suspense fallback={<Loader />}><ProductTable /></Suspense>} />
          <Route path='user-list' element={<Suspense fallback={<Loader />}><UserTable /></Suspense>} />
          <Route path='orders-list' element={<Suspense fallback={<Loader />}><OrdersTable /></Suspense>} />
          <Route path='product-edit/:id' element={<Suspense fallback={<Loader />}><ProductUpdate /></Suspense>} />
        </Route>

        <Route path='/trova' element={<Suspense fallback={<Loader />}><Contact /></Suspense>} />
        <Route path='*' element={<Suspense fallback={<Loader />}><NotFound /></Suspense>} />
      </Routes>
      <Toaster position='top-center' reverseOrder={false} />
    </Router>
  );
};

export default App;
