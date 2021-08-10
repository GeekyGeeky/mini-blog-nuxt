<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand to="/"
        ><b-img src="/logo.png" width="90px"></b-img
      ></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2 py-3"
              style="width: 400px"
              placeholder="Search ..."
            ></b-form-input>
            <!-- <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button> -->
          </b-nav-form>
          <!-- <b-nav-item to="/about">About</b-nav-item> -->
          <!-- <b-nav-item to="/posts">News</b-nav-item> -->
          <!-- <b-nav-item to="/posts" disabled>News</b-nav-item> -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" v-if="isLoggedIn">
          <!-- <b-nav-item to="/login" class="mt-1"
            ><strong>Log in</strong></b-nav-item
          > -->
          <nuxt-link to="/dashboard/new-post"><b-button size="sm" variant="info" class="pb-2"
              >Create new post</b-button
            ></nuxt-link>
          <!-- <b-nav-item to="/dashboard/new-post"
            ><b-button size="sm" variant="info"
              >Create new post</b-button
            ></b-nav-item
          > -->
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-else>
          <nuxt-link to="/login" class="mt-1 login-link nav-link"
            ><strong>Log in</strong></nuxt-link
          >
          <nuxt-link to="/join" class="nav-link"
            ><b-button size="sm" variant="info" class="pb-2"
              >Create account</b-button
            ></nuxt-link
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>

<style scoped>
.login-link{
  /* text-decoration: none; */
  /* padding: 3px 8px 7px 8px; */
  /* background-color: rgba(10, 10, 10, 0.8); */
  color: #17a2b8 !important;
  /* border-radius: 6px; */
}
</style>