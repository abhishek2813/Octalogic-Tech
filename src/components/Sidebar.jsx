import React from 'react'
import SideBarItem from './SideBarItem'
import { CourseIcon, HomeIcon, Logout } from './Icons'

function Sidebar() {
  return (
    <div className="w-25 bg-white p-4" >
    <SideBarItem icon={<HomeIcon />} label="Home" isActive={true} link="/home"/>
    <SideBarItem icon={<CourseIcon />} label="Courses" isActive={false} link="/course"/>

    <div className="mt-auto">
    <SideBarItem icon={<Logout />} label="Logout" isActive={false} />
    </div>
  </div>
  )
}

export default Sidebar