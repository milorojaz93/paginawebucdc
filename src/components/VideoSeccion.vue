<template>
  <b-container
    id="container-fullsize"
    fluid
  >
    <b-row id="container-fullsize">
      <b-col
        id="container-fullsize"
        cols="12"
        lg="6"
        xl="6"
        md="6"
        sm="12"
        xs="12"
      >
        <div
          id="container-fade"
          @click="loadVideoDos()"
        >
          <b-img
            id="image-fade"
            src="..\assets\conocenos-hugosannins.webp"
            fluid
            alt="Fluid image"
          />
          <div class="text-image-fade">
            <div>
              <i
                id="item-icon-container-text-video"
                class="fas fa-play-circle"
              />
            </div>
          </div>
        </div>
      </b-col>
      <b-col
        id="container-fullsize"
        cols="12"
        lg="6"
        xl="6"
        md="6"
        sm="12"
        xs="12"
      >
        <div
          id="container-text-video"
          class="d-flex"
        >
          <h2>¿QUIERES APOYAR NUESTROS PROYECTOS?</h2>
          <p>
            Siempre queremos ofrecer el mejor contenido y realizar proyectos con un toque creativo
            por ello nos gustaría recibir tu apoyo y convertirte en un miembro VIP donde ademas de
            aportar dinero para nuestros proyectos tienes beneficios para aprender danza urbana con
            nosotros
          </p>
          <p id="item-icon">
            <i class="fas fa-arrow-circle-right" />Participar
          </p>
        </div>
      </b-col>
    </b-row>

    <b-row id="container-fullsize">
      <b-col
        id="container-fullsize"
        cols="12"
        lg="6"
        xl="6"
        md="6"
        sm="12"
        xs="12"
      >
        <div
          id="container-text-video"
          class="d-flex"
        >
          <h2>¿QUIERES ENSEÑAR TU ESTILO CON NOSOTROS?</h2>
          <p>
            Si eres un instructor de danza y te gustaría compartir tu conocimiento a través de
            nosotros no olvides escribirnos para ser parte de la UCDC
          </p>
          <p id="item-icon">
            <i class="fas fa-arrow-circle-right" />Inscribete
          </p>
        </div>
      </b-col>
      <b-col
        id="container-fullsize"
        cols="12"
        lg="6"
        xl="6"
        md="6"
        sm="12"
        xs="12"
      >
        <div
          id="container-fade"
          @click="loadVideoUno()"
        >
          <b-img
            id="image-fade"
            src="..\assets\conocenos-milorojaz.webp"
            fluid
            alt="Fluid image"
          />
          <div class="text-image-fade">
            <div>
              <i
                id="item-icon-container-text-video"
                class="fas fa-play-circle"
              />
            </div>
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
  methods: {
    loadVideoUno() {
      window.open('https://www.youtube.com/watch?v=v07QL71Hpm0&feature', '_blank');
    },
    loadVideoDos() {
      window.open('https://www.youtube.com/watch?v=4gduYJL2ALg', '_blank');
    },
  },
};
</script>
<style lang="sass">
@import "../styles/app.sass"
</style>
