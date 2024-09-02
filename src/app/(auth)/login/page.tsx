import { Metadata } from "next";
import React from "react";
import LoginForm from "./component/LoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Admin login for Fetal Med&C. Access the secure portal to manage healthcare services, oversee patient records, and administer fetal medicine and care operations."
};

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#4FB3AB] ">
      <div className="flex justify-center items-center md:max-w-[581px] md:h-[500px]  mx-auto border-2 border-[#428C87] md:px-12 px-6 py-5 rounded-[40px] bg-[#58BABA] ">
        <div>
          <div className="mb-6 text-center text-[#F8FAFC] space-y-5 font-kumbh_sans">
            <h2 className="text-2xl  font-semibold  ">
              Login to Account
            </h2>
            <p className="mt-6">Please enter your email and password to continue</p>
          </div>
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
