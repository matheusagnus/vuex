<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
        <!-- Aqui é onde o componente chama a action -->
        <li v-for="product in products" v-bind:key="product.id">
            <span class='name'>{{ product.name }}</span>
            <span class='price'>${{ product.price }}</span>
        </li>
    </ul>
    <ul>
        <!-- Aqui é com o Getter-->
        <li v-for="product in saleProducts" v-bind:key="product.id">
            <span class='name'>{{ product.name }}</span>
            <span class='price'>${{ product.price }}</span>
        </li>
    </ul>
    <button @click="reducePrice">Reduce Price</button>
    <button @click="reducePrice2">Reduce Price 2</button>
  </div>
</template>

<script>
export default {
    // Aqui é onde a Action chama lá da do Backend o dado que ela quer, aqui ele só puxa o estado em que ela está
    computed: {
        products() {
            return this.$store.state.products;
        },
        // Aqui a Action é o getter que puxa o dado manipulado dentro da store e passa para o component
        saleProducts() {
         return this.$store.getters.saleProducts;
        }
    },
    // Aqui é onde o Mutation, é um função dentro do methods que retorna a mutation que foi feita dentro do store
    methods: {
      reducePrice: function(){
        this.$store.commit('reducePrice');
      },
      reducePrice2: function(){
        this.$store.dispatch('reducePrice2');
      }
    }
}
</script>

<style>
#product-list-one{
  background: #FFF8B1;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul{
  padding: 0;
}
#product-list-one li{
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255,255,255,0.7);
}
.price{
  font-weight: bold;
  color: #E8800C;
}
</style>
