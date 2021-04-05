<template>
  <div>

    <form id="loginForm">
      <input type="text" name="name" v-model="user.name" />
      <input type="text" name="email" v-model="user.email" />
      <button @click="salvar">ok</button>
    </form>
  </div>
</template>

<script>


export default {
  name: "Contact",
  components: {
    
  },
  data() {
    return {
      user: {
        name: "peter",
        email: "foo@example.com",
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
</style>
