import Vue from 'vue'
import App from './App.vue'
// Importando o arquivo store.js
import { storeData } from './store/store'


new Vue({
  // Instanciando o store
  store: storeData,

  el: '#app',
  render: h => h(App)
})
