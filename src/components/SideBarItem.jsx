import React from "react";
import { Link } from "react-router-dom";

function SideBarItem({ icon, label, isActive,link }) {
  return (
    <Link to={link} >
    <div
      className={`flex flex-col items-center justify-center p-4 rounded-lg mb-4 ${
        isActive ? "bg-pink-100 text-purple-700" : "bg-gray-100 text-gray-500"
      }`}
    >
      <div className="mb-2">{icon}</div>
      <div className="text-sm font-medium">{label}</div>
    </div>
    </Link>
  );
}

export default SideBarItem;
