"use client"
import { Table } from "antd";
//@ts-ignore
const DataTable = ({columns, data, pageSize}) => {
    return (
        <Table columns={columns} dataSource={data} pagination={{pageSize: pageSize}}></Table>
    );
};

export default DataTable;