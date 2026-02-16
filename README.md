# Diego García Web

Este es el sitio web de Diego García, que incluye una galería de imágenes gestionada con **Cloudinary**.

## Requisitos Previos

Para que el proyecto funcione correctamente, es necesario configurar las variables de entorno para la integración con Cloudinary.

## Configuración del Entorno

1. Crea un archivo llamado `.env` en el directorio raíz del proyecto (puedes usar `.env.example` como base).
2. Añade las siguientes variables con tus credenciales de Cloudinary:

```env
VITE_CLOUDINARY_CLOUD_NAME=tu_cloud_name
VITE_CLOUDINARY_API_KEY=tu_api_key
VITE_CLOUDINARY_API_SECRET=tu_api_secret
```

> [!IMPORTANT]
> Nunca subas el archivo `.env` al repositorio de Git. Ya está incluido en el `.gitignore`.

## Desarrollo

Para ejecutar el proyecto en modo desarrollo:

```bash
npm install
npm run dev
```
