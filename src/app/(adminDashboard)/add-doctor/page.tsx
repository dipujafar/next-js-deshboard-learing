import { Metadata } from "next";
import AddDoctorContainer from "./components/AddDoctorContainer";

export const metadata: Metadata  = {
    title: "Add Doctor ",
    description: "Add new doctors to the Fetal Med&C healthcare system. Enter doctor details, specialties, and credentials to expand the medical team and enhance patient care services."
  };

const AddDoctorPage = () => {
    return (
        <AddDoctorContainer></AddDoctorContainer>
    );
};

export default AddDoctorPage;