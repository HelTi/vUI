<template>
  <div id="app">
    <section>
      <h3>component</h3>
    </section>
    <section>
      <button @click="openPopup">open-popup</button>
    </section>
    <section>
      <v-popup :visible.sync="popupVisible">
        <div style="height: 120px;">11</div>
      </v-popup>
      <v-message-box></v-message-box>
    </section>
    <section>
      <v-loading></v-loading>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        popupVisible: false
      }
    },
    methods: {
      openPopup() {
        this.popupVisible = true;
        console.log(this.popupVisible)
      }
    }
  }
</script>

<style lang="scss">
  #app {
    padding: 5px;
  }
</style>
