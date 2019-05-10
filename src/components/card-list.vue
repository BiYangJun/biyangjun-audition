<template>
    <div class="card-list">
        <Card v-for="(item,index) in cardListData" :key="item.id || index" :cardData="item"></Card>
        <Loading v-show="openLoading"></Loading>
    </div>    
</template>
<script>
import Card from './card.vue';
import Loading from './loading.vue'
export default {
    name:'card-list',
    props:{
        cardListData:{
            type:Array,
            default:function(){
                return []
            }
        },
        openLoading:{
            type:Boolean,
            default:false
        }
    },
    components:{
        Card,
        Loading
    },

}
</script>
<style lang="scss" scoped>
    .card-list{
        margin-top:.16rem;
        position: relative;
    }
</style>