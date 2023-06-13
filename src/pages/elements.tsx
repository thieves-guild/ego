import { useSelector } from "react-redux"
import { RootState } from "../store"
import AddElementPopUp from "../features/add-element/add-element-pop-up"
import { firstLetterToUpperCase } from "../functions"
import { MoreVertical } from "lucide-react"

const Elements = () => {
  const elements = useSelector((state: RootState) => state.element)

  return (
    <>
      <AddElementPopUp />
      <h1 className="text-5xl text-center">Your Elements</h1>
      <div className="p-20 grid grid-cols-4 gap-8">
        {elements.slice(1).map(({ title, description, percentage }) => {
          return (
            <div className="border border-black p-4 rounded">
              <div className="flex justify-between mb-4">
                <h1 className="text-2xl">{firstLetterToUpperCase(title)}</h1>
                <button className="hover:bg-neutral-100 active:bg-neutral-200 duration-200 rounded"><MoreVertical /></button>
              </div>
              <p className="text-neutral-700">{description}</p>
              <p>Percentage: <span className="font-bold">{percentage}%</span></p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Elements;