<template>
  <b-container class="mt-4">
    <b-row>
      <b-col md="8" offset-md="2">
        <b-card>
          <b-container>
            <h3 class="text-center mt-2 mb-4">Access your Blogie account</h3>
            <b-form @submit.prevent="loginUser">
              <b-form-group
                id="input-group-1"
                label="Username"
                label-for="input-1"
                description=""
              >
                <b-form-input
                  id="input-1"
                  v-model="username"
                  type="text"
                  placeholder="Enter your username"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-2"
                label="Password"
                label-for="input-2"
                description=""
              >
                <b-form-input
                  id="input-2"
                  v-model="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-4">
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="remember"
                  name="remember"
                  value="yes"
                  unchecked-value="no"
                >
                  Remember me
                </b-form-checkbox>
              </b-form-group>

              <b-button type="submit" variant="info" class="py-2" block
                >Login</b-button
              >
            </b-form>
          </b-container>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      remember: "no",
      username: "",
      password: "",
    };
  },
  methods: {
    async loginUser() {
      try {
        let result = await this.$store.dispatch("loginUser");
      // this.$router.replace("/dashboard");
      } catch (e) {
        console.log(e.response);
      }
      // this.$store.commit("persistUserLogin");
    },
  },
};
</script>

<style scoped>
</style>