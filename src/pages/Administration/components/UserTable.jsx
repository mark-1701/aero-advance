import { deleteData } from '../../../data/users';

const UserTable = ({ data, setSelectedUser, toggleUpdateUserModalState }) => {
  const deleteUser = async id => {
    const response = await deleteData('user', id);
    window.location.reload();
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>state</th>
            <th>role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.state}</td>
              <td>{user.role.name}</td>
              <td className="flex justify-center items-center gap-1">
                <button
                  className="btn !bg-orange-500"
                  onClick={e => {
                    setSelectedUser(user);
                    toggleUpdateUserModalState();
                  }}
                >
                  edit
                </button>
                <form
                  action="post"
                  onSubmit={e => {
                    e.preventDefault();
                    if (confirm('¿Estas seguro de eliminar este registro?')) {
                      deleteUser(user.id);
                    }
                  }}
                >
                  <button type="submit" className="btn !bg-red-500">
                    remove
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
