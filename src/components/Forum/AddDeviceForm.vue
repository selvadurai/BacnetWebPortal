<template>
    <div>
    

      <label class="DeviceName">Device Name:</label>
      <input class="template-button" type="text" :id="deviceName" v-model="deviceName" />
      <br>

      <label class="DeviceTemplate">Device Template:</label>
    
       <select v-model="tempId">
         <option v-for="template in templateList" :key="template.id" :value="template.id">
             {{ template.name }}
         </option>
      </select>

      <br>
      <br>
    <button @click="submit">Submit</button>
    
    </div>


  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      const currentUrl="http://"+window.location.hostname+":7007";

      return {
        templateList:[],
        tempId:'',
        deviceName:'',
        currentUrl,

        
      };
    },
    mounted() {
      // Fetch data from the API when the component is mounted
      this.fetchData();
    },
    created(){
     // this.fetchData();
    },
    methods: {

    async fetchData() {
        // Make a GET request to your API endpoint
        axios.get(this.currentUrl+'/listAllDeviceTemplate')
          .then(res=> {
            const data = res.data
            console.log(data);
            this.templateList=data;
            console.log(this.templateList);
            
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
     },

     submit(){

          
          try {
               const response =  axios.post(this.currentUrl+'/addDevice',{
                  devTempId:this.tempId,
                  name:this.deviceName,
                  active:0,
              });

          } 
          catch (error) {
            console.error('Error fetching data:', error);
          }
        

        //Redirect to main goal page
        //this.$router.push('/habit');
        this.$router.push('/listDevices');
    
    },      




    },
  };
  </script>
  