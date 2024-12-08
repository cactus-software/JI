import React from 'react';
import { CardContent } from '@/components/ui/card';
import { Check, Clock, AlertCircle, Image, Info } from 'lucide-react';

export const VistaDetalle = ({ 
  paso, 
  activeCheck, 
  onIniciarVerificacion, 
  onCompletarVerificacion,
  onSelectImage,
  calcularDuracion
}) => {
  return (
    <CardContent className="p-6">
      <div className="mb-6 bg-blue-50 p-4 rounded-lg">
        <div className="flex items-start">
          <Info className="w-5 h-5 mr-2 mt-1 text-blue-500" />
          <div>
            <h3 className="font-bold mb-2">Función del Componente</h3>
            <p>{paso.funcion}</p>
          </div>
        </div>
      </div>

      {paso.verificaciones.map(ver => (
        <div key={ver.id} className="border rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-4">{ver.punto}</h3>
              
              <div className="mb-4">
                <h4 className="font-bold text-gray-700 mb-2">
                  <Info className="w-4 h-4 inline mr-2" />
                  Detalles de la Verificación
                </h4>
                <p className="whitespace-pre-line text-sm">{ver.detalle}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-bold text-gray-700 mb-2">
                  <Info className="w-4 h-4 inline mr-2" />
                  Método de Inspección
                </h4>
                <p className="whitespace-pre-line text-sm">{ver.metodo}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-bold text-gray-700 mb-2">
                  <Info className="w-4 h-4 inline mr-2" />
                  Método de Corrección
                </h4>
                <p className="whitespace-pre-line text-sm">{ver.correccion}</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-700 mb-2">
                <Image className="w-4 h-4 inline mr-2" />
                Imágenes de Referencia
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {ver.imagenes.map((img, index) => (
                  <div key={index} className="border rounded-lg p-2">
                    <img
                      src={img.src}
                      alt={img.descripcion}
                      className="w-full rounded cursor-pointer hover:opacity-90"
                      onClick={() => onSelectImage(img)}
                    />
                    <p className="text-sm mt-2 font-bold">{img.descripcion}</p>
                    <p className="text-sm text-gray-600">{img.puntosClave}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                {!ver.inicio ? (
                  <button
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg w-full"
                    onClick={() => onIniciarVerificacion(paso.id, ver.id)}
                  >
                    <Clock className="w-4 h-4 inline mr-2" />
                    Iniciar Verificación
                  </button>
                ) : !ver.fin ? (
                  <div className="space-y-2">
                    <button
                      className="bg-green-500 text-white px-6 py-3 rounded-lg w-full"
                      onClick={() => onCompletarVerificacion(paso.id, ver.id, true)}
                    >
                      <Check className="w-4 h-4 inline mr-2" />
                      Completar Verificación
                    </button>
                    <button
                      className="bg-red-500 text-white px-6 py-3 rounded-lg w-full"
                      onClick={() => {
                        const notas = prompt("Indica el motivo por el que no se pudo completar:");
                        if (notas) onCompletarVerificacion(paso.id, ver.id, false, notas);
                      }}
                    >
                      <AlertCircle className="w-4 h-4 inline mr-2" />
                      No se Pudo Completar
                    </button>
                  </div>
                ) : (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Resultado de la Verificación</h4>
                    <p className="flex items-center">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Duración: {calcularDuracion(ver.inicio, ver.fin)} segundos
                    </p>
                    <p className="flex items-center">
                      {ver.estado ? 
                        <Check className="w-4 h-4 inline mr-2 text-green-500" /> : 
                        <AlertCircle className="w-4 h-4 inline mr-2 text-red-500" />
                      }
                      Estado: {ver.estado ? "Completado" : "No Completado"}
                    </p>
                    {ver.notas && (
                      <p className="flex items-center">
                        <Info className="w-4 h-4 inline mr-2" />
                        Notas: {ver.notas}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </CardContent>
  );
};
