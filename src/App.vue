<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

html {
  scroll-behavior: smooth;
}

@font-face {
  font-family: Emoji;
  src: local('Apple Color Emojiji'), local('Segoe Emoji'), local('Noto Color Emoji');
  unicode-range: U+1F000-1F644, U+203C-3299;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, Emoji, 'Helvetica', Arial, sans-serif;
}

.transform-start {
  opacity: 0;
  transform: translateX(-100px);
  transition: all 600ms cubic-bezier(.53, .35, .59, 1.48);
}

.active {
  transform: translateX(0px);
  opacity: 1;
}

.work {
  overflow: hidden;
  flex: 1;
  border-radius: 5px;
  font-size: 0;
}
</style>
