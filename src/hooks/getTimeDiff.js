export const ONE_MILLISECOND = 1;
export const ONE_SECOND = 1000;
export const ONE_MINUTE = ONE_SECOND * 60;
export const ONE_HOUR = ONE_MINUTE * 60;

const TIME_STEPS = {
  hours: ONE_HOUR,
  minutes: ONE_MINUTE,
  seconds: ONE_SECOND,
  milliseconds: ONE_MILLISECOND,
}

export function getTimeDiff(start, end) {
  let diff = end.getTime() - start.getTime();

  const timeDiff = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  }

  if (diff < 0) {
    return timeDiff;
  }

  Object.entries(TIME_STEPS).forEach(([key, step]) => {
    timeDiff[key] = Math.floor(diff / step);

    diff %= step;
  });

  return timeDiff;
}

