<template>
  <b-card
    :img-src="imgUrl"
    img-alt="Card image"
    img-left
    img-width="200px"
    class="mb-3"
  >
    <h5>
      <nuxt-link :to="`/user/` + slug" class="see-more-link">{{
        title
      }}</nuxt-link>
    </h5>
    <b-card-text>{{ filteredContent }}</b-card-text>
    <b-row>
      <b-col>
        <p>Jul 20, 2020</p>
      </b-col>
    </b-row>
    <!-- <nuxt-link :to="`/posts/` + slug" class="post-see-more-link"
      >See more</nuxt-link
    > -->
  </b-card>
</template>

<script>
export default {
  props: ["imgUrl", "title", "content", "slug"],
  computed: {
    filteredContent() {
      let regex = /(<([^>]+)>)/gi;
      if (!this.imgUrl && this.content.length < 80)
        return this.content.substring(0, 80).replace(regex, "");
      if (this.content.length > 65)
        return this.content.substring(0, 65).replace(regex, "") + " ...";
      return this.content.replace(regex, "");
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

.see-more-link {
  text-decoration: none;
  /* padding: 3px 8px 7px 8px; */
  /* background-color: rgba(10, 10, 10, 0.8); */
  color: #222222;
  /* border-radius: 6px; */
}
.see-more-link:hover {
  text-decoration: none;
  /* padding: 3px 8px 7px 8px; */
  /* background-color: rgba(10, 10, 10, 0.8); */
  color: #17a2b8;
  /* border-radius: 6px; */
}
</style>