import { useState, useEffect } from 'react';
import ImageNotFound from '../../../../../assets/image_not_found.jpg';
import { updateData } from '../../../../../data/api';

const ResolveTicketForm = ({
  users,
  priorities,
  ticketStates,
  types,
  departments,
  selectedElement
}) => {
  const [selectedUsers, setSelectedUsers] = useState(undefined);
  const [selectedPrioritie, setSelectedPrioritie] = useState(undefined);
  const [selectedTicketState, setSelectedTicketState] = useState(undefined);
  const [selectedType, setSelectedType] = useState(undefined);
  const [selectedDepartment, setSelectedDepartment] = useState(undefined);
  const updateTicket = async e => {
    const formData = new FormData(e.target);
    const id = formData.get('id');
    formData.append('_method', 'put');
    const response = await updateData('ticket', id, formData);
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
        updateTicket(e);
      }}
    >
      <div>
        <label htmlFor="id" className="label">
          Id:
        </label>
        <input
          type="text"
          id="id"
          name="id"
          className="input"
          defaultValue={selectedElement?.id}
          readOnly
          required
        />
      </div>
      <div>
        <label htmlFor="user_id" className="label">
          Id de Usuario:
        </label>
        <select
          type="text"
          id="user_id"
          name="user_id"
          className="select"
          value={selectedUsers}
          onChange={e => setSelectedUsers(e.target.value)}
        >
          {users.map(user => (
            <option key={user?.id} value={user?.id}>
              {`${user?.id} - ${user?.name}`}
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
          className="select"
          value={selectedPrioritie}
          onChange={e => setSelectedPrioritie(e.target.value)}
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
          className="select resolve-input"
          value={selectedTicketState}
          onChange={e => setSelectedTicketState(e.target.value)}
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
          className="select"
          value={selectedType}
          onChange={e => setSelectedType(e.target.value)}
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
          className="select"
          value={selectedDepartment}
          onChange={e => setSelectedDepartment(e.target.value)}
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
          defaultValue={selectedElement?.subject}
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
          defaultValue={selectedElement?.description}
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
          className="input !h-32 resolve-input"
          defaultValue={selectedElement?.resolution}
          required
        />
      </div>
      <div>
        <label htmlFor="resolution" className="label">
          Imagen:
        </label>
        <img
          src={`${
            selectedElement?.image_uri
              ? `http://127.0.0.1:8000/storage/images/${selectedElement?.image_uri}`
              : ImageNotFound
          }`}
          alt="Imágen no disponible"
          className="block w-full h-72 mx-auto object-contain rounded-lg bg-gray-100"
        />
        <input type="file" id="file" name="file" className="mt-4" />
      </div>
      <div>
        <button type="submit" className="btn w-full">
          Actualizar
        </button>
      </div>
    </form>
  );
};

export default ResolveTicketForm;
