import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCar, faDollarSign, faFlag, faGasPump, faThumbsUp, faMapMarkerAlt, faPhoneVolume, faEnvelope, faCheck } from '@fortawesome/free-solid-svg-icons'; // Aggiunta l'icona faCheck
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCar, faDollarSign, faFlag, faGasPump, faThumbsUp, faMapMarkerAlt, faPhoneVolume, faEnvelope, faCheck, faFacebook, faInstagram, faTwitter); // Aggiunta l'icona faCheck alla libreria

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
