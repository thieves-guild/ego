import { useSelector } from "react-redux"
import { RootState } from "../store"
import AddElementPopUp from "../features/add-element/add-element-pop-up"
import { firstLetterToUpperCase } from "../functions"

const Elements = () => {
  const elements = useSelector((state: RootState) => state.element)

  return (
    <div>
      <AddElementPopUp />
      {elements.slice(1).map(element => {
        return (
          <div className="w-40 h-40 border border-black p-4 rounded">
            <h1 className="text-2xl">{firstLetterToUpperCase(element.title)}</h1>
            <p>{element.description}</p>
            <p>Percentage: {element.percentage}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Elements;