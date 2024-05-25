import EditIcon from '../../../../../components/common/EditIcon';
import RepairIcon from '../../../../../components/common/RepairIcon';
import EscalationIcon from '../../../../../components/common/EscalationIcon';
import ViewIcon from '../../../../../components/common/ViewIcon';
import { createData } from '../../../../../data/api';

const ResolveTicketsTable = ({
  data,
  setSelectedElement,
  toggleViewModalState,
  toggleUpdateModalState
}) => {
  const escalateTicket = async id => {
    const formData = new FormData();
    formData.append('ticket_id', id);
    formData.append('original_user_id', '1');
    const response = await createData('escalation', formData);
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
                  toggleUpdateModalState();
                }}
              >
                <RepairIcon />
              </button>
              <form
                action="post"
                onSubmit={e => {
                  e.preventDefault();
                  if (confirm('¿Estas seguro de escalar este ticket?')) {
                    escalateTicket(ticket.id);
                  }
                }}
              >
                <button type="submit" className="">
                  <EscalationIcon />
                </button>
              </form>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResolveTicketsTable;
