<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#" class="brand">cargadetrabalhos.website</b-navbar-brand>

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
  background-color:grey;
}

.brand{
  font-weight:bolder;
}
</style>