import EventList from "@/components/events/evet-list";
import ResultsTitle from "@/components/events/results-title";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents } from "@/helpers/api-util";
import Link from "next/link";
 
export default function FilteredEventsPage({ hasError,events,date }) {
 
  // if (!events) {
  //   return <p className="center"> Loading.... </p>;
  // }

  if (hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filtered values</p>
        </ErrorAlert>
        <div className="center">
          <Link href="/events" className="btn center">
            Show all events
          </Link>
        </div>
      </>
    );
  }

  if (!events || !events.length) {
    return (
      <>
        <ErrorAlert>
          <p> Events not found</p>
        </ErrorAlert>

        <div className="center">
          <Link href="/events" className="btn ">
            Show all events
          </Link>
        </div>
      </>
    );
  }

  const obj = new Date(date.year, date.month - 1);

  return (
    <>
      <ResultsTitle date={obj} />
      <EventList items={events} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const filteredData = params.slug;

  const numYear = +filteredData[0];
  const numMonth = +filteredData[1];

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: { hasError: true }
      // notFound: true,
      // redirect: {
      //   destination: '/error'
      // }
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth
      }
    }
  };
}
