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
      const currentUrl="http://"+window.location.hostname+":7007";

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
          const response = await axios.get(this.currentUrl+'/listAllDevices');
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
  