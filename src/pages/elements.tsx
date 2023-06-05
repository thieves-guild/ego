import { useState } from "react"

const Elements = () => {
  const [elements, setElements] = useState([{
    title: 'Health',
    description: 'This includes eating well, sleeping 8 hours a day and doing excersise regularly'
  }])

  return (
    <div>
      {elements.map((element) => {
        return (
          <div className="w-40 h-40 border border-black">
            <h1>{element.title}</h1>
            <p>{element.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Elements