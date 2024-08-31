"use client"
import { Button } from 'antd';
import React, { useState } from 'react';
import DoctorModal from './DoctorModal';
import AllDoctors from './AllDoctors';

const AddDoctorContainer = () => {
    const [addDoctorModal, setAddDoctorModal] = useState(false);
    return (
        <div className="h-[800px] overflow-auto bg-[#FFF] p-6 rounded">
        <div className="mb-5">
            <Button onClick={()=>setAddDoctorModal(true)} style={{width: "100%", height: "55px", fontWeight:"bold", backgroundColor: "#2B4E63", color: "#FDFDFD", fontSize: "18px"}}>+ Add Doctor</Button>
            {/* modal  */}
            <DoctorModal state={addDoctorModal} setState={setAddDoctorModal}></DoctorModal>
        </div>
        <div>
        <AllDoctors></AllDoctors>
        </div>
    </div>
    );
};

export default AddDoctorContainer;