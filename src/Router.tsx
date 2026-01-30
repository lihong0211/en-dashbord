import Root from './pages/Root/index';
import English from './pages/English/index';
import BusinessData from './pages/BusinessData/index';
import Algorithm from './pages/Algorithm/index';
import Test from './pages/English/Test/index';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/English',
        element: <English />,
      },
      {
        path: '/algorithm',
        element: <Algorithm />,
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
