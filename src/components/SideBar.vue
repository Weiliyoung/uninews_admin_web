<template>
  <div
      class="sideBar"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
  >
    <a-menu
        mode="inline"
        :inline-collapsed="collapsed"
        :default-selected-keys="['1']"
        theme="light"
        :style="{ width: collapsed ? '100px' : '200px' }"
    >
      <a-menu-item key="0">
        <router-link to="/">
          <PieChartOutlined/>
          <span v-show="!collapsed">首页</span>
        </router-link>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <router-link to="/">
            <DesktopOutlined/>
            <span v-show="!collapsed">爬虫管理</span>
          </router-link>
        </template>
        <router-link to="/">
          <a-menu-item key="2">项目列表</a-menu-item>
        </router-link>
        <router-link to="/">
          <a-menu-item key="3">创建项目</a-menu-item>
        </router-link>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <UserOutlined/>
          <span v-show="!collapsed">用户管理</span>
        </template>
        <a-menu-item key="4">用户列表</a-menu-item>
        <a-menu-item key="5">添加用户</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="6">
        <SettingOutlined/>
        <span v-show="!collapsed">系统设置</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';

export default {
  name: 'SideBar',
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    SettingOutlined,
  },
  data() {
    return {
      collapsed: true
    };
  },
  methods: {
    handleMouseEnter() {
      this.collapsed = false;
    },
    handleMouseLeave() {
      this.collapsed = true;
    }
  }
};
</script>

<style scoped>
/* 覆盖 Ant Design Vue 的样式 */
:where(.css-dev-only-do-not-override-19iuou).ant-menu-light.ant-menu-root.ant-menu-inline,
:where(.css-dev-only-do-not-override-19iuou).ant-menu-light.ant-menu-root.ant-menu-vertical {
  border-inline-end: 10px solid rgba(5, 5, 5, 0) !important; /* 覆盖样式 */
}

.sidebar {
  width: 100px; /* 折叠状态下的宽度 */
  height: calc(100% - 10px); /* 减去顶部间距 */
  height: 100%; /* 充满父容器的高度 */
  background-color: #fff; /* 背景色 */
  transition: width 0.3s; /* 添加过渡效果 */
  position: relative;
  z-index: 1000;
  border-right: none; /* 去除边框 */
}

.sidebar:hover {
  width: 200px; /* 展开状态下的宽度 */
}

.sidebar a-menu {
  height: 100%; /* 让菜单充满侧边栏 */
  border-right: none; /* 去除默认边框 */
}

.sidebar a-menu-item span,
.sidebar a-sub-menu span {
  white-space: nowrap; /* 禁止自动换行 */
  overflow: hidden; /* 隐藏溢出的内容 */
  text-overflow: ellipsis; /* 溢出内容用省略号表示 */
}
</style>
