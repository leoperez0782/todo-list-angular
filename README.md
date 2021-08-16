# TodoList

Proyecto generado con [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Production sever

Para probar localmente como se vería la aplicación en producción, abrir una terminal en la carpeta del proyecto y ejecutar `ng build --watch`. Luego abrir otra terminal en la misma carpeta, e instalar [lite-server](https://github.com/johnpapa/lite-server).
La instalación recomendada para lite-server es local al proyecto, para hacerlo :
```
  npm install lite-server --save-dev
  yarn add lite-server --dev # or yarn
```
Luego de instalado, agregar la siguiente configuracion al archivo package.json:
``` 
# Inside package.json...
  "scripts": {
    "dev": "lite-server"
  },

```
Para levantar la aplicación ejecutar `npx lite-server --baseDir="dist/todo-list"`
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
