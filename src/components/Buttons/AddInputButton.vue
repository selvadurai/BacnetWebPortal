
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
  <div class="container">
    <label class="template-label">Template Name:</label>
    <br>
    <input class="template-button" type="text" :id="templateName" v-model="templateName" />
    <br>
    <br>
    <br>

    <button class="add-button" @click="addInput">Add Bacnet Object</button>
    <br>
    <br>
    <br>

    <!-- Table -->
    <table class="data-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Object Type</th>
          <!--<th>Instance Num</th> -->
          <!--<th>Req Default</th> -->
        </tr>
      </thead>

      <tbody>
        <tr v-for="index in inputCount" :key="index">
          <td>
            <input type="text" :id="'name' + index" v-model="name[index]"  />
          </td>
          <td>
           <!-- <input type="text" :id="'bacnetObjectType' + index" v-model="bacnetObjectType[index]" :placeholder="'Object Type ' + (index + 1)" /> -->
               <select  :id="'bacnetObjectType'+index"  v-model="bacnetObjectType[index]" >
                   <option value="AnalogInput">Analog Input</option>
                   <option value="AnalogOutput">Analog Output</option>
                   <option value="AnalogValue">Analog Value</option>
                    <option value="BinaryInput">Binary Input</option>
                    <option value="BinaryOutput">Binary Output</option>
                    <option value="BinaryValue">Binary Value</option>

               </select>
          </td>
          <!--<td> -->
             <!--  <input type="number" :id="'instanceNumber' + index" v-model="instanceNumber[index]"  /> -->
         <!-- </td> -->
          <!-- <td>-->
            <!-- <input type="number" :id="'reqDefault' + index" v-model="reqDefault[index]"  /> -->
          <!-- </td> -->
        </tr>
      </tbody>
    </table>

    <!-- Submit Button -->
    <button class="submit-button" @click="handleSubmit">Submit</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    const currentUrl="http://"+window.location.hostname+":7007";

    return {
      inputCount: 0, // Initial count of input fields
      name: [],
      bacnetObjectType: [],
      //instanceNumber: [],
      //reqDefault: [],
      templateName:"", // Replace with your actual TemplateName value
      currentUrl,
    };
  },
  methods: {
    addInput() {
      this.inputCount += 1; // Increment the input count on button click
      //this.name.push(`${this.inputCount}`);
     // this.bacnetObjectType.push(`${this.inputCount}`);
     // this.instanceNumber.push(`${this.inputCount}`);
     // this.reqDefault.push(`${this.inputCount}` );
    },
    async handleSubmit() {
      // Log the data in JSON format to the console

     var nameFiltered= this.name.filter(function (el) {
          return el != null;
      });

     var bacObjFiltered= this.bacnetObjectType.filter(function (el) {
          return el != null;
      });

      /*

      var instanceNumFiltered=this.instanceNumber.filter(function (el) {
          return el != null;
      });

      var reqDefFiltered=this.reqDefault.filter(function (el) {
          return el != null;
      });
      */



      const jsonData = {
        templateName:this.templateName,
        name:nameFiltered,
        bacnetObjectType: bacObjFiltered,
      
      };
      console.log(JSON.stringify(jsonData, null, 2));
      try {
        // Replace 'https://jsonplaceholder.typicode.com/todos/1' with your API endpoint
        const response = await axios.post(this.currentUrl+'/addDeviceTemplate',{
          data:JSON.stringify(jsonData, null, 2),
        });

        // Set the API response to the component's data
        this.apiResponse = response.data;

       
        this.$router.push('/listTemplateDevices');


      } catch (error) {
        console.error('Error fetching data:', error);
      }


    },
     


  },
};
</script>

<style >
.container {
  position: relative;
  padding: 1px; /* Add padding for better visibility */
}

.add-button {
  position: absolute;
  top: 2;
  left: 0;
  padding: 10px;
  cursor: pointer;
  z-index: 1; /* Ensure the button is above other elements */
}

.template-button {
  position: absolute;
  top: 1;
  left: 0;
  padding: 1px;
  cursor: pointer;
  z-index: 1; /* Ensure the button is above other elements */
}

.template-label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 1px;
  cursor: pointer;
  z-index: 1; /* Ensure the button is above other elements */
}

.submit-button {
  margin-top: 20px; /* Adjust margin for better separation */
  padding: 10px;
  cursor: pointer;
}
.data-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.data-table th, .data-table td {
  padding: 10px;
  border: 1px solid #ddd;
}

/* You can add additional styling if needed */
.data-table input {
  width: 100%; /* Make input fields fill the table cell */
  font-size:16px;
}
</style>
