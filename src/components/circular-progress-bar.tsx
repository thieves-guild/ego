import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { RED, DARK_GREEN, DARK_ORANGE, GREEN, DARK_RED, DARK_YELLOW, YELLOW, LIGHT_GREEN, ORANGE } from './colors';

const CircularBar = () => {
  const x = 68 //This variable is going to be some external number that we get after making the factor calculation
  const calculateColor = (x: number): string => {
    if (x <= 15) return DARK_RED
    else if (x <= 25) return RED
    else if (x <= 35) return DARK_ORANGE
    else if (x <= 45) return ORANGE
    else if (x <= 60) return DARK_YELLOW
    else if (x <= 70) return YELLOW
    else if (x <= 80) return LIGHT_GREEN
    else if (x <= 90) return GREEN
    else return DARK_GREEN
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