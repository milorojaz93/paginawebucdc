<template>
  <b-container
    id="container-fullsize"
    fluid
  >
    <b-row id="container-fullsize">
      <b-col
        id="container-fullsize"
        cols="12"
        lg="4"
        xl="2"
        md="4"
        sm="12"
        xs="12"
        v-for="item in instructores"
        :key="item.id"
      >
        <b-card
          v-if="overlay"
          overlay
          :img-src="item.image"
          :img-alt="item.nombre"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
          id="person-card"
        >
          <b-card-text id="person-fade">
            <h2>{{ item.nombre }}</h2>
            <p>{{ item.cargo }}</p>
            <a
              :href="item.instagram"
              target="_blank"
            ><i
              class="fab fa-instagram fa-4x"
              style="color: white"
            /></a>
          </b-card-text>

          <!--  <b-button href="#" variant="primary">Go somewhere</b-button>-->
        </b-card>
        <b-card
          v-else
          :img-src="item.image"
          :img-alt="item.nombre"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
          id="person-card"
        >
          <b-card-body>
            <b-card-title>{{ item.nombre }}</b-card-title>
            <b-card-sub-title class="mb-2">
              {{ item.cargo }}
            </b-card-sub-title>
            <b-card-text>
              {{ item.descripcion }}
            </b-card-text>
          </b-card-body>
          <b-card-footer>
            <a
              :href="item.instagram"
              target="_blank"
            ><i class="fab fa-instagram fa-2x" /></a>
          </b-card-footer>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Instructores',
  props: {
    overlay: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      instructores: [
        {
          id: 1,
          image: 'img/instructor-lex-ortiz.webp',
          cargo: 'Instructor de Heels (Sexy Style)',
          nombre: 'Lex Ortiz',
          instagram: 'https://www.instagram.com/lexortizr',
          descripcion:
            'CO-Fundador y Creativo de la UCDC, coreografo de Sexy Style, pionero de Heels.',
        },
        {
          id: 2,
          image: 'img/instructor-brandon.oquendo.webp',
          cargo: 'Instructor de Dance Hall',
          nombre: 'Brandon Oquendo',
          instagram: 'https://www.instagram.com/brandon_oquendo',
          descripcion: 'Instructor de Dance Hall en la UCDC',
        },
        {
          id: 3,
          image: 'img/instructor-hugo-sanins.webp',
          cargo: 'Instructor Fundamentos Danza Urbana',
          nombre: 'Hugo Sannins',
          instagram: 'https://www.instagram.com/sannins',
          descripcion: 'Instructor de Fundamentos en Danza Urbana, experto en varios estilos de la danza como el Jazz Funk, Hip Hop, Sexy Style, Dance Hall',
        },
        {
          id: 4,
          image: 'img/instructor-julian-forero.webp',
          cargo: 'Instructor de Salsa y Ritmos Latinos',
          nombre: 'Julian Forero',
          instagram: 'https://www.instagram.com/juliangfr',
          descripcion:
            'Instructor de Salsa , también tiene habilidades y destrezas en la danza contemporánea, Ball Room y otros estilos de baile de salón',
        },
        {
          id: 5,
          image: 'img/instructor-milorojaz.webp',
          cargo: 'Instructor de Hip Hop',
          nombre: 'Milo Rojaz',
          instagram: 'https://www.instagram.com/milorojaz',
          descripcion: 'Fundador y Director de la UCDC, coreografo de Hip hop.',
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="sass">
@import "../styles/app.sass"

.card-img-overlay
  padding: 0px

.card-footer
  background-color: rgba(0,0,0,.0)
</style>
