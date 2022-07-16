<template>
  <div class="skills">
    <div class="bars">
      <template v-for="(item) in skills" :key="item.name">
        <PB class="transform-start" v-intersection="$observer" :skill="item" />
      </template>
    </div>
    <ChatMessageVue class="skills-text">
      <h2 class="skills-title">{{ t('skills.title') }}</h2>
      <!-- <p v-for="(_, i) in Array(15)" :key="i">{{ t(`skills.p${i + 1}`) }}</p> -->
      <p class="q-gutter-sm">{{ t('skills.p1') }}
        <q-badge outline color="accent" label="vue2" />
        <q-badge outline color="accent" label="vue3" />
      </p>
      <p class="q-gutter-sm">{{ t('skills.p2') }}
        <q-badge outline color="accent" label="pinia" />
        <q-badge outline color="accent" label="vuex" />
        <q-badge outline color="accent" label="vue-router" />
        <q-badge outline color="accent" label="vue-use" />
        <q-badge outline color="accent" label="vue-i18n" />
      </p>
      <p class="q-gutter-sm">{{ t('skills.p3') }}
        <q-badge outline color="accent" label="Tailwind" />
      </p>
      <p class="q-gutter-sm">{{ t('skills.p4') }}
        <q-badge outline color="accent" label="scss" />
        <q-badge outline color="accent" label="less" />
      </p>
      <p class="q-gutter-sm">{{ t('skills.p5') }}
        <q-badge outline color="accent" label="typescript" />
      </p>
      <p class="q-gutter-sm">{{ t('skills.p6') }}
        <q-badge outline color="accent" label="axios" />
      </p>
      <p class="q-gutter-sm">{{ t('skills.p7') }}
        <q-badge outline color="accent" label="quasar" />
        <q-badge outline color="accent" label="element" />
        <q-badge outline color="accent" label="AntDsign" />
        <q-badge outline color="accent" label="vant" />
      </p>
      <p class="q-gutter-sm">{{ t('skills.p8') }}
        <q-badge outline color="accent" label="ECharts" />
        <q-badge outline color="accent" label="ApexCharts" />
      </p>
      <p class="q-gutter-sm">{{ t('skills.p9') }}
        <q-badge outline color="accent" label="vite" />
        <q-badge outline color="accent" label="webpack" />
      </p>
      <p class="q-gutter-sm">{{ t('skills.p10') }}
        <q-badge outline color="accent" label="work-box" />
      </p>
      <p class="q-gutter-sm">{{ t('skills.p11') }}
        <q-badge outline color="accent" label="Electron" />
      </p>
      <p class="q-gutter-sm">{{ t('skills.p12') }}
        <q-badge outline color="accent" label="VitePress" />
      </p>
      <p class="q-gutter-sm">{{ t('skills.p13') }}
        <q-badge outline color="accent" label="git" />
      </p>
    </ChatMessageVue>
  </div>
</template>

<script setup lang="ts">
import PB from './ProgressBar.vue'
import ChatMessageVue from './ChatMessage.vue';
import { mdiLanguageHtml5, mdiLanguageCss3, mdiLanguageJavascript, mdiLanguageTypescript, mdiVuejs, mdiLanguageJava, mdiNodejs, mdiSass, mdiLanguageMarkdown, mdiGit } from '@quasar/extras/mdi-v6'
import { useI18n } from 'vue-i18n';
const { t } = useI18n({ useScope: 'global' });
const skills = [
  {
    name: 'HTML5',
    progress: 75,
    icon: mdiLanguageHtml5
  },
  {
    name: 'CSS3',
    progress: 65,
    icon: mdiLanguageCss3
  },
  {
    name: 'Javascript',
    progress: 70,
    icon: mdiLanguageJavascript
  },
  {
    name: 'Typescript',
    progress: 60,
    icon: mdiLanguageTypescript
  },
  {
    name: 'vue2/vue3',
    progress: 70,
    icon: mdiVuejs
  },
  {
    name: 'nodejs',
    progress: 60,
    icon: mdiNodejs
  },
  {
    name: 'scss',
    progress: 55,
    icon: mdiSass
  },
  {
    name: 'java',
    progress: 30,
    icon: mdiLanguageJava
  },
  {
    name: 'git',
    progress: 65,
    icon: mdiGit
  },
  {
    name: 'Markdown',
    progress: 70,
    icon: mdiLanguageMarkdown
  }
]
</script>
<script lang="ts">
export default {
  name: 'profesional-skills'
}
</script>
<style lang="scss">
.skills {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .bars {
    flex: 1;
  }

  .skills-text {
    color: $primary;

    .skills-title {
      font-size: 1.5rem;
      line-height: 1.5rem;
      font-weight: bold;
      font-size: 20px;
      margin: 5px 0;
      padding: 5px 0;
      color: #000;
    }

    p {
      line-height: 1.5;
      margin: 0.5em 0;
      padding: 0;
    }
  }
}

@media screen and (max-width:1023px) {
  .skills {
    display: block;
  }
}
</style>
