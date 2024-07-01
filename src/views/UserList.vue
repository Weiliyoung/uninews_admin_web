<template>
    <div class="user-list">
        <div class="header">
            <a-button type="primary" @click="addUser">添加用户</a-button>
        </div>
        <a-table :columns="columns" :dataSource="users" rowKey="id" bordered :style="{ borderRadius: '8px' }">
            <template #bodyCell="{ column, record }">
                <div v-if="column.key === 'actions'" class="action-buttons">
                    <a-button @click="handleEdit(record)" type="link">编辑</a-button>
                    <a-button @click="handleDelete(record)" type="link">删除</a-button>
                </div>
            </template>
        </a-table>
    </div>
</template>

<script>
    export default {
        name: 'UserList',
        data() {
            return {
                users: [
                    {id: 1, username: 'Wayne', email: 'Wayne@example.com', phone: '123-456-7890'},
                    {id: 2, username: '用户2', email: 'user2@example.com', phone: '098-765-4321'},
                    // 更多用户数据
                ],
                columns: [
                    {title: 'ID', dataIndex: 'id', key: 'id'},
                    {title: '用户名', dataIndex: 'username', key: 'username'},
                    {title: '邮箱', dataIndex: 'email', key: 'email'},
                    {title: '手机', dataIndex: 'phone', key: 'phone'},
                    {title: '操作', key: 'actions', scopedSlots: {customRender: 'actions'}},
                ],
            };
        },
        methods: {
            addUser() {
                console.log('添加用户');
            },
            handleEdit(record) {
                console.log('编辑用户', record);
            },
            handleDelete(record) {
                console.log('删除用户', record);
            },
        },
    };
</script>

<style scoped>
    .user-list {
        max-width: 100%;
        margin: 0 auto;
        padding: 20px;
        background-color: #fafafa;
        border-radius: 8px;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }


    a-button {
        margin-left: 8px;
    }
</style>
