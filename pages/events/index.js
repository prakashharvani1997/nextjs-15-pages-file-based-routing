import EventSearch from "@/components/events/event-search";
import EventList from "@/components/events/evet-list";
import { getFeaturedEvents } from "@/dummy-data";

 
export default function AllEventsPage() {


   
    const events =  getFeaturedEvents();
   
     return (
       <div>
         <h1>Home page</h1>

        <EventSearch />
         <EventList items={events}/>
       </div>
          
     );

  }
  