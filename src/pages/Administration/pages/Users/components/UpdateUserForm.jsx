import { useState, useEffect } from 'react';
import { updateData } from '../../../../../data/api';
// import GenericUserImage from '../../../../../assets/image_not_found.jpg';
import GenericUserImage from '../../../../../assets/image_not_found.jpg';

function UpdateUserForm({ roles, selectedElement }) {
  const [selectedRole, setSelectedRole] = useState(undefined);
  const [selectedState, setSelectedState] = useState(undefined);

  useEffect(() => {
    setSelectedRole(selectedElement?.role?.id);
    setSelectedState(selectedElement?.state);
  }, [selectedElement]);
  
  const updateUser = async e => {
    const formData = new FormData(e.target);
    const id = formData.get('id');
    formData.append('_method', 'put');
    const response = await updateData('user', id, formData);
    window.location.reload();
  };

  return (
    <form
      className="flex flex-col gap-8"
      method="POST"
      encType="multipart/form-data"
      onSubmit={e => {
        e.preventDefault();
        updateUser(e);
      }}
    >
      <div>
        <img
          src={`${
            selectedElement.profile_picture_uri
              ? `http://127.0.0.1:8000/storage/images/${selectedElement?.profile_picture_uri}`
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
          defaultValue={selectedElement?.id}
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
          defaultValue={selectedElement?.name}
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
          defaultValue={selectedElement?.username}
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
          defaultValue={selectedElement?.email}
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
          defaultValue={selectedElement?.password}
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
          value={selectedRole}
          onChange={e => setSelectedRole(e.target.value)}
          className="select"
        >
          {roles.map(role => (
            <option key={role?.id} value={role?.id}>
              {role?.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="file" className="label">
          Foto de perfil:
        </label>
        <input type="file" id="file" name="file" className="" />
      </div>
      <div>
        <label htmlFor="state" className="label">
          Estado:
        </label>
        <select
          type="text"
          id="state"
          name="state"
          value={selectedState}
          onChange={e => setSelectedState(e.target.value)}
          className="select"
        >
          <option value={1}>Activo</option>
          <option value={0}>Inactivo</option>
        </select>
      </div>
      <div>
        <button type="submit" className="btn w-full">
          Actualizar
        </button>
      </div>
    </form>
  );
}

export default UpdateUserForm;
