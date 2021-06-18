import { mapState } from 'vuex';
<template>
  <div class="scroll_item_wrap">
    <li class="scroll_item" v-for="item in notices" :key="item.idx">
      <img :src="setImg(item.img)">
    </li>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      notices: state => state.scrollNotice
    })
  },
  created() {
    this.$store.dispatch('GET_SCROLL_NOTICE')
  },
  methods: {
    setImg(imgNm) {
      return require('../../assets/' + imgNm)
    }
  }
}
</script>

<style>

.scroll_item_wrap {
  height: 100%;
  overflow: scroll;
  -ms-overflow-style: none;
}

::-webkit-scrollbar { 
	display: none;
}

.scroll_item {
  margin-bottom: 15px;
  height: 120px;
  list-style: none;
}

.scroll_item:last-child {
  margin-bottom: 0;
}

.scroll_item img {
  height: 120px;
}

</style>