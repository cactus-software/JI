import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Check, Clock, AlertCircle, ChevronDown, ChevronRight, Image, Info } from 'lucide-react';
import { VistaDetalle } from './VistaDetalle';
import { ModalImagen } from './ModalImagen';
import { datosIniciales } from './datos';

const JIInteractiva = () => {
  const [pasos, setPasos] = useState(datosIniciales);
  const [expandedStep, setExpandedStep] = useState(1);
  const [activeCheck, setActiveCheck] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const calcularDuracion = (inicio, fin) => {
    if (!inicio || !fin) return null;
    const diff = new Date(fin) - new Date(inicio);
    return Math.round(diff / 1000);
  };

  const iniciarVerificacion = (componenteId, verificacionId) => {
    setPasos(pasos.map(paso => {
      if (paso.id === componenteId) {
        return {
          ...paso,
          verificaciones: paso.verificaciones.map(ver => {
            if (ver.id === verificacionId) {
              return {
                ...ver,
                inicio: new Date().toISOString(),
                estado: null
              };
            }
            return ver;
          })
        };
      }
      return paso;
    }));
    setActiveCheck(verificacionId);
  };

  const completarVerificacion = (componenteId, verificacionId, estado, notas = "") => {
    setPasos(pasos.map(paso => {
      if (paso.id === componenteId) {
        const tiempoFin = new Date().toISOString();
        return {
          ...paso,
          verificaciones: paso.verificaciones.map(ver => {
            if (ver.id === verificacionId) {
              return {
                ...ver,
                fin: tiempoFin,
                estado: estado,
                notas: notas
              };
            }
            return ver;
          })
        };
      }
      return paso;
    }));
    setActiveCheck(null);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="bg-blue-600 text-white p-6 rounded-t-lg">
        <h1 className="text-2xl font-bold">Verificación de Molde</h1>
        <p className="mt-2">Registro detallado de inspección y mantenimiento</p>
      </div>

      {pasos.map(paso => (
        <Card key={paso.id} className="mt-4">
          <CardHeader 
            className="cursor-pointer bg-gray-50"
            onClick={() => setExpandedStep(expandedStep === paso.id ? null : paso.id)}
          >
            <div className="flex items-center">
              {expandedStep === paso.id ? 
                <ChevronDown className="w-5 h-5 mr-2" /> : 
                <ChevronRight className="w-5 h-5 mr-2" />
              }
              <div className="flex-1">
                <h2 className="text-xl font-bold">{paso.componente}</h2>
                <p className="text-gray-600">{paso.descripcion}</p>
              </div>
            </div>
          </CardHeader>

          {expandedStep === paso.id && (
            <VistaDetalle 
              paso={paso}
              activeCheck={activeCheck}
              onIniciarVerificacion={iniciarVerificacion}
              onCompletarVerificacion={completarVerificacion}
              onSelectImage={setSelectedImage}
              calcularDuracion={calcularDuracion}
            />
          )}
        </Card>
      ))}

      {selectedImage && (
        <ModalImagen 
          imagen={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </div>
  );
};

export default JIInteractiva;
