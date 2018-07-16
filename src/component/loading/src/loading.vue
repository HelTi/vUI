<template>
  <div class="v-loading--wraper">
    <span class="v-loading--animate"></span>
  </div>
</template>

<script>
export default {
  name:'v-loading',
  data(){
    return {

    }
  }
}
</script>

<style lang="scss">
  .v-loading--animate{
    display: inline-block;
    width: 36px;
    height: 36px;
    border: 3px solid rgba(189,189,189 ,0.25);
    border-left-color: #fa5a5a;
    border-top-color: #fa5a5a;
    border-radius: 50%;
    animation: loading-rotate 600ms infinite linear;
    -webkit-animation: loading-rotate 600ms infinite linear;

  }
  @keyframes loading-rotate{
    to{
      transform: rotate(360deg)
    }
  }

  @-webkit-keyframes loading-rotate{
    to{
      transform: rotate(360deg)
    }
  }
</style>


