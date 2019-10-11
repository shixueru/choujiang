<template>
    <div>
        <!-- 毛玻璃样式封装如下 -->
        <div class="frostedglass">
            <div class="frostedglass-inner">前端开发</div>
        </div> 
        <div class="frostedglass">
            <div class="frostedglass-inner">HTML</div>
        </div>  
    </div>
</template>

<script>

export default {
    name: 'hsl',
    data() {
        return {
        };
    },
    methods: {
    },
    mounted() {
    }
};
</script>
<style scope>
.frostedglass{
    width: 100px;  
    height: 100px;  
    font-size:16px;
    /*计算值为 height - width*top*2*/
    line-height: 70px;
    z-index:1;
    border-radius:50%;    
    position:relative;
    overflow: hidden;
    text-align:center;  
    background: hsl(20,40%,90%) fixed;
    background-image:linear-gradient(90deg,#fb3 11px,transparent 0),
    linear-gradient(90deg,#ab4 23px,transparent 0),
    linear-gradient(90deg,#655 41px,transparent 0);
    background-size: 41px 100%,61px 100%,83px 100%;   
}
.frostedglass-inner:before{
    content:'';
    position:absolute;
    top: 0;right: 0;left: 0;bottom: 0;
    filter:blur(5px);
    background: hsl(20,40%,90%) fixed;
    background-image:linear-gradient(90deg,#fb3 11px,transparent 0),
    linear-gradient(90deg,#ab4 23px,transparent 0),
    linear-gradient(90deg,#655 41px,transparent 0);
    background-size: 41px 100%,61px 100%,83px 100%;
    z-index:-1;
}
.frostedglass-inner{
    position:absolute;
    top: 15%;right: 15%;left: 15%;bottom: 15%;
    background:hsla(0,0%,100%,.3);
}    
</style>

