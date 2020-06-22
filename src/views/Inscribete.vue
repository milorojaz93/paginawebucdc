<template>
  <div>
    <ir-arriba>
      <i class="fas fa-hand-point-up fa-4x" style="color:#09d2aa" />
    </ir-arriba>
    <encabezado-titulo
      titulo="TOMA CLASES CON NOSOTROS"
      subtitulo="Te presentamos este formulario de inscripción que deberás diligenciar para ser parte
              de la UCDC"
    />
    <b-container id="container-fullsize" fluid>
      <b-row id="container-fullsize">
        <b-col id="container-fullsize" cols="12" lg="6" xl="6" md="6" sm="12" xs="12">
          <div id="contenedor-parrafo">
            <h3>NUESTRA ACADEMIA TE ESPERA</h3>
            <p>Damos la mejor experiencia y servicio para que disfrutes de la danza.</p>
            <b-img-lazy src="../assets/precios.webp" fluid alt="Responsive image" />
          </div>
        </b-col>
        <b-col id="container-fullsize" cols="12" lg="6" xl="6" md="6" sm="12" xs="12">
          <formulario id="container-formulario" :campos="campos" accion="https://urbancitydancecompany.com/api/public/inscripcion" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
const IrArriba = () => import('vue-backtotop')
const EncabezadoTitulo = () => import('../components/EncabezadoTitulo.vue')
const Formulario = () => import('../components/Formulario.vue')
export default {
  name: "Nosotros",
  components: {
    EncabezadoTitulo,
    Formulario,
    IrArriba
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
          type: "number"
        },
        {
          id: 4,
          label: "Fecha de Cumpleaños",
          obligatorio: true,
          descripcion: "",
          descripcion: "",
          validation: "required",
          mensajes: {
            required: "El mensaje es obligatorio diligenciarlo.",
          },
          campo_vmodel: "fechanac", // indica el campo para al v-model
          type: "date"
        }
      ]
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.telefono = "";
      this.form.mensje = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
