<template>
  <div class="card">
    <div class="card-img">
      <img :alt="cardData.name" :title="cardData.name" v-lazy="cardData.imgSrc" >
    </div>
    <div class="card-box">
      <div class="card-content">
        <p class="card-content-name">{{cardData.name}}</p>
        <p class="card-content-introduction">{{cardData.introduction}}</p>
      </div>
      <div @click="handleDownload" class="card-btn"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  props: {
    cardData: {
      type: Object,
      default: function() {
        return {
          imgSrc: "",
          name: ""
        };
      }
    }
  },
  methods: {
    handleDownload() {
      alert("点击了下载");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../lib/public";
.card {
  display: flex;
  .card-img {
    padding:.14rem 0 .15rem .3rem;
    img {
      width: 1.28rem;
      height: 1.28rem;
      display: block;
    }
  }

  .card-box {
    flex:1;
    position: relative;
    display: flex;
    margin-left: .2rem;
    &:after {
      @include oneHeightboard($c_eee);
    }
    .card-content {
      .card-content-name {
        text-align: left;
        color: #000000;
        font-size: .32rem;
        padding-top:.26rem;
        @include text-ellipsis(3.5rem);
      }
      .card-content-introduction {
        text-align: left;
        color: #a6a6a6;
        font-size: 0.26rem;
        padding-top:.08rem;
        @include text-ellipsis(3.5rem);
      }
    }
    .card-btn{
        @include sprite-image('btn.png');
        width: 1.12rem;
        height: .6rem;
        position: absolute;
        background-size:100% 100%; 
        right: .3rem;
        top:.49rem;
        cursor: pointer;
    }
  }
}
</style>