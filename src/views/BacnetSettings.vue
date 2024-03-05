<!-- ParentComponent.vue -->
<template>
    <TopMenu/>
    <div>
        <BacnetSetting/> 
    </div>
  </template>
  
  <script>
  import BacnetSetting from '../components/BacnetSettingForm.vue'; 
  import TopMenu from '../components/MenuBar.vue'; 


  
  export default {
    components: {
      //FormExample, // Remove this line if AddInputButton is not needed in this component
      BacnetSetting,
      TopMenu,
    },
  };
  </script>
  
  <style scoped>
    /* Add styling for your parent component if needed */
  </style>
  
  