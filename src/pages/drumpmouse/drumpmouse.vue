<template>
    <div>
        <div>倒计时{{t}}</div>
			<div>分数{{fs}}</div>
			<div v-if="t<=0">游戏结束</div>
			<div id="main" v-bind:style="{width:x*w+'px',height:y*h+'px'}">
				<div class="ds" v-bind:class="[arr2[arr1.indexOf(v-1)]==1?'dd':'',arr2[arr1.indexOf(v-1)]==0?'dc':'']" v-on:click="da(v-1)" v-for="v in x*y" v-bind:style="{width:w+'px',height:h+'px'}">{{arr2[arr1.indexOf(v-1)]}}</div>
			</div>
    </div>
</template>

<script>
export default {
    name: 'drumpMouse',
    data() {
        return {
            x:5,
            y:5,
            w:100,
            h:100,
            t:30,
            dsq:null,
            dsq2:null,
            s:4,
            fs:0,
            ys:true,
            arr1:[],
            arr2:[],
            arr3:[]
        };
    },
    methods: {
        da(i){
            if(this.arr1.includes(i)&& this.ys && !this.arr3.includes(i)){
                this.arr3.push(i);
                if(this.arr2[this.arr1.indexOf(i)]==1){
                    this.fs++;
                }else{
                    this.fs--;
                }
            }
        },
        sjs(){
            var cc=parseInt(Math.random()*this.x*this.y);
            if(this.arr1.includes(cc)){
                this.sjs();
            }else{
                this.arr1.push(cc);
                this.arr2.push(parseInt(Math.random()*2));
            }
        }
    },
    created() {
        this.dsq=setInterval(()=>{
            this.t--;
            if(this.t<=0){
                clearInterval(this.dsq);
                clearInterval(this.dsq2);
                this.ys=false;
            }
        },1000);
        this.dsq2=setInterval(()=>{
            this.arr1=[];
            this.arr2=[];
            this.arr3=[];
            for(var i=0;i<this.s;i++){
                this.sjs();
            }
        },2000);
    }
};
</script>
<style scope>
.ds{ 
    float: left;
    border: 1px solid #000;
    box-sizing: border-box;
}
.dd{
    background-color: #3E8F3E;
}
.dc{
    background-color: #AC2925;
}

</style>

