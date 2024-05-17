import React from 'react';
import Destination from './Destination';
import volvo from '/src/assets/cities/city3.jpg';
import scania from '/src/assets/cities/city4.jpg';
import mercedes from '/src/assets/cities/city5.jpg';
import daf from '/src/assets/cities/city6.jpg';

function Destinations() {
  return (
    <div className='section'>
      <h1 className='title'>Nuestros Destinos</h1>
      <div className="grid grid-cols-2 gap-14 sm:grid-cols-4">
        <Destination imageUri={volvo} destinationName={'Volvo FH16'} />
        <Destination imageUri={scania} destinationName={'Scania R-Series'} />
        <Destination imageUri={mercedes} destinationName={'Mercedes-Benz Actros'} />
        <Destination imageUri={daf} destinationName={'DAF XF'} />
      </div>
    </div>
  );
}

export default Destinations;
