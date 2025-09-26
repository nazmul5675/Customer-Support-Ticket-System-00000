import { useState } from "react";
import Ticket from "../Ticket/Ticket";


const Tickets = ({ tickets, allTickets, setAllTickets, ResolvedValue, setResolvedValue, notify }) => {


    // console.log(tickets);
    const [taskStatus, setTaskStatus] = useState([])
    const handelSelectTask = (id) => {
        setAllTickets(oldTickets => oldTickets.map(oldTicket => oldTicket.id === id && oldTicket.status === 'Open' ? { ...oldTicket, status: 'In Progress' } : oldTicket))
        const taskStatusCard = allTickets.find(taskCard => taskCard.id === id)
        if (taskStatusCard.status === 'Open') {

            const updatedTaskStatus = { ...taskStatusCard, status: "In Progress" }
            setTaskStatus(oldTaskStatus => [...oldTaskStatus, updatedTaskStatus])
            notify('Task Are Added in Task bar')
            console.log(updatedTaskStatus);
        } else {
            notify('Task Is Already In Progress or Completed')
        }



    }
    const [resolvedStatus, setResolved] = useState([])
    const handelResolvedTask = (id) => {
        setAllTickets(oldTickets => oldTickets.filter(ticket => ticket.id !== id));
        const taskResolvedCard = tickets.find(taskCard => taskCard.id === id)

        notify('Task are completed');
        setResolved(oldResolvedStatus => [...oldResolvedStatus, taskResolvedCard])
        setTaskStatus(oldTaskStatus => oldTaskStatus.filter(taskCard => taskCard.id !== id))
        const resolvedValue = ResolvedValue + 1;
        setResolvedValue(resolvedValue)
    }


    return (

        <div className="mb-10">
            <div className="sm:flex gap-x-[870px] my-5">
                <h1 className='text-2xl font-semibold text-[#34485A]'>Customer Tickets   </h1>
                <h1 className='text-2xl font-semibold text-[#34485A] sm:block hidden'>Task Status   </h1>
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-5  ">

                <div className="grid sm:grid-cols-2 sm:col-span-2    grid-cols-1 col-span-1 gap-y-3  " >
                    {
                        allTickets.map(ticket => <Ticket key={ticket.id} ticket={ticket} handelSelectTask={handelSelectTask}></Ticket>)
                    }

                </div>

                <div className=" flex flex-col gap-y-10 p-10 shadow-xl col-span-1">
                    <h1 className='text-2xl font-semibold text-[#34485A] sm:hidden block '>Task Status   </h1>


                    {taskStatus.length > 0 ? (
                        taskStatus.map(task => (

                            <div>
                                <div className="flex flex-col card-body bg-white rounded-md my-3">
                                    <h1 className="text-xl font-bold">{task.title}</h1>
                                    <button onClick={() => handelResolvedTask(task.id)} className="btn text-white bg-green-600 rounded-md">Complete</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-[#627382] text-base">Select a ticket to add to Task Status</p>
                    )}
                    <div>
                        <h1 className='text-2xl font-semibold text-[#34485A] s '>Resolved Task   </h1>

                        <div>

                            {resolvedStatus.length > 0 ? (
                                resolvedStatus.map(task => (<div className="flex flex-col card-body bg-blue-100 rounded-md  my-3">
                                    <h1 className="text-xl font-semibold ">{task.title}</h1>

                                </div>

                                ))
                            ) : (<p className="text-[#627382] text-base">No resolved tasks yet.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Tickets;