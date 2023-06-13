import { useSelector } from "react-redux"
import { RootState } from "../store"
import AddElementPopUp from "../features/add-element/add-element-pop-up"

const Elements = () => {
  const elements = useSelector((state: RootState) => state.element)

  return (
    <div>
      <AddElementPopUp />
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