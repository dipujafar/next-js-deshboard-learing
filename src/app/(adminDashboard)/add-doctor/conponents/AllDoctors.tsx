
import React, { useState } from 'react';
import { Pagination } from 'antd'; 
import DoctorCard from './DoctorCard';

const AllDoctors = () => {
    const [currentPage, setCurrentPage] = useState(1);  
    const pageSize = 15;  
    
    // Mock data for doctors
    const doctorsData = Array.from({ length: 20 }, (_, index) => ({ id: index, name: `Doctor ${index + 1}` }));
    console.log(doctorsData);
    

    // Calculate start and end index for slicing the doctors data based on the current page and page size
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Slice the data for the current page
    const currentDoctors = doctorsData.slice(startIndex, endIndex);


    return (
        <div>
            <div className='grid grid-cols-3 gap-3'>
               {
                currentDoctors.map(doctor => (
                    <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>
                ))
               }
            </div>
            <div className="w-max mt-5 ml-auto">
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={doctorsData.length}
                    onChange={(page)=>setCurrentPage(page)}
                    showSizeChanger={false}  // Disable page size changer if unnecessary
                />
            </div>
        </div>
    );
};

export default AllDoctors;