import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CrawlerManager from '../views/CrawlerManager.vue';
import CrawlerTasks from '../views/CrawlerTasks'
import UserProfile from '@/views/UserProfile.vue';
import UserList from '@/views/UserList.vue';
import CrawlerStats from '../views/CrawlerStats.vue';
import ProxyManagement from '../views/ProxyManagement';
import CrawlerCategory from '../views/CrawlerCategory.vue';
import ChannelManagement from '../views/ChannelManagement';
import SystemSettings from '../views/SystemSettings.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/crawler-manager',
        name: 'CrawlerManager',
        component: CrawlerManager
    },
    {
        path: '/crawler-tasks', // 爬虫任务页面的路径
        name: 'CrawlerTasks',
        component: CrawlerTasks,
    },
    {
        path: '/user/profile',
        name: 'UserProfile',
        component: UserProfile,
    },
    {
        path: '/user/list',
        name: 'UserList',
        component: UserList,
    },
    {
        path: '/crawler-stats',
        name: 'CrawlerStats',
        component: CrawlerStats,
    },
    {
        path: '/proxy-management',
        name: 'ProxyManagement',
        component: ProxyManagement,
    },
    {
        path: '/crawler-category',
        name: 'CrawlerCategory',
        component: CrawlerCategory
    },
    {
        path: '/channel-management',
        name: '',
        component: ChannelManagement,
    },
    {
        path: '/system-settings',
        name: 'SystemSettings',
        component: SystemSettings, // 配置系统设置页面路由
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
