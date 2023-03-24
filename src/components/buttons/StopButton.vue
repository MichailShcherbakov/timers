<script setup>
import StopIcon from "../../assets/icons/stop.svg?component";
import ControlButton from "./ControlButton.vue";

const emit = defineEmits(["stop"]);

function clickHandler() {
  emit("stop");
}
</script>

<template>
  <ControlButton :onClick="clickHandler">
    <template #icon>
      <StopIcon />
    </template>
  </ControlButton>
</template>

<style></style>
