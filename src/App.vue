<template>
  <div id="app">
    <PageHeader />
    <div class="container">
      <SideBar />
      <div class="content-box">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import SideBar from './components/SideBar.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
    SideBar
  }
};
</script>

<style>
/* 全局样式可以在这里定义 */
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.container {
  display: flex;
  flex: 1;
  padding-top: 1px; /* 添加顶部间距 */
}

.content-box {
  flex: 1;
  padding: 20px;
  background-color: #fff; /* 设置背景色 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  border-radius: 10px; /* 增加圆角效果 */
  overflow: auto; /* 确保内容不会溢出容器 */
  transition: all 0.3s;
  margin-left: 20px; /* 与导航栏隔开一点点距离 */
}
</style>
