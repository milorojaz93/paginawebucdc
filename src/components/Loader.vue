<template>
  <div v-if="mostrar">
    <vue-loader
      direction="middle-right"
      image="img/page-loader.gif"
      text="Cargando..."
      text-color="#FFFFFF"
    >
    </vue-loader>
  </div>
</template>

<script>
import vueLoader from "@nulldreams/vue-loading/src/vue-loading";
import loader from "@nulldreams/vue-loading/src/components/loader";
import loaderDots from "@nulldreams/vue-loading/src/components/dots";

export default {
  props: {
    mostrar: {
      type: Boolean,
      default: false
    },
  },
  components: {
    vueLoader,
    loader,
    loaderDots
  }
};
</script>
<style lang="sass">
.container-box
  background: #000

.background-loader
  background: rgba(0, 0, 0, 0)
  height: 50px
  width: 100px
  top: 250px
  left: 170px
</style>
