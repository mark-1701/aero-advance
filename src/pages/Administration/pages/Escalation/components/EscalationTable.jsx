import DeleteIcon from '../../../../../components/common/DeleteIcon';
import EditIcon from '../../../../../components/common/EditIcon';
import RepairIcon from '../../../../../components/common/RepairIcon';
import ViewIcon from '../../../../../components/common/ViewIcon';

const EscalationTable = ({
  data,
  setSelectedElement,
  toggleViewModalState,
  toggleUpdateModalState
}) => {
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
                  toggleUpdateModalState();
                }}
              >
                <RepairIcon />
              </button>
              <form
                action="post"
                onSubmit={e => {
                  e.preventDefault();
                  if (confirm('Aún no es posible elimianr escalaciones')) {
                    // deleteTicket(ticket.id);
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

export default EscalationTable;
