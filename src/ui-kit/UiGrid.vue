<template>
  <div class="ui-grid">
    <slot />
  </div>
</template>

<style>
.ui-grid {
  display: flex;
  flex-direction: row;

  align-items: start;
  justify-content: start;

  flex-wrap: wrap;

  width: calc(100% + 3.125rem);
  height: auto;

  margin-top: -2.8125rem;
  margin-left: -3.125rem;
}
</style>
