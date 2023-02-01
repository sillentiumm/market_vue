<template>
    <div class="main">
        <h3 class="main__title">Итого</h3>
        <div class="main-element">
            <span>Сумма заказа</span>
            <span>{{ finalPrice }} ₽</span>
        </div>
        <div class="main-element">
            <span>Количество</span>
            <span>{{finalCount}} шт</span>
        </div>
        <div class="main-element">
            <span>Установка</span>
            <span v-if="$store.state.checkbox">Да</span>
            <span v-if="!$store.state.checkbox">Нет</span>
        </div>
        <hr>
        <div class="main-price">
            <div>Стоимость товаров</div>
            <span>{{ finalPrice }} ₽</span>
        </div>
        <button class="main__btn" @click="data">Оформить заказ</button>
        <button class="main__btn btn_click">Купить в 1 клик</button>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex"
    export default {
        name: 'BasketPrice',
        computed: 
            mapGetters(['finalPrice', 'finalCount']),  
        methods: {
            ...mapMutations(['sendData']),
            data() {
                this.sendData()
            }
        }     
    }
</script>

<style lang="sass">
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto:wght@400;500;700&display=swap')
    * 
     margin: 0
     padding: 0
     box-sizing: border-box
    .main 
     width: 425px
     background: #F6F8FA
     border-radius: 5px   
     padding: 35px 30px
     &__title
      font-family: 'Lato'
      font-weight: 600
      font-size: 24px
      color: #1F2432 
      margin-bottom: 30px
     &-element 
      display: flex
      justify-content: space-between   
      font-family: 'Lato'
      font-weight: 500
      font-size: 16px
      color: #1F2432
      margin-bottom: 18px
     &-price 
      display: flex
      justify-content: space-between 
      align-items: flex-end
      font-family: 'Lato'
      font-weight: 600
      font-size: 18px
      color: #1F2432
      margin-top: 10px
      margin-bottom: 30px
      span
       font-family: 'Roboto' 
       font-weight: 700
       font-size: 26px
       line-height: 130%
       letter-spacing: 0.005em
       color: #1F2432
     &__btn
      width: 365px
      height: 54px
      color: #fff
      background: #0069B4
      border-radius: 4px    
      font-family: 'Lato'
      font-weight: 600
      font-size: 18px
      cursor: pointer
    .btn_click  
     border: 1px solid #0069B4 
     background: #fff
     color: #0069B4
     margin-top: 12px
      
</style>