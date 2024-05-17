import React from 'react';

function ContactForm() {
  return (
    <form className="flex flex-col gap-8 sm:w-2/3">
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          className="input"
        />
      </div>
      <div>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="input"
        />
      </div>
      <div>
        <label htmlFor="comentario">Comentario:</label>
        <textarea
          id="comentario"
          name="comentario"
          rows="4"
          required
          className="w-full mb-8 p-2 resize-none"
        ></textarea>
      </div>
      <div>
        <button type="submit" className="btn float-right">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
