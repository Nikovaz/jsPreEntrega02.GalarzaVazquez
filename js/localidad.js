let pesoPaquete;
let localidadOrigen;
let localidadDestino;

// Lista de localidades y sus coordenadas geográficas
const localidades = [
  { nombre: 'La Plata', latitud: -34.9214, longitud: -57.9545 },
  { nombre: 'Tigre', latitud: -34.4262, longitud: -58.5799 },
  { nombre: 'Almirante Brown', latitud: -34.7903, longitud: -58.3910 },
  { nombre: 'Avellaneda', latitud: -34.6621, longitud: -58.3655 },
  { nombre: 'Berazategui', latitud: -34.7659, longitud: -58.2126 },
  { nombre: 'Berisso', latitud: -34.9056, longitud: -57.8895 },
  { nombre: 'Brandsen', latitud: -35.1685, longitud: -58.2346 },
  { nombre: 'Campana', latitud: -34.1614, longitud: -58.9593 },
  { nombre: 'Cañuelas', latitud: -35.0528, longitud: -58.7619 },
  { nombre: 'Ensenada', latitud: -34.8675, longitud: -57.9116 },
  { nombre: 'Escobar', latitud: -34.3483, longitud: -58.7995 },
  { nombre: 'Esteban Echeverría', latitud: -34.8150, longitud: -58.4647 },
  { nombre: 'Exaltación de la Cruz', latitud: -34.2925, longitud: -59.1447 },
  { nombre: 'Ezeiza', latitud: -34.8546, longitud: -58.5224 },
  { nombre: 'Florencio Varela', latitud: -34.7892, longitud: -58.2780 },
  { nombre: 'General Las Heras', latitud: -34.9253, longitud: -58.9463 },
  { nombre: 'General Rodríguez', latitud: -34.6083, longitud: -58.9472 },
  { nombre: 'General San Martín', latitud: -34.5637, longitud: -58.5300 },
  { nombre: 'Hurlingham', latitud: -34.5908, longitud: -58.6394 },
  { nombre: 'Ituzaingó', latitud: -34.6586, longitud: -58.6736 },
  { nombre: 'José C. Paz', latitud: -34.5150, longitud: -58.7750 },
  { nombre: 'La Matanza', latitud: -34.7570, longitud: -58.6125 },
  { nombre: 'Lanús', latitud: -34.7025, longitud: -58.3960 },
  { nombre: 'Lomas de Zamora', latitud: -34.7600, longitud: -58.4060 },
  { nombre: 'Luján', latitud: -34.5703, longitud: -59.1050 },
  { nombre: 'Marcos Paz', latitud: -34.7750, longitud: -58.8375 },
  { nombre: 'Malvinas Argentinas', latitud: -34.4811, longitud: -58.7094 },
  { nombre: 'Moreno', latitud: -34.6342, longitud: -58.7915 },
  { nombre: 'Merlo', latitud: -34.6697, longitud: -58.7292 },
  { nombre: 'Morón', latitud: -34.6534, longitud: -58.6198 },
  { nombre: 'Pilar', latitud: -34.4587, longitud: -58.9142 },
  { nombre: 'Presidente Perón', latitud: -34.9042, longitud: -58.3892 },
  { nombre: 'Quilmes', latitud: -34.7203, longitud: -58.2542 },
  { nombre: 'San Fernando', latitud: -34.4481, longitud: -58.5625 },
  { nombre: 'San Isidro', latitud: -34.4720, longitud: -58.5270 },
  { nombre: 'San Miguel', latitud: -34.5436, longitud: -58.7150 },
  { nombre: 'San Vicente', latitud: -35.0250, longitud: -58.4250 },
  { nombre: 'Tres de Febrero', latitud: -34.6100, longitud: -58.5630 },
  { nombre: 'Vicente López', latitud: -34.5280, longitud: -58.4790 },
  { nombre: 'Zárate', latitud: -34.0986, longitud: -59.0286 }
];
 

export { pesoPaquete, localidadOrigen, localidadDestino, localidades };
