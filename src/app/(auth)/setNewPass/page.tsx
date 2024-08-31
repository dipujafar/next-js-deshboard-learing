import { Metadata } from "next";
import React from "react";
import SetNewPassForm from "./components/SetNewPassForm";


export const metadata: Metadata = {
  title: "Set New Password",
  description: "Securely set a new password for your Fetal Med&C account. Ensure your access to important healthcare services and medical information remains protected by updating your credentials."
};

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#4FB3AB] ">
      <div className="flex justify-center items-center md:max-w-[581px] md:h-[500px]  mx-auto border-2 border-[#428C87] md:px-12 px-6 py-5 rounded-[40px] bg-[#58BABA] ">
        <div>
          <div className="mb-6 text-center text-[#F8FAFC] space-y-5 font-kumbh_sans">
            <h2 className="text-2xl  font-semibold  ">
            Set a new password
            </h2>
            <p className="mt-6">Create a new password. Ensure it differs from
            previous ones for security</p>
          </div>
         <SetNewPassForm></SetNewPassForm>
        </div>
      </div>
    </div>
  );
};

export default page;
