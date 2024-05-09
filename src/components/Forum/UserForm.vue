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
      <h1>Update User</h1>
  
      <!-- Display error message if passwords do not match -->
      <div v-if="passwordsDoNotMatch" style="color: red;">
        Passwords do not match.
      </div>
  
      <!-- Update form -->
      <form @submit.prevent="updateUser">
        <table>
          <tr>
            <td><label for="username">Username:</label></td>
            <td><input type="text" v-model="user.username" id="username" required /></td>
          </tr>
  
          <tr>
            <td><label for="password">New Password:</label></td>
            <td><input type="password" v-model="user.password" id="password" required /></td>
          </tr>
  
          <tr>
            <td><label for="confirmPassword">Confirm Password:</label></td>
            <td><input type="password" v-model="confirmPassword" id="confirmPassword" required /></td>
          </tr>
        </table>
  
        <button type="submit">Update User</button>
      </form>
    </div>
  </template>
  
  <script>
 import axios from 'axios';

  export default {
    data() {
      const currentUrl="http://"+window.location.hostname+":7007";

      return {
        user: {
          username: '',
          password: '',
          currentUrl,

        },
        confirmPassword: '',
        passwordsDoNotMatch: false,
      };
    },
    methods: {
      updateUser() {
                // Validate passwords match
                if (this.user.password !== this.confirmPassword) {
                    this.passwordsDoNotMatch = true;
                    return;
                }

                if (this.user.password ==null || this.user.username==null ) {
                    this.passwordsDoNotMatch = true;
                    return;
                }

                const userData = {
                    username: this.user.username,
                    password: this.user.password,
                 };



                // Reset error message
                this.passwordsDoNotMatch = false;

                console.log("Username "+this.user.username+" "+"passowrd "+this.user.password);


                axios.post(this.currentUrl+'/userUpdateOrCreate',userData)
                .then(res=> {
                   console.log("Send Successfully");
                       
                 })
                 .catch(error => {
                    console.error('Error fetching data:', error);
                 });


        
                // Call your update user API endpoint with this.user data
                // Example: axios.put('/api/users', this.user)
                // Handle success and error responses accordingly
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  table {
    width: 100%;
  }
  
  table td {
    padding: 5px;
  }
  </style>
  
  