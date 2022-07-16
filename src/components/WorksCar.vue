<template>
  <div class="work-carousel">
    <q-carousel class="transform-start" v-intersection="$observer" style="transition-delay:500ms" animated swipeable
      v-model="slide" :prev-icon="mdiArrowLeftCircleOutline" :next-icon="mdiArrowRightCircleOutline" navigation
      transition-duration="800" :navigation-icon="mdiCheckboxBlankCircle"
      :navigation-active-icon="mdiCheckboxBlankCircleOutline" infinite :autoplay="autoplay" control-color="white" arrows
      transition-prev="slide-right" transition-next="slide-left" @mouseenter="autoplay = false"
      @mouseleave="autoplay = true" @update:model-value="resetDescription">
      <q-carousel-slide v-for="item in carousels" :key="item.key" :name="item.key" :img-src="item.img"
        @click="jumpTo(item.href)" />
    </q-carousel>
    <div style="flex:1">

      <ChatMessageVue class="work-text gt-sm">{{ t('work.text') }}</ChatMessageVue>
      <ChatMessageVue>
        <h2 class="work-name">{{ message.name }}</h2>
        <div class="q-gutter-sm">
          <q-badge v-for="item in message.setStacks" :key="item" outline color="accent" :label="item" />
        </div>
        <p class="desc">{{ message.description }}</p>
      </ChatMessageVue>

    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ChatMessageVue from './ChatMessage.vue';
import { useMessage } from 'src/stores/message'
import { useI18n } from 'vue-i18n';
import { mdiArrowRightCircleOutline, mdiArrowLeftCircleOutline, mdiCheckboxBlankCircleOutline, mdiCheckboxBlankCircle } from '@quasar/extras/mdi-v6';
const slide = ref<number>(1);
const autoplay = ref<boolean>(true);
const message = useMessage();
const { t } = useI18n({ useScope: 'global' });
const resetDescription = (n: number | string) => {
  message.setState({
    name: t(`work.w${n}.name`),
    stack: t(`work.w${n}.stack`),
    description: t(`work.w${n}.description`),
  }, n);
}

const carousels = [
  {
    key: 1,
    img: '/public/webp/w1.webp',
    href: 'https://github.com/taiyuuki/view-map'
  },
  {
    key: 2,
    img: '/public/webp/w2.webp',
    href: 'https://github.com/taiyuuki/cloud_music_app_vue3'
  }, {
    key: 3,
    img: '/public/webp/w3.webp',
    href: 'https://marketplace.visualstudio.com/items?itemName=taiyuuki.chinese-color'
  }, {
    key: 4,
    img: '/public/webp/w4.webp',
    href: 'https://www.npmjs.com/package/nes-vue'
  }, {
    key: 5,
    img: '/public/webp/w5.webp',
    href: 'https://github.com/taiyuuki/elepub'
  }
];

const jumpTo = (href: string) => {
  window.open(href, '_blank')
}

onMounted(() => {
  resetDescription(message.index);
})
</script>

<style lang="scss">
.work-carousel {
  display: flex;
  justify-content: space-between;
}

.q-carousel {
  max-width: 700px;
  margin: 0 auto;
  flex: 1;

  div {

    overflow: hidden;
  }

  .q-btn {
    .q-btn__content {
      background-color: $primary  !important;
      border-radius: 100% !important;

      &:hover {
        background-color: #15559a !important;
      }
    }
  }
}

.q-carousel__slide {
  background-position: center !important;
  background-size: 100% auto !important;
  background-repeat: no-repeat !important;
  transition: transform 1s ease-in;
  transform: scale(1.4);
  cursor: pointer;

  &:hover {
    transform: scale(1);
  }

}

.work-text {
  color: #000;
  font-size: 1.2rem;
}

.work-name {
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
  padding: 10px 0;
  color: #000;
}

.desc {
  font-size: 16px;
  color: $primary;
  padding: 5px 0;
  margin: 5px 0;
}

@media screen and (max-width:1023px) {
  .work-carousel {
    display: block;
  }
}
</style>
