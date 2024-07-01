<template>
  <div class="user-profile">
    <a-card :style="{ borderRadius: '8px' }">
      <a-row gutter="16">
        <a-col span="16">
          <a-descriptions title="" :column="1">
            <a-descriptions-item label="用户名">{{ user.username }}</a-descriptions-item>
            <a-descriptions-item label="邮箱">{{ user.email }}</a-descriptions-item>
            <a-descriptions-item label="手机">{{ user.phone }}</a-descriptions-item>
          </a-descriptions>
          <a-button type="primary" @click="editProfile">编辑资料</a-button>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      user: {
        username: 'Wayne',
        email: 'user@example.com',
        phone: '123-456-7890',
      },
    };
  },
  methods: {
    editProfile() {
      // 编辑资料逻辑
      console.log('编辑资料');
    },
  },
};
</script>

<style scoped>
.user-profile {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fafafa;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

a-card {
  margin-bottom: 20px;
}
</style>
