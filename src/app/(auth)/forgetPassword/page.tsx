import { Metadata } from "next";
import ForgetPasswordForm from "./components/ForgetPasswordForm";

export const metadata: Metadata = {
    title: "Forget Password",
    description: "Reset your password for Fetal Med&C to securely access your account. Follow the instructions to regain access to your healthcare portal and stay connected with your fetal medicine and care services.",
  };
  

const ForgetPasswordPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#4FB3AB] ">
      <div className="flex justify-center items-center md:max-w-[581px] md:h-[500px]  mx-auto border-2 border-[#428C87] md:px-12 px-6 py-5 rounded-[40px] bg-[#58BABA] ">
        <div>
        <h2 className="text-2xl font-semibold text-[#F8FAFC] text-center mb-6">Forgot Password</h2>
        <ForgetPasswordForm></ForgetPasswordForm>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
