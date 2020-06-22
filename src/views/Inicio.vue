<template>
  <div>
    <ir-arriba>
      <i
        class="fas fa-hand-point-up fa-4x"
        style="color:#09d2aa"
      />
    </ir-arriba>
    <carousel />
    <lema />
    <seccion
      titulo="Quienes Somos"
      contenido=" Urban City Dance Company – UCDC es una compañía que promueve la cultura dancística por
            medio de actividades y clases pedagógicas que construyen y/o mejoran el talento en
            niños, jóvenes y adultos. Generamos contenido digital el cual puede ser evidenciado en
            nuestro canal de youtube y realizamos producciones a diferentes bailarines de la ciudad."
      :is-derecha="false"
    />
    <seccion
      titulo="Conoce Nuestra Compañia"
      contenido="Nos gusta documentar todos nuestros eventos realizados, talleres, obras ,
            presentaciones, coreografías, por ello tenemos una galería de videos e imágenes que
            puedes ver para conocernos mejor"
    />

    <galeria-video-youtube :cantidad="16" />
    <banner-clases />
    <seccion
      titulo="PROYECTOS Y TALLERES"
      contenido="Como compañía de danza buscamos luchar y promover los derechos de las personas por eso tenemos algunos proyectos y talleres que nos gustaría mostrarte"
      :is-derecha="false"
    />
    <video-seccion />
    <seccion
      titulo="Conoce nuestros increibles instructores"
      contenido="Puedes conocer los instructores que dan día a día clases con nosotros."
      :is-derecha="false"
    />
    <instructores />
    <redes-sociales />
  </div>
</template>
<script>
/*import IrArriba from 'vue-backtotop';
import Carousel from '../components/Carousel.vue';
import Lema from '../components/Lema.vue';
import Seccion from '../components/SeccionContenedor.vue';
import GaleriaVideoYoutube from '../components/GaleriaVideoYoutube.vue';
import BannerClases from '../components/BannerClases.vue';
import VideoSeccion from '../components/VideoSeccion.vue';
import RedesSociales from '../components/RedesSociales.vue';
import Instructores from '../components/Instructores.vue';*/

const IrArriba = () => import('vue-backtotop')
const Carousel = () => import('../components/Carousel.vue')
const Lema = () => import('../components/Lema.vue')
const Seccion = () => import('../components/SeccionContenedor.vue')
const GaleriaVideoYoutube = () => import('../components/GaleriaVideoYoutube.vue')
const BannerClases = () => import('../components/BannerClases.vue')
const VideoSeccion = () => import('../components/VideoSeccion.vue')
const RedesSociales = () => import('../components/RedesSociales.vue')
const Instructores = () => import('../components/Instructores.vue')

export default {
  name: 'Inicio',
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
