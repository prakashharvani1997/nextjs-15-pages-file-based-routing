import EventList from "@/components/events/evet-list";
import ResultsTitle from "@/components/events/results-title";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents } from "@/dummy-data";
import Link from "next/link";
import { useRouter } from "next/router";

export default function FilteredEventsPage() {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center"> Loading.... </p>;
  }

  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
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

  const events = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth
  });

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

  const date = new Date(filteredYear, filteredMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </>
  );
}
