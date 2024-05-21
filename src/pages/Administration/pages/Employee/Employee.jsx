import { useState, useEffect } from 'react';
import Modal from '../../../../components/common/Modal';
import EmployeeTable from './components/EmployeeTable';
import ViewEmployeeForm from './components/ViewEmployeeForm';
import CreateEmployeeForm from './components/CreateEmployeeForm';
import UpdateEmployeeForm from './components/UpdateEmployeeForm';
import { getData } from '../../../../data/api';

const Employee = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [viewModalState, setViewModalState] = useState(false);
  const [createModalState, setCreateModalState] = useState(false);
  const [updateModalState, setUpdateModalState] = useState(false);
  const [selectedElement, setSelectedElement] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const [employeeData, userData, roleData] = await Promise.all([
        getData('employee'),
        getData('user/not-customers-or-employees'),
        getData('role')
      ]);
      setData(employeeData);
      setRoles(roleData);
      setUsers(userData);
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
      <h1 className="title">Tabla Empleados</h1>
      <button
        className="btn mb-4"
        onClick={() => {
          toggleCreateModalState();
        }}
      >
        Crear Empleado
      </button>
      <EmployeeTable
        data={data}
        roles={roles}
        setSelectedElement={setSelectedElement}
        toggleViewModalState={toggleViewModalState}
        toggleUpdateModalState={toggleUpdateModalState}
      />
      <Modal
        modalState={createModalState}
        toggleModalState={toggleCreateModalState}
        title={'Crear Empleado'}
        form={<CreateEmployeeForm users={users} />}
      />
      <Modal
        modalState={updateModalState}
        toggleModalState={toggleUpdateModalState}
        title={'Actualizar Empleado'}
        form={
          <UpdateEmployeeForm
            // users={users}
            // priorities={priorities}
            // types={types}
            // departments={departments}
            // ticketStates={ticketStates}
            roles={roles}
            selectedElement={selectedElement}
          />
        }
      />
      <Modal
        modalState={viewModalState}
        toggleModalState={toggleViewModalState}
        title={'Ver Usuario'}
        form={
          <ViewEmployeeForm
            roles={roles}
            selectedElement={selectedElement}
            toggleModalState={toggleViewModalState}
          />
        }
      />
    </>
  );
};

export default Employee;
