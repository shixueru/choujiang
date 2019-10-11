/**
 * storageOptions: {} - Vue-ls 插件配置项 (localStorage/sessionStorage)
 */

export default {
    // primaryColor: '#1890FF', // primary color of ant design
    // navTheme: 'dark', // theme for nav menu
    // layout: 'sidemenu', // nav menu position: sidemenu or topmenu
    // contentWidth: 'Fixed', // layout of content: Fluid or Fixed, only works when layout is topmenu
    // fixedHeader: false, // sticky header
    // fixSiderbar: false, // sticky siderbar
    // autoHideHeader: false, //  auto hide header
    // colorWeak: false,
    // multiTab: false,
    // vue-ls options
    storageOptions: {
        namespace: 'pro__', // key prefix
        name: 'ls', // name variable Vue.[ls] or this.[$ls],
        storage: 'local' // storage name session, local, memory
    }
}
