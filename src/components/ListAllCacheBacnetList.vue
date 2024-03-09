<template>
    <div>
      <h1>Cache Bacnet Object List</h1>
  
      <div>
        <label for="search">Search:</label>
        <input v-model="searchTerm" id="search" type="text" placeholder="Enter device name">
  
        <button @click="clearBacnetBroadcastCache">Clear Bacnet Broadcast Cache </button>
      </div>
  
      <table class="custom-table">
        <thead>
          <tr>
            <th>Object Name</th>
            <th>Instanct Number</th>
            <th> DeviceName</th>
            <th>Measurement</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cacheBacnetList in filteredDevices" :key="cacheBacnetList.objectName">
            <td>{{ cacheBacnetList.objectName }}</td>
            <td>{{ cacheBacnetList.instanceNum }}</td>
            <td>{{ cacheBacnetList.deviceName }}</td>
            <td>{{ cacheBacnetList.keyName }}</td>
            
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
        cacheBacnetList: [],
        searchTerm: '',
        currentUrl,
      };
    },
    created() {
      this.fetchDevices();
    },
    mounted() {
      // Fetch data from the API using Axios
      this.fetchDevices();
    },
  
    computed: {
      filteredDevices() {
        // Filter devices based on the search term
        return this.cacheBacnetList.filter(object => {
          return object.objectName.toLowerCase().includes(this.searchTerm.toLowerCase());
        });
      },
    },
    methods: {
      async fetchDevices() {
        try {
          const response = await axios.get(this.currentUrl+'/cacheInstanceBacnetObjectList');
          this.cacheBacnetList = response.data;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
  
      async clearBacnetBroadcastCache() {
        // Get devices marked for deletion
        const markedDevices = this.cacheBacnetList.filter(device => device.markedForDeletion);
  
        try {
          // Replace 'https://jsonplaceholder.typicode.com/todos/1' with your API endpoint
          const response = await axios.post(this.currentUrl+'/clearBacnetBroadcastCache', {
             destroy:true,
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
  