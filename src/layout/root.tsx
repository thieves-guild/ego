import Footer from './footer'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'

const Root = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full'>
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Root