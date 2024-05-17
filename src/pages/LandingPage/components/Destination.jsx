import React from 'react';

function Destination({imageUri, destinationName}) {
  return (
    <figure className="bg-gray-100">
      <img
        src={imageUri}
        alt=""
        className="w-full object-cover"
      />
      <figcaption className="flex justify-center items-center p-4 sm:text-lg">
        {destinationName}
      </figcaption>
    </figure>
  );
}

export default Destination;
