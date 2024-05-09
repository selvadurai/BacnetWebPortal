/*
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
*/


import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";


const store = createStore({
  state: {
    // Your state properties go here
    userSession:null,



  },
  mutations: {
    // Your mutations go here
    setUserSession(state,newSession){
        state.userSession=newSession;
    },
    removeUserSession(state){
       state.userSession=null;
    },
  },
  actions: {
    // Your actions go here


     updateUserSession({ commit }, newValue) {
      // You can perform additional logic here if needed
      commit('setUserSession', newValue);
     },
     killUserSession({ commit }) {
        // You can perform additional logic here if needed
        commit('setUserSession', null);
     }


  },
  getters: {

    getSession:(state)=>{
        return state.userSession;
    },

  },

  plugins: [createPersistedState()]


});


export default store;