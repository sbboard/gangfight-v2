<script lang="ts" setup>
const vertBarHeight = ref(0);
const horzBarWidth = ref(0);
const resize = () => {
  if (window.innerHeight > window.innerWidth) {
    horzBarWidth.value = 0;
    vertBarHeight.value = (window.innerHeight - window.innerWidth) / 2;
  } else {
    vertBarHeight.value = 0;
    horzBarWidth.value = (window.innerWidth - window.innerHeight) / 2;
  }
};

const randomNumber = computed(() => {
  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;

  while (num1 === num2) {
    num2 = Math.floor(Math.random() * 10) + 1;
  }

  return [num1, num2];
});

onMounted(() => {
  resize();
  window.addEventListener("resize", resize);
});
onUnmounted(() => {
  window.removeEventListener("resize", resize);
});
</script>

<template>
  <div id="screen">
    <div class="topBar" :style="`height:${vertBarHeight}px`"></div>
    <div class="leftBar" :style="`width:${horzBarWidth}px`">
      <div class="leftWrap">
        <div class="fortune">
          "Challenge yourself to enjoy the exclusive flavors of Gang Fight."
        </div>
        <div class="leftSign">
          <span>ギャングファイト</span>
          <div class="signLine"></div>
        </div>
      </div>
    </div>
    <main>
      <slot></slot>
    </main>
    <div class="rightBar" :style="`width:${horzBarWidth}px`">
      <crtImage class="crt" :num="randomNumber[0]" />
      <crtImage class="crt" :num="randomNumber[1]" />
    </div>
    <div class="bottomBar" :style="`height:${vertBarHeight}px`"></div>
  </div>
</template>

<style lang="scss">
html {
  overflow: hidden;
  background-color: black;
}
#screen {
  .topBar,
  .rightBar,
  .bottomBar,
  .leftBar {
    position: absolute;
    overflow: hidden;
  }

  .topBar,
  .bottomBar {
    height: calc(100vw - 2vmin);
    padding: 0 2vmin;
  }

  .rightBar,
  .leftBar {
    height: calc(100vh - 2vmin);
    padding: 2vmin 0;
  }

  .topBar {
    top: 0;
    left: 0;
    right: 0;
  }

  .rightBar {
    top: 0;
    right: 0;
    bottom: 0;
    background-image: url("assets/images/sidebar/sidebar.jpg");
    background-size: auto 100%;
    background-position: 0;
    white-space: nowrap;
    .crt {
      width: 15.5vmin;
      height: 15.5vmin;
      position: relative;
      display: inline-block;
    }
  }

  .bottomBar {
    bottom: 0;
    left: 0;
    right: 0;
  }

  .leftBar {
    top: 0;
    bottom: 0;
    left: 0;
    background-image: url("assets/images/sidebar/sidebar.jpg");
    background-size: auto 100%;
    background-position: 100%;
    .leftWrap {
      width: fit-content;
      position: absolute;
      white-space: nowrap;
      right: 0;
      margin-right: 2vmin;
      .fortune {
        padding: 0;
        padding-top: 0.25em;
        font-size: 2.5vh;
        color: #fafdf7;
        font-style: italic;
      }
      .leftSign {
        font-family: Logo;
        writing-mode: vertical-lr;
        display: inline-flex;
        align-items: center;
        vertical-align: top;
        font-size: 8vh;
        width: 10.5vh;
        width: 9.5vh;
        padding-top: 0.15em;
        height: 85vh;
        color: #ffcce0;
        text-shadow: 1px 1px 2px #000, 0 0 10px #fe0063, 0 0 20px #fe0063,
          0 0 10px #fe0063;
        box-shadow: 0 0 10px 0 #00c4ff;
        margin-left: 0.1em;
        border: 0.75vh double #9affff;
        border-radius: 15px;
        background-color: rgba(0, 0, 0, 0.3);
        letter-spacing: -0.2em;
        span {
          height: 73vh;
        }
        .signLine {
          width: 0.75vh;
          height: 10vh;
          background-color: #ffcce0;
          display: block;
          box-shadow: 1px 1px 2px #000, 0 0 10px #fe0063, 0 0 20px #fe0063,
            0 0 10px #fe0063;
        }
      }
      .fortune {
        color: white;
        writing-mode: vertical-rl;
        display: inline-block;
        vertical-align: top;
      }
    }
  }
}
main {
  height: 100vmin;
  width: 100vmin;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  -webkit-box-shadow: inset 8px 0 15px -5px rgba(0, 0, 0, 0.8),
    inset -8px 0 15px -5px rgba(0, 0, 0, 0.8);
  box-shadow: inset 8px 0 15px -5px rgba(0, 0, 0, 0.8),
    inset -8px 0 15px -5px rgba(0, 0, 0, 0.8);
}
</style>
