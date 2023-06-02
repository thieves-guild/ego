import { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Rate = () => {
  const [count, setCount] = useState(0)
  const percentage = () => {
    if (count <= 33) return 'red'
    else if (count <= 77) return 'yellow'
    else return 'green'
  }

  return (
    <div>
      <button onClick={() => setCount(count + 10)}>Increment</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 10)}>Decrement</button>
      <CircularProgressbar
        className='h-60 w-60'
        maxValue={100}
        minValue={0}
        value={count}
        text={String(count)}
        circleRatio={1}
        styles={buildStyles({
          pathColor: `${percentage()}`,
          textColor: 'black',
          strokeLinecap: 'butt',
        })} />
    </div>
  )
}

export default Rate