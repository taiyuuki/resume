<template>
  <div class="about-me">
    <div :class="{ 'work transform-start gt-sm': true, active }" v-intersection="$observer"
      style="transition-delay:500ms">
      <img src="/public/webp/work2.webp" alt="wrok2">
    </div>
    <ChatMessage>{{ t('about') }}</ChatMessage>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import ChatMessage from 'src/components/ChatMessage.vue'

const { t } = useI18n({ useScope: 'global' });

const active = ref<boolean>(false);
onMounted(() => {
  active.value = true
})
</script>

<script lang="ts">
export default {
  name: 'about-me'
}
</script>

<style lang="scss">
.about-me {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3.5rem auto 0;
}

@media screen and (max-width:620px) {
  .about-me {
    display: block;
    margin: 1rem auto 0;
  }
}

.decoration {
  flex: 1
}
</style>
