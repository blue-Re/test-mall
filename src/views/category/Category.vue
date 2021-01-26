<template>
  <div class="wrapper" ref="aaa">
    <ul class="content">
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1}</li>
      <li>{分类1222222222222}</li>
    </ul>

  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Category.vue",
  data(){
    return {
      scroll:null
    }
  },
  created(){

  },
  mounted(){
    this.scroll = new BScroll(document.querySelector('.wrapper'),{
      probeType:3,
      pullUpLoad:true
    })
    this.scroll.on('scroll',(position)=>{
      console.log(position)
    })
    this.scroll.on('pullingUp',()=>{
      console.log('上拉加载更多')
    })
  }
};
</script>

<style scoped>
.wrapper{
  height: 150px;
  /* overflow-y: scroll; */
  background-color: aqua;
  overflow: hidden;

}
</style>
