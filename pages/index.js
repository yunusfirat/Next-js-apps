import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/event-list'
function HomePage(props) {
    return(
        <div>
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