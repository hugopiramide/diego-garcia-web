import { Cloudinary } from "@cloudinary/url-gen";

// Configuración de Cloudinary usando variables de entorno de Vite
// Importante: En Vite las variables de entorno deben empezar por VITE_
export const cld = new Cloudinary({
    cloud: {
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
        apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY,
        apiSecret: import.meta.env.VITE_CLOUDINARY_API_SECRET,
    },
});

/**
 * Ejemplo de cómo obtener una URL de imagen transformada:
 * 
 * const myImage = cld.image('public_id_de_la_imagen');
 * myImage.resize(fill().width(250).height(250));
 * const url = myImage.toURL();
 */
