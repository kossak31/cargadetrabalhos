<template>
  <div>
    <div class="page">
      <div class="container mb-5 pb-5 col-lg-8">
        <div class="my-4 col-lg-12 pt-5">
          <!-- header Pagination -->
          <ul
            class="pagination pagination-md justify-content-center text-center"
          >
            <li class="page-item">
              <a class="page-link" @click="prev()">Anterior</a>
            </li>
            <li class="page-link" style="background-color: inherit">
              {{ current }} de {{ endOfPagination() }}
            </li>
            <li class="page-item">
              <a class="page-link" @click="next()">Seguinte</a>
            </li>
          </ul>
          <!-- Pagination -->
        </div>
        <div v-for="(item, i) in paginated" :key="i + item.title">
          <h4 v-html="item.title"></h4>
          <b class="float-right">inserido em: {{ item.date }}</b>
          <br />
          <p class="float-right">categoria: {{ item.categories }}</p>
          <br />
          <hr />
        </div>

        <!-- footer Pagination -->
        <ul class="pagination pagination-md justify-content-center text-center">
          <li class="page-item">
            <a class="page-link" @click="prev()">Anterior</a>
          </li>
          <li class="page-link" style="background-color: inherit">
            {{ current }} de {{ endOfPagination() }}
          </li>
          <li class="page-item">
            <a class="page-link" @click="next()">Seguinte</a>
          </li>
        </ul>
        <!-- Pagination -->
      </div>
    </div>
  </div>
</template>

<script>
//get json file
import trabalinhos from "../json/titles.json";
//import axios from "axios";
export default {
  data() {
    return {
      trabalinhos,
      current: localStorage.getItem("storagePage"),
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
      localStorage.setItem("storagePage", --this.current);
    },
    next() {
      if (this.current === this.endOfPagination() ) return //block total records
      localStorage.setItem("storagePage", ++this.current);
    },
    endOfPagination(){ 
      return Math.ceil(trabalinhos.length / this.pageSize);
    }
  },

  // mounted() {
  //   axios //how to get json from axios
  //     .get("http://URL.tld/titles")
  //     .then((response) => {
  //       this.trabalinhos = response.data;
  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },
  beforeCreate() {
    //create local storage to 1 for pagination numbers
    if (!localStorage.getItem("storagePage")) {
      localStorage.setItem("storagePage", 1);
      console.log("criou storage" + localStorage.getItem("storagePage"));
    }
  },
  updated() {
    //update local storage
    if (localStorage.getItem("storagePage")) {
      localStorage.setItem("storagePage", this.current);
      console.log(
        "ja existe storage nº " + localStorage.getItem("storagePage")
      );
    }
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

.container {
  background-color: #f3f3f3;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 10px;
}

body {
  background-color: grey;
}

.page a {
  color: #4a627b !important;
  text-decoration: none;
  background-color: transparent;
}

.page-link {
  color: black !important;
  font-weight: bolder;
}
</style>
