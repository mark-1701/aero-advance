const Modal = ({ modalState, toggleModalState, title, form }) => {
  return (
    <div
      className={`modal ${!modalState ? '!opacity-0 !invisible' : ''}`}
      onClick={e => {
        if (e.target === e.currentTarget) toggleModalState();
      }}
    >
      <button
        className="fixed top-8 right-8 "
        onClick={e => toggleModalState()}
      >
        <span className="material-symbols-outlined text-white">close</span>
      </button>
      <div className="w-full max-h-full p-8 rounded bg-white sm:w-2/5 sm:min-w-96 overflow-auto">
        <h1 className="title !mb-8 text-center">{title}</h1>
        {/* <UserForm /> */}
        {form}
      </div>
    </div>
  );
};

export default Modal;
