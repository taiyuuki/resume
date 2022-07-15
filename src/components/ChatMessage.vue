<template>
  <div class="about transform-start" v-intersection="$observer">
    <div class="text">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.about {
  flex: 1;
  background-image: url('src/assets/avatar.png');
  min-height: 80px;
  margin: 20px auto;
  padding-left: 60px;
  background-size: 61px 79px;
  background-position: left top;

  .text {
    display: block;
    border-radius: 8px;
    padding: 20px;
    font-size: 16px;
    border: solid 1px #abc3de;
    background-color: #eff6fc;
    color: $primary;
  }

  background-repeat: no-repeat;
}
</style>
