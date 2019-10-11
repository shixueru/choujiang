<template>
    <div class="container">
        <h1>无聊打打地鼠</h1>
        <div class="game-top">
            <p>得分：<span id="game-score">{{score}}</span></p>
            <p>剩余时间：<span id="game-time">{{totalTime}}</span> s</p>
        </div>
        <div class="game-content">
            <ul>
                <!-- :class="{'bad active': badMousesIndex === index, 'good active': goodMousesIndex === index}" -->
                <li v-for="(item, index) in mouses" :key="index">
                    <div :ref="index" :class="item.className" @click="bindEvent(index, $event)">{{item}}</div>
                </li>
            </ul>
        </div>
        <div class="game-top">
            <p><input type="button" value="开始游戏" @click="startGame"/></p>
        </div>
    </div>
</template>
<script>
import { setTimeout, clearTimeout } from 'timers';
export default {
    name: 'hitMouse',
    data() {
        return {
            goodScore: 100,
            badScore: 50,
            score: 0,
            initTotalTime: 60,
            totalTime: 60,
            moveTime: null,
            mouses: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
            badMousesIndex: -1,
            goodMousesIndex: -1,
            lastMouseIndex: -1
        };
    },
    methods: {
        /**
         * 获取给定范围的随机数
         * @param  {Number} from 起始
         * @param  {Number} to   结束
         * @return {Number}      随机数
         */
        getRandom(from, to) {
            return Math.floor(Math.random() * (to - from + 1)) + from;
        },
        // 运动操作
        moveUpAndDown() {
            const timeRandom = this.getRandom(1000, 2000);
            console.log(timeRandom);
            clearTimeout(this.moveTime);
            this.moveTime = setTimeout(() => {
                let goodMousesIndex = this.getRandom(0, 8);
                console.log(this.goodMousesIndex, goodMousesIndex);
                if (this.goodMousesIndex === goodMousesIndex) {
                    goodMousesIndex = this.getRandom(0, 8);
                }
                console.log(this.goodMousesIndex, goodMousesIndex);
                this.goodMousesIndex = goodMousesIndex;
                this.mouses[goodMousesIndex].className = 'good active';
                this.moveUpAndDown();
            }, timeRandom);
        },
        // 打地鼠操作
        bindEvent(index, e) {
            if (this.totalTime === this.initTotalTime || this.totalTime <= 0) {
                return;
            }
            // 打地鼠操作
            console.log(e);
            var elem = e.target;
            console.log(elem);
            // 如果当前项被隐藏则不操作，多次点击只取第一次分数
            // if (elem.style.display !== 'block' || elem.target.clicked) {
            //     return;
            // }
            if (this.mouses[index].clicked) {
                return;
            }
            // 扣分
            if (elem.className.indexOf('bad') !== -1) {
                this.score -= this.badScore;
            } else if (elem.className.indexOf('good') !== -1) {
                this.score += this.goodScore;
            }
            this.mouses[index].clicked = true;
            // elem.setAttribute('clicked', '1');
        },
        // 倒计时，当前剩余游戏时间
        countDown() {
            var t = setInterval(() => {
                if (this.totalTime <= 0) {
                    clearInterval(t);
                    clearInterval(this.moveTime);
                    this.totalTime = this.initTotalTime;
                    this.score = 0;
                    this.goodMousesIndex = -1;
                    this.badMousesIndex = -1;                
                    alert('游戏结束，得分为：' + this.score);
                    return;
                }
                this.totalTime --;
            }, 1000);
        },    

        // 开始游戏
        startGame() {
            if (this.totalTime !== this.initTotalTime) {
                return;
            }
            this.score = 0;
            this.totalTime = this.initTotalTime;
            this.totalTime --;
            this.countDown();
            this.moveUpAndDown();
        }
    },
    created() {
        for (var i = 0, j = this.mouses.length; i < j; ++i) {
            this.mouses[i].clicked = false;
            this.mouses[i].className = '';
            this.mouses[i].display = false;
        }
    }
};
</script>
<style lang="css" scope>
.container {
    width: 95%;
    margin: 20px auto;
    border: 1px solid #ddd;
    text-align: center;
}
.container h1{
    font-size: 36px;
}

.game-top {
    padding-top: 10px;
    width: 100%;
    height: 90px;
}
.game-top p{
    margin: 5px;
    font-size: 24px;
}
.game-top p input {
    display: inline-block;
    font-size: 24px;
    color: #333;
    border:1px solid thistle;
    padding: 5px 15px;
    border-radius: 15px;
}

.game-content {
    overflow: auto;
    width: 100%;
    border-top: 1px solid #ddd;
    background-color: #ddf;
    margin-top: 10px;
}

.game-content ul {
    list-style: none;
}
.game-content li {
    float: left;
    margin-top: 50px;
    margin-left: 30px;
    width: 100px;
    height: 50px;
    border-radius: 50%;
    background-color: #67d0b4;
    box-shadow: 0 0 50px #706565 inset;
}
.game-content li:last-child {
    margin-bottom: 50px;
}

.game-content div {
    position: relative;
    margin-top: -15px;
    margin-left: 25px;
    width: 50px;
    height: 70px;
    border-radius: 50%/40%;
    background-color: #dfb25d;
    opacity: 0;
}

.game-content div.good {
    background-color: #dfb25d;
}
.game-content div.good[clicked="1"]::after {
    content: "✓";
    line-height: 70px;
    font-size: 40px;
    color: #0ad845;
}

.game-content div.bad {
    background-color: #a48f5c;
}
.game-content div.bad[clicked="1"]::after {
    content: "✕";
    line-height: 70px;
    font-size: 40px;
    color: #db1536;
}


@keyframes mouse-move {
    60% {
        margin-top: -40px;
        opacity: 1;
    }
    100% {
        margin-top: -15px;
        opacity: 0;
    }
}

.game-content div.active {
    -webkit-animation: mouse-move 2s ease-in-out 1;
        animation: mouse-move 2s ease-in-out 1;
}
</style>

