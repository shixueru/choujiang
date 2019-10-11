/* eslint null: off */
import Vue from 'vue';
import vuex from 'vuex';
import common from './common';
import createPersistedState from 'vuex-persistedstate';
import createLogger from 'vuex/dist/logger';

Vue.use(vuex)
// 判断环境 vuex提示生产环境中不使用
const debug = process.env.NODE_ENV !== 'production'
const createPersisted = createPersistedState({
    storage: window.sessionStorage
})

export default new vuex.Store({
    modules: {
        common
    },
    plugins: debug ? [createLogger(), createPersisted] : [createPersisted]
})
