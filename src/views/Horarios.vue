<template>
  <div>
    <ir-arriba>
      <i class="fas fa-hand-point-up fa-4x" style="color:#09d2aa" />
    </ir-arriba>
    <encabezado-titulo titulo="Horarios" subtitulo="" />
    <b-container id="container-fullsize" fluid>
      <b-row id="container-fullsize">
        <b-col id="container-fullsize" cols="12" lg="12" xl="12" md="12" sm="12" xs="12">
          <div id="contenedor-parrafo">
            <calendario
      
            >
            </calendario>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
const IrArriba = () => import("vue-backtotop");
const Calendario = () => import("@/components/Calendario/Calendario.vue");
const EncabezadoTitulo = () => import("@/components/EncabezadoTitulo.vue");

export default {
  name: "Horarios",
  components: {
    EncabezadoTitulo,
    Calendario,
    IrArriba
  },
  data() {
    return {
      campos: [
        {
          id: 1,
          label: "Nombres",
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
          label: "Mensaje",
          obligatorio: true,
          descripcion: "",
          validation: "required|min:20",
          mensajes: {
            required: "El mensaje es obligatorio diligenciarlo.",
            min: "El mensaje debe tener minimo 20 caracteres"
          },
          campo_vmodel: "mensaje", // indica el campo para al v-model
          type: "textarea"
        }
      ]
    };
  },
  methods: {}
};
</script>
