<template>
  <div>
    <b-form class="mt-5 col-6 offset-3" id="loginForm">
      <b-form-group
        id="input-group-1"
        label="Endereço de E-mail:"
        label-for="email"
        description="Nunca compartilharemos seu e-mail com mais ninguém."
      >
        <b-form-input
          id="email"
          v-model="user.email"
          type="email"
          placeholder="Indica o teu email"
          required          
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nome:" label-for="name">
        <b-form-input
          id="name"
          v-model="user.name"
          placeholder="Indica o teu nome"          
        ></b-form-input>
      </b-form-group>


      <b-form-textarea
        id="message"
        v-model="user.message"
        placeholder="Escreve aqui uma mensagem..."
        rows="3"
        max-rows="6"
        required
      ></b-form-textarea>

      <br />

      <b-button
        @click="salvar"
        type="submit"
        variant="primary"
        class="btn btn-lg btn-block"
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
        name: "",
        email: "",
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
body {
  background-color: grey;
}
</style>
