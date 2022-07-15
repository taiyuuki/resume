import { defineStore } from 'pinia';

export const useMessage = defineStore('message', {
  state() {
    return {
      index: 1 as number | string,
      name: '',
      stack: '',
      description: '',
    };
  },
  getters: {
    setStacks: (state) => {
      return state.stack.split(' ');
    },
  },
  actions: {
    setState(message: Record<string, string>, n?: number | string) {
      this.index = n ? n : this.index;
      this.name = message.name;
      this.stack = message.stack;
      this.description = message.description;
    },
  },
});
