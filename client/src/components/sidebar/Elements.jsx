import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarLink = ({ children, to }) => {
    return (
        <NavLink className="text-sm flex items-center gap-2" to={to} >{children}</NavLink>
    )
}

export default SidebarLink