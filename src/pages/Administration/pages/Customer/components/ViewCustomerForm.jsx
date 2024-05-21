import GenericUserImage from '../../../../../assets/image_not_found.jpg';
const ViewCustomerForm = ({ roles, selectedElement, toggleModalState }) => {
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
        <img
          src={`${
            selectedElement?.user?.profile_picture_uri
              ? `http://127.0.0.1:8000/storage/images/${selectedElement?.user?.profile_picture_uri}`
              : GenericUserImage
          }`}
          alt="Imágen no disponible"
          className="block w-32 h-32 mx-auto object-cover rounded-full "
        />
      </div>
      <div>
        <label htmlFor="id" className="label">
          Id:
        </label>
        <input
          type="text"
          id="id"
          name="id"
          className="input"
          defaultValue={selectedElement?.user?.id}
          readOnly
          required
        />
      </div>
      <div>
        <label htmlFor="name" className="label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="input"
          defaultValue={selectedElement?.user?.name}
          readOnly
          required
        />
      </div>
      <div>
        <label htmlFor="username" className="label">
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="input"
          defaultValue={selectedElement?.user?.username}
          readOnly
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="input"
          defaultValue={selectedElement?.user?.email}
          readOnly
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="label">
          Contraseña:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="input"
          defaultValue={selectedElement?.user?.password}
          readOnly
          required
        />
      </div>
      <div>
        <label htmlFor="role_id" className="label">
          Role:
        </label>
        <select
          id="role_id"
          name="role_id"
          className="w-full h-8 rounded border-2 border-gray-200"
        >
          <option>{roles.find(el => el.id === selectedElement?.user?.role_id)?.name}</option>
        </select>
      </div>
      <div>
        <label htmlFor="state" className="label">
          Estado:
        </label>
        <select
          type="text"
          id="state"
          name="state"
          className="w-full h-8 rounded border-2 border-gray-200"
        >
          <option>{selectedElement?.user?.state ? 'Activo' : 'Inactivo'}</option>
        </select>
      </div>
      <div>
        <button type="submit" className="btn w-full">
          Cerrar
        </button>
      </div>
    </form>
  );
};

export default ViewCustomerForm;
