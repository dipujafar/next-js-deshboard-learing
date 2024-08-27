"use client"
import { Select } from "antd";
import CustomChart from "./CustomChart";

const UserOverView = () => {
  return (
    <div className="bg-primary-white p-2 rounded space-y-7">
      {/* header  */}
      <div className="flex justify-between">
        <div className="flex items-center gap-5 font-urbanist">
          <h2 className="text-2xl font-semibold text-secondary-color">
            User Overview
          </h2>
          <div className="flex items-center gap-2">
            <div className="size-4 bg-primary-color rounded-full"></div>
            <h3 className="text-lg">Patients</h3>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-4 bg-secondary-color rounded-full"></div>
            <h3 className="text-lg">Doctors</h3>
          </div>
        </div>
        <Select
          defaultValue="2024"
          style={{ width: 100 }}
          options={[
            { value: "2024", label: "2024" },
            { value: "2023", label: "2023" },
            { value: "2022", label: "2022" },
            { value: "2021", label: "2021"},
          ]}
        />
      </div>
      {/* chart  */}
      <CustomChart></CustomChart>
      {/* User Table */}
    </div>
  );
};

export default UserOverView;
