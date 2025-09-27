import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Customer_Tickets = ({ customersPromise, onSelect, onComplete }) => {
  const [tickets, setTickets] = useState([]);
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  useEffect(() => {
    // Only set tickets if state is empty to prevent overwriting removed tickets
    customersPromise.then(data => {
      setTickets(prev => prev.length === 0 ? data : prev);
    });
  }, [customersPromise]);

  const toggleTicket = (ticket) => {
    const alreadySelected = selectedTickets.some(t => t.id === ticket.id);

    if (!alreadySelected) {
      setSelectedTickets(prev => [...prev, ticket]);
      toast.info(`Selected: ${ticket.title} (ID: ${ticket.id})`, {
        position: 'top-right',
        autoClose: 2000,
      });
      onSelect();
    }
  }

  const handleComplete = (ticketId, title) => {
    // Find completed ticket before removing
    const completedTicket = tickets.find(t => t.id === ticketId);

    // Remove from tickets and selectedTickets
    setTickets(prev => prev.filter(t => t.id !== ticketId));
    setSelectedTickets(prev => prev.filter(t => t.id !== ticketId));

    // Add to resolvedTickets
    if (completedTicket) {
      setResolvedTickets(prev => [...prev, completedTicket]);
    }

    toast.success(`Completed: ${title} (ID: ${ticketId})`, {
      position: 'top-right',
      autoClose: 2000,
    });

    onComplete();
  }

  return (
    <div className="max-w-[1200px] mx-auto mt-8 px-4">
      <ToastContainer />

      <h2 className="font-semibold text-xl text-[#3b3b3b] mb-4">Customer Tickets</h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tickets.map(ticket => {
            const isSelected = selectedTickets.some(t => t.id === ticket.id);

            return (
              <div
                key={ticket.id}
                onClick={() => toggleTicket(ticket)}
                className={`h-[100px] rounded shadow-sm p-3 cursor-pointer ${isSelected ? 'bg-blue-100' : 'bg-white'}`}
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
            )
          })}
        </div>

        <div className="md:col-span-1 w-full h-auto px-4 py-3 bg-white rounded shadow-sm text-[#777777]">
          <h2 className="font-semibold text-xl mb-2 text-[#3b3b3b]">Task Status</h2>

          {selectedTickets.length > 0 ? selectedTickets.map(ticket => (
            <div key={ticket.id} className="mb-3 p-2 border-b border-gray-200">
              <h3 className="font-semibold text-sm">{ticket.title}</h3>
              <button
                onClick={() => handleComplete(ticket.id, ticket.title)}
                className="mt-2 w-full bg-green-500 text-white py-1 px-3 rounded"
              >
                Complete
              </button>
            </div>
          )) : <p className="text-sm mb-4">Select tickets to add to Task Status</p>}

          <h2 className="font-semibold text-xl mb-2 mt-4 text-[#3b3b3b]">Resolved Task</h2>
          {resolvedTickets.length > 0 ? resolvedTickets.map(ticket => (
            <div key={ticket.id} className="mb-2 text-sm text-green-700">
              {ticket.title} (ID: {ticket.id})
            </div>
          )) : <p className="text-sm">No resolved tasks yet.</p>}
        </div>
      </div>
    </div>
  );
}

export default Customer_Tickets;
