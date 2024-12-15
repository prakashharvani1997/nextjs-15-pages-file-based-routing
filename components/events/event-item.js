import Link from "next/link";

import classes from './event-item.module.css'
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Image from "next/image";
 
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
      <Image src={"/" + image} alt={title} width={340} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div>
           <div style={{display:'flex'}}>
            <span className={classes.icon}>
            <DateIcon  />
            </span>
            <time className={classes.date}>
              {humanReadDate}{" "}
            </time>
           </div>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>
              {" "}{formatedAddress}
            </address>
          </div>
        </div>

        <div className={classes.actions}>
          <Link href={`/events/${id}`} className='btn'>
         <span> Explore Event</span>
          <span className={classes.icon}> <ArrowRightIcon /> </span>
         </Link>
        </div>
      </div>
    </li>
  );
}
