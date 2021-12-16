<template>
  <section class="py-5">
    <b-container>
      <b-row>
        <b-col lg="7" class="mx-lg-auto">
          <div v-if="!podcasts">Loading...</div>
          <div v-else>
            <h1 class="mb-5 border-bottom">Podcasts</h1>
            <div
              v-for="(podcast, index) in podcasts.data"
              :key="index"
              class="mb-4"
            >
              <h2 class="h4">{{ podcast.attributes.title }}</h2>
              <p class="mb-1">{{ podcast.attributes.description }}</p>
              <nuxt-link :to="`/podcasts/${podcast.id}`">
                <a>Listen</a>
              </nuxt-link>
            </div>
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
      podcasts: null,
    }
  },
  async created() {
    this.podcasts = await this.$strapi.$podcasts.find()
  },
}
</script>
