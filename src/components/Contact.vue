<template>
  <div>
    <b-form class="mt-5 pt-5 col-lg-6 m-auto" @submit.prevent="send">
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

      <b-form-group >
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
        type="submit"
        variant="success"
        class="btn btn-lg btn-block btn-custom"
        >Enviar</b-button
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
    send: function () {
      let formData = new FormData();
      formData.append("name", this.user.name);
      formData.append("email", this.user.email);
      formData.append("message", this.user.message);

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
.m-auto {
  margin: 0 auto;
}

.btn-custom {
  color: #fff !important;
  background-color: #58864c !important;
  border: 0 !important;
}
</style>
