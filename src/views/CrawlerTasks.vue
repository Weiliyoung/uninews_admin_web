<template>
  <div class="crawler-tasks">
    <!-- 检索部分 -->
    <div class="search-section">
      <a-form layout="inline">
        <a-form-item label="标题">
          <a-input v-model="search.title" placeholder="请输入标题"/>
        </a-form-item>
        <a-form-item label="院校">
          <a-input v-model="search.school" placeholder="请输入院校"/>
        </a-form-item>
        <a-form-item label="发布时间">
          <a-date-picker v-model="search.date" style="width: 100%;" placeholder="请选择发布时间"/>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" @click="handleSearch">检索</a-button>
        </a-form-item>
      </a-form>
    </div>

    <!-- 爬虫状态筛选 -->
    <div class="status-section">
      <a-checkbox-group v-model="statuses">
        <a-checkbox value="normal">正常</a-checkbox>
        <a-checkbox value="abnormal">异常</a-checkbox>
        <a-checkbox value="no-data">采集不到数据</a-checkbox>
        <a-checkbox value="data-error">采集到但显示不出</a-checkbox>
      </a-checkbox-group>
    </div>

    <!-- 分割线 -->
    <a-divider/>

    <!-- 新建爬虫按钮和表格 -->
    <div class="table-section">
      <a-button type="primary" @click="handleCreate">新建爬虫</a-button>
      <a-table :columns="columns" :dataSource="data" rowKey="id" style="margin-top: 10px;">
        <template #bodyCell="{ column, record }">
          <div v-if="column.key === 'actions'" class="action-buttons">
            <a-button @click="handleEdit(record)" type="link">编辑</a-button>
            <a-button @click="handleSchedule(record)" type="link">定时</a-button>
            <a-button @click="handleDelete(record)" type="link" danger>删除</a-button>
          </div>
          <div v-else class="table-cell">
            {{ record[column.key] }}
          </div>
        </template>
      </a-table>
    </div>

    <!-- 编辑弹窗 -->
    <a-modal v-model:visible="isModalVisible" title="编辑爬虫" width="800px" @ok="handleOk" @cancel="handleCancel">
      <a-form layout="vertical">
        <a-form-item label="ID">
          <a-input v-model="editRecord.id" disabled/>
        </a-form-item>
        <a-form-item label="院校">
          <a-input v-model="editRecord.school" placeholder="请输入院校"/>
        </a-form-item>
        <a-form-item label="栏目">
          <a-input v-model="editRecord.category" placeholder="请输入栏目"/>
        </a-form-item>
        <a-form-item label="分类">
          <a-input v-model="editRecord.type" placeholder="请输入分类"/>
        </a-form-item>
        <a-form-item label="地区">
          <a-input v-model="editRecord.region" placeholder="请输入地区"/>
        </a-form-item>
        <a-form-item label="状态">
          <a-input v-model="editRecord.status" placeholder="请输入状态"/>
        </a-form-item>
        <a-form-item label="采集总量">
          <a-input-number v-model="editRecord.total" style="width: 100%;"/>
        </a-form-item>
        <a-form-item label="一周采集总量">
          <a-input-number v-model="editRecord.weeklyTotal" style="width: 100%;"/>
        </a-form-item>
        <a-form-item label="上次采集时间">
          <a-date-picker v-model="editRecord.lastCollectTime" style="width: 100%;" show-time/>
        </a-form-item>
        <a-form-item label="下次运行时间">
          <a-date-picker v-model="editRecord.nextRunTime" style="width: 100%;" show-time/>
        </a-form-item>
        <a-form-item label="备注">
          <a-input v-model="editRecord.remarks" placeholder="请输入备注"/>
        </a-form-item>
      </a-form>
    </a-modal>

    <!-- 新建爬虫弹窗 -->
    <a-modal v-model:visible="isCreateModalVisible" title="新建爬虫" width="100%" height="90%" @ok="handleCreateOk" @cancel="handleCreateCancel">
      <div class="create-modal-content">
        <div class="form-section">
          <a-form layout="vertical">
            <a-form-item label="院校">
              <a-input v-model="newRecord.school" placeholder="请输入院校"/>
            </a-form-item>
            <a-form-item label="栏目">
              <a-input v-model="newRecord.category" placeholder="请输入栏目"/>
            </a-form-item>
            <a-form-item label="分类">
              <a-input v-model="newRecord.type" placeholder="请输入分类"/>
            </a-form-item>
            <a-form-item label="地区">
              <a-input v-model="newRecord.region" placeholder="请输入地区"/>
            </a-form-item>
            <a-form-item label="状态">
              <a-input v-model="newRecord.status" placeholder="请输入状态"/>
            </a-form-item>
            <a-form-item label="备注">
              <a-input v-model="newRecord.remarks" placeholder="请输入备注"/>
            </a-form-item>
          </a-form>
        </div>
        <div class="content-preview">
          <p>这里可以预览一些内容或展示信息</p>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'CrawlerTasks',
  data() {
    return {
      search: {
        title: '',
        school: '',
        date: null,
      },
      statuses: [],
      columns: [
        {title: 'ID', dataIndex: 'id', key: 'id'},
        {title: '院校', dataIndex: 'school', key: 'school'},
        {title: '栏目', dataIndex: 'category', key: 'category'},
        {title: '分类', dataIndex: 'type', key: 'type'},
        {title: '地区', dataIndex: 'region', key: 'region'},
        {title: '状态', dataIndex: 'status', key: 'status'},
        {title: '采集总量', dataIndex: 'total', key: 'total'},
        {title: '一周采集总量', dataIndex: 'weeklyTotal', key: 'weeklyTotal'},
        {title: '上次采集时间', dataIndex: 'lastCollectTime', key: 'lastCollectTime'},
        {title: '下次运行时间', dataIndex: 'nextRunTime', key: 'nextRunTime'},
        {title: '备注', dataIndex: 'remarks', key: 'remarks'},
        {title: '操作', key: 'actions', scopedSlots: {customRender: 'actions'}}
      ],
      data: [
        {
          id: '1',
          school: 'XX大学',
          category: '新闻',
          type: '国内',
          region: '北京',
          status: '正常',
          total: 120,
          weeklyTotal: 15,
          lastCollectTime: '2024-06-27 12:00:00',
          nextRunTime: '2024-06-28 12:00:00',
          remarks: '无',
        },
        // 可以添加更多数据
      ],
      isModalVisible: false,
      isCreateModalVisible: false,
      editRecord: {},
      newRecord: {
        school: '',
        category: '',
        type: '',
        region: '',
        status: '',
        remarks: '',
      },
    };
  },
  methods: {
    handleSearch() {
      // 检索逻辑
      console.log('检索条件', this.search);
      console.log('爬虫状态', this.statuses);
    },
    handleCreate() {
      // 打开新建爬虫弹窗
      this.isCreateModalVisible = true;
      console.log('新建爬虫');
    },
    handleEdit(record) {
      // 打开编辑弹窗
      this.editRecord = { ...record };
      this.isModalVisible = true;
      console.log('编辑爬虫', record);
    },
    handleSchedule(record) {
      // 定时爬虫逻辑
      console.log('定时爬虫', record);
    },
    handleDelete(record) {
      // 删除爬虫逻辑
      console.log('删除爬虫', record);
    },
    handleOk() {
      // 确认编辑
      console.log('编辑确认', this.editRecord);
      this.isModalVisible = false;
    },
    handleCancel() {
      // 取消编辑
      this.isModalVisible = false;
    },
    handleCreateOk() {
      // 确认新建
      console.log('新建确认', this.newRecord);
      this.isCreateModalVisible = false;
    },
    handleCreateCancel() {
      // 取消新建
      this.isCreateModalVisible = false;
    },
  },
};
</script>

<style scoped>
.crawler-tasks {
  padding: 16px;
}

.search-section {
  margin-bottom: 16px;
}

.status-section {
  margin-bottom: 16px;
}

.table-section {
  margin-top: 16px;
}

.action-buttons {
  text-align: center;
}

.action-buttons a-button {
  margin-right: 8px;
  padding: 0;
  text-align: center;
}

.table-cell {
  text-align: center;
}

.ant-table-thead > tr > th,
.ant-table-tbody > tr > td {
  text-align: center;
}

.ant-table-thead > tr > th {
  background-color: #fafafa;
  border-bottom: 1px solid #e8e8e8;
}

.ant-table-tbody > tr > td {
  border-bottom: 1px solid #e8e8e8;
}

.ant-table-body-inner .ant-table-tbody > tr > td {
  text-align: center;
}

.ant-table-thead > tr > th,
.ant-table-body-inner .ant-table-tbody > tr > td {
  padding: 16px;
}

.create-modal-content {
  display: flex;
  justify-content: space-between;
}

.form-section {
  width: 30%;
  padding-right: 20px;
}

.content-preview {
  width: 80%;
  padding-left: 20px;
  border-left: 1px solid #e8e8e8;
}
</style>
