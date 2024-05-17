function SystemNavBar({ title, menuBtn, setMenuBtn }) {
  function handleMenu() {
    menuBtn ? setMenuBtn(false) : setMenuBtn(true);
  }
  return (
    <div className="flex items-center gap-4 w-full h-20 shadow-md bg-gray-100">
      <button onClick={handleMenu}>
        <span className="material-symbols-outlined flex justify-center items-center w-14 h-14 text-gray-700">
          menu
        </span>
      </button>
      <h1>{title}</h1>
    </div>
  );
}

export default SystemNavBar;
