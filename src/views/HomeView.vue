<template>
   
    <TopMenu /> 

    <div>

      <Diagonistic/>
      <br>

       <ActiveApis/>

    </div>
  </template>
  
  <script>

  import ActiveApis from '../components/ActiveApis.vue'; 
  import Diagonistic from '../components/Diagonstics.vue'; 
  import TopMenu from '../components/MenuBar.vue';
  
  export default {
  
    components: {
      ActiveApis, 
      Diagonistic,
      TopMenu,
    },

 
    
  created() {
    // Trigger a reload or perform any other actions when the component is created
    // this.$forceUpdate();
   
  },

  };
  </script>
  
  <style scoped>
    /* Add styling for your parent component if needed */
  </style>
  