import { notifications } from "@/utils/notifications";
import { Divider } from "antd";
import Link from "next/link";
import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";



const NotificationModal = () => {
  return (
    <div className="flex flex-col w-full text-center bg-primary-white py-4 rounded-lg cursor-pointer font-poppins border shadow-lg">
      <p className="text-secondary-color text-2xl font-bold mb-0">
        Notifications
      </p>
      <Divider style={{ marginBlock: "14px" }} />
      <div className="space-y-8 text-left w-[90%] mx-auto">
        {notifications.slice(0,3).map((notification) => (
          <div className="text-start" key={notification.id}>
            <div className="flex items-center gap-x-5">
              <IoNotificationsOutline size={24} color="#2B4E63" />
              <div className="flex flex-col items-start font-poppins">
                <p className="text-sm font-medium">{notification.message}</p>
                <p className="text-primary-red">{notification.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href={"/notifications"}>
      <button className="bg-secondary-color text-white font-medium px-10 py-2 w-max rounded-lg block mx-auto mt-7">
        Load More
      </button>
      </Link>
    </div>
  );
};

export default NotificationModal;
