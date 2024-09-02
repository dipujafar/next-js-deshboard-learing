"use client"
import Image from "next/image";
import React from "react";
import userImg from "@/assets/image/userImg.png";
import { CiEdit } from "react-icons/ci";
import { Tabs, Upload } from "antd";
import { ConfigProvider } from "antd";
import EditProfileForm from "./EditProfileForm";
import ChangePasswordForm from "./ChangePasswordForm";

const { TabPane } = Tabs;

const ProfileContainer = () => {
    return (
        <ConfigProvider
        theme={{
          components: {
            Tabs: {
              itemColor: "white",
            },
          },
        }}
      >
        <div className="bg-[#243A40] py-8 rounded font-urbanist">
          <div className="bg-[#46A39D] flex items-center justify-center h-[200px]">
            <div className="flex items-center gap-x-5">
              <div className="group relative">
                <Image src={userImg} alt="user image" />
                <Upload>
                  <div className="bg-white text-black text-lg p-2 rounded-full flex items-center justify-center absolute bottom-5 right-0 transition-all duration-300 ease-in-out">
                    <CiEdit />
                  </div>
                </Upload>
              </div>
  
              <div className="text-white">
                <h2 className="font-bold text-4xl">Akash Sharif</h2>
                <p className="text-xl mt-1">Admin</p>
              </div>
            </div>
          </div>
  
          {/* forms */}
          <div className="w-1/2 mx-auto mt-16 mb-10">
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="Edit Profile" key="1">
                <EditProfileForm />
              </TabPane>
              <TabPane tab="Change Password" key="2">
                <ChangePasswordForm />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </ConfigProvider>
    );
};

export default ProfileContainer;