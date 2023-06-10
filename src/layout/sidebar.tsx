import { useState } from "react"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='border-black border flex flex-col h-screen p-2 duration-200'>
      {open ? (
        <>
          <button onClick={() => setOpen(!open)}>Open</button>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/elements'>Elements</NavLink>
          <NavLink to='/streaks'>Streaks</NavLink>
        </>
      ) :
        (
          <button onClick={() => setOpen(!open)}>Open</button>
        )}
    </div>
  )
}

export default Sidebar