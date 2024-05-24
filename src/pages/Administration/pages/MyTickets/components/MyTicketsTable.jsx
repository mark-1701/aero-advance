import DeleteIcon from '../../../../../components/common/DeleteIcon';
import EditIcon from '../../../../../components/common/EditIcon';
import ViewIcon from '../../../../../components/common/ViewIcon';
import { deleteData } from '../../../../../data/api';

const MyTicketsTable = ({
  data,
  setSelectedElement,
  toggleViewModalState,
  toggleUpdateModalState
}) => {
  const deleteTicket = async id => {
    const response = await deleteData('ticket', id);
    window.location.reload();
  };
  return (
    <table className="table columns-5">
      <thead>
        <tr>
          <th>id</th>
          <th>Asunto</th>
          <th>Prioridad</th>
          <th>Tipo</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map(ticket => (
          <tr key={ticket?.id}>
            <td>{ticket?.id}</td>
            <td>{ticket?.subject}</td>
            <td>{ticket?.priority?.name}</td>
            <td>{ticket?.type?.name}</td>
            <td>{ticket?.ticket_state?.name}</td>
            <td className="flex justify-center items-center gap-2">
              <button
                className=""
                onClick={e => {
                  setSelectedElement(ticket);
                  toggleViewModalState();
                }}
              >
                <ViewIcon />
              </button>
              <button
                className=""
                onClick={e => {
                  setSelectedElement(ticket);
                  confirm('Aún no es posible editar tickets');
                  // toggleUpdateModalState();
                }}
              >
                <EditIcon />
              </button>
              <form
                action="post"
                onSubmit={e => {
                  e.preventDefault();
                  confirm('Aún no es posible eliminar tickets');
                  // if (confirm('¿Estas seguro de eliminar este registro?')) {
                  //   deleteTicket(ticket.id);
                  // }
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

export default MyTicketsTable;
