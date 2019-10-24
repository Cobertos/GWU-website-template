import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

config.autoAddCss = false;

library.add(faDiscord, faFileAlt, faTwitter, faEnvelopeOpenText);

Vue.component('font-awesome-icon', FontAwesomeIcon);
