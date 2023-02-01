<template>
    <div class="product">
        <div class="product-header">
            <div class="product-img">
                <img :src=" require('../img/' + item.img)" alt="">
            </div>
            <div class="product-text">
                <div class="product__title">{{item.title}}</div>
                <div class="product__descr">{{item.descr}}</div>
                <div class="product__number">{{item.number}}</div>
            </div>
        </div>

        <div class="product-footer">
            <div class="product-count">
                <div class="product-count-buttons">
                    <button class="product-count__btn" @click="decrement">-</button>
                    <div class="product-count__btn">{{ item.count }}</div>   
                    <button class="product-count__btn" @click="increment">+</button>  
                </div>
            <div v-if="item.count>1" class="product-count__price"> {{ item.price }} ₽/шт.</div>    
        </div>
        <div class="product-price">{{ item.price * item.count }} ₽</div>
        </div>
        
        <div class="product-close" @click="close"></div>
    </div>
    <hr class="product_line">
</template>

<script>
    import { mapMutations} from "vuex"
    export default {
        name: 'ProductItem',
        props: ['item'],
        methods: {
            ...mapMutations(['incrementProduct']),
            increment() {
                this.incrementProduct(this.item)
            },
            ...mapMutations(['decrementProduct']),
            decrement() {
                this.decrementProduct(this.item)
            },
            ...mapMutations(['closeProduct']),
            close() {
                this.closeProduct(this.item.id)
            },
        }
    }
</script>

<style lang="sass">
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto:wght@400;500;700&display=swap')
    .product 
     position: relative   
     display: flex
     justify-content: space-between
     align-items: center
     margin-top: 15px  
     &-header
      display: flex  
     &-footer  
      display: flex
      justify-content: space-between
      align-items: center   
     &-img 
      margin-left: 15px
      img 
       width: 100px
       height: 100px
     &-text 
      width: 263px
      display: flex
      flex-direction: column
      margin-left: 31px
     &__title 
      color: #1F2432
      font-family: 'Lato'
      font-weight: 600
      font-size: 16px
      line-height: 145%
     &__descr 
      font-family: 'Lato'
      font-weight: 400
      font-size: 12px
      line-height: 150%
      color: #2C3242
     &__number 
      font-family: 'Lato'
      font-weight: 400
      font-size: 14px
      line-height: 150%
      color: #797B86 
     &-count 
      width: 106px
      display: flex
      flex-direction: column
      align-items: center
      border-radius: 4px
      margin-right: 84px
      &-buttons
       display: flex  
       justify-content: space-between 
       margin-bottom: 8px
      &__price
       font-family: 'Roboto'
       font-weight: 400
       font-size: 12px
       color: #1F2432  
      &__btn 
       width: 34px
       height: 34px 
       display: flex
       justify-content: center
       align-items: center
       font-family: 'Lato'
       font-weight: 400
       font-size: 14px
       line-height: 150%
       background: #F6F8FA
       color: #1F2432
       border: none
       &:nth-child(1)
        border-radius: 4px 0 0 4px
        font-size: 20px  
        cursor: pointer
       &:nth-child(3)
        border-radius: 0 4px 4px 0
        font-size: 16px
        cursor: pointer
     &-price  
      font-weight: 500
      font-size: 18px
      line-height: 145%
      color: #1F2432
      margin-right: 53px
     &-close 
      position: absolute
      top: 5px
      right: 5px  
      width: 12px
      height: 12px
      cursor: pointer
      &::before
       content: ''
       position: absolute
       width: 15px
       height: 1.5px
       top: 5px
       left: -1px
       background: #1F2432
       transform: rotate(45deg) 
      &:after 
       content: ''
       position: absolute
       width: 15px
       height: 1.5px
       top: 5px
       left: -1.5px
       background: #1F2432
       transform: rotate(-45deg)   
    @media (max-width: 884px) and (min-width: 645px)    
     .product 
      &-footer 
       flex-direction: column     
       align-items: center 
       margin-right: 53px
      &-count
       margin-right: 0  
      &-price   
       margin-right: 0 
    @media (max-width: 644px) 
     .product
      flex-direction: column 
      align-items: center
      &-header
       flex-direction: column  
       align-items: center    
       margin-bottom: 15px
      &-footer 
       flex-direction: column 
       align-items: center
       margin-bottom: 10px 
      &-img 
       margin: 0  
      &-text 
       text-align: center 
       margin: 0
      &-count 
       margin: 0
       margin-bottom: 20px
      &-price 
       margin: 0   
       font-size: 22px   
</style>