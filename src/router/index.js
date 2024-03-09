import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../stores'; 


const isAuthenticated = () => {
  // Implement your logic to check if the user is logged in
  // For example, check if a user token exists in localStorage or cookies
  //return localStorage.getItem('userSession') !== null;
  
   console.log(store.getters.getSession);
   return store.getters.getSession!==null;
};

const requireAuth = (to, from, next) => {
  if ( isAuthenticated()) {
    // If the user is authenticated, proceed to the requested route
    next();
  } else {
    // If the user is not authenticated, redirect to the login page
    next('/login');
  }
};

const loggedIn = (to, from, next) => {
  if ( isAuthenticated()) {
    // If the user is authenticated, proceed to the requested route
    next('/home');
  } else {
    // If the user is not authenticated, redirect to the login page
    next('/');
  }
};




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/',
      name: '',
      component: () => import('../views/Login.vue'),
      //beforeEnter: loggedIn, 
    },
    


    {
      path: '/home',
      name: 'home',
      component: HomeView,
       beforeEnter: requireAuth ,
    
    },
    

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      beforeEnter:loggedIn

    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      beforeEnter: requireAuth 
    },
    {
      path: '/addTemplate',
      name: 'addTemplate',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AddTemplate.vue'),
      beforeEnter: requireAuth 


    },

    {
      path: '/listTemplateDevices',
      name: 'listTemplateDevices',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TemplateDeviceTable.vue'),
      beforeEnter: requireAuth 


    },
    {
      path: '/addDevice',
      name: 'addDevice',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AddDevice.vue'),
      beforeEnter: requireAuth 

    },

    {
      path: '/listDevices',
      name: 'listDevices',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DeviceList.vue'),
      beforeEnter: requireAuth 


    },
    {
      path: '/bacnetServerSettings',
      name: 'bacnetServerSettings',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BacnetSettings.vue'),
      beforeEnter: requireAuth 

    },
    {
      path: '/broadcastSettings',
      name: 'broadcastSettings',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BacnetBroadcast.vue'),
      beforeEnter: requireAuth  

    },
    {
      path: '/apiToken',
      name: 'apiToken',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DisplayApiToken.vue'),
      beforeEnter: requireAuth 

    },
    {
      path: '/createOrUpdateUser',
      name: 'createOrUpdateUser',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/createOrUpdateUser.vue'),
      beforeEnter: requireAuth  

    },
    {
      path: '/logout',
      name: 'logout',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/logout.vue'),
      beforeEnter: requireAuth  

    }





  ]
})

export default router
