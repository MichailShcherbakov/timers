<script setup>
import TimerPlate from "./components/TimerPlate.vue";
import AddButton from "./components/buttons/AddButton.vue";
import UiGrid from "./ui-kit/UiGrid.vue";
import UiGridItem from "./ui-kit/UiGridItem.vue";
import { useTimers } from "./hooks/useTimers";

const { timers, addTimer } = useTimers();
</script>

<template>
  <div class="main-layout">
    <div class="main-container">
      <UiGrid>
        <UiGridItem
          v-for="timer in timers"
          :key="timer.id"
          class="timer-grid-item"
        >
          <TimerPlate />
        </UiGridItem>
        <UiGridItem class="timer-grid-item">
          <AddButton :onClick="addTimer" />
        </UiGridItem>
      </UiGrid>
    </div>
  </div>
</template>

<style>
body {
  background: #353638;
}

.main-layout {
  display: flex;
  flex-direction: row;

  justify-content: center;

  width: 100%;
  height: auto;

  padding: 4.5rem;
}

.main-container {
  width: 775px;
}

.timer-grid-item {
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
}

@media (max-width: 920px) {
  .main-container {
    width: 100%;
  }
}

@media (max-width: 380px) {
  .main-layout {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>
