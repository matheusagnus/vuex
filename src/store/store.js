// Aqui diz para o Store que estamos usando Vue e Vuex
import Vue from 'vue';
import Vuex from 'vuex';

// Aqui dizemos para o Vue que ele vai usar o Vuex para o gerenciamento de estados
Vue.use(Vuex);

// Aqui instaciamos os dados que queremos que sejam reproduzidos no estado
export const storeData = new Vuex.Store({
    strict: true,
    // o estado dos dados
    state: {
        products: [
            {name: 'Banana Skin', price: 20},
            {name: 'Shiny Star', price: 40},
            {name: 'Green Shells', price: 60},
            {name: 'Red Shells', price: 80}
          ]
    },
    // os dados para serem puxados pelo getter vão passar por esse tratamento
    getters: {
        saleProducts: state => {
            var saleProducts = state.products.map( product => {
                return {
                  name: '**' + product.name + '**',
                  price: product.price / 2
                }
              });
              return saleProducts;
            }
        },
    // essa mutation vai alterar price dos dados
    mutations: {
        reducePrice: state => {
            state.products.forEach( product => {
                product.price -= 1;
              })
        }
    },
    actions: {
        reducePrice2: context => {
            setTimeout(function(){
                context.commit('reducePrice')
            }, 2000)
        }
    }
})