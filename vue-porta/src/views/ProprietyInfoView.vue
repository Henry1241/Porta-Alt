<template>
    <div class="property-info-view">
      <h2>Información de la Propiedad</h2>
      <div v-if="property">
        <div class="property-images">
      <img v-for="(image, index) in property.images" :key="index" :src="image" alt="Property Image">
    </div>
     <div class="buttons">
        <button class="btn-editar" @click="createPropriety">Editar</button>
        <button class="btn-eliminar">Eliminar</button>
    </div>
    <h3>{{ property.name }}</h3>
    <p>Precio: ${{ property.price }}</p>
    <p>Dormitorios: {{ property.bedrooms }}</p>
    <p>Baños: {{ property.bathrooms }}</p>
    <!-- Mostrar las imágenes de la propiedad -->
    <!-- Otros detalles de la propiedad -->
    <h4>Fechas</h4>
    <p>Fecha Inicio: {{ property.fechaInicio }}</p>
    <p>Fecha Fin: {{ property.fechaFin }}</p>
    <!-- Sección de información de la propiedad -->
    <h4>Información de la Propiedad</h4>
    <p>Título: {{ property.titulo }}</p>
    <p>Comentario: {{ property.comentario }}</p>
    <p>Tipo de vivienda: {{ property.tipoVivienda }}</p>
    <p>Uso Actual: {{ property.usoActual }}</p>
    <p>Uso Permitido: {{ property.usoPermitido }}</p>
    <p>Condición Física: {{ property.condicionFisica }}</p>
    <p>Clase de Inmueble: {{ property.claseInmueble }}</p>
    <p>Número de Frentes: {{ property.numeroFrentes }}</p>
    <p>Medida del Terreno: {{ property.medidaTerreno }}</p>
    <p>M2 del Terreno: {{ property.m2Terreno }}</p>
    <p>Construcción N1: {{ property.construccionN1 }}</p>
    <p>Construcción N2: {{ property.construccionN2 }}</p>
    <p>Construcción N3: {{ property.construccionN3 }}</p>
    <p>Gravamen: {{ property.gravamen }}</p>
    <p>Valor de Gravamen: {{ property.valorGravamen }}</p>
    <p>Valor según Avalúo: {{ property.valorAvaluo }}</p>
    <p>Operación: {{ property.operacion }}</p>
    <p>Condición de Pago: {{ property.condicionPago }}</p>
    <p>Escrituración: {{ property.escrituracion }}</p>
    <p>Avalúo: {{ property.avaluo }}</p>
    <p>Impuestos: {{ property.impuestos }}</p>
    <p>Otros: {{ property.otros }}</p>
    <p>Total: {{ property.total }}</p>
    <!-- Sección de precios y comisiones -->
    <h4>Precios y comisiones</h4>
    <p>Precio de Venta: {{ property.precioVenta }}</p>
    <p>Precio de Renta: {{ property.precioRenta }}</p>
    <p>Precio Mínimo: {{ property.precioMinimo }}</p>
    <p>Precio Promedio: {{ property.precioPromedio }}</p>
    <p>Precio Máximo: {{ property.precioMaximo }}</p>
    <p>Comisión1: {{ property.comision1 }}</p>
    <p>Ganancia1: {{ property.ganancia1 }}</p>
    <p>Comisión2: {{ property.comision2 }}</p>
    <p>Ganancia2: {{ property.ganancia2 }}</p>
    <!-- Sección de disponibilidad y exclusividad -->
    <h4>Disponibilidad y exclusividad</h4>
    <p>Tipo de Disponibilidad: {{ property.tipoDisponibilidad }}</p>
    <!-- Sección de información de la transacción de la propiedad -->
    <h4>Información de la transacción de la propiedad</h4>
    <p>Empresa: {{ property.empresa }}</p>
    <p>Agente: {{ property.agente }}</p>
    <p>Propietario: {{ property.propietario }}</p>
    <p>Clave Catastral: {{ property.claveCastratal }}</p>
    <p>Lote: {{ property.lote }}</p>
    <p>Manzana: {{ property.manzana }}</p>
    <p>Cuenta de Agua: {{ property.cuentaAgua }}</p>
    <p>Ocultar Dirección: {{ property.ocultarDir }}</p>
    <p>Acepta Infonavit: {{ property.aceptaInfonavid }}</p>
    <p>Acepta Fovisste: {{ property.aceptaFovisste }}</p>
    <p>Autos Estacionados: {{ property.autosEst }}</p>
    <p>Autos Independientes: {{ property.autosIndep }}</p>
    <p>Estacionamiento: {{ property.estacionamiento }}</p>
    <p>Cochera Eléctrica: {{ property.cocheraElectrica }}</p>
    <p>Patio: {{ property.patio }}</p>
    <p>Asador: {{ property.asador }}</p>
    <p>Fuentes: {{ property.fuentes }}</p>
    <p>Jacuzzi: {{ property.jacuzzi }}</p>
    <p>Alberca: {{ property.alberca }}</p>
    <p>Jardín: {{ property.jardin }}</p>
    <p>Bodega: {{ property.bodega }}</p>
    <p>Cisterna: {{ property.cisterna }}</p>
    <p>Tinaco: {{ property.tinaco }}</p>
    <p>Aire Central: {{ property.acCentral }}</p>
    <p>Protección de Ventana: {{ property.proteccionVentana }}</p>
    <p>Persiana Cortina: {{ property.persianaCortina }}</p>
    <p>Hidroneumático: {{ property.hidroneumatico }}</p>
    <p>Patio Encementado: {{ property.patioEncementado }}</p>
    <p>Cocina Integral: {{ property.cocinaIntegral }}</p>
    <p>Amueblado: {{ property.amueblado }}</p>
    <p>Piso 1: {{ property.piso1 }}</p>
    <p>Piso 2: {{ property.piso2 }}</p>
    <p>Piso 3: {{ property.piso3 }}</p>
    <p>Alarma: {{ property.alarma }}</p>
    <p>URL Google Maps: {{ property.urlGoogleMap }}</p>
    <p>Tipo de Vitropiso: {{ property.vitropiso }}</p>
    <p>Closet: {{ property.closet }}</p>
    <p>Barda: {{ property.barda }}</p>
    <p>Equipada: {{ property.equipada }}</p>
    <!-- Sección de ubicación -->
    <h4>Ubicación</h4>
    <p>País: {{ property.pais }}</p>
    <p>Estado: {{ property.estado }}</p>
    <p>Municipio: {{ property.municipio }}</p>
    <p>Ciudad: {{ property.ciudad }}</p>
    <p>Colonia: {{ property.colonia }}</p>
    <p>Código Postal: {{ property.codigoPostal }}</p>
    <p>Calle: {{ property.calle }}</p>
    <p>Número Exterior: {{ property.numExterior }}</p>
    <p>Número Interior: {{ property.numInterior }}</p>
    <p>Entre calle 1: {{ property.entreCalle1 }}</p>
    <p>Entre calle 2: {{ property.entreCalle2 }}</p>
    <p>Nombre Complejo: {{ property.nombreComplejo }}</p>
  </div>
    </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
    
  name: 'ProprietyInfoView',
  props: ['id'], // Recibe el ID de la propiedad como prop
  data() {
    return {
      property: null // Almacenará los detalles de la propiedad
    }
  },
  setup() {
    const router = useRouter(); 
    
    const createPropriety = () => { 
      router.push("/propriety/edit");
    };
    
    const viewProperty = (propertyId) => {
      // Aquí puedes redirigir a la vista de información de la propiedad con el ID proporcionado
      router.push(`/propriety/${propertyId}`);
    };

    return { createPropriety, viewProperty }; 
  },
  mounted() {
    // Llama al método para obtener los detalles de la propiedad cuando se monta el componente
    this.getPropertyDetails(this.id);
  },
  methods: {
    // Método para obtener los detalles de la propiedad
    getPropertyDetails(id) {
      // Ejemplo de datos estáticos
      const properties = [
      { 
    id: 1, 
    name: "Cozy Apartment", 
    price: 150000, 
    bedrooms: 2, 
    bathrooms: 1, 
    images: [
      "https://canalhogar.com/wp-content/uploads/2023/10/25-planos-y-Disenos-de-Casas-de-2-Pisos-Modernas-800x600.jpg",
      "https://canalhogar.com/wp-content/uploads/2023/10/casa_de_2_pisos_con_garaje_y_3_dormitorios_1.jpg"
    ],
    fechaInicio: '2024-05-05',
    fechaFin: '2024-06-05',
    titulo: 'Cozy Apartment',
    comentario: 'Este es un apartamento acogedor con todos los detalles necesarios.',
    tipoVivienda: 'Departamento',
    usoActual: '',
    tipoDisponibilidad: 'Disponibilidad',
    condicionFisica: 'Excelente',
    claseInmueble: 'Residencial',
    numeroFrentes: 2,
    medidaTerreno: '100 m²',
    m2Terreno: '80 m²',
    construccionN1: 'Sala',
    construccionN2: 'Comedor',
    construccionN3: 'Cocina',
    gravamen: 'No',
    valorGravamen: '',
    valorAvaluo: '180000',
    operacion: 'Venta',
    condicionPago: 'Contado',
    escrituracion: 'Si',
    avaluo: '180000',
    impuestos: 'Pago anual',
    otros: 'Ninguno',
    total: '150000',
    precioVenta: '150000',
    precioRenta: '',
    precioMinimo: '',
    precioPromedio: '',
    precioMaximo: '',
    comision1: '',
    ganancia1: '',
    comision2: '',
    ganancia2: '',
    empresa: 'Mi Empresa',
    agente: 'Agente1',
    propietario: 'Propietario1',
    claveCastratal: '1234',
    lote: 'Lote1',
    manzana: 'Manzana1',
    cuentaAgua: 'Si',
    ocultarDir: 'No',
    aceptaInfonavid: 'Si',
    aceptaFovisste: 'Si',
    autosEst: 1,
    autosIndep: 0,
    estacionamiento: 'Para un auto',
    cocheraElectrica: 'Sí',
    patio: 'Con espacio verde',
    asador: 'No',
    fuentes: '',
    jacuzzi: 'Sí',
    alberca: '',
    jardin: 'Pequeño',
    bodega: 'Sí',
    cisterna: 'Sí',
    tinaco: 'Sí',
    acCentral: 'Sí',
    proteccionVentana: 'Sí',
    persianaCortina: 'Sí',
    hidroneumatico: 'Sí',
    patioEncementado: 'Sí',
    cocinaIntegral: 'Sí',
    amueblado: 'Sí',
    piso1: 'Mármol',
    piso2: '',
    piso3: '',
    alarma: 'Sí',
    urlGoogleMap: 'https://maps.google.com',
    vitropiso: 'Sí',
    closet: 'Sí',
    barda: 'Sí',
    equipada: 'Sí',
    pais: 'México',
    estado: 'Jalisco',
    municipio: 'Guadalajara',
    ciudad: 'Guadalajara',
    colonia: 'Colonia1',
    codigoPostal: '45110',
    calle: 'Calle1',
    numExterior: '123',
    numInterior: '',
    entreCalle1: 'EntreCalle1',
    entreCalle2: 'EntreCalle2',
    nombreComplejo: 'Complejo1'
  },
        { 
          id: 2, 
          name: "Spacious House", 
          price: 300000, 
          bedrooms: 4, 
          bathrooms: 3, 
          images: ["https://i.ytimg.com/vi/x7UflKOhhe4/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhMHpwiU1LkmFzRnc6Xif5suMbV8j-shbpeROCoicN6qBX8_-QUoKKs6BAlCjuO5v2Oo"] 
        },
        { 
          id: 3, 
          name: "Luxury Villa", 
          price: 750000, 
          bedrooms: 6, 
          bathrooms: 4, 
          images: ["https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560","https://images.adsttc.com/media/images/5d34/e684/284d/d131/4700/0124/newsletter/Casa_H_ELEVACI%C3%93N_POSTERIOR.jpg?1563747941"] 
        }
      ];
      
      // Encuentra la propiedad por ID
      this.property = properties.find(property => property.id === parseInt(id));
    }
  }
}

