import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { calculateColor } from '../functions';

const CircularBar = () => {
  const x = 68 //This variable is going to be some external number that we get after making the factor calculation

  return (
    <CircularProgressbar
      className='h-60 w-60'
      maxValue={100}
      minValue={0}
      value={x}
      text={String(x + '%')}
      circleRatio={1}
      styles={buildStyles({
        pathColor: `${calculateColor(x)}`,
        textColor: 'black',
      })} />
  )
}

export default CircularBar
