import React from 'react'
import { Outlet } from 'react-router-dom'

function Content() {
  return (
   <div className="flex-grow p-4 bg-gray-200">
     <Outlet />
    </div>
  )
}

export default Content