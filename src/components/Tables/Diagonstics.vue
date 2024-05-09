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
      <h1>Diagonistics</h1>
  
      <table class="custom-table">
        <thead>
          <tr>
            <th></th>
            <th>Used (KB)</th>
            <th>Max (KB)</th>
            <th>Percentage Used</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Heap Memory</td>
            <td>{{ parsedMemoryUsage.heapUsed }}</td>
            <td>{{ parsedMemoryUsage.heapMax }}</td>
            <td>{{ calculatePercentage(parsedMemoryUsage.heapUsed, parsedMemoryUsage.heapMax) }}</td>
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
        parsedMemoryUsage: {
          heapUsed: '',
          heapMax: '',
          nonHeapUsed: '',
          nonHeapMax: '',
        },
        searchTerm: '',
        currentUrl,
      };
    },
    created() {
      this.fetchDevices();
    },
    methods: {
      async fetchDevices() {
        axios.get(this.currentUrl+'/Diagonistic')
          .then(res => {
            const { heapMemoryUsage, nonHeapMemoryUsage } = res.data;
            this.parseMemoryUsage(heapMemoryUsage, nonHeapMemoryUsage);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      },
      parseMemoryUsage(heapMemoryString, nonHeapMemoryString) {
        this.parsedMemoryUsage = {
          heapUsed: this.extractMemoryValue(heapMemoryString, 'Used'),
          heapMax: this.extractMemoryValue(heapMemoryString, 'Max'),
          nonHeapUsed: this.extractMemoryValue(nonHeapMemoryString, 'Used'),
          nonHeapMax: this.extractMemoryValue(nonHeapMemoryString, 'Max'),
        };
      },
      extractMemoryValue(memoryString, key) {
        const match = memoryString.match(new RegExp(`${key}: ([0-9,]+) KB`));
        return match ? match[1] : '';
      },
      calculatePercentage(used, max) {
        const usedValue = parseFloat(used.replace(/,/g, ''));
        const maxValue = parseFloat(max.replace(/,/g, ''));
        const percentage = (usedValue / maxValue) * 100;
        return percentage.toFixed(2) + '%';
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
  