import { useState } from "react"

type DailyCard = 'undefined' | 'accomplished' | 'failed'

const DailyCard = () => {
  const [state, setState] = useState<DailyCard>('undefined')
  return (
    <div>

    </div>
  )
}

export default DailyCard