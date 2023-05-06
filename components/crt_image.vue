<script setup lang="ts">
const props = defineProps<{
  num: number;
}>();

const colors = ["red", "green", "blue"];
</script>

<template>
  <div class="wrap">
    <div class="scan">
      <nuxt-img src="/sidebar/scanlines.png" />
    </div>
    <template v-for="color in colors">
      <div :class="color">
        <nuxt-img :src="`/sidebar/0default/${props.num}.jpg`" />
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
$blur: 0.25vmin;

.wrap {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  filter: contrast(1.5);
  mix-blend-mode: plus-lighter;
  animation: glow 20s infinite;
  div {
    position: absolute;
    mix-blend-mode: screen;
    width: calc(100% - 2 * #{$blur});
    height: 100%;
    &.red {
      background-color: #ff0000;
      margin-left: 0;
      opacity: 0.9;
    }
    &.green {
      background-color: #00ff00;
      margin-left: $blur;
      opacity: 0.9;
    }
    &.blue {
      background-color: #0000ff;
      margin-left: calc(2 * #{$blur});
      opacity: 0.9;
    }
    &.scan {
      overflow: hidden;
      z-index: 5;
      mix-blend-mode: overlay;
      opacity: 1;
      height: 100%;
      width: 100%;
      pointer-events: none;
      img {
        height: 100%;
        mix-blend-mode: normal;
        opacity: 1;
        image-rendering: initial;
        width: 100%;
      }
    }
    img {
      height: 100%;
      opacity: 0.7;
      width: 100%;
      mix-blend-mode: multiply;
    }
  }
}

@keyframes glow {
  0% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.95;
  }
  100% {
    opacity: 0.7;
  }
}
</style>
