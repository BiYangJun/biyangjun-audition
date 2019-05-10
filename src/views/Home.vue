<template>
  <div class="home">
    <ul class="nav" @click.stop="handleSelectNav">
      <li class="nav-item" v-for="(item,index) in navList" :key="item.id" :data-index="index" :data-id="item.id">
        <div :class="'nav-icon-'+index" :data-index="index" :data-id="item.id"></div>
        <p class="nav-word" :data-index="index" :data-id="item.id">{{item.name}}</p>
      </li>
      <div class="nav-line" :style="'left:'+1.24*selectInd+'rem'"></div>
    </ul>
    <CardList :card-list-data="listData" :open-loading="loadingStatus"></CardList>
  </div>
</template>

<script>
// @ is an alias to /src
import CardList from '@/components/card-list.vue';
import {mapActions,mapState,mapMutations} from 'vuex';
import {navList} from '@/data.js';

export default {
  name: 'home',
  components:{
    CardList
  },
  data(){
    return {
      navList:navList,
      listData:[],
      selectInd:0,
      loadingStatus:false, // loading图标显隐
    }
  },
  computed:{
    ...mapState({
      selectID:(state)=>state.recordNavInd
    })
  },
  created(){
    // console.log(this.selectID)
    this.initSelectInd();
    this.getData(this.selectID)
  },
  methods:{
    ...mapActions(['getSomeData']),
    ...mapMutations(['setRecordNavInd']),
    initSelectInd(){
      let ind = navList.findIndex(ele=>ele.id == this.selectID);
      this.selectInd = ind > -1 ? ind : 0;
    },
    getData(id){
      // 直接使用mapActions映射过来的方法
      this.loadingStatus = true;
      this.getSomeData({
        id:id
      }).then(res=>{
        // console.log(res)
        this.loadingStatus = false;
        this.listData = res.data;
        
      })
    },
    handleSelectNav(event){
      // 通过事件委托的方式获取到定义在dataset里的下标
      let {index,id} = event.target.dataset;
      // this.selectID = parseInt(id);
      this.selectInd = parseInt(index);
      this.setRecordNavInd(id);
      this.getData(id)
    }
  }
}
</script>
<style lang="scss" scoped>
 @import "../lib/public";
  .nav{
    height: 1.4rem;
    position: relative;
    display: flex;
    &:after{
      @include oneHeightboard($c_eee)
    }
    .nav-item {
      flex:1;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      display: flex;
      .nav-word{
        font-size: 0.22rem;
        color: #777;
        padding-top:0.18rem;
      }
      @for $i from 0 through 5{
        .nav-icon-#{$i}{
          @include sprite-image('sprite.png');
          background-size: 0.485rem 2.885rem;
          width:0.485rem;
          height: 0.481rem;
          background-position: 0rem -0.481rem * $i;
        }
      }
    }
    .nav-line{
      width: 1.24rem;
      height: 0.05rem;
      background-color: #ff6749;
      position: absolute;
      bottom:0.03rem;
      transition: all 0.2s;
    }
  }
</style>