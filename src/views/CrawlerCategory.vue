<template>
  <div class="crawler-category">
    <!-- 检索部分 -->
    <div class="search-section">
      <a-form layout="inline">
        <a-form-item label="院校">
          <a-input v-model="search.school" placeholder="请输入院校"/>
        </a-form-item>
        <a-form-item label="题目">
          <a-input v-model="search.title" placeholder="请输入题目"/>
        </a-form-item>
        <a-form-item label="地区">
          <a-input v-model="search.region" placeholder="请输入地区"/>
        </a-form-item>
        <a-form-item label="分类名称">
          <a-input v-model="search.name" placeholder="请输入分类名称"/>
        </a-form-item>
        <a-form-item label="描述">
          <a-input v-model="search.description" placeholder="请输入描述"/>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" @click="handleSearch">搜索</a-button>
        </a-form-item>
      </a-form>
    </div>
    <!-- 分割线 -->
    <a-divider/>

    <!-- 新建分类按钮和表格 -->
    <div class="table-section">
      <a-button type="primary" @click="showAddCategoryModal">添加分类</a-button>
      <a-table :columns="columns" :dataSource="filteredData" rowKey="id" style="margin-top: 20px;">
        <template #bodyCell="{ column, record }">
          <div v-if="column.key === 'actions'" class="action-buttons">
            <a-button @click="showEditCategoryModal(record)" type="link">编辑</a-button>
            <a-button @click="handleDelete(record)" type="link" danger>删除</a-button>
          </div>
          <div v-else>
            {{ record[column.key] }}
          </div>
        </template>
      </a-table>
    </div>

    <!-- 添加分类模态框 -->
    <a-modal v-model:visible="isAddCategoryModalVisible" title="添加分类" @ok="handleAddCategory" @cancel="handleCancel">
      <a-form>
        <a-form-item label="分类" name="name" :rules="[ { required: true, message: '请输入分类名称' } ]">
          <a-input v-model="newCategory.name" placeholder="请输入分类名称"/>
        </a-form-item>
        <a-form-item label="院校" name="school" :rules="[ { required: true, message: '请输入院校' } ]">
          <a-input v-model="newCategory.school" placeholder="请输入院校"/>
        </a-form-item>
        <a-form-item label="题目" name="title" :rules="[ { required: true, message: '请输入题目' } ]">
          <a-input v-model="newCategory.title" placeholder="请输入题目"/>
        </a-form-item>
        <a-form-item label="地区" name="region" :rules="[ { required: true, message: '请输入地区' } ]">
          <a-input v-model="newCategory.region" placeholder="请输入地区"/>
        </a-form-item>
        <a-form-item label="描述" name="description" >
          <a-textarea v-model="newCategory.description" placeholder="请输入描述"/>
        </a-form-item>
      </a-form>
    </a-modal>

    <!-- 编辑分类模态框 -->
    <a-modal v-model:visible="isEditCategoryModalVisible" title="编辑分类" @ok="handleEditCategory" @cancel="handleCancel">
      <a-form>
        <a-form-item label="分类" name="name" :rules="[ { required: true, message: '请输入分类名称' } ]">
          <a-input v-model="currentCategory.name" placeholder="请输入分类名称"/>
        </a-form-item>
        <a-form-item label="描述" name="description">
          <a-textarea v-model="currentCategory.description" placeholder="请输入描述"/>
        </a-form-item>
        <a-form-item label="院校" name="school" :rules="[ { required: true, message: '请输入院校' } ]">
          <a-input v-model="currentCategory.school" placeholder="请输入院校"/>
        </a-form-item>
        <a-form-item label="题目" name="title" :rules="[ { required: true, message: '请输入题目' } ]">
          <a-input v-model="currentCategory.title" placeholder="请输入题目"/>
        </a-form-item>
        <a-form-item label="地区" name="region" :rules="[ { required: true, message: '请输入地区' } ]">
          <a-input v-model="currentCategory.region" placeholder="请输入地区"/>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'CrawlerCategory',
  data() {
    return {
      search: {
        id: '',
        school: '',
        title: '',
        region: '',
        name: '',
        description: '',
      },
      isAddCategoryModalVisible: false,
      isEditCategoryModalVisible: false,
      newCategory: {
        id: '',
        school: '',
        title: '',
        region: '',
        name: '',
        description: '',
      },
      currentCategory: {
        id: '',
        school: '',
        title: '',
        region: '',
        name: '',
        description: '',
      },
      columns: [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: '院校', dataIndex: 'school', key: 'school' },
        { title: '题目', dataIndex: 'title', key: 'title' },
        { title: '地区', dataIndex: 'region', key: 'region' },
        { title: '分类', dataIndex: 'name', key: 'name' },
        { title: '描述', dataIndex: 'description', key: 'description' },
        { title: '操作', key: 'actions', scopedSlots: { customRender: 'actions' } },
      ],
      data: [
        {
          id: '1',
          school: 'XX大学',
          title: '题目1',
          region: '北京',
          name: '分类1',
          description: '描述1',
        },
        // 其他数据
      ],
    };
  },
  computed: {
    filteredData() {
      return this.data.filter(item => {
        return (
            (!this.search.id || item.id.includes(this.search.id)) &&
            (!this.search.school || item.school.includes(this.search.school)) &&
            (!this.search.title || item.title.includes(this.search.title)) &&
            (!this.search.region || item.region.includes(this.search.region)) &&
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
    showAddCategoryModal() {
      this.isAddCategoryModalVisible = true;
    },
    handleAddCategory() {
      // 添加分类逻辑
      this.data.push({ ...this.newCategory, id: this.data.length + 1 });
      this.isAddCategoryModalVisible = false;
      this.resetNewCategory();
    },
    showEditCategoryModal(record) {
      this.currentCategory = { ...record };
      this.isEditCategoryModalVisible = true;
    },
    handleEditCategory() {
      // 编辑分类逻辑
      const index = this.data.findIndex(item => item.id === this.currentCategory.id);
      if (index !== -1) {
        this.data.splice(index, 1, this.currentCategory);
      }
      this.isEditCategoryModalVisible = false;
    },
    handleDelete(record) {
      // 删除分类逻辑
      this.data = this.data.filter(item => item.id !== record.id);
    },
    handleCancel() {
      this.isAddCategoryModalVisible = false;
      this.isEditCategoryModalVisible = false;
    },
    resetNewCategory() {
      this.newCategory = {
        id: '',
        school: '',
        title: '',
        region: '',
        name: '',
        description: '',
      };
    },
  },
};
</script>

<style scoped>
.crawler-category {
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
