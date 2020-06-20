<template>
  <b-container
    id="container-fullsize"
    fluid
  >
    <b-row id="container-fullsize">
      <b-col
        id="container-fullsize"
        cols="12"
        lg="4"
        xl="4"
        md="4"
        sm="12"
        xs="12"
      >
        <div id="container-fade">
          <b-img
            id="image-fade"
            src="..\assets\coreografia-alex.webp"
            fluid
            alt="Fluid image"
          />
          <div class="text-image-fade">
            <div>
              Tenemos las mejores coreografias.
              <h3>Revisa Nuestro Contenido</h3>
              <a
                id="link"
                href="https://www.youtube.com/urbancitydancecompany"
                target="_blank"
              > <p><i class="fas fa-arrow-circle-right" />Explora</p></a>
            </div>
          </div>
        </div>
      </b-col>
      <b-col
        id="container-fullsize"
        cols="12"
        lg="4"
        xl="4"
        md="4"
        sm="12"
        xs="12"
      >
        <div id="container-fade">
          <b-img
            id="image-fade"
            src="..\assets\aprende-con-nosotros.webp"
            fluid
            alt="Fluid image"
          />
          <div class="text-image-fade">
            <div>
              Aprende con nosotros.
              <h3>Horario de Clases</h3>
              <p><i class="fas fa-arrow-circle-right" />Explora</p>
            </div>
          </div>
        </div>
      </b-col>
      <b-col
        id="container-fullsize"
        cols="12"
        lg="4"
        xl="4"
        md="4"
        sm="12"
        xs="12"
      >
        <div
          id="container-cuadrado"
          class="d-flex p-2 bd-highlight"
        >
          <h2>"Todo lo que necesitas es bailar"</h2>
        </div>
      </b-col>
    </b-row>
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
              src="../assets/hiphop-parallax-img-1-1100x550.webp"
              class="parallax"
            >
          </parallax>
          <div>
            <h5>Baila con nosotros</h5>
            <h2>Unete a nuestro grupo de entrenamiento</h2>
            <p><i class="fas fa-arrow-circle-right" />Inscribete</p>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Lema',
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="sass">
@import "../styles/app.sass"
</style>
