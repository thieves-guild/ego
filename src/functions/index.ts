import { RED, DARK_GREEN, DARK_ORANGE, GREEN, DARK_RED, DARK_YELLOW, YELLOW, LIGHT_GREEN, ORANGE } from '../utils/colors';

export const calculateColor = (x: number): string => {
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