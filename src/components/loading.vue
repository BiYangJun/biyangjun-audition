<template>
<div class="load-box">
    <div class="load-round-box">
        <div class="load-round"></div>
        <div class="load-round"></div>
        <div class="load-round"></div>
        <div class="load-round"></div>
        <div class="load-round"></div>
        <div class="load-round"></div>
        <div class="load-round"></div>
        <div class="load-round"></div>
    </div>
</div>
</template>
<script>
export default {
    name:'loading'
}
</script>

<style lang="scss" scoped>
@keyframes roundscale {
        from {
            transform: scale(0.5)
        }
        to {
            transform: scale(1.5)
        }
    }
    .load-box{
        width: 100%;
        min-height: 100%;
        background-color:rgba(255,255,255,.5);
        overflow: hidden;
        position: absolute;
        top:0rem;
        left:0rem;
    }
    .load-round-box{
        width:1.5rem;
        height: 1.5rem;
        position: absolute;
        top:30%;
        left:50%;
        transform: translateX(-50%) translateY(-50%);

        .load-round{
            width: .3rem;
            height:.3rem;
            border-radius: 50%;
            position: absolute;
            background: #ff6749;
            animation: roundscale 0.8s linear infinite;
            animation-direction:alternate;
        }

        &>div:nth-child(1){
            top:0rem;
            left:50%;
            margin-left:-.15rem;
            animation-delay: -0.1s;
        }
        &>div:nth-child(2){
            top:13%;
            right:13%;
             animation-delay: -0.2s;
        }
        &>div:nth-child(3){
            top:50%;
            right:0rem;
            margin-top:-.15rem;
            animation-delay: -0.3s;
        }
        &>div:nth-child(4){
            bottom:13%;
            right:13%;
            animation-delay: -0.4s;
        }
        &>div:nth-child(5){
            bottom:0rem;
            left:50%;
            margin-left:-.15rem;
            animation-delay: -0.5s;
        }
        &>div:nth-child(6){
            bottom:13%;
            left:13%;
            animation-delay: -0.6s;
        }
        &>div:nth-child(7){
            top:50%;
            left:0rem;
            margin-top:-.15rem;
            animation-delay: -0.7s;
        }
        &>div:nth-child(8){
            top:13%;
            left:13%;
            animation-delay: -0.8s;
        }
    }
    
</style>