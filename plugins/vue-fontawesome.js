import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faDiscord, faFileAlt, faTwitter);

Vue.component('font-awesome-icon', FontAwesomeIcon);
