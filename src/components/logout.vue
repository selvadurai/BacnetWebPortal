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
       // localStorage.removeItem('userSession');
          this.$store.dispatch("killUserSession");
  
        // Redirect to the login page or any other desired route
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  