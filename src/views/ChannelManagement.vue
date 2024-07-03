<template>
  <div class="channel-management">
    <!-- 检索部分 -->
    <div class="search-section">
      <a-form layout="inline">
        <a-form-item label="渠道名称">
          <a-input v-model="search.name" placeholder="请输入渠道名称"/>
        </a-form-item>
        <a-form-item label="描述">
          <a-input v-model="search.description" placeholder="请输入描述"/>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" @click="handleSearch">检索</a-button>
        </a-form-item>
      </a-form>
    </div>

    <!-- 新建渠道按钮和表格 -->
    <div class="table-section">
      <a-button type="primary" @click="showAddChannelModal">添加渠道</a-button>
      <a-table :columns="columns" :dataSource="filteredData" rowKey="id" style="margin-top: 20px;">
        <template #bodyCell="{ column, record }">
          <div v-if="column.key === 'actions'" class="action-buttons">
            <a-button @click="showEditChannelModal(record)" type="link">编辑</a-button>
            <a-button @click="handleDelete(record)" type="link" danger>删除</a-button>
          </div>
          <div v-else>
            {{ record[column.key] }}
          </div>
        </template>
      </a-table>
    </div>

    <!-- 添加渠道模态框 -->
    <a-modal v-model:visible="isAddChannelModalVisible" title="添加渠道" @ok="handleAddChannel" @cancel="handleCancel">
      <a-form>
        <a-form-item label="渠道名称" name="name" :rules="[ { required: true, message: '请输入渠道名称' } ]">
          <a-input v-model="newChannel.name" placeholder="请输入渠道名称"/>
        </a-form-item>
        <a-form-item label="URL" name="url" :rules="[ { required: true, message: '请输入URL' } ]">
          <a-input v-model="newChannel.url" placeholder="请输入URL"/>
        </a-form-item>
        <a-form-item label="描述" name="description">
          <a-textarea v-model="newChannel.description" placeholder="请输入描述"/>
        </a-form-item>
      </a-form>
    </a-modal>

    <!-- 编辑渠道模态框 -->
    <a-modal v-model:visible="isEditChannelModalVisible" title="编辑渠道" @ok="handleEditChannel" @cancel="handleCancel">
      <a-form>
        <a-form-item label="渠道名称" name="name" :rules="[ { required: true, message: '请输入渠道名称' } ]">
          <a-input v-model="currentChannel.name" placeholder="请输入渠道名称"/>
        </a-form-item>
        <a-form-item label="URL" name="url" :rules="[ { required: true, message: '请输入URL' } ]">
          <a-input v-model="currentChannel.url" placeholder="请输入URL"/>
        </a-form-item>
        <a-form-item label="描述" name="description">
          <a-textarea v-model="currentChannel.description" placeholder="请输入描述"/>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'ChannelManagement',
  data() {
    return {
      search: {
        name: '',
        description: '',
      },
      isAddChannelModalVisible: false,
      isEditChannelModalVisible: false,
      newChannel: {
        id: '',
        name: '',
        description: '',
        url: '',
      },
      currentChannel: {
        id: '',
        name: '',
        description: '',
        url: '',
      },
      columns: [
        { title: '渠道ID', dataIndex: 'id', key: 'id' },
        { title: '渠道名称', dataIndex: 'name', key: 'name' },
        { title: '描述', dataIndex: 'description', key: 'description' },
        { title: 'URL', dataIndex: 'url', key: 'url' },
        { title: '操作', key: 'actions', scopedSlots: { customRender: 'actions' } },
      ],
      data: [
        {
          id: '1',
          name: '渠道1',
          description: '描述1',
          url: 'http://example.com',
        },
        // 其他数据
      ],
    };
  },
  computed: {
    filteredData() {
      return this.data.filter(item => {
        return (
            (!this.search.name || item.name.includes(this.search.name)) &&
            (!this.search.description || item.description.includes(this.search.description))
        );
      });
    },
  },
  methods: {
    handleSearch() {
      // 检索逻辑
      console.log('检索条件', this.search);
    },
    showAddChannelModal() {
      this.isAddChannelModalVisible = true;
    },
    handleAddChannel() {
      // 添加渠道逻辑
      this.data.push({ ...this.newChannel, id: this.data.length + 1 });
      this.isAddChannelModalVisible = false;
      this.resetNewChannel();
    },
    showEditChannelModal(record) {
      this.currentChannel = { ...record };
      this.isEditChannelModalVisible = true;
    },
    handleEditChannel() {
      // 编辑渠道逻辑
      const index = this.data.findIndex(item => item.id === this.currentChannel.id);
      if (index !== -1) {
        this.data.splice(index, 1, this.currentChannel);
      }
      this.isEditChannelModalVisible = false;
    },
    handleDelete(record) {
      // 删除渠道逻辑
      this.data = this.data.filter(item => item.id !== record.id);
    },
    handleCancel() {
      this.isAddChannelModalVisible = false;
      this.isEditChannelModalVisible = false;
    },
    resetNewChannel() {
      this.newChannel = {
        id: '',
        name: '',
        description: '',
        url: '',
      };
    },
  },
};
</script>

<style scoped>
.channel-management {
  padding: 16px;
}

.search-section {
  margin-bottom: 16px;
}

.table-section {
  margin-top: 16px;
}

.action-buttons {
  /*text-align: center;*/
}
</style>
