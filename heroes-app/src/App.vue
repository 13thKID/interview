<template>
  <div id="app">
    <h2>{{ caption }}</h2>
    <div class="description">
      <p>We want to have CRUD application</p>
      <button @click="showInstructions = !showInstructions">more</button>
    </div>
    <div class="instructions" v-if="showInstructions">
      <h3>Usefull info:</h3>

      <ul>
        <li>You shall mainly work with the <strong>components</strong> or preferably with the <strong>store.js</strong> file</li>
        <li>It would be great if you could implement the functionality using <strong>vuex store</strong> or <strong>composables</strong></li>
        <li><strong>Characters list</strong> is in <span class="code">SuperheroesForm.vue</span></li>
      </ul>

      <h3>Tasks:</h3>

      <ol class="instructions">
        <li v-for="(item, index) in todo" :key="index">
          <input type="checkbox" name="" id="" :checked="item.done" />
          {{ item.instructions }}
        </li>
      </ol>
    </div>
    <SuperheroesForm />
  </div>
</template>

<script>
import { computed, ref } from "vue";
import SuperheroesForm from "./components/SuperheroesForm";
import { useStore } from "vuex";
import steps from './steps'

export default {
  name: "App",
  components: {
    SuperheroesForm,
  },
  setup() {
    const store = useStore();
    const showInstructions = ref(false);
    const todo = steps;

    const caption = computed(() => store.state.caption);

    return {
      showInstructions,
      caption,
      todo,
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.description {
  display: flex;
  justify-content: center;
  align-items: center;
}

.description button {
  margin-left: 15px;
  height: 30px;
  background-color: #88DEF1;
  border: none;
  border-radius: 10px;
  padding: 8px 15px;
  display: flex;
  align-items: center;
}

.instructions {
  font-size: 14px;
  text-align: left;
  max-width: 600px;
  margin: auto;
  margin-bottom: 20px;
}

.code {
  font-family:'Lucida Console', monospace;
}
</style>
