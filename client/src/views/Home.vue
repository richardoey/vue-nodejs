<template>
  <div class="home">
    <h1>Home</h1>
    <h3>{{ msg }}</h3>

    <h4>Name:</h4>
    <input type="text" v-model="name" placeholder="input your name" />
    <button @click="postName">postName</button>
    <hr />

    <button @click="getPersonal">getPersonal</button>

    <button @click="getAPIFavourite">getAPIFavourite</button>
    <h4 v-if="response">{{ response }}</h4>
    <h4 v-if="nameResponse">This is my name: {{ nameResponse }}</h4>
  </div>
</template>

<script>
import { defineComponent } from "vue"
import axios from "axios";

export default defineComponent({
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      response: '',
      name: '',
      nameResponse: ''
    }
  },
  methods: {
    async getPersonal() {
      await axios.get('/personal').then((res) => {
        console.log('res=', res);
        this.msg = res.data.path;
      })
    },
    async postName() {
      await axios.post('/favourite', {
        name: this.name
      })
        .then((res) => {
          console.log('res=', res);
          this.msg = res.data.path;
          this.response = res.data;
          this.nameResponse = res.data.name;
        })
    },
    async getAPIFavourite() {
      await axios.get('/api/favourite').then((res) => {
        console.log('res=', res);
        this.msg = res.data.path;
      })
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
