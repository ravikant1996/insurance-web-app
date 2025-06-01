import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/home/Home';
import HelpSupport from './screens/helpsupport/HelpSupport';
import BecomeAgent from './screens/becomeagent/BecomeAgent';
import PayPremium from './screens/payment/PayPremium';
import Navbar from './components/navbar/Navbar';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help-support" element={<HelpSupport />} />
        <Route path="/become-agent" element={<BecomeAgent />} />
        <Route path="/pay-premium" element={<PayPremium />} />
      </Routes>
    </>
  );
};

export default App;
