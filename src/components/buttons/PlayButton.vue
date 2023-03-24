<script setup>
import PlayIcon from "../../assets/icons/play.svg?component";
import PauseIcon from "../../assets/icons/pause.svg?component";
import ControlButton from "./ControlButton.vue";

const props = defineProps({
  value: Boolean,
});

const emit = defineEmits(["play", "pause"]);

function clickHandler() {
  const isPlaying = props.value;

  emit(isPlaying ? "pause" : "play");
}
</script>

<template>
  <ControlButton :onClick="clickHandler">
    <template #icon>
      <PlayIcon v-if="value" />
      <PauseIcon v-else />
    </template>
  </ControlButton>
</template>

<style></style>
