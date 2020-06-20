<template>
  <b-container
    id="container-fullsize"
    fluid
  >
    <b-row id="container-fullsize">
      <b-col
        id="container-fullsize"
        cols="12"
        lg="3"
        xl="3"
        md="4"
        sm="12"
        xs="12"
        v-for="item in videos"
        :key="item.id.videoId"
      >
        <b-card
          overlay
          :img-src="item.snippet.thumbnails.high.url"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
          @click="loadVideo(item.id.videoId)"
        >
          <b-card-text id="icon-youtube">
            <i class="fab fa-youtube" />
          </b-card-text>

          <!--  <b-button href="#" variant="primary">Go somewhere</b-button>-->
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
const axios = require('axios');

export default {
  name: 'GaleriaVideoYoutube',
  props: {
    cantidad: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      videos: [],
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get(
          'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCvnlDgbg9LYBo4-60gLvxAQ&maxResults=16&order=date&type=video&key=AIzaSyAKygrb0ahEeuvz3YeZcak52xX21o1iXyE',
        )
        .then((response) => {
          this.videos = response.data.items;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .finally(() => {
          // always executed
        });
    },
    loadVideo(id) {
      window.open(`http://youtube.com/watch?v=${id}`, '_blank');
    },
  },
};
</script>
<style lang="sass">
@import "../styles/app.sass"
</style>
