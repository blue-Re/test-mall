<template>
  <div class="cart-List">
    <scroll class="content" ref="scroll">
      <!-- <li v-for="item in cartList">{{item}}</li> -->
      <cart-list-item v-for="(item,index) in cartList" :itemInfo="item" :key="index">

      </cart-list-item>
    </scroll>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem.vue'


export default {
  name:'CartList.vue',
  computed:{
    ...mapGetters([
      'cartList'
    ])
  },
  components:{
    Scroll,
    CartListItem
  },
  activated(){
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>

  .cart-list{
    height: calc(100% - 44px - 49px - 40px);
  }
  .content{
    height: 100%;
    overflow: hidden;
  }
</style>
