import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const productos =  [
  {
    nombre: 'Desayuno',
    descripcion: 'Un desayuno rico y nutritivo para comenzar bien el día.',
    precio: '$4000',
    cantidad: 'Para 2 personas',
    imagen: '../src/assets/img/desayunos.jpg'
  },
  {
    nombre: 'Dulces',
    descripcion: 'Variedad de dulces para disfrutar con quien tu quieras.',
    precio: '$3500',
    cantidad: 'Para 2 personas',
    imagen: '../src/assets/img/dulces.jpg'
  },
  {
    nombre: 'Colaciones',
    descripcion: 'Una colación para esos momentos en que el hambre no te abandona.',
    precio: '$2500',
    cantidad: 'Para 1 persona',
    imagen: '../src/assets/img/colaciones.jpg'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/productos',
      name: 'productos',
      component: () => import('../views/ProductosView.vue'),
      props: {productos}
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue')
    }
  ]
})

export default router
