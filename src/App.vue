<template>
  <div class="container">
    <BasketMini/>
    <Basket/>
    <Viewed/> 
  </div>
</template>

<script>
import Basket from './components/Basket.vue'
import BasketMini from './components/BasketMini.vue'
import Viewed from './components/Viewed.vue'

export default {
  name: 'App',
  components: {
    Basket,
    BasketMini,
    Viewed
  }
}
</script>

<style lang="sass">
  .container 
   max-width: 1280px 
   margin: 0 auto
</style>
