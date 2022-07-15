<template>
  <div class="progress-bar">
    <div class="bar-top">
      <p class="number">{{ skill.progress }}%</p>
      <q-icon :name="skill.icon" color="primary" /> {{ skill.name }}
    </div>
    <div class="progress" :style="`width:${skill.progress}%`"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps(['skill']);
</script>

<style lang='scss'>
.progress-bar {
  border-radius: 5px;
  background-color: #fff;
  margin: 0.5rem 0;
  box-shadow: 0 0 50px #f1f0ed;
  font-size: 1.5rem;
  position: relative;
  transition: transform 200ms ease-in;

  &:hover {
    transform: scale(1.05)
  }

  .bar-top {
    height: 3rem;
    line-height: 2rem;
    padding: 0.5rem;

    .number {
      float: right;
      font-size: 14px;
      font-weight: bold;
      color: $primary;
    }
  }

  .progress {
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: $primary;
    border-radius: 3px;
    height: 6px;
  }
}
</style>
