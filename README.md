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

## <a name='modal'>Modal</a>

```javascript
$ucsc.modal({
  title:"Titulo de la ventana",
  message:"Este es un mensaje"
});
```
#### Opciones
Nombre | Tipo | Valor defecto | Descripción
-------|------|---------------|---------
title | string | "" | Título del modal
message | string | "" | Mensaje dentro del cuerpo del modal
scrollable | boolean | false | Habilita scroll en la ventana (true/false)
closeButton | boolean | true | Habilita botón cerrar modal (true/false)
confirmButton | boolean | true | Habilita botón confirmar modal (true/false)
confirmIdButton | string | "confirmButton" | ID botón confirmar
labelconfirmButton | string | "Confirmar" | Nombre del botón confirmar
labelButton | string | "Cancelar" | Nombre del botón que cierra modal
idModal | string | "customModal" | ID del modal
size | string | "lg" | Tamaños del modal. Opciones: sm, md y lg
