<template>
  <header class="page-header">
    <div class="logo">
      <img src="../assets/logo.png" alt="Logo" class="logo-image" />
      <span class="title">爬虫系统</span>
    </div>
    <nav class="nav-links">
      <a href="#" class="nav-link">登录</a>
      <a href="#" class="nav-link">设置</a>
      <a href="#" class="nav-link">说明</a>
      <a href="#" class="nav-link">切换主题</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'PageHeader'
};
</script>

<style scoped>

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff; /* 修改背景色为白色 */
  color: #000; /* 修改字体颜色为黑色 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */

}

.logo {
  display: flex;
  align-items: center;
}

.logo-image {
  width: 40px; /* 设置 logo 图片宽度 */
  height: auto; /* 自适应高度 */
  margin-right: 10px; /* 图片和文字之间的间距 */
}

.title {
  font-size: 20px; /* 设置标题字体大小 */
}

.nav-links {
  display: flex;
}

.nav-link {
  color: #000; /* 设置导航链接字体颜色为黑色 */
  margin-left: 20px; /* 导航链接之间的间距 */
  text-decoration: none; /* 去掉链接的下划线 */
}

.nav-link:hover {
  color: #1890ff; /* 设置鼠标悬停时的字体颜色 */
}
</style>
