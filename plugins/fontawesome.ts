import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faTwitter, faDiscord, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faGithub, faTwitter, faDiscord, faLinkedin, faCodepen, faEnvelope, faBars);
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
