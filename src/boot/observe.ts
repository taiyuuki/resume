import { boot } from 'quasar/wrappers';

type Observer = {
  handler(entry: IntersectionObserverEntry): void;
  cfg: IntersectionObserver;
};

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $observer: Observer;
  }
}

export default boot(async ({ app }) => {
  app.config.globalProperties.$observer = {
    handler(entry: IntersectionObserverEntry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    },
    cfg: {
      root: null,
      rootMargin: '-65px 0px 0px 0px',
      threshold: 0,
    },
  };
});
