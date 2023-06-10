import { useState } from "react"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-neutral-800 text-white">
      {open ? (
        <div>
          <button onClick={() => setOpen(!open)}>Open</button>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/elements'>Elements</NavLink>
          <NavLink to='/streaks'>Streaks</NavLink>
        </div>
      ) :
        (
          <button onClick={() => setOpen(!open)}>Open</button>
        )}
    </div>
  )
}

export default Sidebar