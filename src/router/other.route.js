import Home from '@/pages/home'
import HelloWorld from '@/pages/HelloWorld'
import Cart from '@/pages/cart'
import Letter from '@/pages/css3_letterSpace'
import Emojis from '@/pages/emojis'
import CubicBezier from '@/pages/cubic-bezier'

export default {
    // main: {
    //     path: '/home',
    //     component: home,
    //     name: 'home',
    //     meta: {
    //         fromRoute: '/guide',
    //         enterOnce: true,
    //         title: '购买会员',
    //         oldTitle: '充值赠礼',
    //         isBack: false,
    //         keepAlive: true
    //     }
    // }
    // transfer: {
    //     path: '/transfer',
    //     name: 'Transfer',
    //     component: Transfer
    // },
    home: {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            keepAlive: false
        }
    },
    hello: {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld,
        meta: {
            keepAlive: false
        }
    },
    cart: {
        path: '/cart',
        name: 'Cart',
        component: Cart,
        meta: {
            keepAlive: false
        }
    },
    letter: {
        path: '/letter',
        name: 'Letter',
        component: Letter,
        meta: {
            keepAlive: false
        }
    },
    emojis: {
        path: '/emojis',
        name: 'Emojis',
        component: Emojis,
        meta: {
            keepAlive: false
        }
    },
    cubicBezier: {
        path: '/cubicBezier',
        name: 'CubicBezier',
        component: CubicBezier,
        meta: {
            keepAlive: false
        }
    }
};