import { getFeaturedEvents} from '../dummy-data'
import EventList from '../components/events/event-list'
function HomePage() {
    const feauturedEvents = getFeaturedEvents();
    return(
        <div>
            <EventList items={feauturedEvents}/>
        </div>
    )
}

export default HomePage;