<template>
  <div>
    <div class="footer mt-5 text-center">
      <p class="pt-3">Última Actualização: {{ last_build }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      last_build: "newdata",
    };
  },
};
</script>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #4a6075 !important;
  color: white;
  z-index: 1;
}
</style>