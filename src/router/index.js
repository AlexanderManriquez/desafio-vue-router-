import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const productos =  [
  {
    nombre: 'Desayuno',
    descripcion: 'Un desayuno rico y nutritivo para comenzar bien el día.',
    precio: '$4000',
    cantidad: 'Para 2 personas',
    imagen: 'https://comedera.com/wp-content/uploads/sites/9/2022/12/Desayono-americano-shutterstock_2120331371.jpg'
  },
  {
    nombre: 'Dulces',
    descripcion: 'Variedad de dulces para disfrutar con quien tu quieras.',
    precio: '$3500',
    cantidad: 'Para 2 personas',
    imagen: 'https://media-front.elmostrador.cl/2022/06/foto-scaled-1-700x467.jpg'
  },
  {
    nombre: 'Colaciones',
    descripcion: 'Una colación para esos momentos en que el hambre no te abandona.',
    precio: '$2500',
    cantidad: 'Para 1 persona',
    imagen: 'https://www.manquecura.cl/wp-content/uploads/sites/14/2017/12/MINUTA-COLACIONES.jpg'
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
