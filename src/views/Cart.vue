<!--  -->
<template>
<div class='kb-cart'>
  <Back titleName='购物车'></Back>

  <div v-for="i in 10" :key='i' class="cart-row">
    <!-- 滑块整体 -->
    <van-swipe-cell>
      <!-- 商品信息开始  栅格布局 Layout-->
      <van-row type="flex" justify="center" align='center'>
        <!-- 左边复选框 -->
        <van-col span="4">
            <van-checkbox v-model="checked"></van-checkbox>
        </van-col>
        <!-- 右边内容 -->
        <van-col span="20">
            <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                class="goods-card"
                thumb="https://img.yzcdn.cn/vant/cat.jpeg"
              >
              <!-- 插槽 -->
              <template #footer>
                <van-button size="mini">-</van-button>
                <van-button size="mini">+</van-button>
              </template>
            </van-card>
        </van-col>
      </van-row>
      <!-- 插槽 滑动删除 -->
       <template #right>
              <van-button square text="删除" type="danger" class="delete-button" />
        </template>
    </van-swipe-cell>
  </div>
<!-- 商品信息结束 -->


  <!-- 底部提交开始 -->
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送, <span @click="skipToAddr">修改地址</span>
      </template>
  </van-submit-bar>
  <!-- 底部提交结束 -->

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {Back} from '@/components/'
import {
  NavBar,
  Icon,
  SubmitBar ,
  Checkbox,
  Card ,
  Button,
  SwipeCell,
  Col, 
  Row  
} from 'vant'
export default {
    name:'Cart',
//import引入的组件需要注入到对象中才能使用
components: {
  Back,//头部返回
  [NavBar.name]:NavBar,
  [Icon.name]:Icon,
  [SubmitBar.name]:SubmitBar ,
  [Checkbox.name]:Checkbox,
  [Card.name]:Card ,
  [Button.name]:Button,
  [SwipeCell.name]:SwipeCell,
  [Col.name]:Col,
  [Row.name]:Row 
},
data() {
//这里存放数据
return {
  checked:false
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
 
  //提交购物车
  onSubmit(){
    console.log('提交购物车')
  },
  //修改地址
  skipToAddr(){
    console.log('修改地址')
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

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
<style  scoped lang='scss'>
.kb-cart{
  padding-top: 1.226667rem;
  padding-bottom: 2.24rem;
}
.goods-card {
    margin: 0;
    background-color: #ffffff;
  }

  .delete-button {
    height: 100%;
  }
  .cart-row{
    border-bottom: 1px solid #cccccc;
  }
</style>