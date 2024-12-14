import EventList from "@/components/events/evet-list";
import { getFeaturedEvents } from "@/dummy-data";
import { getAllEvents } from "@/helpers/api-util";
import Link from "next/link";

 
export default function Home({events}) {


  return (
    <div>
      <h1>Home page</h1>

      <EventList items={events}/>
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
  