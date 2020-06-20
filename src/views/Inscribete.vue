<template>
  <div>
    <ir-arriba>
      <i
        class="fas fa-hand-point-up fa-4x"
        style="color:#09d2aa"
      />
    </ir-arriba>
    <encabezado-titulo
      titulo="TOMA CLASES CON NOSOTROS"
      subtitulo="Te presentamos este formulario de inscripción que deberás diligenciar para ser parte
              de la UCDC"
    />
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
          <div id="contenedor-parrafo">
            <h3>NUESTRA ACADEMIA TE ESPERA</h3>
            <p>Damos la mejor experiencia y servicio para que disfrutes de la danza.</p>
            <b-img
              src="../assets/precios.webp"
              fluid
              alt="Responsive image"
            />
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
          <formulario
            id="container-formulario"
            :campos="campos"
            accion=""
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import IrArriba from 'vue-backtotop';
import EncabezadoTitulo from '../components/EncabezadoTitulo.vue';
import Formulario from '../components/Formulario.vue';

export default {
  name: 'Nosotros',
  components: {
    EncabezadoTitulo,
    Formulario,
    IrArriba,
  },
  data() {
    return {
      campos: [
        {
          id: 1,
          label: 'Nombres',
          obligatorio: true,
          descripcion: 'Escríbenos tus nombres completos',
          campo_vmodel: 'nombre', // indica el campo para al v-model
          type: 'text',
        },
        {
          id: 2,
          label: 'Correo Electrónico',
          obligatorio: true,
          descripcion: 'Escríbenos tu correo electrónico para poderte contactar',
          campo_vmodel: 'correo', // indica el campo para al v-model
          type: 'email',
        },
        {
          id: 3,
          label: 'Teléfono',
          obligatorio: true,
          descripcion:
            'Escríbenos tu número de teléfono para poderte contactar y responder tu solicitud',
          campo_vmodel: 'telefono', // indica el campo para al v-model
          type: 'number',
        },
        {
          id: 4,
          label: 'Fecha de Cumpleaños',
          obligatorio: true,
          descripcion: '',
          campo_vmodel: 'fechanac', // indica el campo para al v-model
          type: 'date',
        },
      ],
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
      this.form.email = '';
      this.form.name = '';
      this.form.telefono = '';
      this.form.mensje = '';
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
