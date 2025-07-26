Mobiik Automation Framework
Este proyecto es un framework de pruebas automatizadas para la aplicación web TodoMVC utilizando Selenium WebDriver y Mocha.

Requisitos previos
Node.js (se recomienda la versión 14 o superior)

npm

Navegador Google Chrome o Mozilla Firefox

Configuración
Clonar el repositorio

git clone https://github.com/temokssl2/mobiik-test.git
cd mobiik-test

Instalar dependencias

npm install

Ejecutar las pruebas
Ejecutar todas las pruebas

npm test

Ver el reporte de pruebas

Después de ejecutar las pruebas, abre mochawesome-report/mochawesome.html en tu navegador para ver los resultados.

Estructura del proyecto
test/ - Archivos de prueba (archivo principal: TodoMvcTest.js)

Pages/ - Modelos de objetos de página (Page Object Models)

utils/ - Clases utilitarias (por ejemplo, SeleniumActions)

screenshots/ - Capturas de pantalla en caso de fallo de pruebas

Notas
Puedes cambiar el navegador o la configuración de las pruebas en los archivos de configuración.

Asegúrate de que los controladores del navegador (chromedriver, geckodriver) estén instalados a través de npm.

Notas adicionales
Todas las dependencias necesarias, incluyendo Selenium WebDriver y los controladores de navegador (chromedriver, geckodriver), están listadas en package.json.

Si necesitas instalarlas manualmente en algún momento, ejecuta:

npm install selenium-webdriver chromedriver geckodriver

Ejecutar npm install en el directorio del proyecto instalará todas las dependencias necesarias.
