<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">cargadetrabalhos.website</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#"
            >Inicio <span class="sr-only">(current)</span></a
          >
        </li>

        <li class="nav-item">
          <router-link to="/procurar">Procurar</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/contacto">Contacto</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>