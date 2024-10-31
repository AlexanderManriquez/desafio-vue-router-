<template>
  <div class="container">
    <h1 class="text-center my-2">Nuestros Productos</h1>
    <div class="row">
      <!-- Usamos v-for para iterar sobre cada producto -->
      <Card
        v-for="(producto, index) in productos"
        :key="index"
        :nombre="producto.nombre"
        :descripcion="producto.descripcion"
        :precio="producto.precio"
        :cantidad="producto.cantidad"
        :imagen="producto.imagen"
      />
    </div>
  </div>

  <button class="btn btn-outline-primary my-3 block-center">
    <RouterLink to="/">Volver al Inicio</RouterLink>
  </button>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "ProductosView",
  components: { Card },
  props: {
    productos: {
      type: Array,
      required: true,
    },
  },
};
</script>