</script>

<style scoped>
/* Estilos específicos para la vista de información de la propiedad */
.property-info-view {
  display: flex;
  flex-direction: column; /* Alineación vertical */
  width: 650px; /* Ancho del contenedor */
  margin: 0 auto; /* Centrar el contenedor horizontalmente */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.property-info-view h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: 600;
  color: #333;
}

.property-info-view h3 {
  margin-bottom: 10px;
  font-size: 1.6rem;
  font-weight: 500;
  color: #333;
}

.property-info-view p {
  margin-bottom: 5px;
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
}

/* Estilos para detalles de la propiedad */
.property-details {
  display: flex;
  flex-wrap: wrap; /* Permite que los elementos se ajusten en varias filas si es necesario */
  justify-content: space-between; /* Distribuye los elementos uniformemente */
}

.property-details p {
  flex: 1; /* Ocupa el espacio disponible */
  margin-bottom: 10px;
}

/* Estilo para la propiedad "Garaje" */
.property-details p:last-child {
  text-align: right; /* Alinea el texto a la derecha */
}
/* Estilos para las imágenes de la propiedad */
.property-images {
  display: flex; /* Coloca las imágenes en una fila */
  flex-direction: row; /* Alineación horizontal */
  margin-bottom: 20px; /* Espacio inferior */
}

