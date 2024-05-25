import { useState, useEffect } from 'react';
import Modal from '../../../../components/common/Modal';
import CreateMyTicketForm from './components/CreateMyTicketForm';
import { getData } from '../../../../data/api';
import MyTicketsTable from './components/MyTicketsTable';
import ViewMyTicketForm from './components/ViewMyTicketForm';
import pLimit from 'p-limit';
import { GetUserSession } from '../../../../utils/GetUserSession';

const limit = pLimit(1);

const MyTickets = () => {
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
        `ticket/tickets-by-userid/${GetUserSession().id}`,
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
      <h1 className="title">Mis Tickets</h1>
      <button
        className="btn mb-4"
        onClick={() => {
          toggleCreateModalState();
        }}
      >
        Crear Ticket
      </button>
      <MyTicketsTable
        data={data}
        setSelectedElement={setSelectedElement}
        toggleViewModalState={toggleViewModalState}
        toggleUpdateModalState={toggleUpdateModalState}
      />
      <Modal
        modalState={createModalState}
        toggleModalState={toggleCreateModalState}
        title={'Crear Ticket'}
        form={
          <CreateMyTicketForm
            users={users}
            priorities={priorities}
            ticketStates={ticketStates}
            types={types}
            departments={departments}
          />
        }
      />
      <Modal
        modalState={viewModalState}
        toggleModalState={toggleViewModalState}
        title={'Ver Ticket'}
        form={
          <ViewMyTicketForm
            users={users}
            selectedElement={selectedElement}
            toggleModalState={toggleViewModalState}
          />
        }
      />
    </>
  );
};

export default MyTickets;
