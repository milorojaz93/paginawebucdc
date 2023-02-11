<template>
  <b-container
    id="container-fullsize"
    style="padding-top:50px; padding-bottom:50px"
    fluid
  >
    <b-row id="container-fullsize">
      <b-col
        id="container-fullsize"
        cols="12"
        lg="3"
        xl="3"
        md="3"
        sm="6"
        xs="6"
        v-for="item in redes"
        :key="item.id"
        class="container-redes-sociales"
      >
        <a
          :href="item.url"
          target="_blank"
        ><div :id="item.class">
          <i :class="'fab fa-'+item.class+' fa-4x'" />
        </div>
        </a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'RedesSociales',
  props: {},
  data() {
    return {
      redes: [
        {
          id: 1,
          url: 'https://www.facebook.com/urbancitydancecompany',
          class: 'facebook',
        },
        {
          id: 2,
          url: 'https://www.instagram.com/urbancitydancecompany',
          class: 'instagram',
        },
        {
          id: 3,
          url: 'https://www.youtube.com/urbancitydancecompany',
          class: 'youtube',
        },
        {
          id: 4,
          url: 'https://api.whatsapp.com/send?phone=573142643867',
          class: 'whatsapp',
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
</style>
