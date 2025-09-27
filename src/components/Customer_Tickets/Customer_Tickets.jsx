import React, { use } from 'react'

const Customer_Tickets = ({ customersPromise }) => {
  const customersData = use(customersPromise)
  console.log(customersData)

  return (
    <div className="max-w-[1200px] mx-auto mt-8">
      <h2 className="font-semibold text-xl text-[#3b3b3b] mb-4">Customer Tickets</h2>

      {/* Parent grid: 5 columns */}
      <div className="grid grid-cols-5 gap-4">
        
        {/* Left side: tickets container spanning 4 columns */}
        <div className="col-span-4 grid grid-cols-2 gap-4">
          {customersData.map((ticket) => (
            <div
              key={ticket.id}
              className="h-[150px] bg-white rounded shadow-sm p-3"
            >
              <div className="flex justify-between mb-2">
                <h2 className="font-semibold">{ticket.title}</h2>
                <span className="text-sm text-gray-500">{ticket.status}</span>
              </div>
              <p className="mb-2 text-gray-600 text-sm">{ticket.description}</p>
              <div className="flex justify-between text-xs text-gray-500">
                <div className="flex gap-2">
                  <span>{ticket.id}</span>
                  <span>{ticket.priority}</span>
                </div>
                <div className="flex gap-2">
                  <span>{ticket.customer}</span>
                  <span>{ticket.createdAt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side: Task Status sidebar */}
        <div className="col-span-1 w-full h-auto px-4 py-3 bg-white rounded shadow-sm text-[#777777]">
          <h2 className="font-semibold text-xl mb-2 text-[#3b3b3b]">Task Status</h2>
          <p className="text-sm mb-4">Select a ticket to add to Task Status</p>
          
          <h2 className="font-semibold text-xl mb-2 mt-4 text-[#3b3b3b]">Resolved Task</h2>
          <p className="text-sm">No resolved tasks yet.</p>
        </div>

      </div>
    </div>
  )
}

export default Customer_Tickets
