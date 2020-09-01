<template>
  <div class="back">
      <!-- 顶部返回开始 -->
    <van-nav-bar 
      :title="titleName" 
      left-text="返回" 
      left-arrow fixed 
      @click-left='back'>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
  </van-nav-bar>
  <!-- 顶部返回结束 -->
  </div>
</template>

<script>
import { NavBar,Icon  } from 'vant'//返回
export default {
    name:'Back',
    props:{
        titleName:{type:String,required:true}
    },
    components:{
        [NavBar.name]:NavBar,
        [Icon.name]:Icon  
    },
    methods:{
         back(){
            //返回上一页
            this.$router.back()
            
        },
    }
}
</script>

<style>

</style>