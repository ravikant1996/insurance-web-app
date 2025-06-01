import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './screens/home/Home';
import HelpSupport from './screens/helpsupport/HelpSupport';
import BecomeAgent from './screens/becomeagent/BecomeAgent';
import PayPremium from './screens/payment/PayPremium';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help-support" element={<HelpSupport />} />
        <Route path="/become-agent" element={<BecomeAgent />} />
        <Route path="/pay-premium" element={<PayPremium />} />
      </Routes>
    </Router>
  );
};

export default App;
