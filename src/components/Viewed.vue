<template>
    <swiper
      :breakpoints="swiperOptions.breakpoints"
      :spaceBetween=30
      :loop="true"
      :loopFillGroupWithBlank="true"
      :navigation="true"
      :modules="modules"
      :pagination="{
        type: 'fraction',
      }"
      class="mySwiper"
    >
      <swiper-slide v-for="item in $store.state.viewed" :key = item.id>
          <ViewedElement :item="item"/> 
      </swiper-slide>
      <div class="viewed__title">Просмотренные товары</div>
    </swiper>
  </template>

  <script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import ViewedElement from './ViewedElement.vue'
  import "swiper/css";
  import "swiper/css/pagination";
  import { Pagination, Navigation } from "swiper";
  
  export default {
    name: "VgV",
    components: {
      Swiper,
      SwiperSlide,
      ViewedElement
    },
    setup() {
      return {
        modules: [ Pagination, Navigation],
      };
    },
    data () {
      return { 
        APIData: [],
        swiperOptions: {
          breakpoints: {       
      320: {       
        slidesPerView: 1,
        slidesPerGroup: 1     
      },          
      644: {       
        slidesPerView: 2,  
        slidesPerGroup: 2,  
      },   
  
      884: {       
        slidesPerView: 3,    
        slidesPerGroup: 3,    
      },
      1280: {
        slidesPerView: 4,    
        slidesPerGroup: 4,    
      }

   }   
        }
      }
    },
  };
  </script>

  <style lang="sass">
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap')
    .viewed
     &__title 
      position: absolute
      top: 0
      left: 0
      font-family: 'Lato'
      font-weight: 600
      font-size: 30px
      color: #1F2432
     &__pages 
      position: absolute
      right: 68px
      top: 10px
      font-family: 'Lato'
      font-weight: 500
      font-size: 24px
      color: #212121
      span 
       font-size: 18px 
       font-weight: 400
       color: #90A2B5
    .mySwiper 
     margin-top: 60px   
    .swiper-button-prev , .swiper-button-next
     position: absolute 
     top: 0
     width: 50px
     height: 50px
     background: #90A2B5
     border-radius: 50%
     z-index: 5
     &::after
      content: ''
      position: absolute
      top: 18px
      width: 11px
      height: 11px
      border-top: 2px solid #fff
      border-right: 2px solid #fff
    .swiper-button-prev 
     right: 130px       
     &::after
      left: 20px
      transform: rotate(225deg)
    .swiper-button-next  
     right: 0 
     &::after
      right: 20px
      transform: rotate(45deg)
    .swiper-pagination 
     width: 50px
     position: absolute  
     top: 10px
     left: auto
     right: 64px
     font-size: 18px 
     font-weight: 400
     color: #90A2B5
     &-current 
      font-family: 'Lato'
      font-weight: 500
      font-size: 24px
      color: #212121
    @media (max-width: 1280px) and (min-width: 885px)  

    @media (max-width: 884px) and (min-width: 645px)   

    .swiper-slide
     display: flex
     justify-content: center 

 
  </style>
  