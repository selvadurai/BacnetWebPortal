<template>
    <div>
      <h1>Login</h1>
  
      <!-- Display error message if login fails -->
      <div v-if="loginError" style="color: red;">
        Login failed. Please check your credentials.
      </div>
  
      <!-- Login form -->
      <form @submit.prevent="loginUser">
        <div>
          <label for="username">Username:</label>
          <input type="text" v-model="user.username" id="username" required />
        </div>
  
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="user.password" id="password" required />
        </div>
  
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { useStore } from 'vuex';


  
  export default {
    data() {
      const currentUrl="http://"+window.location.hostname+":7007";
      return {
        user: {
          username: '',
          password: '',
        },
        loginError: false,
        currentUrl,
      
      };
    },
    created(){
     


    },
    methods: {
      loginUser() {
        // Reset error message
        this.loginError = false;
  
        // Validate if username and password are provided
        if (!this.user.username || !this.user.password) {
          this.loginError = true;
          return;
        }

        const userData = {
                    username: this.user.username,
                    password: this.user.password,
        };

  
  

        // Call your authentication endpoint
        axios.post(this.currentUrl+'/authenticate', userData)
          .then(response => {
            // Handle successful login (redirect, store token, etc.)
            console.log('Login successful:', response.data);


            //localStorage.setItem('userSession',response.data);

            this.$store.dispatch('updateUserSession',response.data);

            console.log("User session"+this.$store.getters.getSession);


         

  
            // Example: Redirect to another page
            this.$router.push('/home');
          })
          .catch(error => {
            // Handle login error
            console.error('Login failed:', error);
            this.loginError = true;
          });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  