<template>
  <div id="text">
      <h1>{{testText}}</h1>
  </div>
</template>
<script>

// import { mapState, mapActions, mapMutations } from 'vuex'
// import store from '../store'
// import UserModule from '../store/common'
export default {
    name: "css3_letterSpace",
    data() {
        return {
            nowIndex: 0,
            testText: '欢迎浏览',
            timer: null
        }
    },
    methods: {
    },
    mounted() {
        this.timer = setInterval(() => {
            this.nowIndex ++;
            switch(this.nowIndex) {
                case 1:
                    this.testText = '守候的文章';
                    break;
                case 2:
                    this.testText = '愿你浏览愉快';
                    break;
                case 3: 
                    this.testText = '学到知识';
                    break;
            }
            if (this.nowIndex > 3) {
                setTimeout(() => {
                    clearInterval(this.timer);
                }, 2000);
            }
        }, 2000)
    },
    beforeRouteLeave (to, from, next) {
        // ...
        this.timer && clearInterval(this.timer);
        next();
    }
};
 
 
</script>
<style lang="scss" scoped>
html,body {
    width: 100%;
    height: 100%;
    background: #ccc;
}
h1{
    display: block;
    color: wheat;
    text-transform: uppercase;
    margin-top: 100px;
    text-align: center;
    font-size: 2rem;
    line-height: 1;
    animation: letterspacing 1s 7 alternate ease-in-out;
    letter-spacing: .5rem;
}
@keyframes letterspacing {
    0% {
        letter-spacing: -72px;
        filter: blur(20px);
    }
    40% {
        filter: blur(6px);
    }
    80% {
        letter-spacing: 8px;
        filter: blur(0);
    }
}
</style>
