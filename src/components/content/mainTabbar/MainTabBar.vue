<template>
  <tab-bar>
      <tab-bar-item path="/home" activeColor="green">
      <!-- 使用 @ 代表的是src路径，可以从webpack中的resolve来配置对应的路径别名 -->
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="" />
        <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="orange">
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="" />
        <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cartshop" activeColor="yellow">
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="" />
        <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="" />
        <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TabBarItem'

export default {
  name:'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>
