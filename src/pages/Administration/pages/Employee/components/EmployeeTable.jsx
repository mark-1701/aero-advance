import { useEffect } from 'react';
import { deleteData } from '../../../../../data/api';
import DeleteIcon from '../../../../../components/common/DeleteIcon';
import EditIcon from '../../../../../components/common/EditIcon';
import ViewIcon from '../../../../../components/common/ViewIcon';

const EmployeeTable = ({
  data,
  roles,
  setSelectedElement,
  toggleViewModalState,
  toggleUpdateModalState
}) => {
  const deleteEmployee = async id => {
    const response = await deleteData('employee', id);
    window.location.reload();
  };
  return (
    <table className="table columns-4">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>username</th>
          <th>email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(employee => (
          <tr key={employee?.id}>
            <td>{employee?.id}</td>
            <td>{employee?.user?.name}</td>
            <td>{employee?.user?.username}</td>
            <td>{employee?.user?.email}</td>
            <td className="flex justify-center items-center gap-2">
              <button
                className=""
                onClick={e => {
                  setSelectedElement(employee);
                  toggleViewModalState();
                }}
              >
                <ViewIcon />
              </button>
              <button
                className=""
                onClick={e => {
                  setSelectedElement(employee);
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
                    deleteEmployee(employee.id);
                  }
                }}
              >
                <button type="submit" className="0">
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

export default EmployeeTable;
