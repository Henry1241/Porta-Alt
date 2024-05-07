<template>
  <Dashboard/>
  <div class="content">
    <select name="Propiedades" id="propiedades">
      <option value="Todas">All</option>
      <option value="Terrenos">Terrenos</option>
      <option value="Comerciales">Comerciales</option>
      <option value="Viviendas">Viviendas</option>
    </select>

    <p><button @click="createPropriety" class="button-create">Create</button></p>
  </div>
    <!-- Aquí se muestran las cards de las propiedades -->
    <div class="property-cards">
      <!-- Card 1: Cozy Apartment -->
      <div class="card">
        <div class="property-info">
          <h3>Cozy Apartment</h3>
          <p>Price: $150,000</p>
          <p>Bedrooms: 2</p>
          <p>Bathrooms: 1</p>
        </div>
        <div class="property-image">
          <img src="https://canalhogar.com/wp-content/uploads/2023/10/25-planos-y-Disenos-de-Casas-de-2-Pisos-Modernas-800x600.jpg" alt="Cozy Apartment">
        </div>
        <div class="property-button">
          <button @click="viewProperty(1)" class="view-property-button">Ver propiedad</button>
        </div>
      </div>
      
      <!-- Card 2: Spacious House -->
      <div class="card">
        <div class="property-info">
          <h3>Spacious House</h3>
          <p>Price: $300,000</p>
          <p>Bedrooms: 4</p>
          <p>Bathrooms: 3</p>
        </div>
        <div class="property-image">
          <img src="https://i.ytimg.com/vi/x7UflKOhhe4/maxresdefault.jpg" alt="Spacious House">
        </div>
        <div class="property-button">
          <button @click="viewProperty(2)" class="view-property-button">Ver propiedad</button>
        </div>
      </div>
      
      <!-- Card 3: Luxury Villa -->
      <div class="card">
        <div class="property-info">
          <h3>Luxury Villa</h3>
          <p>Price: $750,000</p>
          <p>Bedrooms: 6</p>
          <p>Bathrooms: 4</p>
        </div>
        <div class="property-image">
          <img src="https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560" alt="Luxury Villa">
        </div>
        <div class="property-button">
          <button @click="viewProperty(3)" class="view-property-button">Ver propiedad</button>
        </div>
      </div>
    </div>
 

</template>
<script>
import { useRouter } from "vue-router";

import Dashboard from '../components/Menu.vue';

export default {
  name: "ProprietyView",
  components: {
    Dashboard,
  },
  setup() {
    const router = useRouter(); 
    
    const createPropriety = () => { 
      router.push("/propriety/create");
    };
    
    const viewProperty = (propertyId) => {
      // Aquí puedes redirigir a la vista de información de la propiedad con el ID proporcionado
      router.push(`/propriety/${propertyId}`);
    };

    return { createPropriety, viewProperty }; 
  },
};
</script>
<style scoped>
.content {
  display: flex;
  justify-content: space-between; /* Cambiado a space-between para distribuir los elementos horizontalmente */
  align-items: center;
  margin-bottom: 20px; /* Añadido margen inferior para separar el contenido de las tarjetas */
  margin-right: 200px;
}

select {
  padding: 0.5rem;
  font-size: 1rem;
  margin-right: 1rem;
  border: 1px solid #ccc; /* Añadido borde para mejorar la apariencia */
  border-radius: 4px; /* Añadido borde redondeado */
}

.button-primary {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button-primary:hover {
  background-color: #0056b3;
}

/* Estilo base para el contenedor de tarjetas */
.property-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Espacio entre las tarjetas */
}

/* Tarjeta individual */
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1.5rem; /* Aumentado el padding para más espacio */
  width: 350px; /* Aumentado el ancho de la tarjeta */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Ajuste del efecto de sombra */
  transition: all 0.3s ease; /* Animación de transición */
}

/* Hover de la tarjeta */
.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Efecto de sombra más intenso al pasar el cursor */
}

/* Imagen de la propiedad */
.property-image {
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
}

.property-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Información de la propiedad */
.property-info {
  margin-top: 1rem; /* Espacio superior */
}

.card h3 {
  margin-top: 0;
  margin-bottom: 15px;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600; /* Texto más grueso */
  color: #333;
}

.property-info p {
  margin: 5px 0;
  text-align: center;
  font-size: 1.2rem; /* Aumentado tamaño del texto */
  line-height: 1.6; /* Aumentado el espacio entre líneas */
  color: #666;
}

/* Botón para ver la propiedad */
.property-button {
  text-align: center;
  margin-top: 15px; /* Aumentado el espacio superior */
}

.view-property-button {
  padding: 0.8rem 1.5rem; /* Aumentado el padding del botón */
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.view-property-button:hover {
  background-color: #0056b3;
}

.button-create {
  margin-top: 15px;
  margin-left: 15px;
  background-color: #093B59;
  
  /* Additional styles */
  color: white; /* Text color */
  padding: 10px 20px; /* Padding around the button text */
  border: none; /* Remove default border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Indicate clickable behavior */
  font-weight: bold; /* Bold text */
  text-align: center; /* Center text alignment */
  text-decoration: none; /* Remove underline for text links */
  transition: background-color 0.3s ease; /* Smooth background color transition on hover */
  margin-left: 0;
}

.button-create:hover {
  background-color: #002E4A; /* Darker shade on hover */
}

</style>