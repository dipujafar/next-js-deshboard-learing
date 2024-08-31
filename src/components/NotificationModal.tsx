import { Divider } from "antd";
import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

// Dummy notification data
const notifications = [
  {
    id: 1,
    message:
      "New Appointment has been created With John Doe at 10:20am, 20/11/2023",
    time: "Fri, 12:30pm",
  },
  {
    id: 2,
    message:
      "New Appointment has been created With John Doe at 10:20am, 20/11/2023",
    time: "Fri, 12:30pm",
  },
  {
    id: 3,
    message:
      "New Appointment has been created With John Doe at 10:20am, 20/11/2023",
    time: "Fri, 12:30pm",
  },
];

const NotificationModal = () => {
  return (
    <div className="flex flex-col w-full text-center bg-primary-white py-4 rounded-lg cursor-pointer font-poppins border shadow-lg">
      <p className="text-secondary-color text-2xl font-bold mb-0">
        Notifications
      </p>
      <Divider style={{ marginBlock: "14px" }} />
      <div className="space-y-8 text-left w-[90%] mx-auto">
        {notifications.map((notification) => (
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
      <button className="bg-secondary-color text-white font-medium px-10 py-2 w-max rounded-lg block mx-auto mt-7">
        Load More
      </button>
    </div>
  );
};

export default NotificationModal;
