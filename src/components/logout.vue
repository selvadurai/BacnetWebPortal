<template>
 
  </template>
  
  <script>
  export default {
    created() {
    this.logout() ;
    },
    methods: {
      logout() {
        // Implement your logout logic here
        // For example, clear user data from localStorage or cookies
        localStorage.removeItem('userSession');
  
        // Redirect to the login page or any other desired route
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  