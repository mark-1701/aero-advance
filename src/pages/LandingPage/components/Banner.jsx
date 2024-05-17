import React from 'react';
import BannerImage from '/src/assets/airplane.jpg';

function Banner() {
  return (
    <div className="h-[24rem] mb-8 bg-gray-200 sm:h-[32rem] sm:mb-14">
      <div className="grid grid-rows-2 grid-cols-1 gap-0 h-full sm:grid-cols-2 sm:grid-rows-1">
        <div className="flex justify-center items-center p-8 sm:p-14">
          <h1 className="sm:text-xl">
            Transportes Pesados Guatemala es una empresa líder en el transporte
            de carga pesada en el territorio guatemalteco. Con una trayectoria
            de excelencia y compromiso.
          </h1>
        </div>
        <div
          style={{ backgroundImage: `url(${BannerImage})` }}
          className="h-full w-full bg-cover bg-center"
        ></div>
      </div>
    </div>
  );
}

export default Banner;
