import DeleteIcon from '../../../../../components/common/DeleteIcon';
import EditIcon from '../../../../../components/common/EditIcon';
import ViewIcon from '../../../../../components/common/ViewIcon';
import { deleteData } from '../../../../../data/api';

const CustomerTable = ({
  data,
  roles,
  setSelectedElement,
  toggleViewModalState,
  toggleUpdateModalState
}) => {
  const deleteCustomer = async id => {
    const response = await deleteData('customer', id);
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
        {data.map(customer => (
          <tr key={customer?.id}>
            <td>{customer?.id}</td>
            <td>{customer?.user?.name}</td>
            <td>{customer?.user?.username}</td>
            <td>{customer?.user?.email}</td>

            <td className="flex justify-center items-center gap-1">
            <button
                className=""
                onClick={e => {
                  setSelectedElement(customer);
                  toggleViewModalState();
                }}
              >
                <ViewIcon />
              </button>
              <button
                className=""
                onClick={e => {
                  setSelectedElement(customer);
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
                    deleteCustomer(customer.id);
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

export default CustomerTable;
