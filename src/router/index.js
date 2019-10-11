/* eslint null: off */
import Vue from 'vue'
import Router from 'vue-router'
// import { constantRouterMap } from '@/config/router.config'
import Home from '@/pages/home/home'
import HelloWorld from '@/pages/HelloWorld'
import Cart from '@/pages/cart'
import Letter from '@/pages/css3_letterSpace'
import Emojis from '@/pages/emojis'
import CubicBezier from '@/pages/cubic-bezier'
import luckyDraw from '@/pages/luckydraw/luckydraw';
import drumpMouse from '@/pages/drumpmouse/drumpMouse';
import globalCompositeOpeartion from '@/pages/globalCompositeOpeartion';
import hitMouse from '@/pages/hit-mouse/hitMouse';

Vue.use(Router)
const routers = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/hitMouse',
        name: 'hitMouse',
        component: hitMouse
    },
    {
        path: '/globalCompositeOpeartion',
        name: 'globalCompositeOpeartion',
        component: globalCompositeOpeartion
    },
    {
        path: '/drumpMouse',
        name: 'drumpMouse',
        component: drumpMouse
    },
    {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/letter',
        name: 'Letter',
        component: Letter
    },
    {
        path: '/emojis',
        name: 'Emojis',
        component: Emojis
    },
    {
        path: '/cubicBezier',
        name: 'CubicBezier',
        component: CubicBezier
    },
    {
        path: '/luckyDraw',
        name: 'luckyDraw',
        component: luckyDraw
    }
];
export default new Router({
    routes: routers
})
