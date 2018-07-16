<template>
    <div v-show="value" class="v-message-box">
      <p>messageBox</p>
      <div>no</div>
      <div>ok</div>
    </div>
</template>

<script>
  export default {
    name: "vMessageBox",
    data(){
      return {
        value:false
      }
    }
  }
</script>

<style scoped>

</style>
