import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state () {
      return {
        products: [
            {
              id: 0,
              title: 'Вытяжное устройство G2H',
              descr: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
              number: 'Артикул: G2H1065', 
              price: 12644, 
              count: 1, 
              img:'product2.png'
            },
            {
              id: 3,
              title: 'Вытяжное устройство BXC', 
              descr: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
              number: 'Артикул: G2H1065',  
              price: 12644, 
              count: 2, 
              img:'product1.png'
            },
            { 
              id: 6,
              title: 'Вытяжное устройство GHN2', 
              descr: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия', 
              number: 'Артикул: G2H1065', 
              price: 12644, 
              count: 1, 
              img:'product3.png'
            },
        ],
        checkbox: false,
        ViewedPage: 1,

        viewed:  [
          {id: 0, img: 'product1.png', title: 'BXC', descr: 'Вытяжное устройство для механической системы вентиляции', },
          {id: 1, img: 'product2.png', title: 'G2H', descr: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции', },
          {id: 2, img: 'product3.png', title: 'GHN', descr: 'Вытяжное устройство с датчиком присутствия', },
          {id: 3, img: 'product4.png', title: 'TDA', descr: 'Вытяжное устройство с датчиком присутствия', },
          {id: 4, img: 'product1.png', title: 'BXC', descr: 'Вытяжное устройство для механической системы вентиляции', },
          {id: 5, img: 'product2.png', title: 'G2H', descr: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции', },
          {id: 6, img: 'product3.png', title: 'GHN', descr: 'Вытяжное устройство с датчиком присутствия', },
          {id: 7, img: 'product4.png', title: 'TDA', descr: 'Вытяжное устройство с датчиком присутствия', },
          {id: 8, img: 'product1.png', title: 'BXC', descr: 'Вытяжное устройство для механической системы вентиляции', },
          {id: 9, img: 'product2.png', title: 'G2H', descr: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции', },
          {id: 10, img: 'product3.png', title: 'GHN', descr: 'Вытяжное устройство с датчиком присутствия', },
          {id: 11, img: 'product4.png', title: 'TDA', descr: 'Вытяжное устройство с датчиком присутствия', },
          {id: 12, img: 'product1.png', title: 'BXC', descr: 'Вытяжное устройство для механической системы вентиляции', },
          {id: 13, img: 'product2.png', title: 'G2H', descr: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции', },
          {id: 14, img: 'product3.png', title: 'GHN', descr: 'Вытяжное устройство с датчиком присутствия', },
          {id: 15, img: 'product4.png', title: 'TDA', descr: 'Вытяжное устройство с датчиком присутствия', },
          {id: 16, img: 'product1.png', title: 'BXC', descr: 'Вытяжное устройство для механической системы вентиляции', },
          {id: 17, img: 'product2.png', title: 'G2H', descr: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции', },
          {id: 18, img: 'product3.png', title: 'GHN', descr: 'Вытяжное устройство с датчиком присутствия', },
          {id: 19, img: 'product4.png', title: 'TDA', descr: 'Вытяжное устройство с датчиком присутствия', },
          {id: 20, img: 'product1.png', title: 'BXC', descr: 'Вытяжное устройство для механической системы вентиляции', },
          {id: 21, img: 'product2.png', title: 'G2H', descr: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции', },
          {id: 22, img: 'product3.png', title: 'GHN', descr: 'Вытяжное устройство с датчиком присутствия', },
          {id: 23, img: 'product4.png', title: 'TDA', descr: 'Вытяжное устройство с датчиком присутствия', },
        ]
      }
    },
    mutations: {
      priceProduct (_, payload) {
        payload.count++
      },
      incrementProduct (_, payload) {
        payload.count++
      },
      decrementProduct (_, payload) {
        payload.count > 1 ? payload.count-- : null
      },
      changeCheckbox (state) {
        state.checkbox = !state.checkbox
      },
      closeProduct(state, payload) {
        state.products.forEach(function(item, index) {
          if (item.id == payload) {
            state.products.splice(index, 1)
          } 
        })
      },
      clearBasket(state) {
        state.products = []
      },
      sendData(state) {
        if(state.products.length) {
          const data = {products:[], checkbox: false}
          state.products.forEach(el => {
            if(el.count> 0) {
              let tes = {id: el.id, count: el.count }
              data.products.push(tes)
            }
          })
          data.checkbox = state.checkbox

          axios({
            method: 'post',
            url: 'https://httpbin.org/post',
            data: data
          })
        }
        else {
          return false
        }
      }
    },
    getters: {
        finalPrice(state) {
          let score = 0
          state.products.forEach(el => {
            score = score + el.count * el.price
          })
          return score
        },

        finalCount(state) {
          let score = 0
          state.products.forEach(el => {
            score = score + el.count
          })
          return score
        },

        ending(state) {
          let score = 0
          let result =''
          state.products.forEach(el => {
            score = score + el.count
          })
          score > 4 && score < 21 ?  result = 'ов' : 
          score%10 == 1 ? result = '' : 
          score%10 == 2 || score%10 == 3 || score%10 == 4 ? result = 'а' :
          result = 'ов'
          return result
        },

        differentsProductCount(state) {
          let score = 0
          state.products.forEach(el => {
            el.count > 0 ? score++ : null
          })
          return score
        },
    }
  })
  

  export default store;