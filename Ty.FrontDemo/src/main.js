// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.prototype.$http=axios
Vue.prototype.baseURL="http://localhost:8210"
Vue.use(iView);

axios.interceptors.request.use(
    config => {
        var token = localStorage.ms_token;
        if (token) {
            config.headers.Authorization = "Bearer " + token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);



axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    //
                    router.replace({
                        path: 'login',
                        query: { redirect: router.currentRoute.fullPath }
                    })
                    break;
                case 404:
                    break;
            }
        }
        return Promise.reject(error)
    });


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
