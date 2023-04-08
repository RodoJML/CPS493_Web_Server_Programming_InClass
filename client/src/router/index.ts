import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsVue from '../views/Product.vue'
import Login from '../views/Login.vue'
import {useSession} from '../model/session'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    {path: '/about', name: 'about', component: () => import('../views/AboutView.vue')},
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    {path: '/products', name: 'products', component: ProductsVue, beforeEnter: secureRoute},
    {path: '/login', name: 'login', component: Login},
    {path: 'admin/products', name: 'admin-products', component: () => import('../views/admin/ProductsList.vue'), beforeEnter: secureRoute},
    {path: '/admin/products/edit/:id?', name: 'admin-products-edit', component: () => import('../views/admin/ProductEdit.vue'), beforeEnter: secureRoute },
  ]
})

export default router

//
function secureRoute(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext){
  const session = useSession();
  // This uses the global information of the active session
  // this information comes from ../model/session.ts

  if(session.user){
    next()
    // 
  } else {
    next('/login')
  }
}