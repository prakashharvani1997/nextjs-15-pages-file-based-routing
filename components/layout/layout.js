import { useContext } from "react";
import NotificationContext from "@/store/notification-context";

import MainHeader from "./main-header";
import Notification from "../ui/notification";

export default function Layout({ children }) {
  const { notification } = useContext(NotificationContext);

  return (
    <>
      <MainHeader />

      <main>{children}</main>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </>
  );
}
