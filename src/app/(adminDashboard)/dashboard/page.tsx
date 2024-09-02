import { Metadata } from "next";
import Statatistic from "./components/Statatistic";
import UserOverView from "./components/userOverView/UserOverView";
import UserTable from "./components/userOverView/UserTable";

export const metadata: Metadata = {
    title: "Admin Dashboard",
   description: "Access the Fetal Med&C Admin Dashboard to oversee healthcare operations, manage patient data, and ensure smooth administration of fetal medicine and care services."
   }

const DashboardPage = () => {
    return (
        <div className=" space-y-5">
           <Statatistic></Statatistic>
           <UserOverView></UserOverView>
           <div style={{fontFamily: "var(--font-kumbh-sans)"}}>
           <UserTable></UserTable>
           </div>
        </div>
    );
};

export default DashboardPage;