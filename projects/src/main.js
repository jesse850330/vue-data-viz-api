// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
//import the vue router
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import VueFire from 'vuefire'

//import the App component
import App from './App'
//tell Vue to use the router
Vue.use(VueRouter)
//tell Vue to use the resource
Vue.use(VueResource)

Vue.use(VueFire)


import Jay from './components/Jay/Jay'
import Jesse from './components/Jesse/Jesse'
import Tilly from './components/Tilly/Tilly'
import Vignesh from './components/Vignesh/Vignesh'

const routes = [
  { path: '/', component: Jay },
  { path: '/library', component: Vignesh },
  // {
  //   path: '/admin', component: Admin,
  //   children: [
  //     {
  //       path: '/',
  //       component: Posts
  //     },
  //     {
  //       path: 'comments',
  //       component: Comments
  //     }
  //   ]
  // }
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

//instatiate the vue instance
new Vue({
  //define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app
