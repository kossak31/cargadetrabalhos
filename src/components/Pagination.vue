<template>
  <div class="container mb-5 pb-5">
    <div class="my-4 col-lg-12 pt-5">
      <!-- Pagination -->
      <ul class="pagination pagination-md justify-content-center text-center">
        <li class="page-item">
          <a class="page-link" @click="prev()">Anterior</a>
        </li>
        <li class="page-link" style="background-color: inherit">
          {{ current }} de {{ trabalinhos.length }}
        </li>
        <li class="page-item">
          <a class="page-link" @click="next()">Seguinte</a>
        </li>
      </ul>
      <!-- Pagination -->
    </div>

    <ul>
      <li v-for="(item, i) in paginated" :key="i + item.title">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import trabalinhos from "@/json/titles.json";

export default {
  data() {
    return {
      trabalinhos,
      total: "",
      current: 1,
      pageSize: 10,
    };
  },

  computed: {
    indexStart() {
      return (this.current - 1) * this.pageSize;
    },
    indexEnd() {
      return this.indexStart + this.pageSize;
    },
    paginated() {
      return this.trabalinhos.slice(this.indexStart, this.indexEnd);
    },
  },

  methods: {
    prev() {
      if (this.current === 1) return; //block -1 and 0
      this.current--;
    },
    next() {
      this.current++;
    },
  },
};
</script>

<style>
/* change cursor */
a:hover {
  cursor: pointer;
}
/* disable text selection highlighting */
a {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}

.container{
  background-color: #f3f3f3;
   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 10px;
}


.page-link {
  color:black!important;
  font-weight: bolder;
}

</style>
