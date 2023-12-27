<template>
    <div class="superhero-item">
      <h2>{{ superhero.heroName }}</h2>
      <span>Power:</span>
      <span>{{ superhero.superPower }}</span>
      <div class="superhero-item__actions">
        <div class="superhero-item__actions--left">
          <span v-if="isEditing">
            <font-awesome-icon
              style="font-size: 1em; color: Green"
              class="superhero-item__actions__confirm"
              icon="check"
            />
          </span>
  
          <span v-if="isEditing">
            <font-awesome-icon
              style="font-size: 1em; color: Tomato"
              class="superhero-item__actions__discard"
              icon="times"
            />
          </span>
        </div>
        <div class="superhero-item__actions--right">
          <span v-if="!isEditing">
            <font-awesome-icon
              style="font-size: 1em; color: Grey"
              class="superhero-item__actions__edit"
              icon="pen-alt"
            />
          </span>
          <span v-if="!isEditing">
            <font-awesome-icon
              style="font-size: 1em; color: Tomato"
              class="superhero-item__actions__delete"
              icon="trash-alt"
            />
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { toRefs, ref } from "vue";
  
  export default {
    props: {
      superhero: {
        type: Object,
        required: true,
      },
    },
    emits: ["delete-superhero"],
    setup(props, { emit }) {
      const { superhero } = toRefs(props);
      const isEditing = ref(false);
  
      function handleDeleteSuperhero() {
        emit("delete-superhero", { heroName: superhero.value.heroName });
      }
  
      return {
        isEditing,
        handleDeleteSuperhero,
      };
    },
  };
  </script>
  
  <style scoped lang="scss">
  $component-size: 200px;
  $color-white: #FFF;
  $color-whitey: #F0F0F0;
  
  .superhero-item {
    position: relative;
    min-width: $component-size;
    max-width: $component-size;
    min-height: $component-size;
    display: flex;
    flex-direction: column;
    box-shadow: 0 8px 16px 0 rgba(83, 99, 115, 0.32);
    background-color: $color-whitey;
    transition: background-color 0.2s ease-in-out;
  
    &__heroname-input {
      width: 150px;
      font-size: 1.5em;
      margin: 0.83em;
      font-weight: bold;
      text-align: center;
    }
  
    &__power-input {
      width: 150px;
      font-size: 1em;
      margin: 0 1.2em;
      text-align: center;
    }
  
    &__actions {
      display: flex;
      justify-content: space-between;
      padding: 0 10px 10px;
      margin-top: auto;
  
      &__edit,
      &__confirm {
        margin-right: 10px;
      }
  
      &__edit,
      &__delete,
      &__confirm,
      &__discard {
        transition: transform 0.2s ease-in-out;
        &:hover {
          transform: scale(1.2);
          cursor: pointer;
        }
      }
    }
  
    &:hover,
    &:focus {
      background-color: $color-white;
    }
  }
  </style>
  