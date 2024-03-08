import React, { useState } from 'react'
import { GrTransaction } from 'react-icons/gr'
import { MdOutlineDashboard } from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom'
import { PATHS } from '../../utils/constants'
import { FaChartSimple } from "react-icons/fa6";
import SidebarLink from '../sidebar/Elements'


const Sidebar = () => {

    return (
        <div className="bg-white flex flex-col gap-6 p-4 border-r">
            <div className="text-xs text-gray-500 mt-6">
                General
            </div>
            <div className="left-container-texts flex flex-col gap-6">
                {/* Dashboard */}
                <SidebarLink to={PATHS.HOME}>
                    <MdOutlineDashboard />
                    Dashboard
                </SidebarLink>
                {/* Transaction */}
                <SidebarLink to={PATHS.TRANSACTIONS} >
                    <GrTransaction />
                    Transactions
                </SidebarLink>
                {/* Analytics */}
                <SidebarLink to={PATHS.GRAPHS} >
                    <FaChartSimple />
                    Analytics
                </SidebarLink>
            </div>
            <div className="border-b"></div>
        </div>
    )
}

export default Sidebar