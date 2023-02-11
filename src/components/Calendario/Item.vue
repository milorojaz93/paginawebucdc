<template>
  <div class="item-calendario" v-if="tipo_agenda == false">
    <h5>{{ nombre }}</h5>
    <p class="small">{{ encargado }}</p>
    <p>Via {{ medio }}</p>
    <p v-if="cupos > 1" class="small">{{ cupos }} cupos disponibles</p>
    <p v-else-if="cupos == 1" class="small">Ultimo cupo. Aprovecha y reserva</p>
    <p v-else class="small">Sin disponibilidad</p>
    <b-button v-if="state == 2 && cupos == 0" pill disabled>No Habilitado</b-button>
    <b-button v-else-if="state == 0 && cupos > 0" pill variant="success">Reservar</b-button>
    <b-button v-else-if="state == 1" pill disabled>Reservado</b-button>
    <p class="medium">{{(fecha=='')? hora : fecha }}</p>
  </div>
  <div class="row-calendario" v-else>
    <b-row id="container-fullsize">
      <b-col id="container-fullsize" cols="12" lg="2" xl="2" md="2" sm="2" xs="2">
        <div id="contenedor-parrafo">
         <p class="small"> {{ hora }} </p>
        </div>
      </b-col>
      <b-col id="container-fullsize" cols="12" lg="2" xl="2" md="2" sm="2" xs="2">
        <div id="contenedor-parrafo">
          <p class="small">{{ nombre }}</p>
        </div>
      </b-col>
      <b-col id="container-fullsize" cols="12" lg="2" xl="2" md="2" sm="2" xs="2">
        <div id="contenedor-parrafo">
         <p class="small"> {{ encargado }}</p>
        </div>
      </b-col>
      <b-col id="container-fullsize" cols="12" lg="2" xl="2" md="2" sm="2" xs="2">
        <div id="contenedor-parrafo">
          <p v-if="cupos > 1" class="small">{{ cupos }} cupos disponibles</p>
          <p v-else-if="cupos == 1" class="small">Ultimo cupo. Aprovecha y reserva</p>
          <p v-else class="small">Sin disponibilidad</p>
        </div>
      </b-col>
      <b-col id="container-fullsize" cols="12" lg="2" xl="2" md="2" sm="2" xs="2">
        <div id="contenedor-parrafo">
          <p class="small">Via {{ medio }}</p>
        </div>
      </b-col>
      <b-col id="container-fullsize" cols="12" lg="2" xl="2" md="2" sm="2" xs="2">
        <div id="contenedor-parrafo">
          <b-button v-if="state == 2 && cupos == 0" pill disabled>No Habilitado</b-button>
          <b-button v-else-if="state == 0 && cupos > 0" pill variant="success">Reservar</b-button>
          <b-button v-else-if="state == 1" pill disabled>Reservado</b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "Horarios",
  components: {},
  props: {
    nombre: {
      type: String,
      default: ""
    },
    encargado: {
      type: String,
      default: ""
    },
    medio: {
      type: String,
      default: ""
    },
    cupos: {
      type: Number,
      default: 0
    },
    state: {
      type: Number,
      default: 0 // 0 -- SIn Reservar 1 -- Reservado  2 -- No habilitado
    },
    fecha: {
      type: String,
      default: ""
    },
    hora: {
      type: String,
      default: ""
    },
    tipo_agenda: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="sass">
@import "@/styles/app.sass"

.item-calendario
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  width: 100%
  height: 100%
  h5
    font-weight: bold
    color: $base-color
  .small
    font-weight: 100
    font-size: small
  .medium
    font-weight: bold
     font-size: medium
</style>
