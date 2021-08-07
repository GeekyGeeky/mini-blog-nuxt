<template>
  <b-container class="mt-4">
    <b-row>
      <b-col md="8" offset-md="2">
        <b-card>
          <b-container>
            <h3 class="text-center mt-2 mb-4">Get started with Blogie</h3>
            <p class="text-center">Create your content and make the world a better place ...</p>
            <b-form @submit.prevent="registerUser">
                <b-form-group
                id="input-group-1"
                label="Fullname"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                ></b-form-input>
              </b-form-group>
                <b-form-group
                id="input-group-1"
                label="Email"
                label-for="input-1"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-1"
                  v-model="email"
                  type="text"
                  placeholder="Enter your email"
                  required
                ></b-form-input>
              </b-form-group>
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
                  Agree to our terms and conditions
                </b-form-checkbox>
              </b-form-group>

              <b-button type="submit" variant="info" class="py-2" block
                >Register</b-button
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
      email: "",
      name: "",
      username: "",
      password: "",
    };
  },
  methods: {
    async registerUser() {},
  },
};
</script>

<style scoped>

</style>