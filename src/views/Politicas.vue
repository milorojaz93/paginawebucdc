<template>
  <div>
    <ir-arriba>
      <i
        class="fas fa-hand-point-up fa-4x"
        style="color:#09d2aa"
      />
    </ir-arriba>
     <encabezado-titulo
      titulo="Términos y Políticas de privacidad"
      subtitulo=""
    />
    <politicas-privacidad/>
  </div>
</template>
<script>
const IrArriba = () => import("vue-backtotop");
const EncabezadoTitulo = () => import("@/components/EncabezadoTitulo.vue");
const PoliticasPrivacidad = () => import("@/components/PoliticasPrivacidad.vue");

export default {
  name: 'Nosotros',
  components: {
    IrArriba,
    EncabezadoTitulo,
    PoliticasPrivacidad
  },
};
</script>
