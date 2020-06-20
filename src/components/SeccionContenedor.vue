<template>
  <div>
    <b-container
      v-if="!isDerecha"
      fluid
    >
      <b-row>
        <b-col
          id="content-seccion-izq"
          cols="12"
          lg="6"
          xl="6"
          md="6"
          sm="12"
          xs="12"
        >
          <p>
            {{ contenido }}
          </p>
        </b-col>
        <b-col
          id="title-seccion-izq"
          cols="12"
          lg="6"
          xl="6"
          md="6"
          sm="12"
          xs="12"
        >
          <h2>{{ titulo }}</h2>
        </b-col>
      </b-row>
    </b-container>

    <b-container
      v-else
      id="container-fullsize"
      class="seccion-dark"
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
          <h2 id="title-seccion">
            {{ titulo }}
          </h2>
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
          <p id="content-seccion">
            {{ contenido }}
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ContainerSeccion',
  props: {
    isDerecha: {
      type: Boolean,
      default: true,
    },
    titulo: {
      type: String,
      default: '',
    },
    contenido: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="sass">
@import "../styles/app.sass"
</style>
