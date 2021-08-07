<template>
  <div>
    <h1>Edit post</h1>
  </div>
</template>

<script>
export default {
  created() {
    let slug = this.$route.params.slug;
    if (!slug) this.$router.replace("/dashboard");
  },
};
</script>

<style scoped>
</style>