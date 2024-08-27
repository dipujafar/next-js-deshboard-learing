import { Avatar, Badge, Button, Flex, Space } from "antd";
import { FaBars } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import avatarImg from "@/assets/image/Ellipse 86.png";

type TNavbarProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};
const Navbar = ({ collapsed, setCollapsed }: TNavbarProps) => {
  return (
    <div className="flex items-center justify-between w-[97%] font-poppins">
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
        <div className="flex items-center justify-center size-12 bg-primary-color rounded-full">
          <Badge count={1} style={{border: "none", boxShadow: "none"}}>
          <IoNotificationsOutline size={24} color="#fff" />
          </Badge>
        </div>

        <Button
          style={{
            border: "none",
            boxShadow: "none",
            backgroundColor: "transparent",
          }}
        >
          <Avatar src={avatarImg.src} size={44}></Avatar>
          <p className="text-lg font-semibold">Akash</p>
        </Button>
      </Flex>
    </div>
  );
};

export default Navbar;
