
import { Outlet } from 'react-router'
import { NavbarDemo } from '../components/mainNav'
import Footer from '../components/Footer'
// import { Navbar } from '../components/ui/resizable-navbar'

const RootLayout = () => {
  return (
    <div className=''>
      <NavbarDemo/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout
