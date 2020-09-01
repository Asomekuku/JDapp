<!--  -->
<template>
<div class='home'>
  <!-- 通知栏开始 -->
  <van-notice-bar
  left-icon="volume-o"
  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
  mode='closeable'
/>
<!-- 通知栏结束 -->

  <!-- 搜索开始 -->
<van-sticky>
 
  <van-search
  show-action
  label="JD"
  placeholder="请输入搜索关键词"
>
  <template #action>
    <div >登录</div>
  </template>
</van-search>
  
</van-sticky>
<!-- 搜索结束 -->
  

<!-- 轮播图开始 -->
<van-swipe :autoplay="5000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </van-swipe-item>
</van-swipe>
<!-- 轮播图结束 -->
<!-- 分割线开始 -->
<van-divider
  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
>
  为你推荐
</van-divider>
<!-- 分割线结束 -->



<!-- 下拉刷新开始 -->
<van-pull-refresh v-model="refreshing" @refresh="onRefresh" >
  <van-list
   v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <!-- 商品列表 -->
    <div v-for="i in length" :key='i' class="row">
      <KBgoods
        :good='good[2*i-2]'
      />
      <KBgoods 
        :good='good[2*i-1]'
      />
    </div>
  </van-list>
</van-pull-refresh>
<!-- 下拉刷新结束 -->

<!-- 底部开始 -->
  <KBTabbar></KBTabbar>
  <!-- 底部结束 -->
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { KBTabbar,KBgoods} from '@/components/'
import { Search , NoticeBar,Divider ,List ,PullRefresh,Sticky, Toast} from 'vant'
import { Swipe, SwipeItem } from 'vant'//图片轮播
//图片懒加载开始
import Vue from 'vue';
import { Lazyload } from 'vant';
Vue.use(Lazyload);
//图片懒加载结束
export default {
  name:'Home',
//import引入的组件需要注入到对象中才能使用
components: {
  KBTabbar,
  KBgoods,
  // [Search.name]:Search
  [Search.name]:Search,//搜索
  [NoticeBar.name]:NoticeBar,//
  [Swipe.name]:Swipe,//轮播图
  [SwipeItem.name]:SwipeItem,//轮播图
  [Divider.name]:Divider,//分割线
  [List.name]:List, //下拉刷新
  [PullRefresh.name]:PullRefresh,
  [Sticky.name]:Sticky//定位
},
// 挂载完成，调接口
mounted(){
  let params={
      tab:'',
      page:1,
      limit:5
    }
  this.$http.fetchGoodList(params).then(res=>{
    console.log('shangp123',res)
    this.good=res
    if(res.length===0) Toast.success('没用数据了')
    //加载成功渲染数据，把数据给到good
    if(res.length>0){
      //下拉刷新 
      if(this.refreshing){
        this.good=res
      }else{
        //触底加载,把res请求的数据加到good列表
        this.good=[...this.good,...res]
      }
      this.loading=false
      this.refreshing=false//默认不刷新，渲染完成后刷新状态为false
    }
  })
},
data() {
//这里存放数据
return {
  //图片
  images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
      //商品信息
  good:[],
  //下拉刷新参数开始
  refreshing:false,
  loading:false,
  finished:false
  // 下拉参数结束
};
},
computed:{
  length:function(){
    return Math.floor(this.good.length/2)
  }
},
//监听属性 类似于data概念

//监控data中的数据变化
watch: {},
//方法集合
methods: {
  onRefresh(){
    console.log('刷新')
    setTimeout(()=>{
      this.refreshing=false
    },2000)
  },
  onLoad(){
    console.log('到底了')
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},

beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="scss" scoped>
.home{
  .van-swipe-item{
  img{
    width: 10rem;
    height: 4rem;
  }

}
  .row{
    display: flex;
  }
.van-search{
    background: red;
  }
}

</style>
