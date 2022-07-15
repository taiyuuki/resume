<template>
  <div class="home-welcom">
    <h1 class="hello">
      <p v-intersection="$observer" :class="{ 'transform-start': true, 'active': active }">{{
          t('hello.p1')
      }}</p>
      <p v-intersection="$observer" :class="{ 'transform-start': true, 'active': active }">
        {{ t('hello.p2') }} <span class="text-primary">{{
            t('name')
        }}</span> </p>
      <p v-intersection="$observer" :class="{ 'transform-start': true, 'active': active }">
        {{ t('hello.p3') }}</p>
      <q-btn v-intersection="$observer" :class="{ 'transform-start': true, 'active': active }" color="primary"
        :icon="mdiGithub" target="_blank" size="md" label="github" href="https://github.com/taiyuuki" />
    </h1>
    <div class="work gt-sm" v-intersection="$observer" :class="{ 'transform-start': true, 'active': active }"
      style="transition-delay:500ms">
      <img src="/public/webp/work1.webp" alt="work1">
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n'
import { mdiGithub } from '@quasar/extras/mdi-v6'
const { t } = useI18n({ useScope: 'global' })
let active = ref<boolean>(false);

onMounted(() => {
  active.value = true;
})

</script>

<script lang="ts">
export default {
  name: 'home-welcom'
}
</script>

<style lang="scss">
:root {
  --font-size-big: 2.5rem;
  --margin-top: 4rem;
}

@media screen and (min-width:960px) {
  :root {
    --font-size-big: 3.5rem;
    --margin-top: 6rem;
  }
}

.home-welcom {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: var(--margin-top) auto 0;
}

@media screen and (max-width:620px) {
  .home-welcom {
    display: block;
    margin: 2rem auto 0;

    h1 {
      margin: 0;
    }
  }
}


.hello {
  font-family: Arial, Helvetica, '黑体', sans-serif;
  font-weight: bold;
  flex: 1;

  p {
    font-size: var(--font-size-big);
    line-height: 1.2em;
  }
}
</style>
