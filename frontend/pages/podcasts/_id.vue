<template>
  <section class="py-5">
    <b-container>
      <b-row>
        <b-col lg="7" class="mx-lg-auto">
          <div v-if="!podcast">Loading...</div>
          <div v-else>
            <h1 class="mb-5 border-bottom">{{ podcast.title }}</h1>
            <audio class="mb-4" controls>
              <source
                :src="`${$config.strapiEndpoint}${podcast.audio.url}`"
                :type="podcast.audio.mime"
              />
              Your browser does not support the audio.
            </audio>
            <p class="mb-2">{{ podcast.description }}</p>
            <nuxt-link to="/">
              <a>Back</a>
            </nuxt-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      podcast: null,
    }
  },
  async created() {
    const { id } = this.$route.params
    this.podcast = await this.$strapi.$podcasts.findOne(id)
  },
}
</script>
