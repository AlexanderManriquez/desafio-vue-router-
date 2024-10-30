<template>
    <div class="container h-100 bg-danger">
        <form class="contact h-100 d-flex flex-column ">
            <label for="date">Fecha</label>
            <input type="date" name="date" id="date">
            <label for="name">Nombre</label>
            <input type="text" name="name" id="name">
            <label for="email">Correo electrónico</label>
            <input type="email" name="email" id="email">
            <label for="message">Dejanos tu mensaje:</label>
            <textarea name="message" id="message" cols="30"></textarea>
        </form>
    </div>
</template>