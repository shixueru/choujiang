<template>
<div class="luckDraw">
    <div class="container">
        <div class="turntable-wrapper">
            <div class="luck-wrapper">
                <ul class="nineGrid">
                    <li class="row">
                        <div v-for="(n, key) in prizeList.slice(0, 3)" :key="key" :class="index === key ? `active` : ``">
                            <div class="wrapper">
                                <p>{{n.name}}</p>
                            </div>
                            <div class="mask"></div>
                        </div>
                    </li>
                    <li class="row">
                        <div v-for="n in prizeList.slice(3, 4)" :key="7" :class="index === 7 ? 'active': ''">
                            <div class="wrapper">
                                <p>{{n.name}}</p>
                            </div>
                            <div class="mask"></div>
                        </div>
                        <div class="getLuck" @click="startLottery">
                            <p>立即<br>抽奖</p>
                        </div>
                        <div v-for="n in prizeList.slice(4, 5)" :key="3" :class="index === 3 ? 'active': ''">
                            <div class="wrapper">
                                <p>{{n.name}}</p>
                            </div>
                            <div class="mask"></div>
                        </div>
                    </li>
                    <li class="row">
                        <div v-for="(n, key) in prizeList.slice(5, 9)" :key="6-key" :class="index === 6-key ? `active` : ``">
                            <div class="wrapper">
                                <p>{{n.name}}</p>
                            </div>
                            <div class="mask"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'luckDraw',
    data () {
        return {
            index: -1,  // 当前转动到哪个位置，起点位置
            count: 8,  // 总共有多少个位置
            timer: 0,  // 每次转动定时器
            speed: 200,  // 初始转动速度
            times: 0,  // 转动次数
            cycle: 30,  // 转动基本次数：即至少需要转动多少次再进入抽奖环节
            prize: -1,  // 中奖位置
            click: true,
            toastType: 'luck',
            prizeNum: 3, // 抽奖次数
            prizeList: [
                {
                    id: '00001',
                    name: '奖品1'
                },
                {
                    id: '00002',
                    name: '奖品2'
                },
                {
                    id: '00003',
                    name: '奖品3'
                },
                {
                    id: '00004',
                    name: '奖品4'
                },
                {
                    id: '00005',
                    name: '奖品5'
                },
                {
                    id: '00006',
                    name: '奖品6'
                },
                {
                    id: '00007',
                    name: '奖品7'
                },
                {
                    id: '00008',
                    name: '奖品8'
                }
            ]
        }
    },
    props: {
    },
    methods: {
        // 开始抽奖
        startLottery () {
            if (!this.click) {
                return;
            }
            this.speed = 200;
            this.click = false;
            this.startRoll();
        },
        // 开始转动
        startRoll () {
            this.times += 1; // 转动次数
            this.oneRoll(); // 转动过程调用的每一次转动方法，这里是第一次调用初始化
            // 如果当前转动次数达到要求 && 目前转到的位置是中奖位置
            if (this.times > this.cycle + 10 && this.prize === this.index) {
                clearTimeout(this.timer); // 清除转动定时器，停止转动
                this.prize = -1;
                this.times = 0;
                this.click = true;
                this.toastType = 'comeOn';
                console.log('你已经中奖了');
            } else {
                if (this.times < this.cycle) {
                    this.speed -= 20; // 加快转动速度
                } else if (this.times === this.cycle) {  // 随机获得一个中奖位置
                    this.getPrize();
                    // if (this.prize > 7) {
                    //     this.prize = 7;
                    // } else if (this.prize < 0) {
                    //     this.prize = 0;
                    // }
                    // console.log(`中奖位置${this.prize}`);
                } else if (this.times > this.cycle + 10 && ((this.prize === 0 && this.index === 7) || this.prize === this.index + 1)) {
                    this.speed += 110;
                } else {
                    this.speed += 20;
                }
                if (this.speed < 40) {
                    this.speed = 40;
                }
                this.timer = setTimeout(this.startRoll, this.speed);
            }
        },
        // 每一次转动
        oneRoll () {
            let index = this.index; // 当前转动到哪个位置
            const count = this.count; // 总共有多少个位置
            index += 1;
            if (index > count - 1) {
                index = 0;
            }
            this.index = index;
        },
        getPrize() {
            const t = parseInt(Math.random() * 1000, 0) + 1000;
            setTimeout(() => {
                const index = parseInt(Math.random() * 10, 0) || 0;
                this.prize = index;
                if (this.prize > 7) {
                    this.prize = 7;
                } else if (this.prize < 0) {
                    this.prize = 0;
                }
                console.log(`中奖位置${this.prize}`);
            }, t);
        }
    },
    created() {
        
    }
}
</script>
<style lang="scss" scoped>
/* stylelint comment-empty-line-before: off */
.luckDraw {
    width: 100%;
    margin: 50px auto;
    .turntable-wrapper {
        padding: 0 38px;
        position: relative;
        /* background: url("background-luck.png"px; */
        padding-top: 121px;
        .luck-wrapper {
            width: 300px;
            height: 377px;
            margin: 0 auto;
            position: relative;
            /* @include background-cover("background-turntable.png"px; */
            .integral {
                width: 100%;
                color: #6d2d00;
                font-size: 16px;
                font-weight: normal;
                text-align: center;
                position: absolute;
                top: 58px;
                span {
                    font-weight: 600;
                    color: #ff2f4d;
                }
            }
            .nineGrid {
                position: absolute;
                top: 86px;
                left: 50%;
                margin-left: -130px;
                width: 260px;
                height: 260px;
                li {
                    height: 80px;
                    display: flex;
                    margin-top: 5px;
                    > div {
                        flex: 1;
                        margin-right: 5px;
                        height: 100%;
                        text-align: center;
                        position: relative;
                        .wrapper {
                            width: 100%;
                            height: 100%;
                            margin: 0;
                            /* @include background-cover("background-grid.png"px; */
                        }
                        img {
                            width: 46px;
                            height: 38px;
                            vertical-align: middle;
                            margin-top: 8px;
                        }
                        .mask {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            opacity: 0.5;
                            border-radius: 10px;
                            background-color: #000;
                            display: none;
                        }
                    }
                    > div.active {
                        .wrapper {
                            p{
                                color: red;
                            }
                        }
                        .mask {
                            display: block;
                        }
                    }
                    > div:first-child {
                        margin-left: 5px;
                    }
                    > div.getLuck {
                        /* @include background-cover("background-getLuck.png"px; */
                        // font-size: 0;
                        p {
                            font-size: 20px;
                            font-weight: 600;
                            // color: #fff;
                            line-height: 1.1;
                            margin-top: 11px;
                        }
                    }
                }
                li:last-child {
                    margin-bottom: 5px;
                }
            }
        }
    }
}
</style>
