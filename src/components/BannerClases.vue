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
        <div class="parallax">
          <parallax
            :speed-factor="0.5"
            direction="down"
            :parallax="true"
          >
            <img
              src="../assets/hiphop-parallax-img-2-1100x550.webp"
              class="parallax"
            >
          </parallax>
          <div>
            <h5>Clases de danza Online via Zoom</h5>
            <h2>Aprende desde Cero</h2>
            <a
              id="link"
              href="inscribete"
            ><p><i class="fas fa-arrow-circle-right" />Inscribete</p></a>
          </div>
        </div>
      </b-col>
      <b-col
        id="container-fullsize"
        cols="12"
        lg="12"
        xl="12"
        md="12"
        sm="12"
        xs="12"
      >
        <div class="parallax">
          <parallax
            :speed-factor="0.5"
            direction="down"
            :parallax="true"
          >
            <img
              src="../assets/hiphop-parallax-img-3-1100x550.webp"
              class="parallax"
            >
          </parallax>
          <div>
            <h5>Contenido de Entretenimiento</h5>
            <h2>TENEMOS LOS MEJORES VIDEOS EN NUESTRO CANAL DE YOUTUBE</h2>
            <a
              id="link"
              href="https://www.youtube.com/channel/UCvnlDgbg9LYBo4-60gLvxAQ?sub_confirmation=1"
              target="_blank"
            ><p><i class="fas fa-arrow-circle-right" />Visitanos y Suscribete</p></a>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'BannerClases',
  props: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="sass">
@import "../styles/app.sass"
</style>
