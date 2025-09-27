import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCircle, faCheck} from "@fortawesome/free-solid-svg-icons";


const Customer_Tickets = ({ customersPromise, onSelect, onComplete }) => {
  const [tickets, setTickets] = useState([]);
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  useEffect(() => {
    customersPromise.then(data => {
      if (tickets.length === 0) {
        setTickets(data);
      }
    });
  }, [customersPromise]); //fix

  // status button bg color 
  const Status_Button = ({ status }) => {
    let iconColor = "text-gray-400";
    let bgColor = "bg-gray-100";

    if (status === "Open") {
      iconColor = "text-green-700";
      bgColor = "bg-green-100";
    } else if (status === "In-Progress") {
      iconColor = "text-yellow-500";
      bgColor = "bg-yellow-100";
    }

    return (
      <div className={`flex items-center gap-2 ${bgColor} px-2 py-1 rounded-full`}>
        <FontAwesomeIcon icon={faCircle} className={iconColor} />
        <span className="text-sm text-gray-700">{status}</span>
      </div>
    );
  }
//  priority bg color add 
  const Priority_Bg = ({ priority }) => {
    let bgColor = "bg-gray-300";
    if (priority === "High") bgColor = "bg-red-500";
    if (priority === "Medium") bgColor = "bg-yellow-400";
    if (priority === "Low") bgColor = "bg-green-500";

    return (
      <div className={`${bgColor} text-white text-xs font-semibold px-2 py-1 rounded`}>
        {priority}
      </div>
    );
  }

  // ticket selection 
  const toggleTicket = (ticket) => {
    const alreadySelected = selectedTickets.find(t => t.id === ticket.id);
    if (!alreadySelected) {
      const newSelected = [...selectedTickets, ticket];
      setSelectedTickets(newSelected);

      toast.info(`Selected: ${ticket.title} (ID: ${ticket.id})`, {
        position: 'top-right',
        autoClose: 2000,
      });

      onSelect();
    }
  }
// taskbar
  const handleComplete = (ticketId, title) => {
    const completedTicket = tickets.find(t => t.id === ticketId);
// delete card 
    const newTickets = tickets.filter(t => t.id !== ticketId);
    const newSelectedTickets = selectedTickets.filter(t => t.id !== ticketId);
    setTickets(newTickets);
    setSelectedTickets(newSelectedTickets);

    if (completedTicket) {
      const newResolved = [...resolvedTickets, completedTicket];
      setResolvedTickets(newResolved);
    }
// alert 
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
            const isSelected = selectedTickets.find(t => t.id === ticket.id);

            return (
              <div
                key={ticket.id}
                onClick={() => toggleTicket(ticket)}
                className={`h-[120px] rounded shadow-sm p-3 cursor-pointer ${isSelected ? 'bg-blue-100' : 'bg-white'}`}
              >
                <div className="flex justify-between mb-2">
                  <h2 className="font-semibold">{ticket.title}</h2>
                  <span className="text-sm rounded-full px-2">
                    <Status_Button status={ticket.status} />
                  </span>
                </div>
                <p className="mb-2 text-gray-600 text-sm">{ticket.description}</p>
                <div className="flex items-center text-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <span>{ticket.id}</span>
                    <Priority_Bg priority={ticket.priority} />
                  </div>
                  <div className="flex items-center gap-3">
                    <span>{ticket.customer}</span>
                    <span><FontAwesomeIcon icon={faCalendar} /> {ticket.createdAt}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
{/* parent task status  */}
        <div className="md:col-span-1 w-full h-auto px-4 py-3 bg-white rounded shadow-sm text-[#777777]">
          <h2 className="font-semibold text-xl mb-2 text-[#3b3b3b]">Task Status</h2>
{/* when click card button show  */}
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
          {resolvedTickets.length > 0 ? resolvedTickets.map(ticket => {
  const handleCompleteClick = () => {
    const updatedTickets = resolvedTickets.map(t => {
      if (t.id === ticket.id) {
        return { ...t, status: "Completed" };
      }
      return t;
    });
    setResolvedTickets(updatedTickets);
  };

  const handleDeleteClick = () => {
    const remainingTickets = resolvedTickets.filter(t => t.id !== ticket.id);
    setResolvedTickets(remainingTickets);
  };

  return (
    <div 
      key={ticket.id} 
      className="mb-2 p-3 bg-green-50 border-b-2 border-gray-300 rounded flex flex-col justify-between"
    >
      <div className="mb-2">
        <span className="font-semibold">{ticket.title}</span> (ID: {ticket.id})
      </div>

      <div className="flex justify-between mt-2 items-center">
        <button 
          onClick={handleCompleteClick}
          className="text-green-600 text-xs px-2 py-1 flex items-center gap-1"
        ><FontAwesomeIcon icon={faCheck}/>Completed 
        </button>

        <button 
          onClick={handleDeleteClick}
          className="bg-red-500 text-white text-xs px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}) : (
  <p className="text-sm">No resolved tasks yet.</p>
)}

        </div>
      </div>
    </div>
  );
}

export default Customer_Tickets;
