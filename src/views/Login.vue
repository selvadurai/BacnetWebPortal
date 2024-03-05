<template>
    <div>
        <LoginForm/> 
    </div>
  </template>
  
  <script>
  import LoginForm from '../components/LoginForm.vue'; 

  
  export default {
    components: {
      //FormExample, // Remove this line if AddInputButton is not needed in this component
      LoginForm,
    },
  };
  </script>
  
  <style scoped>
    /* Add styling for your parent component if needed */
  </style>
  