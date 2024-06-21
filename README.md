# Entrega-2.1-Funcion-debounce

# Comandos de instalacion de TS y Jest

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