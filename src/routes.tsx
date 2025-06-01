import { RouteObject } from 'react-router-dom';
import Home from './screens/home/Home';
import HelpSupport from './screens/helpsupport/HelpSupport';
import BecomeAgent from './screens/becomeagent/BecomeAgent';
import PayPremium from './screens/payment/PayPremium';

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/help-support', element: <HelpSupport /> },
  { path: '/become-agent', element: <BecomeAgent /> },
  { path: '/pay-premium', element: <PayPremium /> },
];

export default routes;
