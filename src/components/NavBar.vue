<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#" class="brand"><img class="mr-3" width="75" height="75" src="../assets/logo.png">carga de trabalhos </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/#" active-class="active" class="nav-link">Inicio</router-link>
          <router-link to="/procurar" active-class="active" class="nav-link"
            >Procurar</router-link
          >
          <router-link to="/contacto" active-class="active" class="nav-link"
            >Contacto</router-link
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style v-if="true">
body{ 
  background-color:#E6E6FA!important;
}

.brand{
  font-weight:bolder;
}

.bg-dark{
  background-color:#425d77!important;
}


@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

html, body {
  font-family: 'Varela Round', sans-serif;
}

#app {
  font-family: 'Varela Round', sans-serif;
}
</style>