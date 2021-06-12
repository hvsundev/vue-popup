import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../page/Home.vue';
import InfoView from '../page/popup/Popup.vue';
import LoginView from '../page/login/LoginView.vue';
import JoinView from '../page/login/JoinView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', // url에 # 없애기
    routes: [
        {
            path: '/',
            name: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/notice',
            name: 'notice',
            component: InfoView,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
        },
        {
            path: '/join',
            name: 'join',
            component: JoinView,
        }
    ]
});