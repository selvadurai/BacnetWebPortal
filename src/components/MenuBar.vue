<!-- TopMenu.vue -->
<!-- TopMenu.vue -->


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



  <div class="top-menu">
    <ul>
      <li><router-link to="/home">Home</router-link></li>




      <li>
        <router-link to="/listTemplateDevices">Templates</router-link>
        <ul class="submenu">
          <li><router-link to="/addTemplate"> Add Template</router-link></li>
          <!-- Add more submenu items as needed -->
        </ul>
      </li>


        <li>
        <router-link to="/listDevices">Devices</router-link>
        <ul class="submenu">
          <li><router-link to="/addDevice"> Add Device</router-link></li>
          <!-- Add more submenu items as needed -->
        </ul>
      </li>


        <li>
          <router-link to="/bacnetServerSettings">Bacnet Server Settings</router-link>
           <ul class="submenu">
              <li><router-link to="/broadcastSettings"> Bacnet Objects Broadcast Settings</router-link></li>
              <br>
              <li><router-link to="/apiToken"> API Token</router-link></li>

               <!-- Add more submenu items as needed -->
            </ul>
      </li>

      <li><router-link to="/createOrUpdateUser">Edit User</router-link></li>


      <li><router-link to="/logout"> Log Out</router-link></li>




      </ul>





    </div>


</template>

<script>

export default {
  data() {
    return {
      hasUserSession: false,
    };
  },
  created() {
    this.checkUserSession();
  },
  methods: {
    checkUserSession() {
      const userSession=localStorage.getItem('userSession') || 'No data found';
       this.hasUserSession = true;

    },
  },
};
</script>






<style scoped>
.top-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #35424a;
  padding: 10px;
  z-index: 1000;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
  margin-right: 20px;
}

a {
  text-decoration: none;
  color: white;
}

/* Style for the submenu */
.submenu {
  display: none;
  position: absolute;
  background-color: #35424a;
  padding: 10px;
  z-index: 1001;
}

/* Show submenu on hover */
li:hover .submenu {
  display: block;
}
</style>
