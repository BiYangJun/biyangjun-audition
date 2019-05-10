<template>
    <div class="lazy-img-box">
        <img :src="src" :alt="alt" :title="title" :class="hasOnLoad?'realImg show':'realImg hide'" />
        <img :src="fillSrc"  :class="hasOnLoad?'hide':''" @load="imgHasRead"/>
    </div>
</template>
<script>
import fillImg from '@/assets/zhanwei.png';
export default {
    name:'lazy-img',
    props:{
        src:{
            type:String,
            default:''
        },
        fillSrc:{
            type:String,
            default:fillImg
        },
        alt:{
            type:String,
            default:''
        },
        title:{
            type:String,
            default:''
        }
    },
    methods:{
        imgHasRead(){
            this.hasOnLoad = true;
        }
    },
    updated(){
        // const that = this;
        // const realImg = document.querySelector('.realImg');
        // realImg.onLoad = function(){
        //     that.$nextTick(()=>{
        //         console.log('加载完成')
        //         that.hasOnLoad = true;
        //     })
            
        // }
    },
    data(){
        return {
            hasOnLoad:false
        }
    }
}
</script>
<style scoped lang="scss">
    .hide{
        opacity: 0;
    }
    .show{
        opacity: 1;
    }
    .lazy-img-box{
        width: 100%;
        height: 100%;
        position: relative;
        img{
            width: 100%;
            display: block;
            position: absolute;
            top:0rem;
            left:0rem;
            height: 100%;
        }
    }
</style>
