export const datosIniciales = [
  {
    id: 1,
    componente: "Placa Bakelita",
    descripcion: "Placa de aislamiento térmico para prevenir transferencia de calor",
    funcion: "Actúa como barrera térmica entre el molde y la placa de montaje, previniendo la transferencia de calor del molde caliente a la máquina. Esto es crucial para mantener la estabilidad dimensional y proteger los componentes de la máquina.",
    verificaciones: [
      {
        id: "1-1",
        punto: "Revisar oxidación o suciedad superficial",
        detalle: `La oxidación o suciedad puede comprometer la capacidad aislante de la placa:
        • La oxidación puede crear puntos de transferencia térmica no deseada
        • La suciedad puede crear espacios donde se acumule humedad
        • Los residuos pueden afectar el contacto uniforme entre superficies`,
        metodo: `Inspección visual detallada:
        1. Examinar toda la superficie bajo buena iluminación
        2. Prestar especial atención a las áreas cercanas a los puntos de montaje
        3. Verificar ambas caras de la placa
        4. Buscar manchas, decoloración o residuos`,
        correccion: `Proceso de limpieza:
        1. Limpieza inicial con solvente suave
        2. En caso de oxidación, usar limpiador específico para óxido
        3. Asegurar que la superficie quede completamente seca
        4. Verificar que no queden residuos del limpiador`,
        imagenes: [
          {
            src: "./images/bakelita-general.jpg",
            descripcion: "Vista general de la placa de bakelita",
            puntosClave: "Observar la superficie completa buscando signos de deterioro"
          },
          {
            src: "./images/bakelita-oxidacion.jpg",
            descripcion: "Ejemplo de oxidación típica",
            puntosClave: "Las manchas de óxido suelen aparecer cerca de los bordes"
          }
        ],
        inicio: null,
        fin: null,
        estado: null,
        notas: ""
      },
      {
        id: "1-2",
        punto: "Revisar golpes, grietas o daños en superficie",
        detalle: `Los daños físicos pueden comprometer la integridad estructural:
        • Las grietas pueden propagarse con los ciclos térmicos
        • Los golpes pueden crear puntos débiles
        • Cualquier daño puede afectar la capacidad aislante`,
        metodo: `Inspección visual y táctil:
        1. Examinar la superficie bajo diferentes ángulos de luz
        2. Pasar la mano suavemente para detectar irregularidades
        3. Prestar atención a las esquinas y bordes
        4. Verificar especialmente alrededor de los agujeros de montaje`,
        correccion: `Según la severidad del daño:
        1. Daños superficiales: Pulido suave si es posible
        2. Grietas o golpes: Reemplazo de la placa
        3. Al reemplazar, verificar especificaciones exactas
        4. Asegurar que la nueva placa tenga el mismo espesor`,
        imagenes: [
          {
            src: "./images/bakelita-danios.jpg",
            descripcion: "Ejemplos de daños comunes",
            puntosClave: "Identificar tipos de daños y su severidad"
          }
        ],
        inicio
