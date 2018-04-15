<template>
    <el-alert
      :title="message"
      type="error"
      v-if="show"/>
</template>

<script>
  export default {
    name: "Alert",
    props: ['message', 'show']
  }
</script>

<style scoped>

</style>
