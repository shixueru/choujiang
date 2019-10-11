<template>
    <div>
        <!-- <div class="linear"></div> -->
        
        <!-- <div class="box"><div class="ball run_top_right"></div></div> -->
        <!-- <div class="custom"></div> -->
        <div class="item">
            <i class="con"> <i class="qiu"> </i> </i>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
$easeInSine: cubic-bezier(0.47, 0, 0.745, 0.715);

$easeOutSine: cubic-bezier(0.39, 0.575, 0.565, 1);

$easeInOutSine: cubic-bezier(0.445, 0.05, 0.55, 0.95);

$easeInQuad: cubic-bezier(0.55, 0.085, 0.68, 0.53);

$easeOutQuad: cubic-bezier(0.25, 0.46, 0.45, 0.94);

$easeInOutQuad: cubic-bezier(0.455, 0.03, 0.515, 0.955);

$easeInCubic: cubic-bezier(0.55, 0.055, 0.675, 0.19);

$easeOutCubic: cubic-bezier(0.215, 0.61, 0.355, 1);

$easeInOutCubic: cubic-bezier(0.645, 0.045, 0.355, 1);

$easeInQuart: cubic-bezier(0.895, 0.03, 0.685, 0.22);

$easeOutQuart: cubic-bezier(0.165, 0.84, 0.44, 1);

$easeInOutQuart: cubic-bezier(0.77, 0, 0.175, 1);

$easeInQuint: cubic-bezier(0.755, 0.05, 0.855, 0.06);

$easeOutQuint: cubic-bezier(0.23, 1, 0.32, 1);

$easeInOutQuint: cubic-bezier(0.86, 0, 0.07, 1);

$easeInExpo: cubic-bezier(0.95, 0.05, 0.795, 0.035);

$easeOutExpo: cubic-bezier(0.19, 1, 0.22, 1);

$easeInOutExpo: cubic-bezier(1, 0, 0, 1);

$easeInCirc: cubic-bezier(0.6, 0.04, 0.98, 0.335);

$easeOutCirc: cubic-bezier(0.075, 0.82, 0.165, 1);

$easeInOutCirc: cubic-bezier(0.785, 0.135, 0.15, 0.86);

$easeInBack: cubic-bezier(0.6, -0.28, 0.735, 0.045);

$easeOutBack: cubic-bezier(0.175, 0.885, 0.32, 1.275);

$easeInOutBack: cubic-bezier(0.68, -0.55, 0.265, 1.55);
//      .linear {
//       width: 50px;
//       height: 50px;
//       background-color: #ff0000;
//       -webkit-transition:  all 2s linear;
//          -moz-transition:  all 2s linear;
//            -o-transition:  all 2s linear;
//               transition:  all 2s linear;
//     }
//     .linear:hover {
//       -webkit-transform:  translateX(100px);
//          -moz-transform:  translateX(100px);
//            -o-transform:  translateX(100px);
//               transform:  translateX(100px);
//     }

//     .custom {
//       width: 50px;
//       height: 50px;
//       margin-top: 300px;
//       background-color: #00ff00;
//       animation: b 1.5s cubic-bezier(.94,-0.25,.32,1.31) infinite;
//     //   transition: $easeInCirc 1s infinit;
//     //   -webkit-transition:  all 2s cubic-bezier(.94,-0.25,.32,1.31);
//     //      -moz-transition:  all 2s cubic-bezier(.94,-0.25,.32,1.31);
//     //        -o-transition:  all 2s cubic-bezier(.94,-0.25,.32,1.31);
//               transition:  all 2s cubic-bezier(.94,-0.25,.32,1.31);
//     }
//     @keyframes b {
//         0%{
//             transform: translate(0px, 0px);
//         }
//         30%{
//            transform: translate(100px, -100px); 
//         }
//         100%{
//            transform: translate(200px, 200px); 
//         }
//     }
//     // .custom:hover {
//     // //   -webkit-transform:  translateX(200px);
//     // //      -moz-transform:  translateX(200px);
//     // //        -o-transform:  translateX(200px);
//     //         transform:  translate(200px, -200px);
//     // }
//     //定义球的初始值，位置是绝对定位；
//     .box{
//         position: relative;
//         left: 100px;
//         top: 100px;
//     }
// .ball{
//   height: 100px;
//   width: 100px;
//   border-radius: 50%;
//   position: absolute;
//   bottom: 0px;
//   z-index: 10;
//   left: 0px;
//   background: greenyellow;
// }

// //定义动画的流程
// .run_top_right {
//   display: block;
//   animation: run-right-top 2s 1 cubic-bezier(.25,.01,.25,1);
//   // animation: run-right-right 3s 0.4s 1 linear, run-right-top 3s 0.4s 1 ease-out;
//   animation-fill-mode: forwards;
// }

// //向上走的动画初始及结尾值
// @keyframes run-right-top {
//   0% {
//     bottom: 0px;
//     left: 0px;
//   }
//     50% {
//     bottom: 50px;
//     left: 40px;
//     transform: scale(0.7);
//   }
//   100% {
//     bottom: -100px;
//     left: 200px;
//     transform: scale(0.45);
//   }
// }
// //向上右的动画初始及结尾值
// @keyframes run-right-right {
//   0% {
    
//   }

//   100% {
    
//   }
// }


.item {
    width: 200px;
    height: 200px;
    position: relative;
    border: 2px solid #dddddd;
    border-width: 2px 2px 0 0;
    margin-left: 100px;
    margin-top: 100px;
    background: linear-gradient(to top, #ddd 10%, transparent 10%), linear-gradient(to right, #ddd 10%, transparent 10%);
    background-size: 100% 20%, 20%, 100%;
}
.qiu {
    width: 20px;
    height: 20px;
    background-color: blue;
    border-radius: 50%;
    position: absolute;
    transition: all 0.8s;
}
.con {
    width: 20px;
    height: 20px;
    background-color: transparent;
    border-radius: 50%;
    position: absolute;
    top: -10px;
    left: -10px;
    transition: all 0.8s;
}
.item:hover .con {
    transform: translateX(200px);
    transition-timing-function: linear;
}
.item:hover .qiu {
    transform: translateY(200px);
    transition-timing-function: cubic-bezier(.58, -0.42, 1, .65)
}
</style>

