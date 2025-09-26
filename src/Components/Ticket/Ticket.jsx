import { FaCircle } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
const Ticket = ({ ticket, handelSelectTask }) => {
    const { title, status, priority, id, description, customer, createdAt } = ticket;

    return (
        <div onClick={() => handelSelectTask(id)} className="flex flex-col justify-center items-center">
            <div className="card bg-base-100 sm:w-[500px] w-[400px] h-[200px] shadow-2xl ">
                <div className="card-body">
                    <div className="flex justify-between gap-x-2">
                        <h2 className="card-title">{title}</h2>
                        <button className={`btn btn-sm rounded-full border-none ${status === 'Open'
                            ? 'bg-green-200 text-green-600'
                            :
                            status === 'In progress'
                                ? ''
                                : 'bg-yellow-200 text-yellow-600'
                            }`}><FaCircle /> {status}</button>
                    </div>
                    <p>{description}</p>
                    <div className="flex justify-between">
                        <div className="flex gap-x-2 ">
                            <p>#{id}</p>
                            <p className={` ${priority === 'HIGH PRIORITY' ? 'text-red-500' : priority === 'MEDIUM PRIORITY' ? 'text-yellow-500' : priority === 'LOW PRIORITY' ? 'text-green-500' : ''}`}>{priority}</p>
                        </div>
                        <div className="flex gap-x-2">
                            <p>{customer}</p>
                            <p className="flex items-center gap-x-1"> <SlCalender /> {createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;