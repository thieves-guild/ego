import { useSelector } from "react-redux"
import { RootState } from "../store"

const Elements = () => {
  const elements = useSelector((state: RootState) => state.element)

  return (
    <div>
      {elements.map((element) => {
        return (
          <div className="w-40 h-40 border border-black">
            <h1>{element.title}</h1>
            <p>{element.description}</p>
            <p>{element.percentage}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Elements