
import { use, useState } from 'react';
import Banner from '../Banner/Banner';
import Tickets from '../Tickets/Tickets';

const IssuesManagement = ({ ticketsPromise, notify }) => {
    const tickets = use(ticketsPromise)
    const [allTickets, setAllTickets] = useState(tickets)
    const [ResolvedValue, setResolvedValue] = useState(0);
    const [inProgressValue, setInProgressValue] = useState(0);
    const bannerDisplayValues = () => {
        const forOpen = allTickets.filter(element => element.status === 'In Progress')
        const valueOfInProgress = forOpen.length;
        setInProgressValue(valueOfInProgress)
    }

    return (

        <div className='container mx-auto'>
            <Banner inProgressValue={inProgressValue} bannerDisplayValues={bannerDisplayValues} ResolvedValue={ResolvedValue}></Banner>
            <Tickets allTickets={allTickets} setAllTickets={setAllTickets} tickets={tickets} setResolvedValue={setResolvedValue} ResolvedValue={ResolvedValue} notify={notify}></Tickets>
        </div>
    );
};

export default IssuesManagement;