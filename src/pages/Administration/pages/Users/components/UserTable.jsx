import EditIcon from '../../../../../components/common/EditIcon';
import DeleteIcon from '../../../../../components/common/DeleteIcon';
import { deleteData } from '../../../../../data/api';
import ViewIcon from '../../../../../components/common/ViewIcon';

const UserTable = ({
  data,
  setSelectedElement,
  toggleViewModalState,
  toggleUpdateModalState
}) => {
  const deleteUser = async id => {
    const response = await deleteData('user', id);
    window.location.reload();
  };

  return (
    <table className="table columns-5">
      <thead>
        <tr>
          <th>id</th>
          <th>Nombre</th>
          <th>Username</th>
          <th>Correo</th>
          <th>role</th>
          {/* 
          <th>state</th> */}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(user => (
          <tr key={user?.id}>
            <td>{user?.id}</td>
            <td>{user?.name}</td>
            <td>{user?.username}</td>
            <td>{user?.email}</td>
            <td>{user?.role?.name}</td>
            {/* 
            <td>{user?.state}</td> */}
            <td className="flex justify-center items-center gap-2">
              <button
                className=""
                onClick={e => {
                  setSelectedElement(user);
                  toggleViewModalState();
                }}
              >
                <ViewIcon />
              </button>
              <button
                className=""
                onClick={e => {
                  setSelectedElement(user);
                  toggleUpdateModalState();
                }}
              >
                <EditIcon />
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
                <button type="submit" className="">
                  <DeleteIcon />
                </button>
              </form>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
