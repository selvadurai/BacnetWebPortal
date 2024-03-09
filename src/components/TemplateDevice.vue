<!-- DevicesList.vue -->
<template>
  <div>
    <h1>Template Device List</h1>

    <div>
      <label for="search">Search:</label>
      <input v-model="searchTerm" id="search" type="text" placeholder="Enter device name">

      <button @click="deleteMarkedDevices">Delete Marked Devices</button>
    
    </div>

 

    <table class="custom-table">
      <thead>
        <tr>
          <th>Template Device Name</th>
          <th>BACnet Objects</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="device in filteredDevices" :key="device.deviceTemplate.id">
      
          <td>{{ device.deviceTemplate.name }}</td>
          <td v-if="device.bacnetObjectList.length > 0">
            <ul>
              <font   style="font-family:verdana bold" >Bacnet Name      | Bacnet Object Type</font>
              <li v-for="bacnetObject in device.bacnetObjectList" :key="bacnetObject.bacnetObjId">
                  &nbsp;{{ bacnetObject.name }} | {{ bacnetObject.bacObjType }}
              </li>
            </ul>
          </td>
          
          <td v-else>No BACnet Objects</td>

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
        return device.deviceTemplate.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    },
  },
  methods: {
    async fetchDevices() {
      

        axios.get(this.currentUrl+'/listAllTemplateDevices')
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
            const response = await axios.post(this.currentUrl+'/deleteTemplates',{
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

 