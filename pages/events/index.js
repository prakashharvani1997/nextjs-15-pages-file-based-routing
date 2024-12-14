import EventSearch from "@/components/events/event-search";
import EventList from "@/components/events/evet-list";
import { getAllEvents, getFeaturedEvents } from "@/helpers/api-util";

 
export default function AllEventsPage(props) {

     return (
       <div>
         <h1>Home page</h1>

        <EventSearch />
         <EventList items={props.events}/>
       </div>
          
     );

  }
  

  export async function getStaticProps() {
    const events = await getAllEvents();
  
    return {
      props: {
        events: events,
      },
      revalidate: 60
    };
  }
  