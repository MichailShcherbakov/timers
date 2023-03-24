<script setup>
import ControlButton from "./ControlButton.vue";
import AddIcon from "../../assets/icons/add.svg?component";
</script>

<template>
  <ControlButton class="add-timer-btn">
    <template #icon>
      <AddIcon />
    </template>
  </ControlButton>
</template>

<style>
.add-timer-btn {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  align-items: center;
  justify-content: center;

  width: 225px;
  height: 120px;

  background: #696969;

  user-select: none;
}
</style>
