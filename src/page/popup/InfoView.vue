<template>
  <div class="info_view">
    <li>
      <div>
        <button class="back" @click="back_notice()">◀</button>
        <p class="title">{{ this.$store.state.contents.title }}</p>
        <p class="regdate">{{ this.$store.state.contents.regdate.split(' ')[0] }}</p>
      </div>
    </li>
    <div>{{ this.$store.state.contents.contents }}</div>
  </div>
</template>

<script>
export default {
  props: ['pdata'],
  mounted() {
  },
  data() {
    return {
      idx: this.$props.pdata,
      noticeContents: {},
      notice: {
        "int": this.$props.pdata,
        "title": "",
      }
    }
  },
  methods: {
    back_notice() {
      this.$parent.back_notice();
    }
  },
  created() {
    this.$store.dispatch('GET_NOTICE_CONTENTS', this.idx);
  }
}
</script>

<style>
.info_view li {
  list-style: none;
}

.info_view li div {
  width: 640px;
  height: 60px;
  background-color: white;
  color: black;
  margin-bottom: 8px;
}

.info_view li div .title {
  padding-top: 3px;
  padding-left: 25px;
  display: inline-block;
}

.info_view li div .regdate {
  padding-top: 3px;
  padding-right: 25px;
  float: right;
  display: inline;
}

.regdate {
  color: #616161;
}

.back {
  width: 40px;
  height: 60px;
}
</style>