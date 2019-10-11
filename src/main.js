// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint null: off */
import Vue from 'vue'
import VueStorage from 'vue-ls'
import config from '@/config/defaultSettings'

// eslint-disable-next-line import/extensions
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// eslint-disable-next-line no-undef
// BestpayHtml5.config('0', false, '45')
// Vue.use(Antd)
Vue.use(VueStorage, config.storageOptions)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
