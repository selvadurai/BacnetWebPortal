<!-- ParentComponent.vue -->
<template>
    <TopMenu/>
    <div>
        <AddInputButton/> 
    </div>
  </template>
  
  <script>
  import TopMenu from '../components/MenuBar.vue'; 
  import AddInputButton from '../components/AddInputButton.vue'; 

  
  export default {
    components: {
      //FormExample, // Remove this line if AddInputButton is not needed in this component
      AddInputButton,
      TopMenu
    },
  };
  </script>
  
  <style scoped>
    /* Add styling for your parent component if needed */
  </style>
  
  