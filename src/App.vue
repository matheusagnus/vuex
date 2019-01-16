<template>
  <div id="app">
    <product-list-one></product-list-one>
    <producti-list-two></producti-list-two>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'

export default {
  // Aqui vai dizer para a Aplicação que quando falarmos de product-list-one estamos falando de ProductListOne e acho que se colocassemos "name: ProductListOne" lá dentro do component ia rodar tb
  components:{
    'product-list-one': ProductListOne,
    'producti-list-two': ProductListTwo
  },
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>
body{
  font-family: Ubuntu;
  color: #555;
}
</style>
