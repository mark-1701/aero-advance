function SystemSideBar({ menuBtn, sideBarLinks }) {
  let responsiveWidthSmall = menuBtn ? 'w-2/3' : 'w-14';
  let responsiveWidthLarge = !menuBtn ? 'sm:w-[300px]' : 'sm:w-14';
  return (
    // block para todas las pantallas y fixed cuando son pantallas pequeñas
    <aside
      className={`flex-none block h-full ${responsiveWidthSmall} transition-all overflow-hidden bg-indigo-600 max-sm:fixed ${responsiveWidthLarge}`}
    >
      <ul className="flex flex-col">{sideBarLinks}</ul>
    </aside>
  );
}

export default SystemSideBar;
