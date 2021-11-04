import { types } from 'mobx-state-tree';

export const AppStore = types
  .model('AppStore', {
    test: true,
  })
  .views(self => ({
    getTest() {
      return self.test;
    },
  }))
  .actions(() => ({
    afterCreate() {
      console.log('appStore afterCreate');
    },
    beforeDestroy() {
      console.log('appStore beforeDestroy');
    },
  }));
