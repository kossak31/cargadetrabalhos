<template>
  <div class="bg-dark2">
    <b-navbar toggleable="lg" type="dark"  variant="dark">
      <b-navbar-brand href="#" class="brand">
        <img class="mr-3 rsp-img" width="55" height="55" src="../assets/logo.png">
        <span class="rsp">carga de STRESSES</span></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/#" active-class="active" class="nav-link">Inicio</router-link>
           <router-link to="/termos-e-condicoes" active-class="active" class="nav-link">Termos & Condições</router-link>
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

<style>
body{ 
  background-color:#E6E6FA!important;
}

.brand{
  font-weight:bolder;
}

.bg-dark2 nav{
  background-color:#4a6075!important;
}

.navbar-brand {
  font-size: 1.6rem!important;
}



@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

html, body {
  font-family: 'Varela Round', sans-serif;
}

#app {
  font-family: 'Varela Round', sans-serif;
}

@media (min-width: 992px)
{
.navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
    justify-content: flex-end!important;
}
}


@media (max-width:700px)
{
.rsp  {
  font-size: 1.3rem!important;
    }
}

@media (max-width:400px)
{
.rsp  {
  font-size: 1.1rem!important;
    }
}

@media (max-width:400px)
{
.rsp-img {
  display:none;
    }
}

</style>