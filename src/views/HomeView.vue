<template>
   
    <TopMenu /> 

    <div>
        <br>

       <Diagonistic/>
       <br>

       <ActiveApis/>

    </div>
  </template>
  
  <script>
   import TopMenu from '../components/MenuBar.vue';
   import ActiveApis from '../components/ActiveApis.vue'; 
   import Diagonistic from '../components/Diagonstics.vue'; 
   import MasterTable from '../components/MasterTable.vue';
  
  export default {
  
    components: {
      ActiveApis, 
      Diagonistic,
      TopMenu,
      MasterTable,
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
  