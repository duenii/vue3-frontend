import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

// Import Tailwind CSS มาใช้งาน
import '@/styles/ThemeTailwind.css'

// sweet alert
import VueSweetalert2 from "vue-sweetalert2"
import 'sweetalert2/dist/sweetalert2.min.css'


import '@ocrv/vue-tailwind-pagination/styles'
import VueTailwindPagination from '@ocrv/vue-tailwind-pagination'

// สร้าง constant ของ vue
const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueSweetalert2)
app.use(VueTailwindPagination)

app.mount("#app");
