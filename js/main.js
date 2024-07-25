import { localidades } from './localidad.js';

class CalculadoraEnvio {
  constructor(localidadOrigen, localidadDestino, pesoPaquete) {
    this.localidadOrigen = localidadOrigen;
    this.localidadDestino = localidadDestino;
    this.pesoPaquete = pesoPaquete;
    this.costoPorKilometro = 200; 
  }

  toRad(degrees) {
    return degrees * (Math.PI / 180);
  }

  calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radio de la Tierra en kilómetros

    const dLat = this.toRad(lat2 - lat1);
    const dLon = this.toRad(lon2 - lon1);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distancia = R * c;
    return distancia;
  }

  calcularCostoEnvio() {
    const origen = localidades.find(loc => loc.nombre && loc.nombre.toLowerCase() === this.localidadOrigen.toLowerCase());
    const destino = localidades.find(loc => loc.nombre && loc.nombre.toLowerCase() === this.localidadDestino.toLowerCase());

    if (origen && destino) {
      const distancia = this.calcularDistancia(origen.latitud, origen.longitud, destino.latitud, destino.longitud);
      const costoPorPeso = 2500 * this.pesoPaquete;
      const costoPorDistancia = this.costoPorKilometro * distancia;
      const costoEnvio = costoPorPeso + costoPorDistancia;

      return costoEnvio; // Devolvemos el costo total
    } else {
      return null; // Localidades no encontradas
    }
  }
}

// Solicitar datos al usuario
const localidadOrigen = prompt('Ingrese la localidad de origen:');
const localidadDestino = prompt('Ingrese la localidad de destino:');
const pesoPaquete = parseFloat(prompt('Ingrese el peso del paquete en kilogramos:'));

const calculadora = new CalculadoraEnvio(localidadOrigen, localidadDestino, pesoPaquete);
const confirmacion = confirm('¿Deseas continuar con el cálculo del costo de envío?');

if (confirmacion) {
  const costoEnvio = calculadora.calcularCostoEnvio();
  if (costoEnvio !== null && !isNaN(costoEnvio)) {
    alert(`El costo de envío es: $${costoEnvio.toFixed(2)}`);
  } else {
    alert('Ha ocurrido un error al calcular el costo de envío. Verifica los datos ingresados.');
  }
} else {
  alert('Cálculo de costo de envío cancelado.');
}
