import DeleteIcon from '../../../../../components/common/DeleteIcon';
import EditIcon from '../../../../../components/common/EditIcon';
import PreviewIcon from '../../../../../components/common/PreviewIcon';
import { deleteData } from '../../../../../data/api';

const AvailableTicketsTable = ({
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
                <PreviewIcon />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AvailableTicketsTable;
