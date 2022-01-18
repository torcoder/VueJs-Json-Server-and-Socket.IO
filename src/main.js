import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/style.css';

import AppHeader from '@/components/Shared/appHeader';
import appBookmarkList from '@/components/Shared/appBookmarkList';
import { appAxios } from '@/utils/appAxios';
import io from 'socket.io-client';
const socket = io('http://localhost:2022');

const app = createApp(App);
app.component('AppHeader', AppHeader);
app.component('AppBookmarkList', appBookmarkList);
app.use(router);
app.use(store);
app.config.globalProperties.$appAxios = appAxios;
app.config.globalProperties.$log = console.log;
app.config.globalProperties.$socket = socket;
app.mount('#app');
