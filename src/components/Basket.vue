<template>
    <div class="basket">
        <div class="basket-products">
            <div class="basket-products-header">
                <div class="basket-products-text">
                    <h2 class="basket-products__title">Ваша корзина</h2>
                    <div class="basket-products__count">
                        {{ finalCount }} товар<span>{{ ending }}</span></div>
                </div>
                <div class="basket-products__clear" @click="clear">Очистить корзину</div>
            </div>
            <div v-for="item in $store.state.products" :key = item.title >
                <product :item="item"></product>
            </div>
            <div v-if="!$store.state.products.length" class="basket-products__empty">
                Корзина пуста
            </div>
            <BasketInstall/>
        </div>
        <BasketPrice/>
    </div>
</template>

<script>
    import Product from'./Product.vue';
    import BasketPrice from './BasketPrice.vue'
    import BasketInstall from './BasketInstall.vue'
    import { mapGetters, mapMutations } from 'vuex';

    export default {
        name: 'BasketA',
        components: {
            Product,
            BasketPrice,
            BasketInstall,
        },
        computed: 
            mapGetters(['finalCount', 'ending']),   
        methods: {
            ...mapMutations(['clearBasket']),
            clear() {
                this.clearBasket()
            }
        } 
    }
</script>

<style lang="sass">
     @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap')

    .basket
     display: flex
     justify-content: space-between
     align-items: center   
     &-products
      width: 800px  
      &-header
       display: flex
       justify-content: space-between
       align-items: flex-end
       margin-bottom: 50px
      &-text 
       display: flex
       align-items: flex-end
      &__title 
       font-family: 'Lato'
       font-weight: 700
       font-size: 44px
       color: #1F2432  
       margin-right: 22px
       margin-bottom: 0
      &__count 
       font-family: 'Lato'
       font-weight: 400
       font-size: 18px
       line-height: 145%
       color: #797B86  
       margin-bottom: 3px
      &__clear
       font-family: 'Lato'
       font-weight: 400
       font-size: 14px
       line-height: 150%
       text-align: right
       text-decoration-line: underline
       color: #797B86 
       margin-bottom: 3px  
       cursor: pointer
      &__empty
       font-family: 'Lato'
       font-weight: 400
       font-size: 24px  
    @media (max-width: 1280px) and (min-width: 885px)  
     .basket 
      flex-direction: column
      &-products
        margin-bottom: 50px
    @media (max-width: 884px) and (min-width: 645px)   
     .basket 
      flex-direction: column    
      &-products 
       width: auto
       margin-left: 15px
       margin-right: 15px
       margin-bottom: 50px
    @media (max-width: 644px)    
     .basket 
      flex-direction: column    
      &-products 
       width: auto
       margin-left: 15px
       margin-right: 15px
       margin-bottom: 50px  
       &-header 
        flex-direction: column
        align-items: flex-start 
      
</style>