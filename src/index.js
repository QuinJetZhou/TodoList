/*
* @Author: ZHOU
* @Date:   2018-11-16 21:17:48
* @Last Modified by:   ZHOU
* @Last Modified time: 2018-11-19 14:25:22
*/
import Vue from 'vue'
import App from './app.vue'

import './assets/styles/test.css'
import './assets/styles/test-stylus.styl'
import './assets/images/bg.jpg'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render:(h) => h(App)
}).$mount(root)