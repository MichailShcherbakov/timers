<template>
  <div class="ui-grid-item">
    <slot />
  </div>
</template>

<style>
.ui-grid-item {
  padding-top: 2.8125rem;
  padding-left: 3.125rem;
}

@media (min-width: 920px) {
  .ui-grid-item {
    flex-basis: 33.3333%;
    -webkit-box-flex: 0;
    flex-grow: 0;
    max-width: 33.3333%;
  }
}

@media (max-width: 920px) {
  .ui-grid-item {
    flex-basis: 50%;
    -webkit-box-flex: 0;
    flex-grow: 0;
    max-width: 50%;
  }
}

@media (max-width: 680px) {
  .ui-grid-item {
    flex-basis: 100%;
    -webkit-box-flex: 0;
    flex-grow: 0;
    max-width: 100%;
  }
}
</style>
