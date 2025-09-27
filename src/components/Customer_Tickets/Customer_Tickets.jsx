import React, { use } from 'react'
// import Tickets from '../../../public/Tickets.json'

const Customer_Tickets = ({customersPromise}) => {

      const customersData = use(customersPromise)
      console.log(customersData)
  return (
      <div className='max-w-[1200px] mx-auto mt-8'>
    <div>
      <h2 className='font-semibold text-2xl'>Customer Tickets</h2>
    </div>
    <div className='w-[500px] h-[150px] bg-white rounded shadow-sm mt-4 p-3'>

    
    <div className='flex justify-between mb-2'>
<h2 >customer_problems</h2>
<button>open</button>
    </div>
    <p className='mb-2'>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>


<div className="flex justify-between max-w-[500px] mx-auto">
  {/* Left side */}
  <div className="flex gap-4">
    <span>Rahim</span>
    <span>Karim</span>
  </div>

  {/* Right side */}
  <div className="flex gap-4">
    <span>Rafiq</span>
    <span>Salam</span>
  </div>
</div>
</div>
<img src="../../assets/vector1.png" alt="" />
</div>
  )
}

export default Customer_Tickets
