import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import ErrorAlert from "@/components/ui/error-alert";
import { getEventById, getFeaturedEvents } from "@/helpers/api-util";

export default function EventDetailPage({selectedEvent}) {
 

  if (!selectedEvent) {
    return  <ErrorAlert>
    <p> Event not found</p>
  </ErrorAlert>
   
  }

  return (
    <>
      <EventSummary title={selectedEvent.title} />
      <EventLogistics
        date={selectedEvent.date}
        address={selectedEvent.location}
        image={selectedEvent.image}
        imageAlt={selectedEvent.title}
      />

      <EventContent>
        <p> {selectedEvent.description}</p>
      </EventContent>
    </>
  );
}




export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event
    },
    revalidate: 30
  };
}


export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map(event => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: 'blocking'
    // true  // for load dynamicly if not exist in prerendered / pre build 
    // false // for load stricts from pre builded 
    //  'blocking'// for not show anything untill load dynamically fully
  };
}
