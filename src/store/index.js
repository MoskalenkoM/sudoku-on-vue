import Vue from 'vue';
import Vuex from 'vuex';

import blocks from './modules/blocks';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    blocks
  },
  strict: process.env.NODE_ENV !== 'production'
});
