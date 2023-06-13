import { useSelector } from "react-redux"
import { RootState } from "../store"
import AddElementPopUp from "../features/add-element/add-element-pop-up"
import { firstLetterToUpperCase } from "../functions"

const Elements = () => {
  const elements = useSelector((state: RootState) => state.element)

  return (
    <div>
      <AddElementPopUp />
      <div className="p-20 grid grid-cols-4 gap-8">
        {elements.slice(1).map(({ title, description, percentage }) => {
          return (
            <div className="border border-black p-4 rounded">
              <h1 className="text-2xl">{firstLetterToUpperCase(title)}</h1>
              <p className="text-neutral-700">{description}</p>
              <p>Percentage: <span className="font-bold">{percentage}%</span></p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Elements;