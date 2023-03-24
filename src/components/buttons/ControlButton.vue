<script setup>
defineProps({
  isActive: Boolean,
});
</script>

<template>
  <button
    class="control-btn"
    :class="{
      'control-btn--active': isActive,
      'control-btn--disabled': !isActive,
    }"
  >
    <slot name="icon"></slot>
  </button>
</template>

<style>
.control-btn {
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: min-content;

  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.control-btn.control-btn--disabled:hover {
  color: #ffffff;
}

.control-btn--active {
  color: #ffffff;
}

.control-btn--disabled {
  color: #9e9e9e;
}
</style>
