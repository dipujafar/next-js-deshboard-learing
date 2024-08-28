import { TStateProps } from "@/types/utilsTypes";
import { Button, Modal } from "antd";
import Image from "next/image";
import profileImg from "@/assets/image/profileImg.png";

const ProfileModal = ({
  state: open,
  setState: setOpen,
}: TStateProps<boolean>) => {
  return (
    <Modal
      open={open}
      footer={null}
      centered={true}
      onCancel={() => setOpen(false)}
      style={{
        minWidth: "max-content",
      }}
    >
      <div>
        <div className="flex gap-12 p-7">
          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              src={profileImg}
              alt="profileImage"
              className="rounded-full h-[144px] w-[144px]"
            ></Image>
            <h1 className="text-center text-2xl font-medium">Patients</h1>
            <div className="flex gap-2">
              <p>Age: 42</p>
              <p>BG: A+</p>
              <p>Weight: 97kg</p>
            </div>
          </div>
          <div className="space-y-5">
            <div>
              <h4 className="text-xl font-bold text-primary-color">Name</h4>
              <h2 className="text-3xl text-nowrap">Farvez Hossen</h2>
            </div>
            <div>
              <h4 className="text-xl font-bold text-primary-color">E-Mail</h4>
              <h2 className="text-3xl text-nowrap">email@gmail.com</h2>
            </div>
            <div>
              <h4 className="text-xl font-bold text-primary-color">Contact</h4>
              <h2 className="text-3xl text-nowrap">18546945659</h2>
            </div>
          </div>
         
        </div>
        <Button style={{width: "100%", height: "48px"}} size="large" danger>Delete User</Button>
      </div>
    </Modal>
  );
};

export default ProfileModal;
