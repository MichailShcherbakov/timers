<script setup>
import PlayIcon from "../../assets/icons/play.svg?component";
import PauseIcon from "../../assets/icons/pause.svg?component";
import ControlButton from "./ControlButton.vue";

const props = defineProps({
  isPlaying: Boolean,
});

const emit = defineEmits(["play", "pause"]);

function clickHandler() {
  emit(props.isPlaying ? "pause" : "play");
}
</script>

<template>
  <ControlButton :onClick="clickHandler" :isActive="isPlaying">
    <template #icon>
      <PauseIcon v-if="isPlaying" />
      <PlayIcon v-else />
    </template>
  </ControlButton>
</template>

<style></style>
