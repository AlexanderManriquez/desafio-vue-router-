<template>
  <div class="container">
    <h1 class="text-center">Producto Destacado</h1>
    <!-- Muestra una card con el producto aleatorio -->
    <Card class="block-center"
      v-if="productoAleatorio"
      :nombre="productoAleatorio.nombre"
      :descripcion="productoAleatorio.descripcion"
      :precio="productoAleatorio.precio"
      :cantidad="productoAleatorio.cantidad"
      :imagen="productoAleatorio.imagen"
    />
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import { productos } from '../router/index.js' // Importar el array de productos

export default {
  name: 'HomeView',
  components: { Card },
  data() {
    return {
      productoAleatorio: null
    }
  },
  created() {
    this.obtenerProductoAleatorio()
  },
  methods: {
    obtenerProductoAleatorio() {
      // Selecciona un producto aleatorio del array importado
      const indiceAleatorio = Math.floor(Math.random() * productos.length)
      this.productoAleatorio = productos[indiceAleatorio]
    }
  }
}
</script>

<style>
 .block-center {
  display: block;
  margin: 0 auto;
 }
</style>