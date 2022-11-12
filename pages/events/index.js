import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../dummy-data'
import { useRouter } from 'next/router';
import EventsSearch from '../../components/events/events-search';
import { Fragment } from 'react';

function AllEventsPage(){
    const events = getAllEvents()
    const router= useRouter();

    function findEventHandler(year, month){
        const fullPath = `/events/${year}/${month}`

        router.push(fullPath);
    }


    return(
        <Fragment>
            <EventsSearch onSearch={findEventHandler}/>
            <EventList items={events}/>
        </Fragment>
    )
}
export default AllEventsPage;