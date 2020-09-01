<!--  -->
<template>
<div class='kb-find'>
    <!-- 品类列表 左边-->
    <div class="kb-find-left">
        <div 
        v-for="item in cates"
        :key='item.id'
        v-text="item.cate"
        @touchstart='touch(item)'
        :class='{"on":curIdx==item.id}'
        >

        </div>
    </div>
    <!-- 右边 -->
    <div class="kb-find-right">
        <van-grid :column-num="3">
            <van-grid-item v-for="value in 50" :key="value">
                <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                <div>商品名称</div>
            </van-grid-item>
        </van-grid>
    </div>
    <!-- 底部组件 -->
    <KBTabbar></KBTabbar>  
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { KBTabbar } from '@/components/'
import { Grid, GridItem ,Image } from 'vant'
export default {
    name:'Find',
//import引入的组件需要注入到对象中才能使用
components: {
    KBTabbar,
    [Grid.name]:Grid,
    [GridItem.name]:GridItem,
    [Image.name]:Image
},
data() {
//这里存放数据
return {
    curIdx:1,
   cates:[
       {id:1,cate:'手机数码'},
       {id:2,cate:'手机数码'},
       {id:3,cate:'手机数码'},
       {id:4,cate:'手机数码'},
       {id:5,cate:'手机数码'},
       {id:6,cate:'手机数码'},
       {id:7,cate:'手机数码'},
       {id:8,cate:'手机数码'},
       {id:9,cate:'手机数码'},
       {id:10,cate:'手机数码'},
       {id:11,cate:'手机数码'},
       {id:12,cate:'手机数码'},
       {id:13,cate:'手机数码'},
       {id:14,cate:'手机数码'},
       {id:15,cate:'手机数码'},
       {id:16,cate:'手机数码'},
       {id:17,cate:'手机数码'},
   ]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    touch(item){
        console.log(item)
        this.curIdx=item.id
        //调取接口，查询当前品类下面的商品列表
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
    .kb-find{
        .kb-find-left{
            position: absolute;
            width: 2.266667rem;
            left:0;
            top: 0;
            bottom: 1.333333rem;
            background: rgb(248, 248, 248);
            overflow: auto;
            &>div{
                font-size: 0.4rem;
                text-align: center;
                line-height: 1.066667rem;
            }
            &>div.on{
                background: #fff;
                color: rgb(239, 116, 117);
            }
        }
        .kb-find-right{
            position: absolute;
            left:2.266667rem;
            right: 0;
            top: 0;
            bottom: 1.333333rem;
            background: olive;
            overflow: auto;
            .van-grid-item{
                font-size: 0.4rem;
                line-height: 0.666667rem;
            }
            .van-image{
                width: 1.866667rem;
                height: 1.866667rem;
                img{
                    display: block;
                    width: 1.866667rem;
                    height: 1.866667rem;
                }
            }
        }
    }
</style>