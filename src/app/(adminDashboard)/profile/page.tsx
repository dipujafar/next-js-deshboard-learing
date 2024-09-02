import { Metadata } from "next";
import ProfileContainer from "./components/ProfileContainer";


export const metadata: Metadata = {
    title: "Admin Profile",
    description: "The Admin Profile page provides an overview of the administrator's key information, including personal details, account settings, and permissions. This section allows admins to manage their profile, update credentials, and configure site management preferences to ensure smooth and secure operation of the platform."
  };;

const ProfilePage = () => {
  return (
   <ProfileContainer></ProfileContainer>
  );
};

export default ProfilePage;
