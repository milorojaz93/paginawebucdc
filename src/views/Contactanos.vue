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
            accion="https://urbancitydancecompany.com/api/public/contacto"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
const IrArriba = () => import('vue-backtotop')
const EncabezadoTitulo = () => import('../components/EncabezadoTitulo.vue')
const Formulario = () => import('../components/Formulario.vue')

/*import IrArriba from 'vue-backtotop';
import EncabezadoTitulo from '../components/EncabezadoTitulo.vue';
import Formulario from '../components/Formulario.vue';*/

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
          validation: 'required|min:15',
          mensajes: {
            required: 'Los nombres son obligatorios diligenciarlos.',
            min:  'Los nombres deben tener minimo 15 caracteres'
          },
          descripcion: 'Escríbenos tus nombres completos',
          campo_vmodel: 'nombre', // indica el campo para al v-model
          type: 'text',
        },
        {
          id: 2,
          label: 'Correo Electrónico',
          obligatorio: true,
          validation: 'required|min:15',
          mensajes: {
            required: 'El correo electrónico es obligatorio diligenciarlo.',
            min:  'El correo debe tener minimo 15 caracteres'
          },
          descripcion: 'Escríbenos tu correo electrónico para poderte contactar',
          campo_vmodel: 'correo', // indica el campo para al v-model
          type: 'email',
        },
        {
          id: 3,
          label: 'Teléfono',
          obligatorio: true,
          validation: 'required|min:7|number',
          mensajes: {
            required: 'El telefono es obligatorio diligenciarlo.',
            min:  'El telefono debe tener minimo 7 caracteres',
            number: 'El telefono solo debe tener números'
          },
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
          validation: 'required|min:20',
          mensajes: {
            required: 'El mensaje es obligatorio diligenciarlo.',
            min:  'El mensaje debe tener minimo 20 caracteres'
          },
          campo_vmodel: 'mensaje', // indica el campo para al v-model
          type: 'textarea',
        },
      ],
    };
  },
  methods: {},
};
</script>
