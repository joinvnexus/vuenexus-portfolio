 import './assets/main.css'
 import 'font-awesome/css/font-awesome.min.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
 import store from './store';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

const app = createApp(App);

app.use(router);
 app.use(store);

app.mount('#app');

// Initialize AOS
AOS.init({
  offset: 120, // Offset from the original trigger point
  delay: 0,    // Delay in milliseconds
  duration: 400, // Animation duration in milliseconds
  easing: 'ease-in-out', // Easing function
  once: true,  // Whether animation should happen only once
});

