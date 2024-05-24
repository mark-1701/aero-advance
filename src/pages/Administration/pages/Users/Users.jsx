import { useState, useEffect } from 'react';
import UserTable from './components/UserTable';
import Modal from '../../../../components/common/Modal';
import ViewUserForm from './components/ViewUserForm';
import CreateUserForm from './components/CreateUserForm';
import UpdateUserForm from './components/UpdateUserForm';
import { getData } from '../../../../data/api';
import pLimit from 'p-limit';

const limit = pLimit(1);

const Users = () => {
  // hooks
  const [data, setData] = useState([]);
  const [roles, setRoles] = useState([]);
  const [viewModalState, setViewModalState] = useState(false);
  const [createModalState, setCreateModalState] = useState(false);
  const [updateModalState, setUpdateModalState] = useState(false);
  const [selectedElement, setSelectedElement] = useState({});

  // funciones y useEffects
  useEffect(() => {
    const fetchData = async () => {
      const endpoints = ['user', 'role'];
      const tasks = endpoints.map(endpoint => limit(() => getData(endpoint)));
      const [userData, roleData] = await Promise.all(tasks);
      setData(userData);
      setRoles(roleData);
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
    <div>
      <h1 className="title">Tabla Usuarios</h1>
      <button
        className="btn mb-4"
        onClick={() => {
          toggleCreateModalState();
        }}
      >
        Crear Usuario
      </button>
      {/* se pasa el switch para la ventada del Update Modal */}
      <UserTable
        data={data}
        setSelectedElement={setSelectedElement}
        toggleViewModalState={toggleViewModalState}
        toggleUpdateModalState={toggleUpdateModalState}
      />

      {/* Ventanas Modales */}
      <Modal
        modalState={createModalState}
        toggleModalState={toggleCreateModalState}
        title={'Crear Usuario'}
        form={<CreateUserForm roles={roles} />}
      />
      <Modal
        modalState={updateModalState}
        toggleModalState={toggleUpdateModalState}
        title={'Actualizar Usuario'}
        form={
          <UpdateUserForm roles={roles} selectedElement={selectedElement} />
        }
      />
      <Modal
        modalState={viewModalState}
        toggleModalState={toggleViewModalState}
        title={'Ver Usuario'}
        form={
          <ViewUserForm
            roles={roles}
            selectedElement={selectedElement}
            toggleModalState={toggleViewModalState}
          />
        }
      />
    </div>
  );
};

export default Users;
