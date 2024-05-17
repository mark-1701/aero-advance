import { useState, useEffect } from 'react';
import { updateData } from '../../../../../data/users';
import GenericUserImage from '../../../../../assets/generic_user.webp';

function UpdateUserForm({ roles, selectedUser }) {
  const [selectedRole, setSelectedRole] = useState(undefined);
  const [selectedState, setSelectedState] = useState(undefined);
  useEffect(() => {
    setSelectedRole(selectedUser?.role?.id);
    setSelectedState(selectedUser?.state);
  }, [selectedUser]);
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
            selectedUser.profile_picture_uri
              ? `http://127.0.0.1:8000/storage/images/${selectedUser.profile_picture_uri}`
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
          defaultValue={selectedUser?.id}
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
          defaultValue={selectedUser?.name}
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
          defaultValue={selectedUser?.username}
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
          defaultValue={selectedUser?.email}
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
          defaultValue={selectedUser?.password}
          required
        />
      </div>
      <div>
        <label htmlFor="role_id" className="label">
          Role:
        </label>
        <select
          name="role_id"
          id="role_id"
          value={selectedRole}
          onChange={e => setSelectedRole(e.target.value)}
          className="w-full h-8 rounded border-2 border-gray-200"
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
          className="w-full h-8 rounded border-2 border-gray-200"
        >
          <option value={1}>Activo</option>
          <option value={0}>Inactivo</option>
        </select>
      </div>
      <div>
        <button type="submit" className="btn w-full">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default UpdateUserForm;
