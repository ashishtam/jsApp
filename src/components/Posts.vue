<template>
  <div>
    <Alert :message="errorMessage" :show="error"></Alert>
    <el-table
      :data="posts"
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
  import Alert from './Alert'
  export default {
    name: "Posts",
    data () {
      return {
        errorMessage: ''
      }
    },
    components: {
      Alert
    },
    created() {
      this.$store.dispatch('getPosts')
    },
    computed: {
      posts() {
        return this.$store.state.data
      },
      error() {
        if (this.$store.state.errorLoading) {
          this.errorMessage = this.$store.state.errorMessage
          return true
        } else {
          return false
        }
      }
    }
  }
</script>

<style scoped>

</style>
