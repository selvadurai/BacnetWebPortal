<!-- ParentComponent.vue -->
<template>
   <TopMenu/>
    <div>
        <DeviceTableList/> 
    </div>
  </template>
  
  <script>
   import TopMenu from '../components/MenuBar.vue'; 
   import DeviceTableList from '../components/DeviceTable.vue'; 


  
  export default {
    components: {
      //FormExample, // Remove this line if AddInputButton is not needed in this component
      DeviceTableList,
      TopMenu,
    },
  };
  </script>
  
  <style scoped>
    /* Add styling for your parent component if needed */
  </style>
  
  