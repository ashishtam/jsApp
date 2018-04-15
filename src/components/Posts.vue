<template>
  <div>
    <el-table
      :data="$store.state.data"
      stripe
      empty-text="No data available"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        sortable
        width="130">
      </el-table-column>
      <el-table-column
        prop="userId"
        label="User ID"
        sortable
        width="130">
      </el-table-column>
      <el-table-column
        prop="title"
        sortable
        label="Title">
      </el-table-column>
      <el-table-column
        prop="body"
        sortable
        label="Body">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "Posts",
    mounted: function () {
      this.$store.dispatch('getPosts')
    }
  }
</script>

<style scoped>

</style>
