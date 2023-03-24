import { computed, onBeforeUnmount, ref } from "vue";
import { getTimeDiff, ONE_SECOND } from "./getTimeDiff";

export const TIMER_PLAYING = "TIMER_PLAYING";
export const TIMER_PAUSED = "TIMER_PAUSED";
export const TIMER_STOPPED = "TIMER_STOPPED";

export function useTimer() {
  const intervalId = ref(null);

  const state = ref(TIMER_STOPPED);

  const startTime = ref(null);
  const endTime = ref(null);

  const currentTime = ref(null);

  function play() {
    if (!startTime.value) {
      startTime.value = new Date();
    }

    if (state.value === TIMER_PAUSED) {
      startTime.value = new Date(
        startTime.value.getTime() + Date.now() - endTime.value.getTime(),
      );
    }

    state.value = TIMER_PLAYING;

    intervalId.value = setInterval(() => {
      endTime.value = new Date();

      currentTime.value = getTimeDiff(startTime.value, endTime.value);
    }, ONE_SECOND);
  }

  function pause() {
    clearInterval(intervalId.value);

    state.value = TIMER_PAUSED;

    intervalId.value = null;
  }

  function stop() {
    clearInterval(intervalId.value);

    state.value = TIMER_STOPPED;

    intervalId.value = null;

    startTime.value = null;
    endTime.value = null;

    currentTime.value = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    };
  }

  const isPlaying = computed(() => state.value === TIMER_PLAYING);
  const isPaused = computed(() => state.value === TIMER_PAUSED);
  const isStopped = computed(() => state.value === TIMER_STOPPED);

  onBeforeUnmount(() => {
    stop();
  });

  return {
    currentTime,
    play,
    pause,
    stop,
    isPlaying,
    isPaused,
    isStopped,
  };
}
