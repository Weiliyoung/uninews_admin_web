<template>
  <div
      class="sidebar"
      :class="{ expanded: isExpanded }"
      @mouseenter="isExpanded = true"
      @mouseleave="isExpanded = false"
  >
    <router-link to="/">
      <img src="@/assets/logo.png" alt="Home" class="logo-image"/>
    </router-link>

    <hr class="divider"/>

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
/* 覆盖 Ant Design Vue 的样式 */
:where(.css-dev-only-do-not-override-19iuou).ant-menu-light.ant-menu-root.ant-menu-inline,
:where(.css-dev-only-do-not-override-19iuou).ant-menu-light.ant-menu-root.ant-menu-vertical {
  border-inline-end: 30px solid rgba(5, 5, 5, 0) !important; /* 覆盖样式 */
}

:where(.css-dev-only-do-not-override-19iuou).ant-menu-inline-collapsed {
  width: 200px;
}

:where(.css-dev-only-do-not-override-19iuou).ant-menu-inline-collapsed >.ant-menu-item,
:where(.css-dev-only-do-not-override-19iuou).ant-menu-inline-collapsed >.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-item,
:where(.css-dev-only-do-not-override-19iuou).ant-menu-inline-collapsed >.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-submenu>.ant-menu-submenu-title,
:where(.css-dev-only-do-not-override-19iuou).ant-menu-inline-collapsed >.ant-menu-submenu>.ant-menu-submenu-title {
  inset-inline-start: 10px;
  padding-inline: calc(50% - 200px);
  text-overflow: clip;
}
:where(.css-dev-only-do-not-override-19iuou).ant-menu-inline >.ant-menu-item,
:where(.css-dev-only-do-not-override-19iuou).ant-menu-vertical >.ant-menu-item,
:where(.css-dev-only-do-not-override-19iuou).ant-menu-inline >.ant-menu-submenu>.ant-menu-submenu-title,
:where(.css-dev-only-do-not-override-19iuou).ant-menu-vertical >.ant-menu-submenu>.ant-menu-submenu-title {
  height: 62px;
  line-height: 100px;
}

.sidebar {
  height: 100%;
  width: 100px; /* 调整初始宽度 */
  transition: width 0.3s;
  background-color: #fff; /* 设置背景颜色为白色 */
  display: flex;
  flex-direction: column; /* 垂直排列 */
  align-items: center; /* 居中对齐 */
}

.sidebar.expanded {
  width: 200px; /* 调整展开后的宽度 */
}

.logo-image {
  width: 100%; /* 设置图片宽度 */
  max-width: 50px; /* 设置最大宽度 */
  height: auto; /* 自动调整高度 */
  cursor: pointer; /* 鼠标悬停时显示指针 */
  margin-bottom: 10px; /* 图片和导航栏之间的间距 */
  padding-top: 10px;
}

.divider {
  width: 80%; /* 设置分割线的宽度 */
  border: 0;
  border-top: 1px solid #ccc; /* 设置分割线的样式 */
  margin: 10px 0; /* 设置分割线的上下间距 */
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
  color: #000 !important; /* 设置字体颜色为黑色 */
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
    height: auto;
  }

  .sidebar.expanded {
    width: 100%;
  }

  a-menu {
    height: auto;
  }
}
</style>
