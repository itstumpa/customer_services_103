import { Suspense, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero_Img from './components/Hero_Img/Hero_Img';
import Customer_Tickets from './components/Customer_Tickets/Customer_Tickets';
import Footer from './components/Footer/Footer';

const fetchCustomers = async () => {
  const res = await fetch("/Tickets.json");
  return res.json();
};

function App() {
  const customersPromise = fetchCustomers();

  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);

  return (
    <>
      <Navbar />
      <Hero_Img inProgressCount={inProgress} resolvedCount={resolved} />
      <Suspense fallback={<span className="loading loading-ring loading-lg"></span>}>
        <Customer_Tickets
          customersPromise={customersPromise}
          onSelect={() => setInProgress(prev => prev + 1)}
          onComplete={() => {
            setInProgress(prev => prev - 1);
            setResolved(prev => prev + 1);
          }}
        />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;

// I learn this from "code with harry"
