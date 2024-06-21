import React from "react";
import { NavLink } from "react-router-dom";

function SideBarItem({ icon, label, isActive,link }) {
  return (
    <NavLink
    to={link}
    className={({ isActive }) =>
      `flex flex-col items-center justify-center p-4 rounded-lg mb-4 ${
        isActive ? 'bg-pink-100 text-purple-700' : 'bg-gray-100 text-gray-500'
      }`
    }
  >
    <div className="mb-2">{icon}</div>
    <div className="text-sm font-medium">{label}</div>
  </NavLink>
  );
}

export default SideBarItem;
