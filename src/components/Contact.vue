<template>
  <div>
    <b-form id="loginForm">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="user.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="user.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-textarea
        id="textarea"
        v-model="user.message"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>

      <b-button @click="salvar" type="submit" variant="primary"
        >Submit</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: {},
  data() {
    return {
      user: {
        name: "peter",
        email: "foo@example.com",
        message: "",
      },
    };
  },
  methods: {
    salvar: function () {
      let formData = new FormData(document.getElementById("loginForm"));
      this.$http
        .post("http://link.cursolinux.pt:8080/contacts", formData)
        .then((response) => {
          console.log(response.body);
        });
    },
  },
};
</script>


<style scoped>
body{ 
  background-color:grey;
}
</style>
