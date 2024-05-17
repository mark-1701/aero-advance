import { createData } from '../../../../../data/users';

function CreateUserForm({ roles }) {
  const createUser = async e => {
    // const formData = new FormData();
    // formData.append('name', e.target.name.value);
    // formData.append('username', e.target.username.value);
    // formData.append('email', e.target.email.value);
    // formData.append('password', e.target.password.value);
    // formData.append('file', e.target.file.files[0]);
    // formData.append('role_id', e.target.role_id.value);
    const formData = new FormData(e.target);
    console.log(formData.get('role_id'));
    const resopnse = createData('user', formData);
    window.location.reload();
  };

  // console.log(roles)

  return (
    <form
      className="flex flex-col gap-8"
      method="POST"
      encType="multipart/form-data"
      onSubmit={e => {
        e.preventDefault();
        createUser(e);
      }}
    >
      <div>
        <label htmlFor="name" className="label">
          Name:
        </label>
        <input type="text" id="name" name="name" required className="input" />
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
          className="w-full h-8 rounded border-2 border-gray-200"
        >
          {roles.map(role => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="file" className="label">
          Foto de perfil:
        </label>
        <input type="file" id="file" name="file" required className="" />
      </div>
      <div>
        <button type="submit" className="btn w-full">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default CreateUserForm;
