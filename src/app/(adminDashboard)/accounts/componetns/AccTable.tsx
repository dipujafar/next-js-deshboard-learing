"use client"
import DataTable from "@/components/DataTable";
import { TableProps } from "antd";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import ProfileModal from "./ProfileModal";

type TDataType  = {
    key: string;
    name: string;
    email: string;
    date: string;
    type: string;
  }
  //user data
  const data: TDataType[] = [
    {
      key: "1",
      name: "User 1",
      email: "email@gmail.com",
      date: "11 Oct, 2024",
      type: "Doctor",
    },
    {
      key: "2",
      name: "User 2",
      email: "email@gmail.com",
      date: "11 Oct, 2024",
      type: "Patient"
    },
    {
      key: "3",
      name: "User 3",
      email: "email@gmail.com",
      date: "11 Oct, 2024",
     type: "Patient"
    },
    {
      key: "4",
      name: "User 4",
      email: "email@gmail.com",
      date: "11 Oct, 2024",
      type: "Doctor",
    },
    {
      key: "5",
      name: "User 5",
      email: "email@gmail.com",
      date: "11 Oct, 2024",
     type: "Patient"
    },
    {
      key: "6",
      name: "User 6",
      email: "email@gmail.com",
      date: "11 Oct, 2024",
      type: "Doctor",
    },
    {
      key: "7",
      name: "User 7",
      email: "email@gmail.com",
      date: "11 Oct, 2024",
      type: "Doctor",
    },
    {
      key: "8",
      name: "User 8",
      email: "email@gmail.com",
      date: "11 Oct, 2024",
      type: "Patient",
    },
    {
      key: "9",
      name: "User 9",
      email: "email@gmail.com",
      date: "11 Oct, 2024",
      type: "Doctor",
    },
    {
      key: "10",
      name: "User 10",
      email: "email@gmail.com",
      date: "11 Oct, 2024",
      type: "Patient",
    },
    {
      key: "11",
      name: "User 10",
      email: "email@gmail.com",
      date: "11 Oct, 2024",
      type: "Doctor",
    },
    {
      key: "12",
      name: "User 10",
      email: "email@gmail.com",
      date: "11 Oct, 2024",
      type: "Patient",
    },
    {
      key: "13",
      name: "User 10",
      email: "email@gmail.com",
      date: "11 Oct, 2024",
      type: "Doctor",
    },
    {
      key: "14",
      name: "User 10",
      email: "email@gmail.com",
      date: "11 Oct, 2024",
      type: "Patient",
    },
    {
      key: "15",
      name: "User 10",
      email: "email@gmail.com",
      date: "11 Oct, 2024",
      type: "Patient",
    },
    {
      key: "16",
      name: "User 10",
      email: "email@gmail.com",
      date: "11 Oct, 2024",
      type: "Patient",
    },
    {
      key: "17",
      name: "User 10",
      email: "email@gmail.com",
      date: "11 Oct, 2024",
      type: "Patient",
    },
    {
      key: "18",
      name: "User 10",
      email: "email@gmail.com",
      date: "11 Oct, 2024",
      type: "Patient",
    },
  ];
  

  

const AccTable = () => {
  const [profileModel,setProfileModel] = useState(false);
  
  const handleProfileModal = ()=>{
    setProfileModel(true);
  }

    // columns info
    const columns: TableProps< TDataType>['columns'] = [
      {
        title: 'Serial',
        dataIndex: 'key',
        render: (value) => `#${value}`,
      },
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'Date',
        dataIndex: 'date',
      },
      {
        title: 'Acc Type',
        dataIndex: 'type',
       
       filters: [
        {
          text: "Doctor",
          value: "Doctor"
        },
        {
          text: "Patient",
          value: "Patient"
        }
       ],
       onFilter: (value, record)=> record.type.indexOf(value as string) == 0 
  
      },
      {
        title: 'Action',
        dataIndex: 'action',
        render: () =>(
          <div>
            <IoEyeOutline size={26} onClick={handleProfileModal}></IoEyeOutline>
          </div>
        )
      },
  
    ];

    return (
      <div>
       <DataTable columns={columns} data={data} pageSize={16}></DataTable>
       <ProfileModal state={profileModel} setState={setProfileModel}></ProfileModal>
       </div>
    );
};

export default AccTable;