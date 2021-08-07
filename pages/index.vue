<template>
  <b-container class="my-4">
    <b-row>
      <b-col md="6" v-for="post in posts" :key="post['slug']">
        <blog-post
          :title="post['title']"
          :content="post['content']"
          :imgUrl="post['image']"
          :slug="post['slug']"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      posts: ["blog/getAllPosts"],
    }),
  },
};
</script>

<style scoped>
</style>