.property-images img {
  flex: 1 0 auto; /* Ocupa el espacio disponible proporcionalmente */
  margin: 0 10px; /* Espacio entre imágenes */
  max-width: 300px; /* Ancho máximo para cada imagen */
  height: auto; /* Mantiene la proporción de aspecto */
  border: 1px solid #ddd; /* Borde gris claro */
  border-radius: 8px; /* Esquinas redondeadas */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  transition: transform 0.3s ease; /* Animación de transición para el efecto hover */
}

.property-images img:hover {
  transform: scale(1.1); /* Aumenta el tamaño de la imagen al pasar el cursor */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Sombra más oscura al pasar el cursor */
}
/* Styles for the buttons container */
.buttons {
  display: flex; /* Arrumar los botones horizontalmente */
  justify-content: flex-end; /* Alinear los botones a la derecha */
  margin-top: 20px; /* Espacio superior */
}

/* Styles for the edit button */
.btn-editar {
  background-color: #4CAF50; /* Verde */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer; /* Cambiar el cursor al pasar por encima */
  transition: background-color 0.3s ease; /* Animación de transición para el efecto hover */
}

.btn-editar:hover {
  background-color: #3e8e41; /* Verde más oscuro al pasar el cursor */
}

/* Styles for the delete button */
.btn-eliminar {
  background-color: #f44336; /* Rojo */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer; /* Cambiar el cursor al pasar por encima */
  transition: background-color 0.3s ease; /* Animación de transición para el efecto hover */
  margin-left: 10px; /* Espacio entre botones */
}

.btn-eliminar:hover {
  background-color: #d32f2f; /* Rojo más oscuro al pasar el cursor */
}


</style>
