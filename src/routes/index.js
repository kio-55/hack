import MainLayout from '../layouts/MainLayot';
import styles from '../layouts/Layout.module.css';

import Home from './Home';
import Partners from './Partners/Partners';
import Map from './Map/Map';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home className={styles.content}></Home> },
      {
        path: '/map',
        children: [{ index: true, element: <Map className={styles.content}>Map</Map> }],
      },
      {
        path: '/shop',
        children: [{ index: true, element: <Partners className={styles.content}></Partners> }],
      },
      {
        path: '/user',
        children: [{ index: true, element: <>Account</> }],
      },
      { path: '*', element: <>404</> },
    ],
  },
];

export default routes;
