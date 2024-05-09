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


<!-- DevicesList.vue -->
<template>
    <div>
      <h1>Active APIs</h1>
  
      <table class="custom-table">
        <thead>
          <tr>
            <th>API</th>
            <th>Last Active</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(timestamp,device) in apis" :key="device">
            <td> localhost:7007/device/{{ device }}</td>
            <td>{{ timestamp }}</td>

            
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  
  
  <script>
  import axios from 'axios';
  
  
  export default {
    data() {
      const currentUrl="http://"+window.location.hostname+":7007";

      return {
        apis: [],
        searchTerm: '',
        currentUrl,
      };
    },
    created(){
      this.fetchDevices();
  
    },
    mounted() {
      // Fetch data from the API using Axios
      this.fetchDevices();
    },
    
    methods: {

      async fetchDevices() {
        
  
          axios.get(this.currentUrl+'/listAllActiveApis')
            .then(res=> {
               this.apis = res.data;
               //console.log(Object.keys(res.data));
               //console.log(Object.values(res.data));
 
               /*
               for(var i=0;i<Object.keys(res.data).length;i++)
               {
                 var deviceKey=Object.keys(res.data)[i];
                 var dateValue=Object.values(res.data)[i];

                 this.apis.push( JSON.stringify({deviceName:deviceKey,timestamp:dateValue})  );
                
               }*/
               
               
               console.log(this.apis);               

               
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            })
  
      },
  
  
  
    },
  };
  </script>
  
  <style scoped>
  .custom-table {
    width: 100%;
    border-collapse: collapse;
    border: 2px solid black; /* Set the table border to black */
  }
  
  th, td {
    border: 1px solid black; /* Set the cell borders to black */
    padding: 8px;
    text-align: left;
    color: black;
  }
  
  .black-bg {
    background-color: black; /* Set the background color to black for cells with BACnet objects */
  }
  .button-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px; /* Adjust margin as needed */
  }
  
  
  </style>
  