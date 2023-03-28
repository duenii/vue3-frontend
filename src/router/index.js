import { createRouter, createWebHistory } from 'vue-router'

// Import Layouts
import FrontendLayout from '@/layouts/Frontend.vue'
import BackendLayout from '@/layouts/Backend.vue'

// Import Views
// Frontend
import Home from '@/views/frontend/HomeView.vue'
import About from '@/views/frontend/AboutView.vue'
import Service from '@/views/frontend/ServiceView.vue'
import Contact from '@/views/frontend/ContactView.vue'
import Register from '@/views/frontend/RegisterView.vue'
import Login from '@/views/frontend/LoginView.vue'
import ForgotPassword from '@/views/frontend/ForgotPasswordView.vue'
import NotFound404 from '@/views/frontend/NotFound404.vue'
// Backend
import Dashbaord from '@/views/backend/DashboardView.vue'
import Products from '@/views/backend/ProductsView.vue'


// สร้างฟังก์ชันสำหรับเช็ค route ก่อนเรียกใช้งาน (Route Auth Guard)
function authGuard(to, from, next){

  let isAuthenticated = false

  if(localStorage.getItem('user')){
    isAuthenticated = true // ถ้ามีข้อมูล localStorage อยู่
  }else{
    isAuthenticated = false // ถ้าไม่มี localStorage
  }

  if(isAuthenticated){
    next() // อนุญาติให้เข้าสู่ route และโหลด component ที่ต้องการได้
  }else{
    next({name: 'Login'})
  }

}


const routes = [
  {
    path:'/',
    component:FrontendLayout,
    children:[
      {
        path:'',
        name:'Home',
        component:Home
      }
    ],
    meta: {
      title: 'หน้าหลัก'
    }
  },
  {
    path:'/about',
    component:FrontendLayout,
    children:[
      {
        path:'',
        name:'About',
        component:About
      }
    ],
    meta: {
      title: 'เกี่ยวกับเรา'
    
    }
  
  },
  {
    path: '/service',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Service',
        component: Service
      }
    ],
    meta: {
      title: 'บริการของเรา'
    }
  },
  {
    path: '/contact',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Contact',
        component: Contact
      }
    ],
    meta: {
      title: 'ติดต่อเรา'
    }
  },
  {
    path: '/register',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Register',
        component: Register
      }
    ],
    meta: {
      title: 'สมัครสมาชิกใหม่'
    }
    
  },
  {
    path: '/login',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Login',
        component: Login
      }
    ],
    meta: {
      title: 'เข้าสู่ระบบ',
    }
  },
  {
    path: '/forgotpassword',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'ForgotPassword',
        component: ForgotPassword
      }
    ],
    meta: {
      title: 'ลืมรหัสผ่าน'
    }
  },
   // Error 404 
   {
    path: "/:catchAll(.*)",
    component: NotFound404,
    meta: {
      title: '404 ไม่พบหน้านี้',
      description: 'รายละเอียดหน้า 404'
    }
  },

   /** Frontend Route */
   {
    path: '/backend',
    component: BackendLayout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashbaord,
        beforeEnter: authGuard
      }
    ]
  },
  {
    path: '/backend',
    component: BackendLayout,
    children: [
      {
        path: 'products',
        name: 'Products',
        component: Products,
        beforeEnter: authGuard
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
