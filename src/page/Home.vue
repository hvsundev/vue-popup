<template>
  <div id="app">
    <modals-container></modals-container>
    <button type="button" @click="open_modal()">팝업창 오픈</button>
  </div>
</template>

<script>
import PopupView from './popup/Popup';

export default {
  name: "App",
  data: () => {
    return {
      is_show: false,
    }
  },
  // mounted() {
  //   this.open_modal();
  // },
  methods: {
    open_popup() {
      this.is_show = !this.is_show;
    },
    open_modal() {
      this.$modal.show(PopupView, {
        modal : this.$modal },
        {
          name: 'dynamic-modal',
          width: '724px',
          height: '404px',
          draggable: false,
          resizable: false,
      })
    },
    removeSession() {
      this.$session.set('logined', 'N');
      this.$router.go();
    }
  }
}
</script>

<style>
body {
  margin: 0 auto;
  background-image: url("../assets/background.png");
  background-size: 1600px;
  background-repeat: no-repeat;
}
</style>