import Head from 'next/head';

import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/event-list'
function HomePage(props) {
    return(
        <div>
            <Head>
                <title>NextJS Events</title>
                <meta name='description' content='Find a lot of great events that allow you to evolve.'></meta>
            </Head>
            <EventList items={props.events}/>
        </div>
    )
}

export async function getStaticProps(){
    const feauturedEvents = await getFeaturedEvents();
    return {
        props: {
            events:feauturedEvents
        },
        revalidate: 1800
    }
}

export default HomePage;