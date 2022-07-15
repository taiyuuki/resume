<template>
  <div class="skills">
    <div class="bars">
      <template v-for="(item) in skills" :key="item.name">
        <PB class="transform-start" v-intersection="$observer" :skill="item" />
      </template>
    </div>
    <ChatMessageVue class="skills-text">
      <h2 class="skills-title">{{ t('skills.title') }}</h2>
      <p v-for="(_, i) in Array(15)" :key="i">{{ t(`skills.p${i + 1}`) }}</p>
    </ChatMessageVue>
  </div>
</template>

<script setup lang="ts">
import PB from './ProgressBar.vue'
import ChatMessageVue from './ChatMessage.vue';
import { mdiLanguageHtml5, mdiLanguageCss3, mdiLanguageJavascript, mdiLanguageTypescript, mdiVuejs, mdiLanguageJava, mdiNodejs, mdiLanguageMarkdown, mdiGit } from '@quasar/extras/mdi-v6'
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

    div {
      font-size: 16px;
    }

    p {
      line-height: 1.5;
      margin: 0.5em 0;
      padding: 0;
      font-size: 14px;
    }
  }
}

@media screen and (max-width:620px) {
  .skills {
    display: block;
  }
}
</style>
