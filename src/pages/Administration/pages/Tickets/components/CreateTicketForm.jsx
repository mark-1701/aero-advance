import { useState, useEffect } from 'react';
import { createData } from '../../../../../data/api';
const CreateTicketForm = ({
  customers,
  priorities,
  ticketStates,
  types,
  departments
}) => {
  const createTicket = async e => {
    const formData = new FormData(e.target);
    const response = createData('ticket', formData);
    console.log(response);
    window.location.reload();
  };
  return (
    <form
      className="flex flex-col gap-8"
      method="POST"
      encType="multipart/form-data"
      onSubmit={e => {
        e.preventDefault();
        createTicket(e);
      }}
    >
      <div>
        <label htmlFor="customer_id" className="label">
          Id de Cliente:
        </label>
        <select
          type="text"
          id="customer_id"
          name="customer_id"
          className="w-full h-8 rounded border-2 border-gray-200"
        >
          {customers.map(customer => (
            <option key={customer?.id} value={customer?.id}>
              {`${customer?.id} - ${customer?.user?.name}`}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="priority_id" className="label">
          Prioridad:
        </label>
        <select
          type="text"
          id="priority_id"
          name="priority_id"
          className="w-full h-8 rounded border-2 border-gray-200"
        >
          {priorities.map(priorities => (
            <option key={priorities?.id} value={priorities?.id}>
              {priorities?.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="ticket_state_id" className="label">
          Estado:
        </label>
        <select
          type="text"
          id="ticket_state_id"
          name="ticket_state_id"
          className="w-full h-8 rounded border-2 border-gray-200"
        >
          {ticketStates.map(ticketState => (
            <option key={ticketState?.id} value={ticketState?.id}>
              {ticketState?.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="type_id" className="label">
          Tipo:
        </label>
        <select
          type="text"
          id="type_id"
          name="type_id"
          className="w-full h-8 rounded border-2 border-gray-200"
        >
          {types.map(type => (
            <option key={type?.id} value={type?.id}>
              {type?.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="department_id" className="label">
          Departamento:
        </label>
        <select
          type="text"
          id="department_id"
          name="department_id"
          className="w-full h-8 rounded border-2 border-gray-200"
        >
          {departments.map(department => (
            <option key={department?.id} value={department?.id}>
              {department?.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="subject" className="label">
          Asunto:
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="input"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="label">
          Descripción:
        </label>
        <textarea
          type="text"
          id="description"
          name="description"
          className="input !h-32"
          required
        />
      </div>
      <div>
        <label htmlFor="resolution" className="label">
          Resolusión:
        </label>
        <textarea
          type="text"
          id="resolution"
          name="resolution"
          className="input !h-32"
          required
        />
      </div>
      <div>
        <label htmlFor="resolution" className="label">
          Fotografía del problema:
        </label>
        <input type="file" id="file" name="file" className="" />
      </div>
      <div>
        <button type="submit" className="btn w-full">
          Crear
        </button>
      </div>
    </form>
  );
};

export default CreateTicketForm;
