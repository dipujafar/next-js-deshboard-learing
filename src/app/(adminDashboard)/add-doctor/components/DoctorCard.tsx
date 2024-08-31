import Image from "next/image";
import doctorImag from "@/assets/image/doctorImg.png"
import { Button } from "antd";
import detailsIcon from "@/assets/icons/details.png"
import { useState } from "react";
import DoctorDetaisModal from "./DoctorDetaisModal";

// @ts-ignore
const DoctorCard = ({doctor}) => {
    const [detailsModal, setDetailsModal] = useState(false);
    return (
        <div className="flex gap-4 font-urbanist p-4 border border-[#C8E8E6]">
            <div>
                <Image src={doctorImag} alt="doctorImage"></Image>
            </div>
            <div>
                <h1 className="text-lg text-black font-bold mb-2">Dr. Maria Waston</h1>
                <p className="text-secondary-color mb-1">Heart Surgeon, London, England</p>
                <Button onClick={()=>setDetailsModal(true)}> <Image src={detailsIcon} alt="detailsIcon" style={{width: "14px"}}></Image> View Details</Button>
                <DoctorDetaisModal state={detailsModal} setState={setDetailsModal}></DoctorDetaisModal>
            </div>
        </div>
    );
};

export default DoctorCard;