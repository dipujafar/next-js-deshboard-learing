import { Avatar, Button, Flex, Space } from "antd";
import { FaBars } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import avatarImg from "@/assets/image/Ellipse 86.png"

type TNavbarProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};
const Navbar = ({ collapsed, setCollapsed }) => {
  return (
    <div className="flex items-center justify-between w-[97%]">
      {/* herder left side  */}
      <Flex align="center" gap={8}>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="cursor-pointer hover:bg-gray-300 rounded-full"
        >
          <FaBars size={28} />
        </button>
        <h2 className="text-3xl text-primary-black font-medium">Dashboard</h2>
      </Flex>

      {/* header right side */}
      <Flex align="center" gap={16}>
        <div className="p-3 bg-primary-color rounded-full">
          <IoNotificationsOutline size={24} color="#fff" />
        </div>
            
            <Avatar src={avatarImg.src} size={44}></Avatar>
            <p className="font-medium">Akash</p>
      </Flex>
    </div>
  );
};

export default Navbar;
