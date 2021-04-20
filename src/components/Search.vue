<template>
  <div>
    <div class="container p-45 mt-5">
      <div class="row my-5">
        <div class="col-lg-3 col-sm-12">
          <label>Categoria:</label>
          <select v-model="searchCategoria" class="form-control" id="categoria">
            <option value="">Seleciona categoria</option>
            <option v-for="item in categorias" :value="item" :key="item">
              {{ item }}
            </option>
          </select>
        </div>

        <div class="col-lg-3 col-sm-12">
          <label>Trabalho:</label>
          <select v-model="searchTrabalho" class="form-control" id="trabalho">
            <option value="">Seleciona o trabalho</option>
            <option v-for="item in orderTrabalhos" :value="item" :key="item">
              {{ item }}
            </option>
          </select>
        </div>

        <div class="col-lg-3 col-sm-12">
          <label>Tipo de Trabalho:</label>
          <select
            v-model="searchTipoTrabalho"
            class="form-control"
            id="tipo_trabalho"
          >
            <option value="">Seleciona o tipo de trabalho</option>
            <option value="estágio">estágio</option>
            <option value="técnico">técnico</option>
            <option value="freelancer">freelancer</option>
            <option value="full-time">full-time</option>
            <option value="part-time">part-time</option>
            <option value="formador">formador</option>
          </select>
        </div>

        <div class="col-lg-3 col-sm-12">
          <label>Localidade:</label>
          <select
            v-model="searchLocalidade"
            class="form-control"
            id="localidade"
          >
            <option value="">Seleciona a Localidade</option>
            <option value="Albufeira">Albufeira</option>
            <option value="Aveiro">Aveiro</option>
            <option value="Braga">Braga</option>
            <option value="Cascais">Cascais</option>
            <option value="Coimbra">Coimbra</option>
            <option value="Estoril">Estoril</option>
            <option value="Figueira da Foz">Figueira da Foz</option>
            <option value="Gaia">Gaia</option>
            <option value="Leiria">Leiria</option>
            <option value="Lisboa">Lisboa</option>
            <option value="Loures">Loures</option>
            <option value="Madeira">Madeira</option>
            <option value="Maia">Maia</option>
            <option value="Matosinhos">Matosinhos</option>
            <option value="Oeiras">Oeiras</option>
            <option value="Portimão">Portimão</option>
            <option value="Porto">Porto</option>
            <option value="Quarteira">Quarteira</option>
            <option value="Setubal">Setubal</option>
            <option value="Sintra">Sintra</option>
            <option value="Torres Vedras">Torres Vedras</option>
            <option value="Vilamoura">Vilamoura</option>
            <option value="Viseu">Viseu</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-sm-12">
          <label>Procurar:</label>
          <input
            v-model="searchText"
            class="form-control"
            placeholder="Procurar por..."
          />
          <br /><br />
          <div v-if="loading == true" class="d-flex justify-content-center">
            <icons :icon="['fas', 'spinner']" class="fa-2x fa-spinner" />
          </div>
        </div>
      </div>

      <div class="my-5 col-12 page">
        <div v-for="(item, i) in filterMembers" :key="i + item.desc">
          <span v-html="item.desc"></span>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
//import trabalinhos from "../json/jobs.json";
import axios from "axios";

export default {
  name: "Search",
  components: {},
  data() {
    return {
      trabalinhos: [],
      categorias: [
        "arte-final + paginação",
        "audiovisual",
        "comercial",
        "comunicação",
        "comunicação social",
        "design",
        "estãgios",
        "estrageiro",
        "formação",
        "fotografia",
        "freelancer",
        "ilustração",
        "impresa",
        "jornalismo",
        "marketing",
        "media",
        "multimedia",
        "produção",
        "PUB",
        "publicidade",
        "publicidade criativos",
        "relações públicas",
        "vários",
        "web design + programação",
      ],
      trabalhos: [
        "web",
        "front end",
        "jogos",
        "ilustrador",
        "consultor",
        "design",
        "gestor",
        "marketing",
      ],

      //search
      searchCategoria: "",
      searchTrabalho: "",
      searchTipoTrabalho: "",
      searchLocalidade: "",
      searchText: "",
      loading: true,
    };
  },
  computed: {
    orderTrabalhos: function () {
      return _.orderBy(this.trabalhos);
    },

    filterMembers: function () {
      return this.trabalinhos.filter(
        (member) =>
          member.desc
            .toLowerCase()
            .includes(this.searchCategoria.toLowerCase()) &&
          member.desc.toLowerCase().includes(this.searchText.toLowerCase()) &&
          member.desc
            .toLowerCase()
            .includes(this.searchTrabalho.toLowerCase()) &&
          member.desc
            .toLowerCase()
            .includes(this.searchLocalidade.toLowerCase()) &&
          member.desc
            .toLowerCase()
            .includes(this.searchTipoTrabalho.toLowerCase())
      );
    },
  },
  mounted() {
    this.fetchData();
  },
  created() {
    alert("VER EMAILS");
  },
  methods: {
    fetchData() {
      this.loading = true;
      axios //how to get json from axios
        .get("http://link.cursolinux.pt:8080/jobs")
        .then((response) => {
          this.trabalinhos = response.data;
          //console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>


<style scoped>
.p-45 {
  padding-top: 1px !important;
}

.page a {
  color: #4a627b !important;
  text-decoration: none;
  background-color: transparent;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
.fa-spinner {
  animation: spinner 1s linear infinite;
}
</style>
