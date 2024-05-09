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
      <h1>Device List</h1>
  
      <div>
        <label for="search">Search:</label>
        <input v-model="searchTerm" id="search" type="text" placeholder="Enter device name">
  
        <button @click="deleteMarkedDevices">Delete Marked Devices</button>
      
      </div>
  
   
  
      <table class="custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Template Used</th>
            <th>API</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="device in filteredDevices" :key="device.id">
        
            <td>{{ device.id }}</td>
            <td>{{ device.deviceName}}</td>
            <td>{{ device.templateName}}</td>
            <td>localhost:7007/device/{{device.deviceName}}</td>


            
  
            <td>
              <input type="checkbox" v-model="device.markedForDeletion">
            </td>
  
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
        devices: [],
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
    computed: {
      filteredDevices() {
        // Filter devices based on the search term
        return this.devices.filter(device => {
          return device.deviceName.toLowerCase().includes(this.searchTerm.toLowerCase());
        });
      },
    },
    methods: {
      async fetchDevices() {
        
  
          axios.get(this.currentUrl+'/listAllDevices')
            .then(res=> {
               this.devices = res.data
                       
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            })
  
      },
  
       async deleteMarkedDevices() {
            // Get devices marked for deletion
            const markedDevices = this.devices.filter(device => device.markedForDeletion);
            console.log(JSON.stringify(markedDevices, null, 2));

            
  
            try {
              // Replace 'https://jsonplaceholder.typicode.com/todos/1' with your API endpoint
              const  response = await axios.post(this.currentUrl+'/deleteDevices',{
                    markedDevices
              });
  
              // Set the API response to the component's data
              this.apiResponse = response.data;
       
              location.reload();
             this.$router.push('/listDevices');
            
  
        } catch (error) {
          console.error('Error fetching data:', error);
        }
         
  
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
  