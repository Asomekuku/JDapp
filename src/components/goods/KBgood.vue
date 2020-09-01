<!-- 所有商品ome相关的组件 -->
<template>
<div class='kb-goods'>
    <img src="/abc.png" alt="" @touchstart='skipDetail'>
    <div class="name">{{good.titles}}</div>
    <div class="price">
        <span class="sp-price">${{good.visit_count}}</span>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {mapActions} from 'vuex'
export default {
    props: {
        good: {
            type: Object,
            required: true
        }
    },
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {

        };
    },
    //监听属性 类似于data概念
    computed: {

    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        ...mapActions('detailGood',['goods']),
        
        skipDetail(){
            let params={
                tab:'',
                page:2,
                limit:1
            }
            this.goods(params)//请求数据,共享
            //跳转到详情页面
            this.$router.push('/detail/'+this.good.id)
            console.log(this.goods)
            // console.log(this.shop)
        },

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

<style lang="scss" scoped>
$six:0.4rem;

.kb-goods {
    width: 5rem;

    &>img {
        display: block;
        width: 5rem;
        height: 5rem;
    }

    .name {
        font-size: $six;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .price{
        font-size: $six;
    }
    
}
</style>
