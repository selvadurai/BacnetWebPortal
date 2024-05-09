<!-- ParentComponent.vue -->
<!--
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/>.
*
* Author: Jonathan Kevin Selvadurai
* Date: May 8 2024
-->


<template>
    <TopMenu/>  
  
    <div>
        <ListAllCacheBacnetList/>
        <br>
        <BacnetBroadcastLive/> 
    </div>
  </template>
  
  <script>
  import BacnetBroadcastLive from '../../components/Tables/BacnetBroadcastList.vue'; 
  import ListAllCacheBacnetList from '../../components/Tables/ListAllCacheBacnetList.vue'; 
  import TopMenu from '../../components/MenuBar.vue'; 

  

  
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
  
  