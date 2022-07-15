<template>
  <q-layout view="hHh lpR fFf">
    <!-- 导航栏 -->
    <q-header elevated class="bg-white text-primary shadow-1">
      <q-toolbar class="tool-bar justify-between">
        <!-- 只在大屏幕上显示 -->
        <q-toolbar-title class="text-weight-bold gt-sm">
          {{ t('name') }}
        </q-toolbar-title>
        <q-tabs v-model="tab" no-caps mobile-arrows class="bg-white text-black" active-color="primary">
          <!-- 大屏幕显示 -->
          <q-tab @click="goAnchor('home')" class="gt-sm" :icon="mdiHomeAccount" ripple name="home"
            :label="t('navi.home')" />
          <q-tab @click="goAnchor('about')" class="gt-sm" :icon="mdiCardAccountDetailsOutline" ripple name="about"
            :label="t('navi.about')" />
          <q-tab @click="goAnchor('skills')" class="gt-sm" :icon="mdiVuejs" ripple name="skills"
            :label="t('navi.skills')" />
          <q-tab @click="goAnchor('work')" class="gt-sm" :icon="mdiLaptop" ripple name="work" :label="t('navi.work')" />

          <!-- 小屏幕显示 -->
          <q-tab @click="goAnchor('home')" class="lt-md q-pa-none" :icon="mdiHomeAccount" ripple name="home" />
          <q-tab @click="goAnchor('about')" class="lt-md q-pa-none" :icon="mdiCardAccountDetailsOutline" ripple
            name="about" />
          <q-tab @click="goAnchor('skills')" class="lt-md q-pa-none" :icon="mdiVuejs" ripple name="skills" />
          <q-tab @click="goAnchor('work')" class="lt-md q-pa-none" :icon="mdiLaptop" ripple name="work" />
        </q-tabs>
        <q-select :dropdown-icon="mdiArrowDownDropCircleOutline" filled dense borderless emit-value map-options
          color="positive" label-color="primary" v-model="locale" :options="localeOptions" :label="t('label')"
          style="width:110px" @update:model-value="resetLanguage" />
      </q-toolbar>
    </q-header>

    <q-page-container class="page-content">
      <HomeWelcom />
      <h1 class="page-hr transform-start" v-intersection="$observer" ref="oAbout">
        <span>{{ t('navi.about') }}</span>
      </h1>
      <AboutMe />
      <h1 class="page-hr transform-start" v-intersection="$observer" ref="oSkills"> <span>{{ t('navi.skills') }}</span>
      </h1>
      <ProfesionalSkills />
      <h1 class="page-hr transform-start" v-intersection="$observer" ref="oWork"> <span>{{ t('navi.work') }}</span>
      </h1>
      <WorksCar />

    </q-page-container>
    <FooterBar />
  </q-layout>
</template>

<script lang="ts">
export default {
  name: 'MainLayout',
};
</script>

<script lang="ts" setup>
import HomeWelcom from 'components/HomeWelcom.vue'
import AboutMe from 'components/AboutMe.vue'
import ProfesionalSkills from 'components/ProfesionalSkills.vue'
import WorksCar from 'components/WorksCar.vue'
import FooterBar from 'components/FooterBar.vue'
import { ref, onMounted } from 'vue'
import { debounce } from 'quasar'
import { useMessage } from 'src/stores/message'
import { useI18n } from 'vue-i18n'
import { mdiHomeAccount, mdiCardAccountDetailsOutline, mdiVuejs, mdiLaptop, mdiArrowDownDropCircleOutline } from '@quasar/extras/mdi-v6'

const TABNAME = {
  HOME: 'home',
  ABOUT: 'about',
  SKILLS: 'skills',
  WORK: 'work',
}
const { locale, t } = useI18n({ useScope: 'global' })
const localeOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'zh-CN', label: '中文' }
]
const message = useMessage();
let tab = ref<string>(TABNAME.HOME);
const html = document.documentElement;
const oAbout = ref(null);
const oSkills = ref(null);
const oWork = ref(null);
const resetLanguage = () => {
  message.setState({
    name: t(`work.w${message.index}.name`),
    stack: t(`work.w${message.index}.stack`),
    description: t(`work.w${message.index}.description`),
  })
}

function setOffsetTop(el: HTMLElement | null) {
  if (el) {
    html.scrollTop = el.offsetTop - 60;
  } else {
    html.scrollTop = 0;
  }
}

function getOffsetTop(el: HTMLElement | null) {
  if (el) {
    return el.offsetTop;
  } else {
    return 0;
  }
}

const goAnchor = (target: string) => {
  switch (target) {
    case TABNAME.HOME:
      setOffsetTop(null);
      break;
    case TABNAME.ABOUT:
      setOffsetTop(oAbout.value);
      break;
    case TABNAME.SKILLS:
      setOffsetTop(oSkills.value);
      break;
    case TABNAME.WORK:
      setOffsetTop(oWork.value)
      break;
    default:
      setOffsetTop(null)
      break;
  }
}

const onScroll = () => {
  let scrollTop = html.scrollTop;
  if (scrollTop <= 200) {
    tab.value = TABNAME.HOME
  } else {
    if (scrollTop < getOffsetTop(oAbout.value)) {
      tab.value = TABNAME.ABOUT
    } else if (scrollTop < getOffsetTop(oSkills.value)) {
      tab.value = TABNAME.SKILLS
    } else {
      tab.value = TABNAME.WORK
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', debounce(onScroll, 100))
})


</script>

<style lang="scss">
.tool-bar,
.page-content {
  width: 75%;
  margin: 0 auto;
}

.page-hr {
  color: $primary;
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  margin-top: 5rem;

  span {
    border-bottom: 4px solid $primary;
  }
}

@media screen and (max-width:620px) {

  .tool-bar,
  .page-content {
    width: 100%;
    margin: 0 auto;
  }

  .page-content {
    padding: 20px;
  }

  .page-hr {
    margin-top: 1rem;
  }
}
</style>
