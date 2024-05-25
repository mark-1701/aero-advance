import { useState, useEffect } from 'react';
import Modal from '../../../../components/common/Modal';
import { getData } from '../../../../data/api';
import ResolveTicketsTable from './components/ResolveTicketsTable';
import ViewResolveTicketForm from './components/ViewResolveTicketForm';
import ResolveTicketForm from './components/ResolveTicketForm';
import pLimit from 'p-limit';
import { GetUserSession } from '../../../../utils/GetUserSession';

const limit = pLimit(1);

const ResolveTickets = () => {
  const [data, setData] = useState([]);
  const [viewModalState, setViewModalState] = useState(false);
  const [createModalState, setCreateModalState] = useState(false);
  const [updateModalState, setUpdateModalState] = useState(false);
  const [users, setUsers] = useState([]);
  const [ticketStates, setTicketStates] = useState([]);
  const [priorities, setPriorities] = useState([]);
  const [types, setTypes] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedElement, setSelectedElement] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const endpoints = [
        `ticket/unescalated-assigned-tickets/${GetUserSession().id}`,
        'user',
        'priority',
        'ticket-state',
        'type',
        'department'
      ];
      const tasks = endpoints.map(endpoint => limit(() => getData(endpoint)));
      const [
        ticketData,
        usersData,
        prioritiesData,
        ticketStatesData,
        typesData,
        departmentsData
      ] = await Promise.all(tasks);

      setData(ticketData);
      setUsers(usersData);
      setPriorities(prioritiesData);
      setTicketStates(ticketStatesData);
      setTypes(typesData);
      setDepartments(departmentsData);
    };
    fetchData();
  }, []);

  const toggleCreateModalState = () =>
    createModalState ? setCreateModalState(false) : setCreateModalState(true);
  const toggleUpdateModalState = () =>
    updateModalState ? setUpdateModalState(false) : setUpdateModalState(true);
  const toggleViewModalState = () =>
    viewModalState ? setViewModalState(false) : setViewModalState(true);

  return (
    <>
      <h1 className="title">Resolver Tickets</h1>
      <ResolveTicketsTable
        data={data}
        setSelectedElement={setSelectedElement}
        toggleViewModalState={toggleViewModalState}
        toggleUpdateModalState={toggleUpdateModalState}
      />
      <Modal
        modalState={viewModalState}
        toggleModalState={toggleViewModalState}
        title={'Ver Ticket'}
        form={
          <ViewResolveTicketForm
            users={users}
            selectedElement={selectedElement}
            toggleModalState={toggleViewModalState}
          />
        }
      />
      <Modal
        modalState={updateModalState}
        toggleModalState={toggleUpdateModalState}
        title={'Actualizar Ticket'}
        form={
          <ResolveTicketForm
            users={users}
            priorities={priorities}
            types={types}
            departments={departments}
            ticketStates={ticketStates}
            selectedElement={selectedElement}
          />
        }
      />
    </>
  );
};

export default ResolveTickets;
