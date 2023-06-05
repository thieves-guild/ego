import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'

const Root = () => {
  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Root