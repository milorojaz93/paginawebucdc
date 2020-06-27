<template>
  <div>
    <ir-arriba>
      <i class="fas fa-hand-point-up fa-4x" style="color:#09d2aa" />
    </ir-arriba>
    <encabezado-titulo
      titulo="Danzando T"
      subtitulo="Un espacio exclusivo para nuestras mujeres Trans"
    />
    <b-container id="container-fullsize" fluid>
      <b-row id="container-fullsize">
        <b-col id="container-fullsize" cols="12" lg="12" xl="12" md="12" sm="12" xs="12">
          <div id="contenedor-parrafo">
            <p>
              Danzando T es un espacio exclusivo para nuestras mujeres trans donde podrán explorar
              su cuerpo y sensualidad a través del estilo de danza Sexy Style, el taller enseñará
              las base para expresar e interpretar este estilo de danza y su musicalidad desde la
              comodidad de sus casa, lo único que deben tener es conexión a Internet y la aplicación
              Zoom Instalada.
            </p>
          </div>
        </b-col>
      </b-row>

      <b-row id="container-fullsize">
        <b-col id="container-fullsize" cols="12" lg="6" xl="6" md="6" sm="12" xs="12">
          <b-img-lazy id="content-element" src="@/assets/danzandot.webp" fluid></b-img-lazy>
        </b-col>
        <b-col cols="12" lg="6" xl="6" md="6" sm="12" xs="12">
          <contador-tiempo
            starttime="2020-07-03 00:00:00"
            endtime="2020-07-03 23:59:59"
            titulo="Cierre de Inscripciones en:"
            trans='{  
         "day":"Dias",
         "hours":"Horas",
         "minutes":"Minutos",
         "seconds":"Segundos",
         "expired":"Oops.... Cerramos Inscripciones",
         "running":"Todavia estas a tiempo de inscribirte.",
         "upcoming":"Aprovecha e inscribete al taller.",
         "status": {
            "expired":"Cerrado",
            "running":"Hoy cerramos inscripciones",
            "upcoming":"Inscripciones Abiertas hasta Julio 3"
           }}'
          ></contador-tiempo>
          <formulario
            id="container-formulario"
            :campos="campos"
            accion="https://urbancitydancecompany.com/api/public/proyectos/1/inscripcion"
          />
        </b-col>
      </b-row>

      <b-row id="container-fullsize">
        <b-col id="container-fullsize" cols="12" lg="12" xl="12" md="12" sm="12" xs="12">
          <seccion
            id="seccion"
            titulo="¿Que es el Sexy Style?"
            contenido="El Sexy Style es un estilo de baile que utiliza movimientos  delicados, estilizados y femeninos con gran carga de sensualidad. Este estilo ejercita la coordinación rítmica y corporal, la elasticidad, el sentido de la musicalidad, así como realizas un buen trabajo de expresión corporal. "
          />
        </b-col>
      </b-row>
      <b-row id="container-fullsize">
        <b-col id="container-fullsize" cols="12" lg="6" xl="6" md="6" sm="12" xs="12">
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/8cfew7iEsRs?autoplay=1"
            allowfullscreen
          ></b-embed>
        </b-col>
        <b-col id="container-fullsize" cols="12" lg="6" xl="6" md="6" sm="12" xs="12">
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/9Kv2RYGD2ow"
            allowfullscreen
          ></b-embed>
        </b-col>
      </b-row>
    </b-container>
    <redes-sociales />
  </div>
</template>
<script>
const IrArriba = () => import("vue-backtotop");
const EncabezadoTitulo = () => import("@/components/EncabezadoTitulo.vue");
const Formulario = () => import("@/components/Formulario.vue");
const Seccion = () => import("@/components/SeccionContenedor.vue");
const ContadorTiempo = () => import("@/components/Contador.vue");
const RedesSociales = () => import("@/components/RedesSociales.vue");

export default {
  name: "DanzandoT",
  components: {
    EncabezadoTitulo,
    Formulario,
    IrArriba,
    Seccion,
    ContadorTiempo,
    RedesSociales
  },
  data() {
    return {
      campos: [
        {
          id: 1,
          label: "Nombres Completos",
          obligatorio: true,
          validation: "required|min:15",
          mensajes: {
            required: "Los nombres son obligatorios diligenciarlos.",
            min: "Los nombres deben tener minimo 15 caracteres"
          },
          descripcion: "Escríbenos tus nombres completos",
          campo_vmodel: "nombre", // indica el campo para al v-model
          type: "text"
        },
        {
          id: 2,
          label: "Correo Electrónico",
          obligatorio: true,
          validation: "required|min:15",
          mensajes: {
            required: "El correo electrónico es obligatorio diligenciarlo.",
            min: "El correo debe tener minimo 15 caracteres"
          },
          descripcion: "Escríbenos tu correo electrónico para poderte contactar",
          campo_vmodel: "correo", // indica el campo para al v-model
          type: "email"
        },
        {
          id: 3,
          label: "Teléfono",
          obligatorio: true,
          validation: "required|min:7|number",
          mensajes: {
            required: "El telefono es obligatorio diligenciarlo.",
            min: "El telefono debe tener minimo 7 caracteres",
            number: "El telefono solo debe tener números"
          },
          descripcion:
            "Escríbenos tu número de teléfono para poderte contactar y responder tu solicitud",
          campo_vmodel: "telefono", // indica el campo para al v-model
          type: "tel"
        },
        {
          id: 4,
          label: "Orientación Sexual",
          obligatorio: true,
          validation: "required",
          mensajes: {
            required: "Es obligatorio seleccionar la orientación Sexual."
          },
          descripcion:
            "Escríbenos tu número de teléfono para poderte contactar y responder tu solicitud",
          campo_vmodel: "orientacion_sexual", // indica el campo para al v-model
          type: "select",
          options: {
            H: "Heterosexual",
            G: "Gay",
            L: "Lesbiana",
            B: "Bisexual",
            NINA: "No Informa / No Aplica"
          }
        },
        {
          id: 5,
          label: "Localidad Vivienda",
          obligatorio: true,
          descripcion: "",
          validation: "required",
          mensajes: {
            required: "Es obligatorio seleccionar la localidad."
          },
          campo_vmodel: "localidad", // indica el campo para al v-model
          type: "select",
          options: {
            1: "Usaquen",
            2: "Chapinero",
            3: "Santa Fé",
            4: "San Cristóbal",
            5: "Usme",
            6: "Tunjuelito",
            7: "Bosa",
            8: "Kennedy",
            9: "Fontibon",
            10: "Engativa",
            11: "Suba",
            12: "Barrios Unidos",
            13: "Teusaquillo",
            14: "Martires",
            15: "Antonio Nariño",
            16: "Puente Aranda",
            17: "La candelaria",
            18: "Rafael uribe Uribe",
            19: "Ciudad Bolivar",
            20: "Sumapaz",
            21: "Fuera de Bogota"
          }
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="sass">
#seccion
  div
    div
    background-color: #BA007C
</style>
