import { useState } from "react"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='border-black border flex flex-col'>
      {open ? (
        <>
          <button onClick={() => setOpen(!open)}>Open</button>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='elements'>Elements</NavLink>
        </>
      ) :
        (
          <button onClick={() => setOpen(!open)}>Open</button>
        )}
    </div>
  )
}

export default Sidebar