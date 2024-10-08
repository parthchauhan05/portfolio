import { createApp } from 'vue'
import { definePreset } from '@primevue/themes';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import './style.css'
import App from './App.vue'

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#e6eef5',
            100: '#ccddeb',
            200: '#99bbd7',
            300: '#6798c2',
            400: '#1A65A4',
            500: '#01549A',
            600: '#014c8b',
            700: '#013778',
            800: '#012c60',
            900: '#00215D',
            950: '#001e54'
        }
    }
}); 

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: MyPreset,
        options: {
            darkModeSelector: '[data-theme="dark"]',
        }
    },
    ripple: true,
    zIndex: {
        modal: 1100,        //dialog, drawer
        overlay: 1000,      //select, popover
        menu: 1000,         //overlay menus
        tooltip: 1100       //tooltip
    }
});
app.mount('#app')