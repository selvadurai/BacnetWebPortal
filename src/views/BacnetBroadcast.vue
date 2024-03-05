<!-- ParentComponent.vue -->
<template>
    <TopMenu/>  
  
    <div>
        <ListAllCacheBacnetList/>
        <br>
        <BacnetBroadcastLive/> 
    </div>
  </template>
  
  <script>
  import BacnetBroadcastLive from '../components/BacnetBroadcastList.vue'; 
  import ListAllCacheBacnetList from '../components/ListAllCacheBacnetList.vue'; 
  import TopMenu from '../components/MenuBar.vue'; 

  

  
  export default {
    components: {
      //FormExample, // Remove this line if AddInputButton is not needed in this component
      BacnetBroadcastLive,
      ListAllCacheBacnetList,
      TopMenu,
    },
  };
  </script>
  
  <style scoped>
    /* Add styling for your parent component if needed */
  </style>
  
  