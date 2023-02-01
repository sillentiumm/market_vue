<template>
    <div class="install" v-if="$store.state.products.length">
        <input class="install__checkbox" type="checkbox" id="scales" name="scales" @click="changeCheckbox">
        <div class="install-img">
            <img src="../img/Group.png" alt="">
        </div>
        <div class="install-text">
            <h4 class="install__title">Установка</h4>
            <div class="install__descr">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</div>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from "vuex"
    export default {
        name: 'BasketInstall',
        methods: {
            ...mapMutations(['changeCheckbox']),
            checkbox() {
                this.changeCheckbox()
            }
        } 
    }

</script>

<style lang="sass">
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap')
    .install
     display: flex
     align-items: center
     background: #F6F8FA
     border-radius: 5px
     padding: 27px 25px
     margin-top: 24px   
     &__checkbox 
      background-color: red
      margin-right: 20px
      transform: scale(1.5)
      cursor: pointer
     &-img
      width: 50px
      height: 50px   
      display: flex
      justify-content: center
      align-items: center
      background: #fff
      border-radius: 4px
      margin-right: 20px
     &__title
      font-family: 'Lato'
      font-weight: 600
      font-size: 16px
      color: #1F2432
     &__descr 
      font-family: 'Lato'
      font-weight: 400
      font-size: 14px
      line-height: 150%
      color: #797B86 
    @media (max-width: 1300px)
     .install
     
</style>