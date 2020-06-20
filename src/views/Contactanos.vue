<template>
  <div>
    <ir-arriba>
      <i
        class="fas fa-hand-point-up fa-4x"
        style="color:#09d2aa"
      />
    </ir-arriba>
    <encabezado-titulo
      titulo="Contactanos"
      subtitulo=""
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
            <b-list-group>
              <b-list-group-item>
                <b-avatar
                  variant="dark"
                  class="align-baseline"
                >
                  <i class="fas fa-thumbtack" />
                </b-avatar>
                Bogotá,Colombia
              </b-list-group-item>
              <b-list-group-item>
                <b-avatar
                  variant="dark"
                  class="align-baseline"
                >
                  <i class="fas fa-at" />
                </b-avatar>
                info@urbancitydancecompany.com
              </b-list-group-item>
              <b-list-group-item>
                <b-avatar
                  variant="dark"
                  class="align-baseline"
                >
                  <i class="fab fa-whatsapp" />
                </b-avatar>
                +57 3142643867
              </b-list-group-item>
            </b-list-group>
          </div>
        </b-col>
        <b-col
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
  name: 'Contactanos',
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
          type: 'tel',
        },
        {
          id: 4,
          label: 'Mensaje',
          obligatorio: true,
          descripcion: '',
          campo_vmodel: 'mensaje', // indica el campo para al v-model
          type: 'textarea',
        },
      ],
    };
  },
  methods: {},
};
</script>
