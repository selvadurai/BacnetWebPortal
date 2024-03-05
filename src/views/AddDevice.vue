<template>

   <TopMenu/> 


    <div>
        <AddDeviceForm/> 
    </div>
  </template>
  
  <script>
  import TopMenu from '../components/MenuBar.vue'; 
  import AddDeviceForm from '../components/AddDeviceForm.vue'; 


  
  export default {
    components: {
      //FormExample, // Remove this line if AddInputButton is not needed in this component
      AddDeviceForm,
      TopMenu,
    },
  };
  </script>
  
  <style scoped>
    /* Add styling for your parent component if needed */
  </style>
  
  
  