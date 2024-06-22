# Entrega-2.1-Funcion-Throttle
### Git pages
#### [Go to link web](https://r4kogama.github.io/Entrega-2.2-Funci-throttle/)

### Comandos de instalacion

### Descarga e instalacion de todas las dependencias que estan en el package.json

```sh
npm install 
```

***(Opcional)***
### En cuanto los test, si en el enviorement de desarrollo se manipula el DOM, ya que node.js no lo admite, se debe instalar el JSDOM 
```sh
// En la parte superior de tu archivo de test (spec file):
/** @jest-environment jsdom */

npm install jsdom --save-dev

```

### El paquete enviorement jsdom si no esta incluido en la version de Jest se debe de instalar
```sh
npm install -D jest-environment-jsdom

```

### Execucion de tests

```sh
npm run test
```

### Git pages en ruta docs necesita los archivos que hay en dist, ejecucion de una copia de dist a docs

```sh
npm run build
```

### El comando renombrara la carpeta dist  que esta en docs a js

```sh
npx shx mv docs/dist/ docs/js/  
```

## Live Server web

#### El proyecto esta disponible en web para abrirlo se necesita un ***(live server)*** en el editor de texto o IDE.

#### Como alternativa se puede instalar un HTTP server y ejecutar el comando \_http-server\_ donde elegir distintas rutas del server

```sh
npm install --global http-server
```
