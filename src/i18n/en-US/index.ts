// This is just an example,
// so you can safely delete all default props below

export default {
  lang: 'English',
  label: 'Language',
  title: "Taiyuuki's Resume",
  name: 'Taiyuuki',
  navi: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    work: 'Work',
  },
  hello: {
    p1: 'Hi,',
    p2: "I'm",
    p3: 'Web developer',
  },
  about:
    'I graduated from Southwest University of Science and Technology, started learning html, css and js around 2012. Begin to systematically learn front-end development in 2022. Currently keen on various front-end technologies centered on vue',
  skills: {
    title: 'My favorite tech stack',
    p1: 'Framework: vue2、vue3',
    p2: 'Vue Ecosystem: pinia/vuex、vue-router、vue-use、vue-i18n',
    p3: 'CSS library: Tailwind',
    p4: 'CSS precompiled: scss',
    p5: 'Syntax for types: typescript',
    p6: 'ajax: axios',
    p7: 'UI Components: quasar、element、ant、vant',
    p8: 'Visualization Library: ECharts',
    p9: 'Generation Tools: vite、webpack',
    p10: 'PWA: work-box',
    p11: 'SSR: Nuxt3',
    p12: 'Web framework for Node.js: express',
    p13: 'Desktop GUI applications: Electron',
    p14: 'Document generator: VitePress',
    p15: 'Version control: git',
  },
  work: {
    text: 'Shown here are some of my recent works',
    w1: {
      name: 'Epidemic Visualization',
      stack: 'vue3 quasar-cli(vite) pinia axios typescript ECharts scss',
      description: 'Visualization application based on ECharts',
    },
    w2: {
      name: 'Mobile cloud music',
      stack: 'vue3 vue-cli vuex axios vue-router typescript less',
      description:
        'Use Netease cloud music interface to realize mobile music player.',
    },
    w3: {
      name: 'Chinese Colors',
      stack: 'yo generator-code typescript webpack',
      description:
        'A VS Code Extension, Automatically prompt the color code according to the preset.',
    },
    w4: {
      name: 'nes-vue',
      stack: 'vue3 typescript vite',
      description: 'A NES(FC) emulator component for Vue 3.',
    },
    w5: {
      name: 'epub manga creator',
      stack:
        'vue3 quasar-cli(webpack) electron pinia vue-router typescript scss',
      description:
        'Generate ePub format comics, use quasar framework, a set of code to build Web and desktop applications.',
    },
  },
};
