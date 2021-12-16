<template>
  <section class="py-5">
    <b-container>
      <b-row>
        <b-col lg="7" class="mx-lg-auto">
          <div v-if="!podcast">Loading...</div>
          <div v-else>
            <h1 class="mb-5 border-bottom">{{ podcast.attributes.title }}</h1>
            <audio class="mb-4" controls>
              <source
                :src="`${$config.strapiEndpoint}${podcast.attributes.audio.data.attributes.url}`"
                :type="podcast.attributes.audio.data.attributes.mime"
              />
              Your browser does not support the audio.
            </audio>
            <p class="mb-2">{{ podcast.attributes.description }}</p>
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
    const response = await this.$strapi.$podcasts.findOne(id, { populate: '*' })
    this.podcast = response.data
  },
}
</script>
