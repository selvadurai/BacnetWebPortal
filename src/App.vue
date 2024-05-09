<!--
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/>.
*
* Author: Jonathan Kevin Selvadurai
* Date: May 8 2024
-->


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

