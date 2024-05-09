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
      <h1>Broadcast Bacnet List</h1>
  
      <div>
  
       <!-- <button @click="destroyBacnetCacheObjects">Clear Bacnet Broadcast</button> -->
      
      </div>
  
      <br>
  
      <table class="custom-table">
        <thead>
          <tr>
            <th>Bacnet Objects</th>
            <th>Instance Num</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(bacnetObject,instanceNum) in this.bacnetBroadcastList" :key="instanceNum">
        
            <td>{{bacnetObject }}</td>
            <td>{{instanceNum}}</td>
         
  
  
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
        bacnetBroadcastList: [],
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
        
  
          axios.get(this.currentUrl+'/bacnetbroadcastlist')
            .then(res=> {
               this.bacnetBroadcastList = res.data
               console.log(res.data);
                       
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            })
  
      },
  
       async destroyBacnetCacheObjects() {
        
            
  
            try {
              // Replace 'https://jsonplaceholder.typicode.com/todos/1' with your API endpoint
              const  response = await axios.post(this.currentUrl+'/clearBacnetBroadcast',{
                    clearBacnetBroadcast:true
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
  