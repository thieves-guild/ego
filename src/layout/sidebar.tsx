import { useState } from "react"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='bg-neutral-800 duration-200 text-white text-left flex flex-col p-2'>
      <button className="text-left" onClick={() => setOpen(!open)}>Open</button>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/elements'}>Elements</NavLink>
    </div>
  )
}

export default Sidebar