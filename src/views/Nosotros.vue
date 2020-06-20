<template>
  <div>
    <ir-arriba>
      <i
        class="fas fa-hand-point-up fa-4x"
        style="color:#09d2aa"
      />
    </ir-arriba>
    <div class="parallax-video">
      <figure>
        <video
          auto
          playsinline
          autoplay
          muted
          loop
          data-type="parallax"
          data-speed="2"
        >
          <source
            type="video/webm"
            src="../assets/conocenos.webm"
          >
        </video>
        <figcaption class="parallax-texto">
          <h2>Nuestra Misión</h2>
          <p>
            Urban City Dance Company – UCDC es una empresa que promueve la cultura dancística por
            medio de actividades y clases pedagógicas que construyen y/o mejoran el talento en
            niños, jóvenes y adultos. Igualmente ofrece montajes y shows coreográficos para empresas
            de todo tipo.
          </p>
        </figcaption>
      </figure>
    </div>
    <seccion
      titulo="Nuestra Visión"
      contenido="Queremos ser la primera compañia de danza pocisionada como la mejor en las redes sociales por incidir en la danza urbana y la lucha de los derechos."
      :is-derecha="false"
    />
    <instructores :overlay="false" />
    <redes-sociales />
  </div>
</template>
<script>
import IrArriba from 'vue-backtotop';
import Carousel from '../components/Carousel.vue';
import Lema from '../components/Lema.vue';
import Seccion from '../components/SeccionContenedor.vue';
import GaleriaVideoYoutube from '../components/GaleriaVideoYoutube.vue';
import BannerClases from '../components/BannerClases.vue';
import VideoSeccion from '../components/VideoSeccion.vue';
import RedesSociales from '../components/RedesSociales.vue';
import Instructores from '../components/Instructores.vue';

export default {
  name: 'Nosotros',
  components: {
    Carousel,
    Lema,
    Seccion,
    GaleriaVideoYoutube,
    BannerClases,
    VideoSeccion,
    RedesSociales,
    Instructores,
    IrArriba,
  },
};
</script>
