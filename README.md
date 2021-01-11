# Ejercicio Mercado Libre

## Tabla de contenido
- [Tecnologias usadas](#tecnologias-usadas)
- [Convenciones](#convenciones)
- [Como correrlo](#como-correrlo)
- [Tests](#tests)
- [Estructura de Carpetas](#estructura-de-carpetas)


## Tecnologias usadas

Para el FrontEnd use [Create React App](https://github.com/facebookincubator/create-react-app). <br>
como creador inicial del proyecto.

Para el BackEnd use Node.js con Express

Tambien utilize entre otras librerias:<br>
`Redux`<br>
`React-Router v4`<br>
`Redux Sagas`<br>
`eslint`

## Convenciones
- FrontEnd dentro de `src/`.
- BackEnd dentro de `server/`.
- JS files end with `.js`.
- ES6 Syntax.

## Como correrlo

 - Aclaracion es necesario tener instalado NODE y 
[NPM](https://www.npmjs.com/get-npm) o [YARN](https://classic.yarnpkg.com/en/docs/install/#debian-stable) para poder instalar el proyecto.


### On development environment:
#### Run Front y Back
Instalar dependencias usuadno `yarn`.<br>
Iniciar tanto Front como Back con `yarn start`.<br>
Esto inicia el front en el puerto 3000 y el back en el puerto 3003.<br>

#### Run App (con SSR)
Install nodemon, en caso que se cambie le codigo se refresque en la app.
Instalar dependencias usando `yarn`.<br>
Correr el build del proyecto usando `yarn build`.<br>
Iniciar la app usando `yarn server`.<br>
Esto inicia la app en el puerto 3003.<br>

## Tests

Correr el comando `yarn test`.

## Estructura de Carpetas

`src`:

`actions/`: Acciones de redux para disparar los distintos eventos.<br>
`api/`: Las llamadas a la API interna.<br>
`components/`: Los distintos componentes que se utilizan para armar las paginas.<br>
`constants/`: ActionTypes donde se definien el nombre de los eventos a utilizar.<br>
`containers/`: Paginas principales<br>
`sagas/`: Redux-sagas.<br>
`reducers/`: Redux reducers.<br>
`styles/`: Estilos.<br>
`tests/`: Pruebas unitarias<br>
`utils/`: Funciones varias.<br>

