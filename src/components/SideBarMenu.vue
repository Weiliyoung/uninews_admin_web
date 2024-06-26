<template>
  <div
      class="sidebar"
      :class="{ expanded: isExpanded }"
      @mouseenter="isExpanded = true"
      @mouseleave="isExpanded = false"
  >
    <a-menu
        mode="vertical"
        :theme="'light'"
        :inline-collapsed="!isExpanded"
    >
      <a-menu-item key="1">
        <router-link to="/">Home page</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/about">About</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link to="/crawler-manager">Crawler Manager</router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: 'SideBarMenu',
  data() {
    return {
      isExpanded: false
    };
  }
};
</script>

<style scoped>
.sidebar {
  height: 100%;
  width: 100px; /* 调整初始宽度 */
  transition: width 0.3s;
  background-color: #fff; /* 设置背景颜色为白色 */
}

.sidebar.expanded {
  width: 200px; /* 调整展开后的宽度 */
}

a-menu {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 使文字垂直居中 */
  border-right: none; /* 去掉右侧的分割线 */
}

a-menu-item {
  display: flex;
  align-items: center;
  justify-content: center; /* 使文字水平居中 */
  color: #000; /* 设置字体颜色为黑色 */
}

a-menu-item:hover {
  background-color: #e6f7ff; /* 设置鼠标悬停时的背景颜色 */
}

a-menu-item::after {
  display: none; /* 去掉默认的下划线 */
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
  }
}
</style>
