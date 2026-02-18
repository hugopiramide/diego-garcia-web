# Diego García Web

Proyecto web para Diego García, desarrollado con React, Vite, Tailwind CSS y Cloudinary. Incluye una galería de imágenes gestionada de forma dinámica.

## Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 22 o superior recomendada)
- [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/)

## Instalación y Desarrollo Local

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/hugopiramide/diego-garcia-web.git
    cd diego-garcia-web
    ```

2.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto con tus credenciales de Cloudinary:
    ```env
    VITE_CLOUDINARY_CLOUD_NAME=tu_cloud_name
    VITE_CLOUDINARY_API_KEY=tu_api_key
    VITE_CLOUDINARY_API_SECRET=tu_api_secret
    ```
    > [!IMPORTANT]
    > Nunca subas el archivo `.env` al repositorio de Git. Ya está incluido en el `.gitignore`.

3.  **Instalar dependencias:**
    ```bash
    npm install
    ```

4.  **Ejecutar en modo desarrollo:**
    ```bash
    npm run dev
    ```

## Despliegue con Docker

Para desplegar el proyecto utilizando Docker y Docker Compose:

1.  **Construir e iniciar los contenedores:**
    ```bash
    docker-compose up -d --build
    ```

2.  **Acceder a la aplicación:**
    La aplicación estará disponible en `http://localhost:8080`.

3.  **Detener los contenedores:**
    ```bash
    docker-compose down
    ```

## Tecnologías Utilizadas

- **Frontend:** React, Vite, React Router
- **Estilos:** Tailwind CSS, Lucide React (iconos), Google Fonts (Racing Sans One, Poppins)
- **Multimedia:** Cloudinary (gestión de imágenes)
- **Despliegue:** Docker, Nginx
