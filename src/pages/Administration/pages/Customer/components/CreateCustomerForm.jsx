import { createData } from '../../../../../data/api';
const CreateCustomerForm = ({ users }) => {
  const createCustomer = async e => {
    const formData = new FormData(e.target);
    const response = createData('customer', formData);
    window.location.reload();
  };
  return (
    <form
      className="flex flex-col gap-8"
      method="POST"
      encType="multipart/form-data"
      onSubmit={e => {
        e.preventDefault();
        createCustomer(e);
      }}
    >
      <div>
        <label htmlFor="user_id" className="label">
          Id del Usuario:
        </label>
        <select
          type="text"
          id="user_id"
          name="user_id"
          className="w-full h-8 rounded border-2 border-gray-200"
        >
          {users.map(user => (
            <option key={user?.id} value={user?.id}>
              {`${user?.id} - ${user?.name}`}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button type="submit" className="btn w-full">
          Crear
        </button>
      </div>
    </form>
  );
};

export default CreateCustomerForm;
