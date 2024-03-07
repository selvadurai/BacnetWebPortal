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