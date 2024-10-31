<template>
  <div class="container bg-danger-subtle rounded-4 w-50 mt-5 py-2">
    <form
      class="contact d-flex flex-column my-2 py-1 text-center block-center w-50"
    >
      <label for="date">Fecha</label>
      <input
        type="date"
        class="form-control"
        name="date"
        id="date"
        min="2024-10-29"
      />
      <label for="name">Nombre</label>
      <input type="text" class="form-control" name="name" id="name" />
      <label for="email">Correo electrónico</label>
      <input type="email" class="form-control" name="email" id="email" />
      <label for="message">Dejanos tu mensaje:</label>
      <textarea
        name="message"
        class="form-control"
        id="message"
        cols="30"
      ></textarea>
      <button type="submit" class="btn btn-outline-primary mt-3 w-30">
        Enviar
      </button>
    </form>
  </div>

  <button class="btn btn-outline-primary my-3 block-center">
    <RouterLink to="/">Volver al Inicio</RouterLink>
  </button>
</template>
