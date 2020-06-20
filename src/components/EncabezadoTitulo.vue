<template>
  <b-container
    id="container-fullsize"
    fluid
  >
    <b-row id="container-fullsize">
      <b-col
        id="container-fullsize"
        cols="12"
        lg="12"
        xl="12"
        md="12"
        sm="12"
        xs="12"
      >
        <div class="parallax-titulo">
          <parallax
            :speed-factor="0.5"
            direction="down"
            :parallax="true"
          >
            <img
              src="../assets/hiphop-parallax-img-1-1100x550.webp"
              class="parallax"
            >
          </parallax>
          <div>
            <animacion-titulo v-if="!isMobile()" />
            <h5>
              {{ subtitulo }}
            </h5>
            <h1>{{ titulo }}</h1>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AnimacionTitulo from './AnimacionTitulo.vue';

export default {
  name: 'EncabezadoTitulo',
  components: {
    AnimacionTitulo,
  },
  props: {
    titulo: {
      type: String,
      default: '',
    },
    subtitulo: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style lang="sass">
@import "../styles/app.sass"
</style>
