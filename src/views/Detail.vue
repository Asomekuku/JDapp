<!--  -->
<template>
<div class='kb-detail'>
    <Back titleName='详情页面'></Back>
    <div>   
        <p>{{xinxi.title}}</p>
        <van-image
        round
        width="1.333333rem"
        height="1.333333rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div>${{xinxi.reply_count}}</div>
    </div>
    <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服"  />
        <van-goods-action-icon icon="cart-o" text="购物车"  />
        <van-goods-action-icon icon="shop-o" text="店铺"  />
        <van-goods-action-button
            type="danger"
            text="立即购买"
            @click="onClickButton"
        />
    </van-goods-action>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {Back} from '@/components/'
import {mapState} from 'vuex'
import {
         Image,
         GoodsAction,
         GoodsActionIcon, 
         GoodsActionButton
} from 'vant'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Back,
    [Image.name]:Image,
    [GoodsAction.name]:GoodsAction,
    [GoodsActionIcon.name]:GoodsActionIcon,
    [GoodsActionButton.name]:GoodsActionButton
},
data() {
//这里存放数据
return {
    xinxi:{}//商品信息
};
},
//监听属性 类似于data概念
computed: {
    ...mapState('detailGood',['shop']),
},
//监控data中的数据变化
watch: {
    shop(newval){
        newval.forEach((item)=>{
            if(item.id==this.$route.params.id){
                this.xinxi=item
            }
        })
    }
},
//方法集合
methods: {
  onClickButton(){
      console.log(1)
      this.$router.push('/cart/'+this.xinxi.id)
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
.kb-detail{
    padding-top: 1.226667rem;
    font-size: 0.4rem;
}
</style>