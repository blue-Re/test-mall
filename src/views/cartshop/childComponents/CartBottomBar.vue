<template>
  <div class="bottom-bar">
    <div class="check-content">
      <CheckButton :is-checked="isSelectAll" class="check-button" @click.native="checkClick"></CheckButton>
      <span>全选</span>
    </div>

    <div class="totalPrice">合计：{{ totalPrice }}</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";
import { mapGetters } from "vuex";

export default {
  name: "CartBottomBar.vue",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.$store.state.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    checkLength() {
      return this.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      // return !this.cartList.filter((item) => item.checked).length;
      // if(this.cartList.length === 0){
      //   return false
      // }
      // return !this.cartList.find(item=> !item.checked)
      // let iscChecked = false
      for (const item of this.cartList) {
        if(!item.checked){
          return false
        }
      }
      return true
    },
  },
  methods:{
    checkClick(){
      if(this.isSelectAll){
        this.cartList.forEach(item => {
          item.checked = false
        });
      }else{
        this.cartList.forEach(item=>{
          item.checked = true
        })
      }
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  background-color: whitesmoke;
  position: relative;
  /* line-height: 40px; */
  display: flex;
}

.check-content {
  display: flex;
  align-items: center;
  /* margin-left: 10px; */
  /* margin-top: 10px; */
}

.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
}

.totalPrice {
  margin-left: 30px;
  margin-top: 10px;
}
</style>
