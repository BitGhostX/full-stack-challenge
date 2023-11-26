# Full Stack JS - Code Challenge


- Para esta solución se utilizó el punto opcional de usar Docker o Docker Compose.
- Tanto el backend como el frontend se pueden ejecutar en su versión contenerizada (utilizando Docker Compose) o directamente a través del terminal.

## Instalación

Para ejecutar este proyecto utilizando [Docker] solo debe ejecutar el comando:
```bash
docker compose up -d
```

Para ejecutar cada módulo (backend/frontend) sin utilizar [Docker] puede seguir los pasos que se explican a continuación.

## Backend

El código fuente se encuentra en el directorio `api`.

_Se utiliza el puerto `8000`, revisar que no se encuentra ya en uso para evitar conflictos al intentar levantar el servicio._

Para ejecutar el `server` debe utilizar el comando:
```bash
npm start
```

Y está listo para utilizar el API:
```
http://localhost:8000
```

Para leer la documentación del API en formato web, acceder ddesde su navegador a la URL:
```
http://localhost:8000/api/docs
```

Para obtener la documentación del API en formato json, utilizar la url:
```
http://localhost:8000/api/docs.json
```

Para ejecutar los `test` debe utilizar el comando:
```bash
npm test
```

### Notas

- Incluye el endpoint `GET /files/list`.
- Incluye un filtro `/files/data?fileName=<Nombre del archivo>` para seleccionar un solo archivo.
- Utiliza la guía de estilo [standarjs].
- Se utilizaron únicamente las librerías indicadas en el desafío.
- No depende de librerías que están instaladas de forma global, variables de entorno o configuraciones de algún sistema operativo especifico.

### Tech

- [nodejs] v14 - Evented I/O
- [expressjs] - Node.js Framework
- [mochajs] - Testing Framework
- [chaijs] - Assertion Library
- [eslint] - Static Code Analysis Tool
- [standarjs] - JavaScript Standard Style 
- [swagger-ui] - UI API Documentation

## Frontend

El código de la solución del frontend se puede encontrar en 2 directorios:
- El directorio `app` utiliza únicamente [react].
- El directorio `app-redux` utiliza [react] + [redux].

La versión que se utiliza en el Docker Compose es la del directorio `app-redux`.

_Se utiliza el puerto `3000`, revisar que no se encuentra ya en uso para evitar conflictos al intentar levantar el servicio._

Para ejecutar el `server` debe utilizar el comando:
```bash
npm start
```

Y está listo para utilizar en el navegador:
```
http://localhost:3000
```

### Notas

- Se usa programación funcional y Hook Effects en React.
- Incluye la solución con [redux].
- Incluye un filtro por `fileName` utilizando un `dropdown` y también un `button` para el `reset` del filtro.
- La solución no necesitó funciones adicionales, por ello no hay elementos que puedan testearse utilizando [jestjs].
- No depende de librerías que están instaladas de forma global, variables de entorno o configuraciones de algún sistema operativo especifico.
- No utiliza TypeScript, Dart, Elm, ni similares.

### Tech

- [nodejs] v16 - Evented I/O
- [react] - JS Library for Building User Interfaces
- [react-bootstrap] - Bootstrap Components using React
- [react-redux] - React UI Bindings Layer for Redux
- [redux-toolkit] - Simplify Redux Development


[Docker]: <https://www.docker.com/>

[nodejs]: <https://nodejs.org/>
[expressjs]: <https://expressjs.com/>
[mochajs]: <https://mochajs.org/>
[chaijs]: <https://www.chaijs.com/>
[eslint]: <https://eslint.org/>
[standarjs]: <https://standardjs.com/>
[swagger-ui]: <https://swagger.io/tools/swagger-ui/>

[react]: <https://react.dev/>
[redux]: <https://es.redux.js.org/>
[react-bootstrap]: <https://react-bootstrap.netlify.app/>
[react-redux]: <https://react-redux.js.org/>
[redux-toolkit]: <https://redux-toolkit.js.org/>
[jestjs]: <https://jestjs.io/>
