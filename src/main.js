import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCar, faDollarSign, faFlag, faGasPump, faThumbsUp, faMapMarkerAlt, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCar, faDollarSign, faFlag, faGasPump, faThumbsUp, faMapMarkerAlt, faPhoneVolume, faEnvelope, faFacebook, faInstagram, faTwitter);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
