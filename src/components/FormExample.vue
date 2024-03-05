<template>
  <div class="container">
    <button class="add-button" @click="addInput">Add Bacnet Object</button>
    
  

    <!-- Table -->
    <table class="data-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Object Type</th>
          <th>Instance Num</th>
          <th>Req Default</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="index in inputCount" :key="index">
          <td>
            <input type="text" :id="'name' + index" v-model="name[index]" :placeholder="'Name ' + (index + 1)" />
          </td>
          <td>
            <input type="text" :id="'bacnetObjectType' + index" v-model="bacnetObjectType[index]" :placeholder="'Object Type ' + (index + 1)" />
          </td>
          <td>
            <input type="number" :id="'instanceNumber' + index" v-model="instanceNumber[index]" :placeholder="'Instance Num ' + (index + 1)" />
          </td>
          <td>
            <input type="number" :id="'reqDefault' + index" v-model="reqDefault[index]" :placeholder="'Req Default ' + (index + 1)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputCount: 0, // Initial count of input fields
      name: [],
      bacnetObjectType: [],
      instanceNumber: [],
      reqDefault: [],
    };
  },
  methods: {
    addInput() {
      this.inputCount += 1; // Increment the input count on button click
      this.name.push(`Name ${this.inputCount}`);
      this.bacnetObjectType.push(`Object Type ${this.inputCount}`);
      this.instanceNumber.push(null);
      this.reqDefault.push(null);
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  padding: 100px; /* Add padding for better visibility */
}

.add-button {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  cursor: pointer;
  z-index: 1; /* Ensure the button is above other elements */
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.data-table th, .data-table td {
  padding: 100px; /* Adjust padding for cells to make the table bigger */
  border: 1px solid #ddd;
  font-size: 18px; /* Adjust font size for text */
}

/* You can add additional styling if needed */
.data-table input {
  width: 100%; /* Make input fields fill the table cell */
  font-size: 70px; /* Adjust font size for input fields */
}
</style>
