<template>
  <div class="footer-bar">
    <div class="taiyuuki q-py-lg">Taiyuuki</div>
    <a href="https://github.com/taiyuuki/resume" target="_blank">
      <img @load="isLoad" :style="noneDisplay" src="https://img.shields.io/github/stars/taiyuuki/resume?style=social"
        alt="resume" />
      <q-skeleton v-if="skeleton" type="QBadge" />
    </a>
    <div class="q-py-sm">Copyright © 2022 Taiyuuki</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const skeleton = ref<boolean>(true)
const noneDisplay = ref<string>('display:none')
const isLoad = () => {
  noneDisplay.value = '';
  skeleton.value = false;
}
</script>

<style lang="scss">
.footer-bar {
  background-color: $primary;
  font-family: 'Poppins', sans-serif;
  color: #fffef9;
  margin-top: 5rem;
  text-align: center;

  .taiyuuki {
    font-size: 2rem;
    font-weight: bold;
  }

  a {
    display: inline-block;
    cursor: pointer;

    img:hover {
      filter: opacity(0.8)
    }
  }
}
</style>
