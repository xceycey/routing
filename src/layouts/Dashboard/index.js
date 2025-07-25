import React from 'react'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div>
        <Header/>
        <div id="content">
            <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout