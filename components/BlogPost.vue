<template>
  <b-card
    :img-src="imgUrl"
    img-alt="Card image"
    img-left
    img-width="200px"
    class="mb-3"
  >
    <h5>{{ title }}</h5>
    <b-card-text>{{ filteredContent }}</b-card-text>
    <nuxt-link :to="`/posts/` + slug" class="post-see-more-link"
      >See more</nuxt-link
    >
  </b-card>
</template>

<script>
export default {
  props: ["imgUrl", "title", "content", "slug"],
  computed: {
    filteredContent() {
      if (this.content.length > 30) return this.content.substring(0, 30);
      return this.content;
    },
  },
};
</script>

<style scoped>
.post-see-more-link {
  text-decoration: none;
  padding: 3px 8px 7px 8px;
  background-color: rgba(10, 10, 10, 0.8);
  color: #f5f5f5;
  border-radius: 6px;
}

.post-see-more-link:hover {
  text-decoration: none;
  background-color: rgb(5, 5, 5);
}
</style>