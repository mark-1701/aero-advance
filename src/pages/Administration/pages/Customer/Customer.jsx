import { useState, useEffect } from 'react';
import Modal from '../../../../components/common/Modal';
import CustomerTable from './components/CustomerTable';
import { getData } from '../../../../data/api';
import ViewCustomerForm from './components/ViewCustomerForm';
import CreateCustomerForm from './components/CreateCustomerForm';
import UpdateCustomerForm from './components/UpdateCustomerForm';

const Customer = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [viewModalState, setViewModalState] = useState(false);
  const [createModalState, setCreateModalState] = useState(false);
  const [updateModalState, setUpdateModalState] = useState(false);
  const [selectedElement, setSelectedElement] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const [customerData, userData, roleData] = await Promise.all([
        getData('customer'),
        getData('user/not-customers-or-employees'),
        getData('role')
      ]);
      setData(customerData);
      setUsers(userData);
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
    <>
      <h1 className="title">Clientes</h1>
      <button
        className="btn mb-4"
        onClick={() => {
          toggleCreateModalState();
        }}
      >
        Crear Clientes
      </button>
      <CustomerTable
        data={data}
        roles={roles}
        setSelectedElement={setSelectedElement}
        toggleViewModalState={toggleViewModalState}
        toggleUpdateModalState={toggleUpdateModalState}
      />
      <Modal
        modalState={createModalState}
        toggleModalState={toggleCreateModalState}
        title={'Crear Cliente'}
        form={<CreateCustomerForm users={users} />}
      />
      <Modal
        modalState={updateModalState}
        toggleModalState={toggleUpdateModalState}
        title={'Actualizar Cliente'}
        form={
          <UpdateCustomerForm roles={roles} selectedElement={selectedElement} />
        }
      />
      <Modal
        modalState={viewModalState}
        toggleModalState={toggleViewModalState}
        title={'Ver Usuario'}
        form={
          <ViewCustomerForm
            roles={roles}
            selectedElement={selectedElement}
            toggleModalState={toggleViewModalState}
          />
        }
      />
    </>
  );
};

export default Customer;
