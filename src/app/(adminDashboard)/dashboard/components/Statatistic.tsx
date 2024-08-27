import Image from "next/image";
import doctorIcon from "@/assets/icons/doctor.png";
import PatientsIcon from "@/assets/icons/Patient.png";
import { Flex } from "antd";

const Statatistic = () => {
  return (
    <Flex justify="space-between" gap={16}>
    <div className="bg-white p-6 rounded w-full">
      {/* doctor statistics  */}
      <Flex justify="space-between">
        <div className="p-4 bg-primary-black rounded-full">
          <Image src={doctorIcon} alt="doctor_image"></Image>
        </div>
        <div className="text-black">
          <h1 className="text-2xl font-kumbh-sans">Total Doctor</h1>
          <p className="text-3xl font-medium">518</p>
        </div>
      </Flex>
    </div>
    <div className="bg-white p-6 rounded w-full">
      {/* doctor statistics  */}
      <Flex justify="space-between">
        <div className="p-4 bg-primary-black rounded-full">
          <Image src={PatientsIcon} alt="doctor_image"></Image>
        </div>
        <div className="text-black">
          <h1 className="text-2xl font-kumbh-sans">Total Patients</h1>
          <p className="text-3xl font-medium">$78464</p>
        </div>
      </Flex>
    </div>
    
    </Flex>
  );
};

export default Statatistic;
