# Mobiik Automation Framework

Este proyecto es un framework de pruebas automatizadas para la aplicación web TodoMVC usando Selenium WebDriver y Mocha.

## Prerrequisitos

- [Node.js](https://nodejs.org/) (v14 o superior recomendado)
- [npm](https://www.npmjs.com/)
- Navegador Google Chrome o Mozilla Firefox

## Configuración

1. **Clona el repositorio**
   ```sh
   git clone https://github.com/temokssl2/mobiik-test.git
   cd mobiik-test
   ```

2. **Instala las dependencias**
   ```sh
   npm install
   ```

## Ejecución de las pruebas

1. **Ejecuta todas las pruebas**
   ```sh
   npm test
   ```

2. **Ver el reporte de pruebas**
   - Después de ejecutar, abre `mochawesome-report/mochawesome.html` en tu navegador para ver los resultados.

## Estructura del proyecto

- `test/` - Archivos de prueba (principal: `TodoMvcTest.js`)
- `Pages/` - Modelos de página (Page Object Models)
- `utils/` - Clases utilitarias (por ejemplo, SeleniumActions)
- `screenshots/` - Capturas de pantalla en caso de fallo

## Notas

- Puedes cambiar el navegador o la configuración de las pruebas en los archivos de configuración.
- Todas las dependencias necesarias, incluyendo Selenium WebDriver y los drivers de navegador (`chromedriver`, `geckodriver`), están listadas en `package.json`.
- Si necesitas instalarlas manualmente, ejecuta:
  ```sh
  npm install selenium-webdriver chromedriver geckodriver
  ```
- Ejecutar `npm install` en el directorio del proyecto instalará todas las dependencias requeridas.

---
