import Root from './pages/Root/index';
import English from './pages/English/index';
import BusinessData from './pages/BusinessData/index';
import Test from './pages/English/Test/index';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to="/english" replace />,
      },
      {
        path: '/english',
        element: <English />,
      },
      {
        path: '/business-data',
        element: <BusinessData />,
      },
      {
        path: '/test',
        element: <Test />,
      },
    ],
  },
],{
  basename: '/'
});

export default router;

export const navigate = router.navigate;
