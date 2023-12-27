<template>
    <div class="superheroes-list">
      <SuperheroItem
        v-for="superhero in sortedSuperheroes"
        :key="superhero.name"
        :superhero="superhero"
      >
      </SuperheroItem>
    </div>
  </template>
  
  // <script>
  import { computed, toRefs } from "vue";
  import SuperheroItem from "./SuperheroItem.vue";
  
  export default {
    props: {
      superheroes: {
        type: Array,
        required: true,
      },
    },
    components: {
      SuperheroItem,
    },
    setup(props) {
      const { superheroes } = toRefs(props);
  
      const sortedSuperheroes = computed(() => {
        const superheroesCopy = [...superheroes.value];
        return superheroesCopy.sort((a, b) => (a.heroName < b.heroName ? -1 : 1));
      });
  
      return {
        sortedSuperheroes,
      };
    },
  };
  </script>
  
  <style scoped lang='scss'>
  .superheroes-list {
    display: flex;
    flex-wrap: wrap;
    margin: 30px;
  
    > div {
      margin: 10px;
    }
  }
  </style>
  