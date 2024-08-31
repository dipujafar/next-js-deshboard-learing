import { Metadata } from "next";
import AccTable from "./componetns/AccTable";

export const metadata: Metadata = {
    title: "All Accounts",
    description: "View and manage all user accounts in the Fetal Med&C system. Administer account settings, roles, and access for seamless management of healthcare services and patient care."
  };

const page = () => {
    return (
        <div className="min-h-screen bg-[#F8FAFC] overflow-auto">
           <AccTable></AccTable>
        </div>
    );
};

export default page;