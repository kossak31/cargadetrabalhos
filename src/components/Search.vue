<template>
  <div>
    
    <select v-model="searchTrabalho">
      <option value="">Seleciona o trabalho</option>
      <option value="web">web</option>
      <option value="front end">front end</option>
      <option value="jogos">jogos</option>
      <option value="ilustrador">ilustrador</option>
      <option value="consultor">consultor</option>
      <option value="design">design</option>
      <option value="gestor">gestor</option>
      <option value="marketing">marketing</option>
    </select>

    <select v-model="searchTipoTrabalho">
      <option value="">Seleciona o tipo de trabalho</option>
      <option value="estágio">estagio</option>
      <option value="técnico">tecnico</option>
      <option value="freelancer">freelancer</option>
      <option value="formador">formador</option>
    </select>

    <select v-model="searchLocalidade">
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

    <input v-model="searchText" />

    <ul id="example-1">
      <li v-for="(item, i) in filterMembers" :key="i + item.title">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import trabalinhos from "@/json/titles.json";

export default {
  name: "Search",
  components: {

  },
  data() {
    return {
      trabalinhos,
      searchText: "",
      searchTrabalho: "",
      searchLocalidade: "",
      searchTipoTrabalho: "",
    };
  },

  computed: {
    filterMembers: function () {
      return this.trabalinhos.filter(
        (member) =>
          member.title.toLowerCase().includes(this.searchText.toLowerCase()) &&
          member.title
            .toLowerCase()
            .includes(this.searchTrabalho.toLowerCase()) &&
          member.title
            .toLowerCase()
            .includes(this.searchLocalidade.toLowerCase()) &&
          member.title
            .toLowerCase()
            .includes(this.searchTipoTrabalho.toLowerCase())
      );
    },
  },
};
</script>


<style scoped>
body{ 
  background-color:grey;
}
</style>
