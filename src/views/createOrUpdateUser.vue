<template>
  <TopMenu/>
    <div>
        <UserForm/> 
    </div>
  </template>
  
  <script>
  import UserForm from '../components/UserForm.vue'; 
  import TopMenu from '../components/MenuBar.vue'; 

  
  export default {
    components: {
      //FormExample, // Remove this line if AddInputButton is not needed in this component
      UserForm,
      TopMenu,
    },
  };
  </script>
  
  <style scoped>
    /* Add styling for your parent component if needed */
  </style>
  
  