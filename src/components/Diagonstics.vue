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
      return {
        parsedMemoryUsage: {
          heapUsed: '',
          heapMax: '',
          nonHeapUsed: '',
          nonHeapMax: '',
        },
        searchTerm: '',
      };
    },
    created() {
      this.fetchDevices();
    },
    methods: {
      async fetchDevices() {
        axios.get('http://localhost:7007/Diagonistic')
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
  