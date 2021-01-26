import Vue from 'vue'
import Vuex from 'vuex'

// 1.使用插件
Vue.use(Vuex)

// 2.创建store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    AddCounter(state, payload) {
      payload.count++
    },
    addToCart(state, payload) {
      payload.checked = true
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload) {
      return new Promise((resolve, reject) => {
        // payload新添加的商品
        let oldProduct = context.state.cartList.find(item => { item.iid === payload.iid })
        // 判断oldProduct
        if (oldProduct) {
          context.commit('addCount', oldProduct)
          resolve("当前数量加一")
        } else {
          payload.count = 1
          context.state.cartList.push(payload)
          resolve("添加了新商品")
        }
      })
    }
  },
  getters: {
    cartLength(state) {
      return state.cartList.length
    },
    cartList(state) {
      return state.cartList
    }
  }
})

// 3.挂载到Vue实例中
export default store
