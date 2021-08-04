<template>
  <b-container-fluid>
    <navbar />
    <b-container class="mt-4">
      <b-row>
        <b-col md="6" v-for="blog in blogs" :key="blog['slug']">
          <blog-post
            :title="blog['title']"
            :content="blog['content']"
            :imgUrl="blog['image']"
            :slug="blog['slug']"
          />
        </b-col>
      </b-row>
    </b-container>
  </b-container-fluid>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
export default {
  components: { Navbar },
  data() {
    return {
      blogs: [
        {
          title: "This is some blog post here",
          content:
            "Some content here is just for example and checking how the layout will work",
          image: "https://placekitten.com/300/300",
          slug: "this-is-some-blog-post-234",
        },
        {
          title: "How I started python programming",
          content:
            "Some content here is just for example and checking how the layout will work.",
          image: "https://picsum.photos/400/400/?image=20",
          slug: "how-i-started-python-programming-3930",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
