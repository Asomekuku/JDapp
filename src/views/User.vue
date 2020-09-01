<!--  -->
<template>
<div class='kb-user'>
    <div class="user">
        <van-row type='flex' justify='center' align='center'>
            <!-- 左 -->
            <van-col span="6">
                <van-image
                round
                width="1.333333rem"
                height="1.333333rem"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
            </van-col>
            <!-- 右 -->
            <van-col span="18">
                <div>
                    <div>用户名</div>
                    <p>Asomekuku</p>
                </div>
                <div>
                    <span>京享值:5000</span>
                    <span>小白信用:99</span>
                    <span>></span>
                </div>
            </van-col>
        </van-row>
    </div>
    <!-- 订单开始 -->
    <div>
        <van-grid :column-num="4">
            <van-grid-item icon="home-o" text="待付款" dot />
            <van-grid-item icon="search" text="待收货" badge="99+" />
            <van-grid-item icon="home-o" text="退款/售后" badge="99+" />
            <van-grid-item icon="search" text="全部订单" badge="99+" />
        </van-grid>
    </div>
    <!-- 订单结束 -->

    <!-- 地址开始 -->
    <van-cell-group title="地址">
           <van-cell value="管理收货地址" is-link>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
            <span class="custom-title">收货地址</span>
        </template>
    </van-cell>       
    </van-cell-group>
    <!-- 地址结束 -->

    <!-- 安全开始 -->
    <van-cell-group title="安全">
        <van-cell value="密码实名认证等管理" is-link>
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
                <span class="custom-title">账号与安全</span>
            </template>
        </van-cell> 
         <van-cell value="未设置" is-link>
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
                <span class="custom-title">京东支付密码</span>
            </template>
        </van-cell>       
    </van-cell-group>
    <!-- 安全结束 -->

    <!-- 服务开始 -->
    <van-cell-group title="服务">
        <van-cell value="即使解答用户疑难" is-link>
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
                <span class="custom-title">联系客服</span>
            </template>
        </van-cell> 
         <van-cell  is-link>
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
                <span class="custom-title">切换站点</span>
            </template>
        </van-cell>       
    </van-cell-group>
    <!-- 服务结束 -->

    <!-- 意见 退出开始-->
    <van-grid direction="horizontal" :column-num="3">
        <van-grid-item icon="service-o" text="意见反馈" />
        <van-grid-item icon="cash-on-deliver" text="京东客户端" />
        <van-grid-item icon="contact " text="退出登录" />
    </van-grid>
    <!-- 意见 退出结束 -->

    <!-- 底部 -->
    <KBTabbar></KBTabbar>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {KBTabbar} from '@/components/'
import {
         Col,
         Row,
         Image,
         Grid, 
         GridItem,
         Cell, 
         CellGroup
         } from 'vant';
export default {
    name:'User',
//import引入的组件需要注入到对象中才能使用
components: {
    KBTabbar,
    [Col.name]:Col,
    [Row.name]:Row,
    [Image.name]:Image,
    [Grid.name]:Grid,
    [GridItem.name]:GridItem,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

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
.kb-user{
    background: #F6F6F6;
    .user{
        font-size: 0.346667rem;
        background: sandybrown;
        padding: 0.266667rem;
    }
}
</style>