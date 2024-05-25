import { useState, useEffect } from 'react';
import Modal from '../../../../components/common/Modal';
import { getData } from '../../../../data/api';
import AvailableTicketsTable from './components/AvailableTicketsTable';
import PreviewAvailableTicketForm from './components/PreviewAvailableTicketForm';
import pLimit from 'p-limit';

const limit = pLimit(1);

const AvailableTickets = () => {
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
        'ticket/available-tickets',
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
      <h1 className="title">Tickets Disponibles</h1>
      <AvailableTicketsTable
        data={data}
        setSelectedElement={setSelectedElement}
        toggleViewModalState={toggleViewModalState}
        toggleUpdateModalState={toggleUpdateModalState}
      />
      <Modal
        modalState={viewModalState}
        toggleModalState={toggleViewModalState}
        title={'Revisar Ticket'}
        form={
          <PreviewAvailableTicketForm
            users={users}
            selectedElement={selectedElement}
            toggleModalState={toggleViewModalState}
          />
        }
      />
    </>
  );
};

export default AvailableTickets;
