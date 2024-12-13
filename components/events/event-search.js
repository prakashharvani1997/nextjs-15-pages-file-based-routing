import { useRef } from "react";
import classes from "./events-search.module.css";
import classes1 from "./event-item.module.css";
import { useRouter } from "next/router";

export default function EventSearch() {
  const router = useRouter();

  const monthInputRef = useRef();
  const yearInputRef = useRef();

  const submitHandler = e => {
    e.preventDefault();

    const selectedYear = yearInputRef.current.value;

    const selectedMonth = monthInputRef.current.value;
    router.push(`/events/${selectedYear}/${selectedMonth}`);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlfor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <div className={classes.control}>
          <label htmlfor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">january</option>
            <option value="2">feb</option>
            <option value="3">mar</option>
            <option value="4">apr</option>
            <option value="5">may</option>
            <option value="6">jun</option>
            <option value="7">jul</option>
            <option value="8">aug</option>
            <option value="9">sept</option>
            <option value="10">oct</option>
            <option value="11">nov</option>
            <option value="12">dec</option>
          </select>
        </div>
      </div>

      <button className='btn'>Find events</button>
    </form>
  );
}
