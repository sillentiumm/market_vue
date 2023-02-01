<template>
    <div class="viewed-element">
        <div class="viewed-element-header">
            <div class="viewed-element-img">
                <img :src=" require('../img/' + item.img)" alt="">
            </div>
            <div class="viewed-element__title">{{ item.title }}</div>
            <div class="viewed-element__descr">{{ item.descr }}</div>
        </div>
        <div class="viewed-element-footer">
            <div class="viewed-element__price">6 848 ₽ – 56 584 ₽ </div>
            <div class="viewed-element__price_euro">77.60 € – 643.86 €</div>
            <div class="viewed-element__btn">Подробнее</div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'TestItem',
        props: ['item'],
    }

</script>

<style lang="sass">
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto:wght@400;500;700&display=swap')
    .viewed-element
     width: 305px
     height: 563px
     display: flex
     flex-direction: column 
     justify-content: space-between
     align-items: center
     background: #F6F8FA
     border-radius: 5px
     padding: 25px
     margin-top: 100px
     &-img img 
      width: 245px
      height: 245px   
     &__title 
      font-family: 'Lato'
      font-weight: 700
      font-size: 22px
      color: #1F2432    
      margin-bottom: 10px
     &__descr 
      font-family: 'Lato'
      font-weight: 400
      font-size: 14px
      color: #1F2432  
     &__price 
      font-family: 'Roboto'
      font-weight: 500
      font-size: 22px
      letter-spacing: 0.005em
      color: #1F2432 
      margin-bottom: 8px
      &_euro
       font-family: 'Lato'
       font-weight: 400
       font-size: 16px
       color: #797B86
       margin-bottom: 20px
     &__btn 
      width: 255px
      height: 52px
      display: flex
      justify-content: center
      align-items: center
      background: #0069B4
      color: #fff
      border-radius: 4px   
      font-family: 'Lato'
      font-weight: 600
      font-size: 16px
      cursor: pointer


</style>
