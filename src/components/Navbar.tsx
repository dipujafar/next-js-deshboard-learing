"use client";
import { Avatar, Badge, Button, Divider, Dropdown, Flex, Space } from "antd";
import { FaBars } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import avatarImg from "@/assets/image/Ellipse 86.png";
import NotificationModal from "./NotificationModal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import customPathName from "@/utils/customPathName";

type TNavbarProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

const Navbar = ({ collapsed, setCollapsed }: TNavbarProps) => {
  const pathName = usePathname();
  const dynamicPathName = customPathName(pathName);

  return (
    <div className="flex items-center justify-between w-[97%] font-poppins">
      {/* Header left side */}
      <Flex align="center" gap={8}>
        <button
          onClick={() => setCollapsed(collapsed ? false : true)}
          className="cursor-pointer hover:bg-gray-300 rounded-full"
        >
          <FaBars size={28} />
        </button>
        <h2 className="text-3xl text-primary-black font-medium">
          {dynamicPathName}
        </h2>
      </Flex>

      {/* Header right side */}
      <Flex align="center" gap={16}>
        {/* Notification */}
        <Dropdown
          overlay={NotificationModal} // Use the menu prop instead of overlay
          placement="bottomRight"
          trigger={["click"]}
        >
          <div className="flex justify-center items-center size-12 bg-primary-color rounded-full cursor-pointer">
            <Badge count={1} style={{ border: "none", boxShadow: "none" }}>
              <IoNotificationsOutline size={24} color="#fff" />
            </Badge>
          </div>
        </Dropdown>

        <Link href={"/profile"} className="flex items-center">
          <Button
            style={{
              border: "none",
              boxShadow: "none",
              backgroundColor: "transparent",
            }}
          >
            <Avatar src={avatarImg.src} size={48}></Avatar>
            <p className="text-lg font-semibold">Akash</p>
          </Button>
        </Link>
      </Flex>
    </div>
  );
};

export default Navbar;
