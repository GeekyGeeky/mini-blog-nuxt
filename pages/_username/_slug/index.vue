<template>
  <b-container class="mt-4">
    <b-row v-if="isLoading">
      <b-col md="8">
        <b-card no-body img-top>
          <b-skeleton-img card-img="top" aspect="3:1"></b-skeleton-img>
          <b-card-body>
            <b-skeleton animation="throb" class="mb-2" width="50%"></b-skeleton>
            <b-skeleton animation="throb" class="mb-2" width="65%"></b-skeleton>
            <b-skeleton animation="throb" class="mb-2" width="85%"></b-skeleton>
            <b-skeleton animation="throb" class="mb-2" width="55%"></b-skeleton>
            <b-skeleton animation="throb" class="mb-2" width="70%"></b-skeleton>
            <b-skeleton animation="throb" class="mb-2" width="90%"></b-skeleton>
            <b-skeleton
              animation="throb"
              class="mb-2"
              width="100%"
            ></b-skeleton>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    <b-row v-else>
      <b-col md="8">
        <b-card
          :title="post['title']"
          :img-src="post['image']"
          img-alt="Image"
          img-height="350px"
          img-fluid
          tag="article"
          class="mb-2"
        >
          <b-card-text v-html="post['content']"> </b-card-text>
        </b-card>
      </b-col>
      <b-col md="4"> </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  mounted() {
    this.postSlug = this.$route.params.slug;
    // alert(this.$route.params.username)
    const found = this.$store.getters["blog/getAllPosts"].find(
      (p) => p["slug"] === this.postSlug
    );
    if (found) {
      this.post = found;
      this.isLoading = false;
    } else {
      this.$router.replace("/");
    }
  },
  data: () => ({
    isLoading: true,
    postSlug: "",
    post: {},
  }),
};
</script>

<style>
</style>