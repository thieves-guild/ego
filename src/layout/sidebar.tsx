import { useState } from "react"
import { NavLink } from "react-router-dom"
import { sidebar } from "../assets/styles"

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={open ? `w-44 ${sidebar}` : `w-16 ${sidebar}`}>
      <button className="p-2" onClick={() => setOpen(!open)}>Open</button>
    </div>
  )
}

export default Sidebar