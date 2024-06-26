import { useState, useEffect } from 'react';
import Modal from '../../../../components/common/Modal';
import TicketTable from './components/TicketTable';
import CreateTicketForm from './components/CreateTicketForm';
import UpdateTicketForm from './components/UpdateTicketForm';
import { getData } from '../../../../data/api';
import ViewTicketForm from './components/ViewTicketForm';
import pLimit from 'p-limit';

const limit = pLimit(1);

const Tickets = () => {
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
        'ticket',
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
      <h1 className="title">Tabla Tickets</h1>
      <button
        className="btn mb-4"
        onClick={() => {
          toggleCreateModalState();
        }}
      >
        Crear Ticket
      </button>
      <TicketTable
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
          <CreateTicketForm
            users={users}
            priorities={priorities}
            ticketStates={ticketStates}
            types={types}
            departments={departments}
          />
        }
      />
      <Modal
        modalState={updateModalState}
        toggleModalState={toggleUpdateModalState}
        title={'Actualizar Ticket'}
        form={
          <UpdateTicketForm
            users={users}
            priorities={priorities}
            types={types}
            departments={departments}
            ticketStates={ticketStates}
            selectedElement={selectedElement}
          />
        }
      />
      <Modal
        modalState={viewModalState}
        toggleModalState={toggleViewModalState}
        title={'Ver Ticket'}
        form={
          <ViewTicketForm
            users={users}
            selectedElement={selectedElement}
            toggleModalState={toggleViewModalState}
          />
        }
      />
    </>
  );
};

export default Tickets;
