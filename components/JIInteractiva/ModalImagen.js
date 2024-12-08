import React from 'react';

export const ModalImagen = ({ imagen, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div className="bg-white p-4 rounded-lg max-w-3xl w-full">
        <img
          src={imagen.src}
          alt={imagen.descripcion}
          className="w-full rounded"
        />
        <h4 className="font-bold mt-4">{imagen.descripcion}</h4>
        <p className="text-gray-600">{imagen.puntosClave}</p>
      </div>
    </div>
  );
};
