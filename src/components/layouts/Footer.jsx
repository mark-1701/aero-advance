const Footer = () => {
  return (
    <div className="flex flex-col justify-between gap-4 h-56 p-14 bg-zinc-800">
      <ul className='flex justify-center gap-2'>
        <li><a href="" className='text-xs text-white sm:text-base'>Inicio</a></li>
        <p className='text-white'>|</p>
        <li><a href="" className='text-xs text-white sm:text-base'>Nostros</a></li>
        <p className='text-white'>|</p>
        <li><a href="" className='text-xs text-white sm:text-base'>Contacto</a></li>
        <p className='text-white'>|</p>
        <li><a href="" className='text-xs text-white sm:text-base'>Terminos y Condiciones</a></li>
      </ul>
      <p className='text-xs text-center text-white sm:text-base'>&copy; 2024 Mi Empresa S.A.</p>
    </div>
  );
};

export default Footer;
