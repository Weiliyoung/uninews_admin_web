<template>
    <div class="proxy-management">
        <a-button type="primary" @click="showAddProxyModal">添加代理</a-button>

        <a-table :columns="columns" :dataSource="data" rowKey="id" style="margin-top: 20px;">
            <template #bodyCell="{ column, record }">
                <div v-if="column.key === 'actions'" class="action-buttons">
                    <a-button @click="handleEdit(record)" type="link">编辑</a-button>
                    <a-button @click="handleDelete(record)" type="link" danger>删除</a-button>
                </div>
                <div v-else>
                    {{ record[column.key] }}
                </div>
            </template>
        </a-table>

        <a-modal v-model:visible="isAddProxyModalVisible" title="添加代理" @ok="handleAddProxy" @cancel="handleCancel">
            <a-form>
                <a-form-item label="IP地址" name="ip">
                    <a-input v-model="newProxy.ip" placeholder="请输入IP地址"/>
                </a-form-item>
                <a-form-item label="端口" name="port">
                    <a-input v-model="newProxy.port" placeholder="请输入端口"/>
                </a-form-item>
                <a-form-item label="类型" name="type">
                    <a-select v-model="newProxy.type" placeholder="请选择类型">
                        <a-select-option value="HTTP">HTTP</a-select-option>
                        <a-select-option value="HTTPS">HTTPS</a-select-option>
                        <a-select-option value="SOCKS5">SOCKS5</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="状态" name="status">
                    <a-select v-model="newProxy.status" placeholder="请选择状态">
                        <a-select-option value="正常">正常</a-select-option>
                        <a-select-option value="异常">异常</a-select-option>
                    </a-select>
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        name: 'ProxyManagement',
        setup() {
            const isAddProxyModalVisible = ref(false);
            const newProxy = ref({
                ip: '',
                port: '',
                type: '',
                status: '',
            });

            const columns = [
                { title: 'ID', dataIndex: 'id', key: 'id' },
                { title: 'IP地址', dataIndex: 'ip', key: 'ip' },
                { title: '端口', dataIndex: 'port', key: 'port' },
                { title: '类型', dataIndex: 'type', key: 'type' },
                { title: '状态', dataIndex: 'status', key: 'status' },
                { title: '操作', key: 'actions', scopedSlots: { customRender: 'actions' } },
            ];

            const data = ref([
                {
                    id: '1',
                    ip: '192.168.0.1',
                    port: '8080',
                    type: 'HTTP',
                    status: '正常',
                },
                // 可以添加更多数据
            ]);

            const showAddProxyModal = () => {
                isAddProxyModalVisible.value = true;
            };

            const handleAddProxy = () => {
                // 添加代理逻辑
                console.log('添加代理', newProxy.value);
                isAddProxyModalVisible.value = false;
                // 重置表单
                newProxy.value = {
                    ip: '',
                    port: '',
                    type: '',
                    status: '',
                };
            };

            const handleCancel = () => {
                isAddProxyModalVisible.value = false;
            };

            const handleEdit = (record) => {
                // 编辑代理逻辑
                console.log('编辑代理', record);
            };

            const handleDelete = (record) => {
                // 删除代理逻辑
                console.log('删除代理', record);
            };

            return {
                isAddProxyModalVisible,
                newProxy,
                columns,
                data,
                showAddProxyModal,
                handleAddProxy,
                handleCancel,
                handleEdit,
                handleDelete,
            };
        },
    };
</script>

<style scoped>
    .proxy-management {
        padding: 16px;
    }

    .action-buttons a-button {
        margin-right: 8px;
        padding: 0;
        text-align: center;
    }

    .a-table {
        border-radius: 8px;
    }
</style>
