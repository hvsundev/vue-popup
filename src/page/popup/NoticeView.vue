<template>
  <div id="notice_wrap">
    <div class="notice" v-if="show_title">
      <ul class="notice list">
        <li :key='item.idx' v-for="item in notices">
          <div v-bind:class="item.type" @click="show_contents(`${item.idx}`)">
            <p class="title">{{ item.title }}</p>
            <p class="regdate">{{ item.regdate.split(' ')[0] }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="info" v-else>
      <info-view v-bind:pdata="notice_idx"></info-view>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import InfoView from './InfoView.vue';

export default {
  props: ['pdata'],
  mounted() {
    console.log("프롭스 >>> ", this.$props.pdata)
    if(this.$props.pdata != undefined) {
      this.notice_idx = this.$props.pdata;
    }
  },
  data() {
    return {
      show_title: true,
      notice_idx: '',
    }
  },
  watch: {
    notice_idx: function(newVal, oldVal) {
      console.log("new >>> ", newVal);
      console.log("old >>> ", oldVal);
      this.show_contents(newVal);
    }
  },
  computed: {
    ...mapState({
      notices: state => state.notices
    })
  },
  created() {
    this.$store.dispatch('GET_NOTICE');
  },
  components: {
    InfoView,
  },
  methods: {
    show_contents(idx) {
      this.notice_idx = idx;
      this.show_title = false;
    },
    back_notice() {
      this.show_title = true;
    }
  }
}
</script>

<style>
#notice_wrap {
  margin: 15px 0 0 15px;
}

.tag {
  width: 50px;
  height: 20px;
}

.notice.list li {
  list-style: none;
}

.notice.list li div.notice {
  width: 610px;
  height: 60px;
  background-image: url('../../assets/li_notice.png');
  color: black;
  margin-bottom: 8px;
}

.notice.list li div.event {
  width: 610px;
  height: 60px;
  background-image: url('../../assets/li_event.png');
  color: black;
  margin-bottom: 8px;
}

.notice.list li div .title {
  padding-top: 3px;
  padding-left: 90px;
  display: inline-block;
}

.notice.list li div .regdate {
  padding-top: 3px;
  padding-right: 25px;
  float: right;
  display: inline;
}


router-link {
  text-decoration: none;
}

ul {
  margin: 0 auto;
  padding: 0;
}
</style>