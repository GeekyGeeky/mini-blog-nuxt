<template>
  <b-container class="mt-4">
    <b-row>
      <b-col md="9">
        <b-form-group
          id="input-group-1"
          label="Post title"
          label-for="input-1"
          description="Create a compelling post title to enable potential readers get your points at first glance"
        >
          <b-form-input
            id="input-1"
            v-model="title"
            type="text"
            placeholder="Enter your post title here"
          ></b-form-input>
        </b-form-group>
        <editor
          api-key="3h49l56hj3pdbp9tqd0ihj2b907yzhu3185qbosxndhh52ku"
          v-model="content"
          :init="{
            height: 400,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help',
          }"
        />
      </b-col>
      <b-col md="3">
        <b-form-group
          id="input-group-2"
          label="Image URL (optional)"
          label-for="input-2"
          description="If you want to use a cover image, add the URL(link) of the image here"
        >
          <b-form-input
            id="input-2"
            v-model="imgUrl"
            type="text"
            placeholder="Enter image url"
          ></b-form-input>
        </b-form-group>
        <b-button variant="info" block>Publish post</b-button>
        <br />
        <b-button block>Save draft</b-button>
        <br />
        <b-button variant="danger" block>Cancel</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>
// 12 12 12
// 242
<script>
import Editor from "@tinymce/tinymce-vue";
export default {
  components: {
    Editor,
  },
  data: () => ({
    imgUrl: "",
    title: "",
    content: "",
  }),
};
</script>

<style scoped>
</style>