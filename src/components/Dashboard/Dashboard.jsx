import React, { useState, useEffect } from "react";
import Hero_Img from "./Hero_Img";
import Customer_Tickets from "./Customer_Tickets";

const Dashboard = ({ customersPromise }) => {
  const [customersData, setCustomersData] = useState([]);
  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);

  // Resolve customersPromise if it is a promise
  useEffect(() => {
    customersPromise.then(data => setCustomersData(data));
  }, [customersPromise]);

  return (
    <div>
      <Hero_Img inProgressCount={inProgress} resolvedCount={resolved} />
      <Customer_Tickets
        customersData={customersData}
        onSelect={() => setInProgress(prev => prev + 1)}
        onComplete={() => {
          setInProgress(prev => prev - 1);
          setResolved(prev => prev + 1);
        }}
      />
    </div>
  );
};

export default Dashboard;
