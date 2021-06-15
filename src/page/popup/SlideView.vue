<template>
  <div>
    <vueper-slides class="no-shadow" fixed-height="400px">
      <vueper-slide title="01"></vueper-slide>
      <vueper-slide title="02"></vueper-slide>
      <vueper-slide title="03"></vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {

  components: {
    VueperSlides, VueperSlide
  }

}
</script>

<style>

</style>