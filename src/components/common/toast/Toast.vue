<template>
  <div class="toast" v-show="isShow">
    <div >{{msessage}}</div>
  </div>
</template>

<script>
export default {
  name:'Toast.vue',
  props:{
    msessage:{
      type:String,
      default:'商品添加成功'
    },
    isShow:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style>
  .toast{
    position: fixed;
    top: 50%;
    left: 40%;
    padding: 8px 10px;
    color: white;
    background-color: rgba(0, 0, 0, .8);
  }
</style>
