import Vue from 'vue';
import App from './App.vue';

import store from './store/index';
import router from './routes';

import './css/main.css';

new Vue({
  el: '#sudoku',
  store,
  router,
  render: h => h(App)
});
