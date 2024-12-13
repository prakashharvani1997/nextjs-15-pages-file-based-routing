import Link from "next/link";

import classes from './event-item.module.css'
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
 
export default function EventItem({ item }) {
  const { title, image, date, location, id } = item;

  const humanReadDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const formatedAddress = location.replace(", ", " \n");

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>Title</h2>
          <div>
            <span className={classes.icon}>
            <DateIcon  />
            </span>
            <span>
            <time className={classes.date}>
              {humanReadDate}{" "}
            </time>
            </span>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>
              {" "}{formatedAddress}
            </address>
          </div>
        </div>

        <div className={classes.actions}>
          <Link href={`/events/${id}`} className={classes.btn}>
         <span> Explore Event</span>
          <span className={classes.icon}> <ArrowRightIcon /> </span>
         </Link>
        </div>
      </div>
    </li>
  );
}
