import Boards from "./Boards"
import Logo from "./Logo"
import SidebarFooter from "./SidebarFooter"

const Sidebar = () => {
  return (
    <nav
      className='
        min-h-screen 
        max-w-xs 
        bg-white 
        absolute 
        w-full
        border-r-2
        flex
        flex-col
    '>
      <Logo/>
      <Boards/> 
      <SidebarFooter/>
    </nav>
  )
}

export default Sidebar