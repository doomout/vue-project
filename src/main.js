import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins' //믹스인 추가

const app = createApp(App)
//createApp(App).use(router).mount('#app')
app.use(router)
app.mixin(mixins);
app.mount('#app')