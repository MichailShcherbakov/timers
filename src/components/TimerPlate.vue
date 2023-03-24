<script setup>
import PlayButton from "./buttons/PlayButton.vue";
import StopButton from "./buttons/StopButton.vue";
import { useTimer } from "../hooks/useTimer";

const { play, stop, pause } = useTimer();
</script>

<template>
  <div class="timer-plate timer-plate--disabled">
    <span class="timer-plate__display">1:20:32</span>
    <hr class="timer-plate__divider" />
    <div class="timer-plate__controls">
      <PlayButton :onPlay="play" :onPause="pause" />
      <StopButton :onStop="stop" />
    </div>
  </div>
</template>

<style>
.timer-plate {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  width: 225px;
  height: 120px;

  background: #696969;

  user-select: none;
}

.timer-plate__display {
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  text-align: center;

  font-size: 1.375rem;
  line-height: 1.3125rem;

  font-weight: 400;

  color: #9e9e9e;
}

.timer-plate__divider {
  width: 100%;
  height: 0;

  border: 0;
  border-top: 1px solid currentColor;
}

.timer-plate__controls {
  display: flex;
  flex-direction: row;

  align-items: center;

  width: 100%;
  height: 100%;
}

.timer-plate__display,
.timer-plate__controls {
  padding-left: 2rem;
  padding-right: 2rem;
}

.timer-plate--active > .timer-plate__display,
.timer-plate--active > .timer-plate__divider {
  color: #ffffff;
}
.timer-plate--disabled > .timer-plate__display,
.timer-plate--disabled > .timer-plate__divider {
  color: #9e9e9e;
}
</style>
