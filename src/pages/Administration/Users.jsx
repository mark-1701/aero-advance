import { useState, useEffect } from 'react';
import UserTable from './components/UserTable';
import Modal from '../../components/Modal';
import CreateUserForm from './components/CreateUserForm';
import UpdateUserForm from './components/UpdateUserForm';
import { getData } from '../../data/users';

const Users = () => {
  // hooks
  const [data, setData] = useState([]);
  const [createUserModalState, setCreateUserModalState] = useState(false);
  const [updateUserModalState, setUpdateUserModalState] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [roles, setRoles] = useState([]);

  // funciones y useEffects
  const toggleCreateUserModalState = () => createUserModalState ? setCreateUserModalState(false) : setCreateUserModalState(true);
  const toggleUpdateUserModalState = () => updateUserModalState ? setUpdateUserModalState(false) : setUpdateUserModalState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [userData, roleData] = await Promise.all([
        getData('user'),
        getData('role')
      ]);
      setData(userData);
      setRoles(roleData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="title">Tabla Usuarios</h1>
      <button
        className="btn mb-4"
        onClick={() => {
          toggleCreateUserModalState();
        }}
      >
        Crear Usuario
      </button>
      {/* se pasa el switch para la ventada del Update Modal */}
      <UserTable
        data={data}
        setSelectedUser={setSelectedUser}
        toggleUpdateUserModalState={toggleUpdateUserModalState}
      />

      {/* Ventanas Modales */}
      <Modal
        modalState={createUserModalState}
        toggleModalState={toggleCreateUserModalState}
        title={'Crear Usuario'}
        form={<CreateUserForm roles={roles} />}
      />
      <Modal
        modalState={updateUserModalState}
        toggleModalState={toggleUpdateUserModalState}
        title={'Actualizar Usuario'}
        form={<UpdateUserForm roles={roles} selectedUser={selectedUser} />}
      />
    </div>
  );
};

export default Users;
