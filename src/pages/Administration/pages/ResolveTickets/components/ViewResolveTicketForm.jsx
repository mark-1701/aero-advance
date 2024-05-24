import ImageNotFound from '../../../../../assets/image_not_found.jpg';

const ViewResolveTicketForm = ({ users, selectedElement, toggleModalState }) => {
  return (
    <form
      className="flex flex-col gap-8"
      method="POST"
      encType="multipart/form-data"
      onSubmit={e => {
        e.preventDefault();
        toggleModalState();
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
        >
          <option>{`${selectedElement?.id} - ${
            users.find(el => el.id === selectedElement?.id)?.name
          }`}</option>
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
        >
          <option>{selectedElement?.priority?.name}</option>
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
          className="select disabled"
        >
          <option>{selectedElement?.ticket_state?.name}</option>
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
        >
          <option>{selectedElement?.type?.name}</option>
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
        >
          <option>{selectedElement?.department?.name}</option>
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
          readOnly
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
          className="input !h-32 disabled"
          defaultValue={selectedElement?.resolution}
          readOnly
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
      </div>
      <div>
        <button type="submit" className="btn w-full">
          Cerrar
        </button>
      </div>
    </form>
  );
};

export default ViewResolveTicketForm;
