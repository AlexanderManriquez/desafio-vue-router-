<template>
    <div class="col-sm-4 col-12 px-5 mb-4">
      <div class="card">
        <img :src="imagen" class="card-img-top" alt="imagen del producto" />
        <div class="card-body">
          <h5 class="card-title fw-bold">{{ nombre }}</h5>
          <p class="card-text">{{ descripcion }}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{{ precio }}</li>
          <li class="list-group-item">{{ cantidad }}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Ver más</a>
          <a href="#" class="card-link">Comprar</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Card",
    props: {
      nombre: String,
      descripcion: String,
      precio: String,
      cantidad: String,
      imagen: String
    }
  }
  </script>
  