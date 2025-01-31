# Bot de Viajes

Este es un bot de viajes que permite a los usuarios consultar destinos turísticos, obtener información sobre el clima y buscar vuelos. Utiliza varias APIs para proporcionar información precisa y útil.

## Tabla de Contenidos

- [Características]
- [Tecnologías Utilizadas]
- [Instalación]
- [Uso]
- [API]
- [Contribución]
- [Licencia]

## Características

- **Consulta de Destinos**: Proporciona información sobre destinos populares en todo el mundo.
- **Información del Clima**: Permite a los usuarios consultar el clima actual y pronósticos en diferentes ciudades.
- **Búsqueda de Vuelos**: Facilita la búsqueda de vuelos entre diferentes aeropuertos, mostrando opciones y precios.

## Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías y herramientas:

- **Node.js**: Entorno de ejecución para JavaScript que permite ejecutar código JavaScript en el servidor.
  
- **Express**: Framework web para Node.js que facilita la creación de aplicaciones web y APIs. Proporciona una estructura robusta para manejar rutas y solicitudes HTTP.

- **Axios**: Cliente HTTP basado en promesas para realizar solicitudes a APIs. Se utiliza para obtener datos del clima y buscar vuelos.

- **Apify**: Plataforma que permite la automatización de tareas web. Se utiliza para interactuar con actores que proporcionan datos sobre vuelos.

- **dotenv**: Módulo que carga variables de entorno desde un archivo `.env` a `process.env`. Esto es útil para manejar configuraciones sensibles como claves API sin exponerlas en el código fuente.

## Instalación

1. Clona el repositorio:


text
# Bot de Viajes

Este es un bot de viajes que permite a los usuarios consultar destinos turísticos, obtener información sobre el clima y buscar vuelos. Utiliza varias APIs para proporcionar información precisa y útil.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [API](#api)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Características

- **Consulta de Destinos**: Proporciona información sobre destinos populares en todo el mundo.
- **Información del Clima**: Permite a los usuarios consultar el clima actual y pronósticos en diferentes ciudades.
- **Búsqueda de Vuelos**: Facilita la búsqueda de vuelos entre diferentes aeropuertos, mostrando opciones y precios.

## Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías y herramientas:

- **Node.js**: Entorno de ejecución para JavaScript que permite ejecutar código JavaScript en el servidor.
  
- **Express**: Framework web para Node.js que facilita la creación de aplicaciones web y APIs. Proporciona una estructura robusta para manejar rutas y solicitudes HTTP.

- **Axios**: Cliente HTTP basado en promesas para realizar solicitudes a APIs. Se utiliza para obtener datos del clima y buscar vuelos.

- **Apify**: Plataforma que permite la automatización de tareas web. Se utiliza para interactuar con actores que proporcionan datos sobre vuelos.

- **dotenv**: Módulo que carga variables de entorno desde un archivo `.env` a `process.env`. Esto es útil para manejar configuraciones sensibles como claves API sin exponerlas en el código fuente.

## Instalación

1. Clona el repositorio:

git clone https://github.com/danielc123avila/travel-assistant/


2. Instala las dependencias:

npm i


3. Configura tus variables de entorno:

- Crea un archivo `.env` en la raíz del proyecto y agrega tus claves API:

  ```
  OPENWEATHER_API_KEY=tu_clave_api_openweathermap
  PORT=tu_puerto_del_servidor
  ```

## Uso

1. Inicia el servidor:

npm run dev


2. Abre Insomnia o Postman y realiza solicitudes al endpoint:


POST http://localhost:3000/api/chat


3. Ejemplo de cuerpo de solicitud:

{
  "message": "¿Cuáles son los destinos?",
  "context": {}
}


## API

### Endpoint: `/api/chat`

#### Método: `POST`

#### Cuerpo de la Solicitud:



- **Clima**:

{
  "message": "¿Cuál es el clima?",
  "context": {
    "destination": "París",
    "days": 3
  }
}

- **Response**:

{
	"response": "El clima en París será mist, con una temperatura de 0.8°C. Aquí tienes una lista básica para empacar:\n- Ropa cómoda\n- Zapatos adecuados\n- Artículos de aseo"
}


## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Agregada nueva funcionalidad'`).
4. Envía un pull request.