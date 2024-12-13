import EventList from "@/components/events/evet-list";
import { getFeaturedEvents } from "@/dummy-data";
import Link from "next/link";

 
export default function Home() {

 const events =  getFeaturedEvents();

  return (
    <div>
      <h1>Home page</h1>

      <EventList items={events}/>
    </div>
       
  );
}
