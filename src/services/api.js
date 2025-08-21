/* Este archivo contiene la configuración de la API */
import axios from 'axios';

/* Api temporal que utilice para realizar pruebas */
const API_URL = 'https://fakestoreapi.com/products';

/* Función para obtener productos de la API que se utiliza en la aplicación  para las pruebas*/
const fetchProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        /* Se verifica si la solicitud es exitosa se retorna la lista de productos obtenida de la API */
        return response.data;
        /* En caso de que la solicitud falle se retorna un arreglo vacío */
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

export default fetchProducts;
