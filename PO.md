# [Vue 项目性能优化 — 实践指南（网上最全 / 详细）](https://juejin.im/post/5d548b83f265da03ab42471d)

## 一、代码层面的优化
* 1.1. v-if 和 v-show 区分使用场景
* 1.2. computed 和 watch 区分使用场景
* 1.3. v-for 遍历必须为 item 添加 key，且避免同时使用 v-if
推荐：
``` javascript
<ul>
  <li
    v-for="user in activeUsers"
    :key="user.id">
    {{ user.name }}
  </li>
</ul>
computed: {
  activeUsers: function () {
    return this.users.filter(function (user) {
	 return user.isActive
    })
  }
}
```
* 1.4. 长列表性能优化
``` javascript
export default {
  data: () => ({
    users: {}
  }),
  async created() {
    const users = await axios.get("/api/users");
    this.users = Object.freeze(users);
  }
};
```
``` javascript
```
``` bash
```
* 1.5. 事件的销毁
> Vue 组件销毁时，会自动清理它与其它实例的连接，解绑它的全部指令及事件监听器，但是仅限于组件本身的事件。 如果在 js 内使用 addEventListene 等方式是不会自动销毁的，我们需要在组件销毁时手动移除这些事件的监听，以免造成内存泄露，如：
``` javascript
created() {
  addEventListener('click', this.click, false)
},
beforeDestroy() {
  removeEventListener('click', this.click, false)
}
```
* 1.6. 图片资源懒加载
``` bash
npm install vue-lazyload --save-dev
```
``` javascript
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
preLoad: 1.3,
error: 'dist/error.png',
loading: 'dist/loading.gif',
attempt: 1
})
<img v-lazy="/static/img/1.png">
```
* 1.7. 路由懒加载
``` javascript
const Foo = () => import('./Foo.vue')
const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo }
  ]
})
```
* 1.8. 第三方插件的按需引入
``` bash
npm install babel-plugin-component -D
.babelrc 
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```
``` javascript
import Vue from 'vue';
import { Button, Select } from 'element-ui';
 Vue.use(Button)
 Vue.use(Select)
 ```
* 1.9. 优化无限列表性能
* 1.10. 服务端渲染 SSR or 预渲染

## 二、Webpack 层面的优化
* 2.1. Webpack 对图片进行压缩
``` bash
npm install image-webpack-loader --save-dev
{
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  use:[
    {
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    },
    {
      loader: 'image-webpack-loader',
      options: {
        bypassOnDebug: true,
      }
    }
  ]
}
```
* 2.2. 减少 ES6 转为 ES5 的冗余代码
> babel-plugin-transform-runtime 将相关辅助函数进行替换成导入语句，从而减小 babel 编译出来的代码的文件大小
``` bash
npm install babel-plugin-transform-runtime --save-dev
"plugins": [
    "transform-runtime"
]
```
* 2.3. 提取公共代码
> 问题：
    > +a. 相同的资源被重复加载，浪费用户的流量和服务器的成本。
    > +b. 每个页面需要加载的资源太大，导致网页首屏加载缓慢，影响用户体验。
> Webpack 内置了专门用于提取多个Chunk 中的公共部分的插件 CommonsChunkPlugin，我们在项目中 CommonsChunkPlugin 的配置如下：
```javascript
// 所有在 package.json 里面依赖的包，都会被打包进 vendor.js 这个文件中。
new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  minChunks: function(module, count) {
    return (
      module.resource &&
      /\.js$/.test(module.resource) &&
      module.resource.indexOf(
        path.join(__dirname, '../node_modules')
      ) === 0
    );
  }
}),
// 抽取出代码模块的映射关系
new webpack.optimize.CommonsChunkPlugin({
  name: 'manifest',
  chunks: ['vendor']
})
```
* 2.4. 模板预编译
* 2.5. 提取组件的 CSS
* 2.6. 优化 SourceMap
+ a 开发环境推荐： cheap-module-eval-source-map
+ b 生产环境推荐： cheap-module-source-map
* 2.7. 构建结果输出分析
webpack-bundle-analyzer 
```javascript
if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin =   require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}
```
* 2.8. Vue 项目的编译优化

## 三、基础的 Web 技术优化
* 3.1 开启 gzip 压缩
* 3.2 浏览器缓存 [《深入理解HTTP缓存机制及原理》](https://juejin.im/post/5c93ba526fb9a070ca103898)
* 3.3 CDN 的使用
> 浏览器从服务器上下载 CSS、js 和图片等文件时都要和服务器连接，而大部分服务器的带宽有限，如果超过限制，网页就半天反应不过来。而 CDN 可以通过不同的域名来加载文件，从而使下载文件的并发连接数大大增加，且CDN 具有更好的可用性，更低的网络延迟和丢包率 。
* 3.4 使用 Chrome Performance 查找性能瓶颈
