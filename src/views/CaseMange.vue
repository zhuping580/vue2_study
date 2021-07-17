<template>
  <div>
    <div>用例管理</div>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="id" label="id" fixed> </el-table-column>
      <el-table-column prop="title" label="标题" > </el-table-column>
      <el-table-column prop="module" label="模块"> </el-table-column>
      <el-table-column prop="priority" label="优先级"> </el-table-column>
      <el-table-column prop="Preconditions" label="前置条件"> </el-table-column>
      <el-table-column prop="step" label="操作步骤" > </el-table-column>
      <el-table-column prop="outcome" label="预期结果"> </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
        return {
          tableData: [{
            id: 'xxx-xxx-001',
            title: 'xxxxxxxxxxxxxx',
            module: '登录',
            priority: '高',
            Preconditions: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            step: '1.xxxxxxxxxxxxxxxxxxx\n 2.xxxxxxxxxxxxxxxxx\n 3.xxxxxxxxxxxxxx',
            outcome: '成功'
          },
          {
            id: 'xxx-xxx-001',
            title: 'xxxxxxxxxxxxxx',
            module: '登录',
            priority: '高',
            Preconditions: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            step: '1.xxxxxxxxxxxxxxxxxxx\n 2.xxxxxxxxxxxxxxxxx\n 3.xxxxxxxxxxxxxx',
            outcome: '成功'
          }]
        }
      }
};
</script>

<style lang="scss">  
// 这里不能添加 scoped,否则.cell样式不能生效
/* // 表格换行 */
.el-table .cell {
  white-space: pre-line;
}
</style>
