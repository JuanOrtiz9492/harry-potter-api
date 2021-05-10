# Harry Potter API

Es una API Rest de Harry Potter en Español que retorna información sobre hechizos, personajes, libros e información en sí. Utilizé Node.js con json-server para crearla y la alojé en Heroku <br><br>

Es una API Rest de Harry Potter en Español que retorna información sobre hechizos, personajes, e información en sí. Utilizé Node.js con json-server para crearla y la alojé en Heroku <br><br>

- Repositorio en GitHub de json-server: https://github.com/typicode/json-server <br>
- Descargar Node.js: https://nodejs.org/es/ <br>
- Página web de Heroku: https://heroku.com/ <br>

Si querés descargarlo, ejecutá por la terminal con node.js instalado  ``npm i json-server``

## Cómo usar
Para usarlo solo copiá y pegá el siguiente código JavaScript en el JavaScript de tu web o aplicación <br>
```javascript
fetch("https://fedeperin-harry-potter-api.herokuapp.com/db")
	.then((res) => res.json())
	.then((data) => {
		// Trae todos los datos de la API y los muestra por consola
		console.log(data)
	})
	.catch((e) => console.log(e));
```
O visitá la página principal de la API (que viene por defecto con json-server): https://fedeperin-harry-potter-api.herokuapp.com/
## Endpoints
- https://fedeperin-harry-potter-api.herokuapp.com/db Trae toda la API
- https://fedeperin-harry-potter-api.herokuapp.com/hechizos Trae solo los hechizos almacenados en la API
- https://fedeperin-harry-potter-api.herokuapp.com/info Trae solo la parte de información de la API
- https://fedeperin-harry-potter-api.herokuapp.com/personajes Solo trae los personajes en la API
- https://fedeperin-harry-potter-api.herokuapp.com/libros Solo trae los libros en la API
