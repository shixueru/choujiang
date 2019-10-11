<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button type="button" @click="pay" style="width: 100px; height: 50px; border:1px solid #f00; background: #fff; border-radius: 50px;">去支付</button>
    <!-- <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul> -->
    <div><router-link  to="/cart">cart</router-link></div>
    <div @click="goLetter()">>letter</div>
    <div><router-link to="/emojis">emojis</router-link> </div>
    <div><router-link to="/cubicBezier">CubicBezier</router-link></div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goLetter(){
      this.$router.push('/letter');
    },
    pay () {
      /* eslint no-undef : off */
      /* eslint semi: off */
      console.log('点我')
      const currDate = new Date().getTime()
      const url = 'http://116.228.151.160:48041/mapi/redPacket/dollMachine/purchase'
      const params = {
        loginName: '18516217534', // 登录号码StringY
        loginChannel: 'Other', // 登录渠道 String Y
        accessToken: 'jSjFdi0l4QISzRlvlK0NpA6VpGWErVk92018112217101540', // token String Y
        // activityId: this.activityId, // 宝箱活动编号
        boxName: '1元抽奖', // 宝箱名称 String Y
        boxBracket: '100', // 宝箱金额分档 Integer Y 单位分
        boxType: '1', // 宝箱类型 String Y
        boxPurchaseNum: '1', // 宝箱购买数量 Integer Y 单位个
        boxPurchaseAmount: '100', // 宝箱购买金额 Integer Y 单位分
        useVoucherAmount: 0, // 使用代金券金额 Integer Y 单位分
        needsPayAmount: '100', // 需要支付金额 Integer Y 单位分
        boxPurchaseDate: currDate // 购买日期
      };
      axios.post(url, params, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        console.log(res)
        if (res.success) {
          window.location.href = 'https://openapi.alipay.com/gateway.do?alipay_sdk=alipay-sdk-java-3.3.0&app_id=2018111262080917&biz_content=%7B%22body%22%3A%22%E8%B4%AD%E4%B9%B0%E6%B5%8B%E8%AF%95%E5%95%86%E5%93%810.01%E5%85%83%22%2C%22out_trade_no%22%3A%221561523151567%22%2C%22product_code%22%3A%22QUICK_WAP_WAY%22%2C%22subject%22%3A%22%E6%B4%BB%E5%8A%A8%22%2C%22timeout_express%22%3A%222m%22%2C%22total_amount%22%3A%220.01%22%7D&charset=UTF-8&format=json&method=alipay.trade.wap.pay&return_url=https%3A%2F%2Fwww.jd.com&sign=Ml7lA8qdo7aRy5qP6cYXyJFus0%2BFNAeD2hCBsTXbjTY%2B3D1mZMlwVMwsFy6ld%2BFcebUmJjLWEv2ffi8ZMltgNA2MyMkLz6yz87C3Pk3e1beZuTkfQipWuaaWtZVvKT%2BTDcDkGm%2FrngUxDozGL1G7D3tOKfp9OzxBuSrrSxF15K7r8JESh1KDttsDcoZVynSrB%2BX5up1tXuvfeR9EK0ssF2ijdsXt5O%2B3Yh2Ah29kdM9P4N1oww3pSKcIh9mNCWu%2BJYu0iCeo7COzjgqWcOV58vmXwfrzCfXIiiD4Pv67HX8OeAOmTFxzQT%2B9wRWK%2Fob3581vUmfFcJd9%2FZbMmS1OGg%3D%3D&sign_type=RSA2&timestamp=2018-11-22+15%3A36%3A33&version=1.0'
        }
      })
      // const params = {};
      // BestpayHtml5.Payment.pay(params, (val) => {
      //   console.log(val)
      //   // resolve(val);
      // }, (err) => {
      //   console.log(err)
      //   // reject({
      //   //     type: 'fail',
      //   //     data: err
      //   // });
      // }, (cancelErr) => {
      //   console.log(cancelErr)
      //   // reject({
      //   //     type: 'cancel',
      //   //     data: cancelErr
      //   // });
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// h1, h2 {
//   font-weight: normal;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
</style>
