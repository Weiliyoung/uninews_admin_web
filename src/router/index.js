import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CrawlerManager from '../views/CrawlerManager.vue';
import CrawlerTasks from '../views/CrawlerTasks'

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
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
