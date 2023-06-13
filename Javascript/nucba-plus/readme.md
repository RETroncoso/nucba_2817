# NUCBA+

## Funcionalidades del proyecto

En este proyecto estaremos codeando el proyecto Nucba+, una app que trabajará con la api de movieDB(https://www.themoviedb.org/documentation/api?language=es). Este proyecto consiste en:

- Renderizar cards de de Peliculas desde la API de movieDB
- Las películas que se rendericen dependerán del filtro elegido, puede ser que se rendericen las peliculas que estan "trending", las mas votadas o las "upcoming".
- Realizaremos una páginación en base a los datos que nos da la API para hacerla (total de páginas y la página actual).

## Objetivos pedagógicos

Se espera que:

- Antes de empezar a codear, se les muestre a los alumnos la card de ejemplo que esta comentada en el html para que sepan cual es el objetivo final de la clase.
- Se les explique a los alumnos como obtener una API key de esta API. Deberán crearse una cuenta en la página y seguir los pasos de este link https://developers.themoviedb.org/3/getting-started/introduction
- Se les muestre brevemente a los alumnos la documentación de la API, especificamente un ejemplo de lo que nos estamos trayendo con cada llamada (Por ejemplo, en https://developers.themoviedb.org/3/movies/get-top-rated-movies , si apretamos en example podemos ver lo que nos trae una llamada a la url de las mas populares).
- Se entienda el concepto de "estado" de la app con el fin de que se vayan amigando con ese concepto para el siguiente módulo.
- Se explique con detenimiento como se va realizando el funcionamiento de la páginación.
- Los alumnos vayan siguiendo y entendendiendo como es el traspaso de datos entre funciones mediante los parámetros y porque algunas funciones utilizan async/await y otras no.

**Recuerden seguir haciendo hincapie en el concepto de asincronismo ya que además de la paginación, el objetivo principal es que los alumnos sigan afianzando ese concepto y como trabajarlo**

## Modalidad de trabajo

- El mentor tiene todo el proyecto ya codeado en la rama "template/mentor". No es necesario que siga el orden planteado, pueden reorganizarlo y plantearlo de la manera que ustedes lo crean mas adecuado para que el alumno entienda lo que se le esta explicando.
- Si consideran que pueden cambiar algo para mejorar el proyecto pueden hacerlo, siempre y cuando siga cumpliendo los mismos objetivos.

- A medida que van codeando, vayan mostrandole a los alumnos como van cambiando las cosas y porque se hace lo que se hace. Idealmente, haganlos razonar y participar para que entiendan mejor la resolución de las distintas problematicas que se van presentando.

**Es FUNDAMENTAL que revisen el proyecto con tiempo y lo lleven a la practica antes de codearlo en clase, con el fin de que no se presenten inconvenientes a la hora de codearlo en vivo y de que, en caso de que tengan alguna duda sobre la realización del proyecto, podamos asistirlos desde el equipo.**

## División del repositorio

El proyecto esta dividido en distintas ramas las cuales detallamos a continuación.

| Rama            | Descripción                                                      |
| --------------- | ---------------------------------------------------------------- |
| clase           | Base para la clase - Desde aca vamos a partir para el livecoding |
| template/mentor | Proyecto completo para el profesor                               |

-El profesor clonará por un lado la rama "clase" para utilizar de base para codear en la clase y por el otro la rama "template/mentor" para tener de referencia a la hora de ir codeandola.

- En la rama "template/mentor" tendrán el proyecto codeado en su totalidad. Cada función y variable estará acompañada de su respectiva explicación.

**Recuerden eliminar el README.md antes de subir el proyecto para los alumnos**
