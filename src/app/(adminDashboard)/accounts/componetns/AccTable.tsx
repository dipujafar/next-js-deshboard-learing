"use client"
import DataTable from "@/components/DataTable";
import { TableProps } from "antd";

type TDataType  = {
    key: string;
    name: string;
    email: string;
    date: string;
    type: string;
  }
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
      type: "Coach",
    },
    {
      key: "9",
      name: "User 9",
      email: "email@gmail.com",
      date: "11 Oct, 2024",
      type: "Guest",
    },
    {
      key: "10",
      name: "User 10",
      email: "email@gmail.com",
      date: "11 Oct, 2024",
      type: "Doctor",
    },
  ];
  
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

    },
    {
      title: 'Action',
      dataIndex: 'action',

    },

  ];
  

const AccTable = () => {
    return (
       <DataTable columns={columns} data={data} pageSize={10}></DataTable>
    );
};

export default AccTable;