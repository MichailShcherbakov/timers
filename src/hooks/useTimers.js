import { ref } from "vue";

let uid = 0;

export function useTimers() {
  const timers = ref([]);

  function addTimer() {
    timers.value.push({ id: uid++ });
  }

  return {
    timers,
    addTimer,
  };
}
