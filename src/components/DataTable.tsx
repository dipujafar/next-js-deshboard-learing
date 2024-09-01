"use client"
import { Table } from "antd";
//@ts-ignore
const DataTable = ({columns, data, pageSize}) => {
    return (
        <div className="h-[clac(100%-400px)] overflow-auto ">
        <Table columns={columns} dataSource={data} pagination={{pageSize: pageSize}}></Table>
        </div>
    );
};

export default DataTable;