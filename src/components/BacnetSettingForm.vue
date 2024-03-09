<template>
    <div>
    



      <table class="custom-table">

   <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>

     <tbody>
        <tr>
            <td><label class="IpAddress">IP Address:</label></td>
            <td><input class="template-button" type="text" :id="bacnetConfig.ipAddress" v-model="bacnetConfig.ipAddress" :placeholder="bacnetConfig.ipAddress"/></td>
        </tr>
        
        <tr>
            <td><label class="SubnetMask">Subnet Mask:</label></td>
            <td><input class="template-button" type="text" :id="bacnetConfig.submask" v-model="bacnetConfig.submask"  :placeholder="bacnetConfig.submask"/></td>
        </tr>

        <tr>
            <td><label class="networkPrefix">Network Prefix:</label></td>
            <td><input class="template-button" type="number" :id="networkPrefix" v-model="bacnetConfig.networkPrefix" :placeholder="bacnetConfig.networkPrefix" /></td>
        </tr>

        <tr>
            <td><label class="bacnetPort">Bacnet Port:</label></td>
            <td><input class="template-button" type="number" :id="bacnetPort" v-model="bacnetConfig.bacnetPort" :placeholder="bacnetConfig.bacnetPort"/></td>
        </tr>


        <tr>
            <td><label class="instanceId">Instance ID:</label></td>
            <td><input class="template-button" type="number" :id="instanceId" v-model="bacnetConfig.instanceId" :placeholder="bacnetConfig.instanceId" /></td>
        </tr>

        <tr>
            <td><label class="bacnetServerName">Bacnet Server Name:</label></td>
            <td><input class="template-button" type="text" :id="bacnetServerName" v-model="bacnetConfig.bacnetServerName"  :placeholder="bacnetConfig.bacnetServerName"/></td>
        </tr>

      <br>


        <tr>
          <td></td>
          <td> <button class="submit-button" @click="submit">Update Bacnet Server</button> </td>
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
        bacnetConfig:[],
        currentUrl,
        
       
          
        
      };
    },
    mounted() {
      // Fetch data from the API when the component is mounted
      this.fetchData();

    },
    created(){
      this.fetchData();
    },
    methods: {

    async fetchData() {
        // Make a GET request to your API endpoint
        axios.get(this.currentUrl+'/getbacnetConfig')
          .then(res=> {
            const data = res.data
            this.bacnetConfig =data;
           
            
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
     },

     submit(){

          try {
               const response =  axios.post(this.currentUrl+'/updateBacnetConfig',{
                ipAddress:this.bacnetConfig.ipAddress,
                submask:this.bacnetConfig.submask,
                networkPrefix:this.bacnetConfig.networkPrefix,
                bacnetPort:this.bacnetConfig.bacnetPort,
                instanceId:this.bacnetConfig.instanceId,
                bacnetServerName:this.bacnetConfig.bacnetServerName,
          

               });
          } 
          catch (error) {
            console.error('Error fetching data:', error);
          }
        


        //Redirect to main goal page
        location.reload();
        //this.$router.push('/habit');
       // this.$router.push('/listDevices');
    
    },      




    },
  };
  </script>
  <style scoped>
  /* Add the following style to make the placeholder text darker */
  .custom-table input::placeholder {
    color: #333; /* Darker color (adjust the hex code as needed) */
  }
  
  /* Add any other custom styles you need for your component */
  </style>