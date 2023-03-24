import { describe, it, expect } from "vitest";
import { getTimeDiff } from "./getTimeDiff";

describe("getTimeDiff", () => {
  it("should return time diff", () => {
    const startFrom = new Date("2023-03-24T03:00:00.000");
    const endFrom = new Date("2023-03-24T04:12:36.125");

    expect(getTimeDiff(startFrom, endFrom)).toEqual({
      hours: 1,
      minutes: 12,
      seconds: 36,
      milliseconds: 125,
    });
  });

  it("should return empty time diff when start time is greater end time", () => {
    const endFrom = new Date("2023-03-24T03:00:00.000");
    const startFrom = new Date("2023-03-24T04:12:36.125");

    expect(getTimeDiff(startFrom, endFrom)).toEqual({
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });
  });
});
