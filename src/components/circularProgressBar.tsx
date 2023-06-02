import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularBar = () => {
  const x = 68 //This variable is going to be some external number that we get after making the factor calculation
  const calculateColor = (x: number): string => {
    if (x <= 20) return '#800000'
    else if (x <= 40) return 'red'
    else if (x <= 60) return 'orange'
    else if (x <= 70) return 'yellow'
    else if (x <= 85) return 'lightgreen'
    else return 'darkgreen'
  }

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