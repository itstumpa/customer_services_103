import { Suspense } from 'react';

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero_Img from './components/Hero_Img/Hero_Img'
import Customer_Tickets from './components/Customer_Tickets/Customer_Tickets'
import Footer from './components/Footer/Footer';
// import Dashboard from './components/Dashboard/Dashboard';

const fetchCustomers = async () => {
  const res = await fetch("/Tickets.json")
  return res.json()
  
}


function App() {
  const customersPromise = fetchCustomers()

  return (
    <>
    <Navbar></Navbar>
        <Hero_Img></Hero_Img>
        <Suspense fallback={<span className="loading loading-ring loading-lg"></span>}>
        <Customer_Tickets customersPromise = {customersPromise}></Customer_Tickets>
        {/* <Dashboard></Dashboard> */}
</Suspense>
<Footer></Footer>
    </>
  )
}

export default App
