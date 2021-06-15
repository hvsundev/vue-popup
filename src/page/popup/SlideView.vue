<template>
  <div>
    <vueper-slides class="no-shadow" fixed-height="400px">
      <vueper-slide v-for="(item, i) in notices" :key="i"
        :title="item.title" :contents="item.contents" />
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
    this.$store.dispatch('GET_NOTICE');
  }

}
</script>

<style>

</style>