# Entrega-2.1-Funcion-debounce

# Comandos de instalacion de TS y Jest

### Si se quiere instalar en global ejecutar estos scripts, la instalacion de npm es mejor en global con esto se instala ultima version npm 

```sh
npm install -g npm@latest
```

### Instalacion typescript global [opcional]

```sh
npm i -g typescript
```

## Para proyectos en desarrollo una instalacion en local en el proyecto

### Dentro del proyecto:
### Creacion  package json

```sh
npm init -y
```

### Dependencias y typescripts

```sh
npm i --save-dev typescript
```

### Instalacion biblioteca TS [tsconfig.json]

```sh
npx tsc --init 
```

### Instalacion de los tipos de node si no lo tiene

```sh
npm install --save-dev @types/node
```

### En el package.json:

```sh

 "scripts":{
	"run:<nombrefichero ts>: "ts-node-<nombrefichero ts> .ts",
	"tsc": "tsc",
  "test": "jest"
}

```

### Instalacion de jest para los test unitarios u otros

```sh
npm install jest -D (desarrollo)
npm install --save-dev ts-jest
```

### Instalacion tipos de jest para ts

```sh
npm i -D @types/jest ts-jest  
```

### Instalacion globals de jest

```sh
npm install --save-dev @jest/globals
```

***(Opcional)***
### Si en el enviorement de desarrollo se manipula el DOM, ya que node.js no lo admite, se debe instalar el JSDOM 
```sh
// En la parte superior de tu archivo de test (spec file):
/** @jest-environment jsdom */

npm install jsdom --save-dev

```

### El paquete enviorement jsdom si no esta incluido en la version de Jest se debe de instalar
```sh
npm install -D jest-environment-jsdom

```

### En package.json:

```sh

"jest": {
    "preset": "ts-jest",
    "verbose": true,
    "testEnvironment": "node",
    "moduleFileExtensions": [
      "ts", "tsx", "js", "jsx", "json", "node"
    ],
    "coveragePathIgnorePatterns": [
      "/node_modules/",
      "/dist/"
    ]
  }

```
### Execucion de tests

```sh
npm run test
```