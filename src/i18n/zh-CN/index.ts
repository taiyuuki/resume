// This is just an example,
// so you can safely delete all default props below

export default {
  lang: '中文',
  label: '选择语言',
  title: '大雄的简介',
  name: '大雄',
  navi: {
    home: '主页',
    about: '关于',
    skills: '技能',
    work: '作品',
  },
  hello: {
    p1: '你好，',
    p2: '我是',
    p3: '一名Web开发者',
  },
  about: {
    p1: '我毕业于西南科技大学',
    p2: '2012年左右开始接触html、css、js',
    p3: '2022年开始系统学习前端开发',
    p4: '现在热衷于以vue为核心的各类前端技术',
  },
  skills: {
    title: '我喜爱的技术栈',
    p1: '核心框架：',
    p2: 'vue生态：',
    p3: 'CSS库：',
    p4: 'CSS预编译：',
    p5: '类型检测：',
    p6: 'ajax请求：',
    p7: 'UI组件：',
    p8: '数据可视化：',
    p9: '打包：',
    p10: 'PWA框架：',
    p11: '桌面端框架：',
    p12: '文档构建：',
    p13: '版本管理：',
  },
  work: {
    text: '这是我最近的一些作品',
    w1: {
      name: '疫情可视化应用',
      stack: 'vue3 quasar-cli(vite) pinia axios typescript ECharts scss',
      description: '基于ECharts的可视化web应用',
    },
    w2: {
      name: '移动端云音乐',
      stack: 'vue3 vue-cli vuex axios vue-router typescript less',
      description: '借用网易云音乐接口，实现移动端音乐播放器。',
    },
    w3: {
      name: '中国色',
      stack: 'yo generator-code typescript webpack',
      description: 'VS Code 代码提示扩展，根据预设的数据，自动提示颜色代码。',
    },
    w4: {
      name: 'nes-vue',
      stack: 'vue3 typescript vite',
      description: '可用于vue3的NES(FC)游戏模拟器组件',
    },
    w5: {
      name: 'epub漫画生成器',
      stack:
        'vue3 quasar-cli(webpack) Electron pinia vue-router typescript scss',
      description:
        '一键生成epub格式的漫画，使用quasar框架，一套代码构建Web、桌面双端应用。',
    },
  },
};
