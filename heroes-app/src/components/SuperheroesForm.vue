<template>
    <div>
      <form class="superheroes-form">
        <h1>Super heroes form</h1>
        <label class="superheroes-form__input">
          Hero name:
          {{ sth }}
          <input type="text" />
        </label>
        <label class="superheroes-form__input">
          Super power:
          <input type="text" />
        </label>
        <PositiveButton>Create hero</PositiveButton>
      </form>
      <SuperheroesList :superheroes="superheroes"></SuperheroesList>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import PositiveButton from "./PositiveButton.vue";
  import SuperheroesList from "./SuperheroesList.vue";
  
  export default {
    components: {
      PositiveButton,
      SuperheroesList,
    },
    setup() {
      const sth = ref("");
      const superheroes = ref([
        {
          heroName: "Batman",
          superPower: 100,
        },
        {
          heroName: "Spiderman",
          superPower: "∞",
        },
      ]);
  
      return {
        sth,
        superheroes,
      };
    },
  };
  </script>
  
  <style scoped lang='scss'>
  $color-whitey: #F0F0F0;
  
  .superheroes-form {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid $color-whitey;
  
    &__input {
      display: flex;
      justify-content: space-between;
      align-self: center;
      width: 250px;
      margin-top: 10px;
    }
  
    h1 {
      font-weight: normal;
    }
  }
  </style>
  