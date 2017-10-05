# jQuery UCSC Plugin
## <a name='req'>Requerimientos</a>

* jQuery 1.10.0+
* Bootstrap 3+

## <a name='TOC'>Métodos</a>

* [modal](#modal)
* [param](#param)
* [number_format](#number-format)
* [iframe](#iframe)
* [get](#get)
* [success](#succes)
* [error](#error)

## <a name='modal'>Uso Modal</a>

```javascript

var body = 'Hola mundo!';

$ucsc.modal({
	id: "customModal",
	title: "",
	body: body,
	options: {
		size: "lg",
		scroll: false,
		loading: false,
		backdrop: 'static',
		keyboard: false,
		scrollTop: true
	},
	button: {
		close:{
			name : "close",
			id:"buttonClose",
			label: "Cerrar",
			status: true
		},
		confirm:{
			name : "confirm",
			id:"buttonConfirm",
			label: "Confirmar",
			status: false
		}
	}
});
```
#### Opciones

##### modal
Nombre | Tipo | Valor defecto | Descripción
-------|------|---------------|---------
id | string | "customModal" | ID
title | string | "" | Título del modal
body | string | "" | Cuerpo del modal
options | object | - | -

##### options
Nombre | Tipo | Valor defecto | Descripción
size | string | "lg" | Tamaño ventana modal
scroll | boolean | false | -
loading | boolean | false | -
backdrop | string | 'static' | -
keyboard | boolean | false | -
scrollTop | boolean | true | -

##### button
Nombre | Tipo | Valor defecto | Descripción
close | object | - | -
confirm | object | - | -

close:{
			name : "close",
			id:"buttonClose",
			label: "Cerrar",
			status: true
		},
		confirm:{
			name : "confirm",
			id:"buttonConfirm",
			label: "Confirmar",
			status: false
		}

##### button close
Nombre | Tipo | Valor defecto | Descripción
name | string | "close" | -
id | string | "buttonClose" | -
label | string | "Cerrar" | -
status | boolean | true | -

##### button confirm
Nombre | Tipo | Valor defecto | Descripción
name | string | "confirm" | -
id | string | "buttonConfirm" | -
label | string | "Confirmar" | -
status | boolean | false | -

