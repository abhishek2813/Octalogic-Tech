import React from "react";
import Card from "./Card";
import { UserGroupIcon } from "./Icons";
import EnrolmentsTable from "./EnrolmentsTable";
import BestStudents from "./BestStudents";

function Home() {
  return (
    <div className="bg-gray">
      <h1 className="text-2xl font-bold text-gray-500 mb-4">Overview</h1>
      <div className="flex-grow p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <Card
            icon={<UserGroupIcon />}
            mainText="164"
            description="total number of students"
            linkText="View"
          />
          <Card
            icon={<UserGroupIcon />}
            mainText="12"
            description="total number of courses"
            linkText="View"
          />
          <Card
            icon={<UserGroupIcon />}
            mainText="$2000"
            description="total amount earned"
            linkText="View"
          />
          <Card
            icon={<UserGroupIcon />}
            mainText="Guitar"
            description="best performing course"
            linkText="View"
          />
          <Card
            icon={<UserGroupIcon />}
            mainText="Flute"
            description="worst performing course"
            linkText="View"
          />
        </div>
      </div>
      
      <EnrolmentsTable />
      <BestStudents />
    </div>
  );
}

export default Home;
