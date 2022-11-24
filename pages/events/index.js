import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../helpers/api-util'
import { useRouter } from 'next/router';
import EventsSearch from '../../components/events/events-search';
import { Fragment } from 'react';
import Head from 'next/head';

function AllEventsPage(props){
    const { events } = props
    const router= useRouter();

    function findEventHandler(year, month){
        const fullPath = `/events/${year}/${month}`

        router.push(fullPath);
    }


    return(
        <Fragment>
            <Head>
                <title>NextJS Events</title>
                <meta name='description' content='Find a lot of great events that allow you to evolve.'></meta>
            </Head>
            <EventsSearch onSearch={findEventHandler}/>
            <EventList items={events}/>
        </Fragment>
    )
}
export default AllEventsPage;

export async function getStaticProps(){
    const events = await getAllEvents();
    return {
        props: {
            events:events
        },
        revalidate: 60
    }
}