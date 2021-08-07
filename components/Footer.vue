<template>
  <!-- <b-container-fluid style="background-color: #333333; width: 100%" class="p-4"> -->
  <b-container class="text-center">
    <hr />
    <b-row>
      <b-col md="12">
        <h6>
          Copyright Blogie &copy; {{ yearNow }} | Built by
          <a target="_blank" href="https://github.com/GeekyGeeky"
            >Geeky Geeky</a
          >
          - made with Nuxt.js
        </h6>
      </b-col>
    </b-row>
  </b-container>
  <!-- </b-container-fluid> -->
</template>

<script>
export default {
  data() {
    return {
      yearNow: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
</style>