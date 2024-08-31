import Image from "next/image";
import doctorImag from "@/assets/image/doctorImg.png"
import { Button } from "antd";
import detailsIcon from "@/assets/icons/details.png"

// @ts-ignore
const DoctorCard = ({doctor}) => {
    return (
        <div className="flex gap-4 font-urbanist p-4 border border-[#C8E8E6]">
            <div>
                <Image src={doctorImag} alt="doctorImage"></Image>
            </div>
            <div>
                <h1 className="text-lg text-black font-bold mb-2">Dr. Maria Waston</h1>
                <p className="text-secondary-color mb-1">Heart Surgeon, London, England</p>
                <Button> <Image src={detailsIcon} alt="detailsIcon" style={{width: "14px"}}></Image> View Details</Button>
            </div>
        </div>
    );
};

export default DoctorCard;