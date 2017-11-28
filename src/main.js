import Vue from 'vue'
import App from './App.vue'

import AppMessage from './components/Message.vue';
import AppQuestion from './components/Question.vue';
import AppStartScreen from './components/StartScreen.vue';
import AppResaultScreen from './components/ResaultScreen.vue';


Vue.component('AppMessage', AppMessage);
Vue.component('AppQuestion', AppQuestion);
Vue.component('AppStartScreen', AppStartScreen);
Vue.component('AppResaultScreen', AppResaultScreen);

new Vue({
  el: '#app',
  render: h => h(App)
});
