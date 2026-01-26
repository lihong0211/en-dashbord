import Root from './pages/Root/index';
import English from './pages/English/index';
import PddReport from './pages/PddReport/index';
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
        path: '/pdd',
        element: <PddReport />,
      },
      {
        path: '/test',
        element: <Test />,
      },
    ],
  },
],{
  basename: '/en'
});

export default router;

export const navigate = router.navigate;
