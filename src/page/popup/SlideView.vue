<template>
  <div>
    <vueper-slides class="no-shadow" fixed-height="400px">
      <!-- :image="require('../../assets/' + item.img) 이렇게도 가능 -->
      <vueper-slide v-for="(item, i) in notices" :key="i"
        :image="setImg(item.img)"
        @click="moveToNoticeDetail(item.idx)"
        />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import { mapState } from 'vuex'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: {
    VueperSlides, VueperSlide
  },
  computed: {
    ...mapState({
      notices: state => state.notices
    })
  },
  created() {
    this.$store.dispatch('GET_NOTICE')
  },
  methods: {
    setImg(imgNm) {
      console.log("실행? >>> ", imgNm)
      return require('../../assets/' + imgNm)
    },
    moveToNoticeDetail(idx) {
      console.log("idx >>> ", idx)
    }
  }

}
</script>

<style>

</style>