<template>
  <div class="system-settings">
    <a-form @submit.prevent="handleSave">
      <a-form-item label="系统名称" :rules="[ { required: true, message: '请输入系统名称' } ]">
        <a-input v-model="settings.systemName" placeholder="请输入系统名称"/>
      </a-form-item>
      <a-form-item label="语言选择" :rules="[ { required: true, message: '请选择语言' } ]">
        <a-select v-model="settings.language" placeholder="请选择语言">
          <a-select-option value="zh">中文</a-select-option>
          <a-select-option value="en">English</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="主题选择" :rules="[ { required: true, message: '请选择主题' } ]">
        <a-select v-model="settings.theme" placeholder="请选择主题">
          <a-select-option value="light">浅色主题</a-select-option>
          <a-select-option value="dark">深色主题</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" htmlType="submit">保存设置</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'SystemSettings',
  data() {
    return {
      settings: {
        systemName: '',
        language: 'zh',
        theme: 'light',
      },
    };
  },
  methods: {
    handleSave() {
      console.log('保存设置', this.settings);
      // 此处可以调用接口保存设置
      this.$message.success('设置已保存');
    },
  },
};
</script>

<style scoped>
.system-settings {
  padding: 16px;
  max-width: 600px;
  margin: 0 auto;
}

.a-form-item {
  margin-bottom: 16px;
}
</style>
