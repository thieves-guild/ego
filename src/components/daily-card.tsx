import { useState } from "react"

type DailyResult = 'undefined' | 'accomplished' | 'failed'

const DailyCard = () => {
  const [state, setState] = useState<DailyResult>('undefined')
  return (
    <div>

    </div>
  )
}

export default DailyCard