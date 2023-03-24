import { padWithZeroes } from './padWithZeroes';

export function getFormattedTimeDiff(time) {
  if (time?.hours > 0) {
    return `${time.hours}:${padWithZeroes(time.minutes, 2)}:${padWithZeroes(time.seconds, 2)}`;
  }

  if (time?.minutes > 0) {
    return `${time.minutes}:${padWithZeroes(time.seconds, 2)}`;
  }

  if (time?.seconds > 0) {
    return `${time.seconds}`;
  }

  return `0:00:00`;
}

