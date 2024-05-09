
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
   
    <TopMenu /> 

    <div>
        <br>

       <Diagonistic/>
       <br>

       <ActiveApis/>

    </div>
  </template>
  
  <script>
   import TopMenu from '../components/MenuBar.vue';
   import ActiveApis from '../components/Tables/ActiveApis.vue'; 
   import Diagonistic from '../components/Tables/Diagonstics.vue'; 
   import MasterTable from '../components/Tables/MasterTable.vue';
  
  export default {
  
    components: {
      ActiveApis, 
      Diagonistic,
      TopMenu,
      MasterTable,
    },

 
    
  created() {
    // Trigger a reload or perform any other actions when the component is created
    // this.$forceUpdate();
   
  },

  };
  </script>
  
  <style scoped>
    /* Add styling for your parent component if needed */
  </style>
  