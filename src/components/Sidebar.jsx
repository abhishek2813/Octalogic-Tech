import React from 'react'
import SideBarItem from './SideBarItem'
import { CourseIcon, HomeIcon, LogoutIcon  } from './Icons'

function Sidebar() {
  return (
    <div className="flex flex-col justify-between w-23 bg-white p-4 shadow">
    <div>
      <SideBarItem icon={<HomeIcon />} label="Home" isActive={true} link="/home"/>
      <SideBarItem icon={<CourseIcon />} label="Courses" isActive={false} link="/course"/>
      
    </div>
    <button 
      className="flex items-center justify-center p-4 hover:bg-gray-300 rounded"
    //   onClick={onLogout}
    >
      <LogoutIcon className="w-6 h-6 mr-2"/>
      Logout
    </button>
  </div>
  )
}

export default Sidebar