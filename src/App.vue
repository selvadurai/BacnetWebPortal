import { RouterLink, RouterView } from 'vue-router'

<!-- App.vue -->

<template>
  <!--<div v-if="this.hasUserSession"> -->
   <!-- <TopMenu /> -->  
   <!-- </div> -->
    <router-view /> 

</template>

<script>
import TopMenu from './components/MenuBar.vue';



export default {
  components: {
    TopMenu,
  },




  data() {

    return {
      hasUserSession: false,

    };
  },
  created() {
    this.checkUserSession();
   // this.$router.go();
  },
  mounted(){
    this.checkUserSession();

  },
  methods: {
    checkUserSession() {
     // const userSession=localStorage.getItem('userSession');
      
     const userSession=this.$store.getters.getSession;
     console.log("user Session "+userSession);


      if(userSession!=null){
          this.hasUserSession = true;
      }

    },
  },
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; /* Adjust margin to account for the fixed menu */
}
</style>

