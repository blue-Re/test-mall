<template>
  <div class="cart">
    <!-- 顶部导航条 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>

    <!-- 商品的列表 -->
    <cart-list class="cart-list">

    </cart-list>

    <!-- 底部汇总 -->
    <CartBottomBar>

    </CartBottomBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComponents/CartList'
import CartBottomBar from './childComponents/CartBottomBar'

import { mapGetters } from 'vuex'
export default {
  name:'Cartshop.vue',
  components:{
    NavBar,
    CartList,
    CartBottomBar
  },
  computed:{
    ...mapGetters([
      'cartLength',
      'cartList'
    ])
  }
}
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .nav-bar{
    background-color: deeppink;
    color: white;
  }
</style>
