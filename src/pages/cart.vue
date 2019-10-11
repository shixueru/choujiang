<template>
  <div>
    <table border="1">
      <tr>
        <td>
          <input type="checkbox" @click="Allselect" v-model="Allchecked">全选
        </td>
      </tr>
      <div v-for="(val,index) in objArray" :key="index">
        <tr>
          <td>
            <input type="checkbox" :value="val.name" v-model="val.ischecked" @click="addlist(val)">
          </td>
          <td> {{ index}}</td>
          <td>商品名称：{{val.name}}</td>
          <td>价格：{{val.price}}</td>
          <td>标题：{{val.title}}</td>
          <td>
            <img :src="val.img">
          </td>
          <td class="last">
            <button>删除</button>
            <br>
            <button @click="add(val)">+</button>
            <button @click="sub(val)">-</button>
            <span>{{val.num}}</span>
          </td>
        </tr>
      </div>
    </table>
    <br>
    <span style="color:red;font-size:20px;margin-left:20px">总价：{{price}}</span>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import store from '../store'
import UserModule from '../store/common'
export default {
    name: "Market",
    data() {
        return {
        price: 0,
        Allchecked: false,
        number: 0,
        list: [],
            objArray: [
            {
                ischecked: false,
                id: 1,
                num: 0,
                name: "范冰冰",
                price: 10000,
                title: "气场女王，漂亮大气",
                img:
                "https://assets.2dfire.com/frontend/7b0b6ac483cb0b1bc681eef6e559a161.jpg"
            },
            {
                ischecked: false,
                id: 2,
                num: 0,
                name: "古天乐",
                price: 9999,
                title: "男人味十足",
                img:
                "https://assets.2dfire.com/frontend/9e5cfb05270dd3e29874e869d595ec40.jpg"
            },
            {
                ischecked: false,
                id: 3,
                num: 0,
                name: "李晨",
                price: 100,
                title: "Man型男",
                img:
                "https://assets.2dfire.com/frontend/8639997db3f70957df987f3f5b4dfcae.jpg"
            }
            ]
        }
        
    },
    methods: {
        addlist(val) {
            console.log(this.$store)
            // this.list.forEach(item => {
            //   //遍历prodAllPrice这个字段，并累加
            //   sum += item.prodAllPrice;
            // });
        
            if (!val.ischecked) {
                this.list.push(val.name);
            } else {
                this.index = this.list.indexOf(val.name);
                this.list.splice(this.index, 1);
            }
            if (this.list.length === this.objArray.length) {
                this.Allchecked = true;
            } else {
                this.Allchecked = false;
            }
            console.log(this.list)
            setTimeout(() => {
                this.totlePrice();
            }, 0);
        },
        add(val) {
            val.num += 1;
            // console.log(this.objArray, this.list);
            this.totlePrice();
        },
        sub(val) {
            val.num -= 1;
            this.totlePrice();
        },
        Allselect() {
            if (this.list.length === this.objArray.length) {
                for (this.i = 0; this.i < this.objArray.length; this.i++) {
                    this.objArray[this.i].ischecked = false;
                    this.list = [];
                }
            } else {
                this.list = [];
                for (this.i = 0; this.i < this.objArray.length; this.i++) {
                    this.objArray[this.i].ischecked = true;
                    this.list.push(this.objArray[this.i].name);
                }
            }
            this.totlePrice();
        },
        totlePrice() {
            this.price = 0;
            for (let i of this.objArray) {
                if (i.ischecked) {
                    this.price += i.num * i.price;
                }
            }
        }
    },
    computed:{
        co() {
            console.log(this.val)
        }
    
    }
};
 
 
</script>
<style lang="scss" scoped>
* {
    font-size: 10px;
}
table td {
    width: 50px;
}
img {
    width: 50px;
    vertical-align: middle;
}
.last {
    width: 100px;
}
</style>
