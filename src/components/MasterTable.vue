<template>
    <div>
      <h1>Device List with BACnet Objects</h1>
  
      <table class="custom-table">
        <thead>
          <tr>
            <th>Device Name</th>
            <th>BACnet Objects</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="device in filteredDevices" :key="device.id">
            <td>{{ device.deviceTemplate.name }}</td>
            <td v-if="device.bacnetObjectList.length > 0">
              <table>
                <thead>
                  <tr>
                    <th>BACnet Name</th>
                    <th>BACnet Object Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="bacnetObject in device.bacnetObjectList" :key="bacnetObject.bacnetObjId">
                    <td>{{ bacnetObject.name }}</td>
                    <td>{{ bacnetObject.bacObjType }}</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td v-else>No BACnet Objects</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        devices: [],
        searchTerm: '',
      };
    },
    created() {
      this.fetchData();
    },
    computed: {
      filteredDevices() {
        // Filter devices based on the search term
        return this.devices.filter(device => {
          return (
            device.deviceTemplate &&
            device.deviceTemplate.name.toLowerCase().includes(this.searchTerm.toLowerCase())
          );
        });
      },
    },
    methods: {
      async fetchData() {
        try {
          const response = await axios.get('http://localhost:7007/listAllDevices');
          this.devices = response.data;
  
          console.log('Data fetched successfully:', this.devices);
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
    border: 2px solid black;
  }
  
  th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
    color: black;
  }
  </style>
  