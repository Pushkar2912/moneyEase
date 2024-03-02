import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContextProvider'
import { PATHS } from '../../utils/constants';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import AppWraper from './AppWraper';

const Layout = () => {

  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to={PATHS.LOGIN} />
  }
  return (
    <AppWraper>
      <div className='h-screen flex flex-col'>
        <Navbar />
        <div className='app-grid flex-1'>
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </AppWraper>
  )
}

export default Layout