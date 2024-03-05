<template>
    <TopMenu/>
    <div>
        <ApiToken/> 
    </div>
  </template>
  
  <script>
   import TopMenu from '../components/MenuBar.vue'; 
   import ApiToken from '../components/ApiToken.vue'; 

  
  export default {
    components: {
      //FormExample, // Remove this line if AddInputButton is not needed in this component
      ApiToken,
      TopMenu,
    },
  };
  </script>
  
  <style scoped>
    /* Add styling for your parent component if needed */
  </style>
  
  