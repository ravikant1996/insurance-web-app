import { motion } from 'framer-motion';
import './HomeStyle.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <motion.h1
        className="home-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to R-Insurance Portal
      </motion.h1>

      <motion.p
        className="home-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Secure your future with our trusted insurance services.
      </motion.p>

      <motion.div
        className="home-cards"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <div className="card">🏠 Home Insurance</div>
        <div className="card">🚗 Vehicle Insurance</div>
        <div className="card">💼 Term Life Plans</div>
        <div className="card">📞 24/7 Support</div>
      </motion.div>
    </div>
  );
};

export default Home;
