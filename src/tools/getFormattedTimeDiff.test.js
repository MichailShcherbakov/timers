import { describe, it, expect } from "vitest";
import { getFormattedTimeDiff } from "./getFormattedTimeDiff";

describe("getFormattedTimeDiff", () => {
  it("should return correct time diff (with hours)", () => {
    expect(
      getFormattedTimeDiff({
        hours: 1,
        minutes: 12,
        seconds: 36,
      }),
    ).toEqual("1:12:36");
  });

  it("should return correct time diff (with hours and zeros)", () => {
    expect(
      getFormattedTimeDiff({
        hours: 1,
        minutes: 2,
        seconds: 36,
      }),
    ).toEqual("1:02:36");
  });

  it("should return correct time diff (with minutes)", () => {
    expect(
      getFormattedTimeDiff({
        hours: 0,
        minutes: 2,
        seconds: 3,
      }),
    ).toEqual("2:03");
  });

  it("should return correct time diff (with minutes)", () => {
    expect(
      getFormattedTimeDiff({
        hours: 0,
        minutes: 0,
        seconds: 36,
      }),
    ).toEqual("36");
  });

  it("should return correct time diff (with minutes)", () => {
    expect(
      getFormattedTimeDiff({
        hours: 0,
        minutes: 0,
        seconds: 0,
      }),
    ).toEqual("0:00:00");
  });

  it("should return correct time diff (without value)", () => {
    expect(getFormattedTimeDiff(null)).toEqual("0:00:00");
  });
});
