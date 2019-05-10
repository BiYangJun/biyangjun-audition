<template>
    <div class="card-list">
        <Card v-for="(item,index) in cardListData" :key="item.id || index" :cardData="item"></Card>
    </div>    
</template>
<script>
import Card from './card.vue';

export default {
    name:'card-list',
    props:{
        cardListData:{
            type:Array,
            default:function(){
                return []
            }
        }
    },
    components:{
        Card
    },

}
</script>
<style lang="scss" scoped>
    .card-list{
        margin-top:.16rem;
        position: relative;
    }
</style>