<template>
  <div id="app">
    <div class="container">
      <SideBarMenu />
      <div class="divider"></div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideBarMenu from './components/SideBarMenu.vue';

export default {
  name: 'App',
  components: {
    SideBarMenu
  }
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.container {
  display: flex;
  width: 90%; /* 使用百分比来设置宽度 */
  max-width: 1800px; /* 设置最大宽度 */
  min-width: 1500px; /* 设置最小宽度 */
  height: 80%; /* 使用百分比来设置高度 */
  max-height: 1000px; /* 设置最大高度 */
  border-radius: 10px; /* 增加圆角效果 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  background-color: #fff; /* 背景色 */
  overflow: hidden; /* 确保内容不会溢出容器 */
  transition: all 0.3s;
}

.divider {
  width: 1px;
  background-color: #d9d9d9;
  margin: 0 0px;
}

.content {
  flex-grow: 1;
  padding: 20px;
  background: #fff;
}

@media (max-width: 1200px) {
  .container {
    width: 90%;
    height: 90%;
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .divider {
    width: 100%;
    height: 1px;
    margin: 10px 0;
  }

  .content {
    width: 100%;
    padding: 10px;
  }
}
</style>
