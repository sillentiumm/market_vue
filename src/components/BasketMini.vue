<template>
    <div class="mini">
        <div class="mini-img">
            <img src="../img/Basket.svg" alt="">
        </div>
        <div class="mini-text">
            <div class="mini__basket">Ваша корзина</div>
            <div class="mini__count">{{ differentsProductCount }} товар<span>{{ ending }}</span></div>
            <div class="mini__price">{{finalPrice}} ₽</div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
    export default {
        name: 'BasketMini',
        computed: mapGetters(['finalPrice', 'ending', 'differentsProductCount']),
    }
</script>

<style lang="sass">
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap')
    .mini
     position: relative
     display: flex
     justify-content: flex-end
     align-items: center 
     margin-top: 40px
     margin-bottom: 140px
     &-img 
      margin-right: 12px  
     &-text 
      display: flex
      flex-direction: column
      justify-content: start   
     &__basket
      font-family: 'Lato'
      font-weight: 400
      font-size: 14px
      color: #1F2432
     &__count 
      font-family: 'Lato'
      font-weight: 400
      font-size: 12px
      color: #797B86 
     &__price 
      font-family: 'Lato'
      font-weight: 400
      font-size: 12px
      color: #1F2432
    @media (max-width: 1300px) 
     .mini 
      margin-right: 15px      
</style>