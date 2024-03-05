<!-- ParentComponent.vue -->
<template>
   <TopMenu/>
    <div>
        <TemplateDevice/> 
    </div>
  </template>
  
  <script>
   import TopMenu from '../components/MenuBar.vue'; 
  import TemplateDevice from '../components/TemplateDevice.vue'; 

  
  export default {
    components: {
      //FormExample, // Remove this line if AddInputButton is not needed in this component
      TemplateDevice,
      TopMenu,
    },
  };
  </script>
  
  <style scoped>
    /* Add styling for your parent component if needed */
  </style>
  
  