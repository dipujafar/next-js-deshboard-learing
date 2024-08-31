import Statatistic from "./components/Statatistic";
import UserOverView from "./components/userOverView/UserOverView";
import UserTable from "./components/userOverView/UserTable";

const page = () => {
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

export default page;