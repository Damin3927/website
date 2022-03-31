import { boot } from 'quasar/wrappers';
import VuePageTransition from 'vue-page-transition';

export default boot(({ app }) => {
  app.use(VuePageTransition);
});
