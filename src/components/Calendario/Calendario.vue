<template>
  <div>
    <b-badge variant="primary">Primary</b-badge>
    <b-badge variant="secondary">Secondary</b-badge>
    <b-badge variant="success">Success</b-badge>
    <b-badge variant="danger">Danger</b-badge>
    <b-badge variant="warning">Warning</b-badge>
    <b-badge variant="info">Info</b-badge>
    <b-badge variant="light">Light</b-badge>
    <b-badge variant="dark">Dark</b-badge>
    <b-table-simple v-if="ancho >= 1000" hover small caption-top responsive>
      <caption>
        Recuerda Reservar tus clases con un dia de anterioridad
      </caption>
      <colgroup>
        <col />
        <col />
      </colgroup>
      <colgroup>
        <col />
        <col />
        <col />
      </colgroup>
      <colgroup>
        <col />
        <col />
      </colgroup>
      <b-thead head-variant="dark">
        <b-tr>
          <b-th rowspan="2">Hora</b-th>
          <b-th colspan="7">Dias de la semana</b-th>
        </b-tr>
        <b-tr>
          <b-th>Lunes <br />22 Jun</b-th>
          <b-th>Martes <br />23 Jun</b-th>
          <b-th>Miercoles <br />24 Jun</b-th>
          <b-th>Jueves <br />25 Jun</b-th>
          <b-th>Viernes <br />26 Jun</b-th>
          <b-th>Sabado <br />27 Jun</b-th>
          <b-th>Domingo <br />28 Jun</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr>
          <b-th>4:00 pm - 5:00pm</b-th>
          <b-th
            ><item-calendario
              nombre="PRUEBA PRUEBA PRUEBA"
              medio="zoom"
              :cupos="0"
              encargado="PRUEBA"
              fecha="27-Jun-2020 6:00pm"
              :state="3"
            ></item-calendario
          ></b-th>
          <b-td
            ><item-calendario
              nombre="PRUEBA PRUEBA PRUEBA"
              medio="zoom"
              :cupos="0"
              encargado="PRUEBA"
              fecha="27-Jun-2020 6:00pm"
              :state="3"
            ></item-calendario
          ></b-td>
          <b-td
            ><item-calendario
              nombre="PRUEBA PRUEBA PRUEBA"
              medio="zoom"
              :cupos="0"
              encargado="PRUEBA"
              fecha="27-Jun-2020 6:00pm"
              :state="3"
            ></item-calendario
          ></b-td>
          <b-td
            ><item-calendario
              nombre="PRUEBA PRUEBA PRUEBA"
              medio="zoom"
              :cupos="0"
              encargado="PRUEBA"
              fecha="27-Jun-2020 6:00pm"
              :state="3"
            ></item-calendario
          ></b-td>
          <b-td
            ><item-calendario
              nombre="PRUEBA PRUEBA PRUEBA"
              medio="zoom"
              :cupos="0"
              encargado="PRUEBA"
              fecha="27-Jun-2020 6:00pm"
              :state="3"
            ></item-calendario
          ></b-td>
          <b-td
            ><item-calendario
              nombre="Introducción a la Danza Urbana"
              medio="zoom"
              :cupos="1"
              encargado="Hugo Sannins"
              fecha="27-Jun-2020 4:00pm"
              :state="0"
            ></item-calendario
          ></b-td>
          <b-td
            ><item-calendario
              nombre="PRUEBA PRUEBA PRUEBA"
              medio="zoom"
              :cupos="0"
              encargado="PRUEBA"
              fecha="27-Jun-2020 6:00pm"
              :state="3"
            ></item-calendario
          ></b-td>
        </b-tr>
        <b-tr>
          <b-th>5:00pm - 6:00pm</b-th>
          <b-th
            ><item-calendario
              nombre="PRUEBA PRUEBA PRUEBA"
              medio="zoom"
              :cupos="0"
              encargado="PRUEBA"
              fecha="27-Jun-2020 6:00pm"
              :state="3"
            ></item-calendario
          ></b-th>
          <b-td></b-td>
          <b-td></b-td>
          <b-td></b-td>
          <b-td></b-td>
          <b-td
            ><item-calendario
              nombre="Coreografía"
              medio="zoom"
              :cupos="15"
              encargado="Invitado"
              fecha="27-Jun-2020 5:00pm"
              :state="1"
            ></item-calendario
          ></b-td>
          <b-td></b-td>
        </b-tr>
        <b-tr>
          <b-th>6:00pm - 7:00pm</b-th>
          <b-td
            ><item-calendario
              nombre="PRUEBA PRUEBA PRUEBA"
              medio="zoom"
              :cupos="0"
              encargado="PRUEBA"
              fecha="27-Jun-2020 6:00pm"
              :state="3"
            ></item-calendario
          ></b-td>
          <b-td></b-td>
          <b-td rowspan="2"
            ><item-calendario
              nombre="Entrenamiento"
              medio="zoom"
              :cupos="0"
              encargado="Milo Rojaz / Lex Ortiz"
              fecha="24-Jun-2020 6:00pm"
              :state="3"
            ></item-calendario
          ></b-td>
          <b-td
            ><item-calendario
              nombre="Salsa"
              medio="zoom"
              :cupos="15"
              encargado="Julian Forero"
              fecha="25-Jun-2020 6:00pm"
              :state="1"
            ></item-calendario
          ></b-td>
          <b-td
            ><item-calendario
              nombre="Sexy Style"
              medio="zoom"
              :cupos="1"
              encargado="Lex Ortiz"
              fecha="26-Jun-2020 6:00pm"
              :state="0"
            ></item-calendario
          ></b-td>
          <b-td rowspan="2"
            ><item-calendario
              nombre="Entrenamiento"
              medio="zoom"
              :cupos="0"
              encargado="Milo Rojaz / Lex Ortiz"
              fecha="27-Jun-2020 6:00pm"
              :state="3"
            ></item-calendario
          ></b-td>
          <b-td></b-td>
        </b-tr>
        <b-tr>
          <b-th>8:00pm - 9:00pm</b-th>
          <b-td
            ><item-calendario
              nombre="PRUEBA PRUEBA PRUEBA"
              medio="zoom"
              :cupos="0"
              encargado="PRUEBA"
              fecha="27-Jun-2020 6:00pm"
              :state="3"
            ></item-calendario
          ></b-td>
          <b-td></b-td>
          <b-td
            ><item-calendario
              nombre="Dance Hall"
              medio="zoom"
              :cupos="5"
              encargado="Brandon Oquendo"
              fecha="24-Jun-2020 8:00pm"
              :state="0"
            ></item-calendario
          ></b-td>
          <b-td
            ><item-calendario
              nombre="Hip Hop"
              medio="zoom"
              :cupos="10"
              encargado="Milo Rojaz"
              fecha="26-Jun-2020 7:00pm"
              :state="0"
            ></item-calendario>
          </b-td>
          <b-td></b-td>
        </b-tr>
      </b-tbody>
      <b-tfoot>
        <b-tr>
          <b-td colspan="8" variant="secondary" class="text-right">
            Clases Programadas: <b>7</b>
          </b-td>
        </b-tr>
      </b-tfoot>
    </b-table-simple>
    <b-container v-else-if="ancho >= 600" id="container-fullsize" fluid>
      <b-row id="container-fullsize">
        <b-col id="container-fullsize" cols="12" lg="2" xl="2" md="2" sm="2" xs="2">
          <div id="contenedor-parrafo">
            <p class="titulo-agenda">Hora</p>
          </div>
        </b-col>
        <b-col id="container-fullsize" cols="12" lg="2" xl="2" md="2" sm="2" xs="2">
          <div id="contenedor-parrafo">
            <p class="titulo-agenda">Clase</p>
          </div>
        </b-col>
        <b-col id="container-fullsize" cols="12" lg="2" xl="2" md="2" sm="2" xs="2">
          <div id="contenedor-parrafo">
            <p class="titulo-agenda">Instructor</p>
          </div>
        </b-col>
        <b-col id="container-fullsize" cols="12" lg="2" xl="2" md="2" sm="2" xs="2">
          <div id="contenedor-parrafo">
            <p class="titulo-agenda">Cupo</p>
          </div>
        </b-col>
        <b-col id="container-fullsize" cols="12" lg="2" xl="2" md="2" sm="2" xs="2">
          <div id="contenedor-parrafo">
            <p class="titulo-agenda">Medio</p>
          </div>
        </b-col>
        <b-col id="container-fullsize" cols="12" lg="2" xl="2" md="2" sm="2" xs="2">
          <div id="contenedor-parrafo"></div>
        </b-col>
      </b-row>
      <b-row id="container-fullsize" cols="12" lg="12" xl="12" md="12" sm="12" xs="12">
        <hr />
        <p class="fecha-agenda">Lunes 21 de Junio de 2020</p>
      </b-row>
      <item-calendario
        nombre="Hip Hop"
        medio="zoom"
        :cupos="0"
        encargado="Milo Rojaz"
        hora="6:00pm"
        :state="3"
        :tipo_agenda="true"
      ></item-calendario>
      <item-calendario
        nombre="Sexy Style"
        medio="zoom"
        :cupos="15"
        encargado="Milo Rojaz"
        hora="7:00pm"
        :state="0"
        :tipo_agenda="true"
      ></item-calendario>
      <b-row id="container-fullsize" cols="12" lg="12" xl="12" md="12" sm="12" xs="12">
        <hr />
        <p class="fecha-agenda">Martes 22 de Junio de 2020</p>
      </b-row>
      <item-calendario
        nombre="Entrenamiento"
        medio="zoom"
        :cupos="15"
        encargado="Milo Rojaz / Lex Ortiz"
        hora="6:00pm"
        :state="1"
        :tipo_agenda="true"
      ></item-calendario>
    </b-container>
    <b-container v-else id="container-fullsize" fluid>
      <b-row id="container-fullsize" cols="12" lg="12" xl="12" md="12" sm="12" xs="12">
        <hr />
        <div class="fecha-agenda" @click="showInfo('21-06-2020')">
          <p>
            Lunes 21 de Junio de 2020
          </p>
          <i class="fas fa-plus" ></i>
        </div>
      </b-row>
      <item-calendario
        v-if="show == '21-06-2020'"
        nombre="Hip Hop"
        medio="zoom"
        :cupos="0"
        encargado="Milo Rojaz"
        hora="6:00pm"
        :state="3"
      ></item-calendario>
      <item-calendario
        v-if="show == '21-06-2020'"
        nombre="Sexy Style"
        medio="zoom"
        :cupos="15"
        encargado="Milo Rojaz"
        hora="7:00pm"
        :state="0"
      ></item-calendario>
      <b-row id="container-fullsize" cols="12" lg="12" xl="12" md="12" sm="12" xs="12">
        <hr />
        <div class="fecha-agenda" @click="showInfo('22-06-2020')">
          <p>
            Martes 22 de Junio de 2020
          </p>
          <i class="fas fa-plus"></i>
        </div>
      </b-row>
      <item-calendario
        v-if="show == '22-06-2020'"
        nombre="Entrenamiento"
        medio="zoom"
        :cupos="15"
        encargado="Milo Rojaz / Lex Ortiz"
        hora="6:00pm"
        :state="1"
      ></item-calendario>
    </b-container>
  </div>
</template>
<script>
const ItemCalendario = () => import("@/components/Calendario/Item.vue");

export default {
  name: "Horarios",
  components: {
    ItemCalendario
  },
  data() {
    return {
      ancho: screen.width,
      show: "",
      isShow: "flex"
    };
  },
  methods: {
    showInfo(sFecha) {
      this.show = this.show != sFecha ? sFecha : "";
      this.isShow = this.show == "" ? "flex" : "none";
    }
  },
  mounted() {}
};
</script>
<style lang="sass">
@import "@/styles/app.sass"

hr
  height: 2px
  width: 100%
  background-color: #F9F9F9

.fecha-agenda
  font-weight: bold
  color: $base-color
  padding-left: 40px
  margin-left: 40px
  @media (max-width: 600px)
    color: $text-color2
    background-color: $base-color
    padding: 20px
    margin-left: 0px
    margin-bottom: 10px
    width: 100%
    display: flex
    justify-content: space-between
    justify-items: center
    i
      color:  $text-color2



.titulo-agenda
  font-weight: bold
  font-size: medium
</style>
