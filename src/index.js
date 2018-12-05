/*
 * @Author: ZHOU
 * @Date:   2018-11-16 21:17:48
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-12-05 16:41:08
 */
import Vue from 'vue'
import App from './app.vue'

import './assets/styles/global.styl'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render: (h) => h(App)
}).$mount(root)