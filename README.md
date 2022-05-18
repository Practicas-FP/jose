# Repositorio de Jose Hernández Riquelme para los proyectos desarrollados como parte de la formación dentro del programa de prácticas Dixcover de Accenture.

Mis prácticas han consistido en escoger una única idea para una aplicación y una API con la que trabajar, y desarrollarla en 4 tecnologías diferentes: Angular, Ionic y React en el plano de tecnologías web, y Android y Flutter en el plano de tecnologías móviles, aunque tanto Flutter como Ionic se considerarían tecnologias híbridas para móvil y web.

En mi caso, he decidido desarrollar una aplicación de búsqueda de anime (series de animación japonesas) haciéndo uso de la API [Jikan](https://jikan.moe/), la cual extrae la información de la base de datos de [MyAnimeList](https://myanimelist.net/).

# Angular
La aplicación en Angular muestra en la página principal las tarjetas de los animes más populares. Con un buscador de animes por nombre y filtros por tipo de anime y estado de emisión.

![Esta es una imagen](/ImagenesDemo/Angular/Angular01.png) 
![Esta es una imagen](/ImagenesDemo/Angular/Angular01_02.png) 

Si clicamos en una tarjeta, tenemos los detalles del anime, con su sinopsis, capítulos. entre otros.

![Esta es una imagen](/ImagenesDemo/Angular/Angular02.png) 

Si vamos a la pestaña de acceso de usuario, podemos iniciar sesión desde la API de Google. Si iniciamos sesión correctamente, podemos ver los datos del usuario logeado, y se habilitan en el navbar las pestañas de Área de usuario y Favoritos.

![Esta es una imagen](/ImagenesDemo/Angular/Angular03.png) 

![Esta es una imagen](/ImagenesDemo/Angular/Angular04.png) 

Si volvemos a los detalles de cualquier anime habiendo iniciado sesión, se habilita un botón para guardar o borrar animes favoritos en Firebase.

![Esta es una imagen](/ImagenesDemo/Angular/Angular05.png) 

Los animes guardados en favoritos se pueden ver en la pestaña de favoritos.

![Esta es una imagen](/ImagenesDemo/Angular/Angular06.png) 

# Ionic
Para la aplicación de Ionic, se traspasado el código typescript de Angular y se han vuelto a rehacer las vistas para adaptarse más a móviles. La pantalla principal y la de detalles quedaría así:

![Esta es una imagen](/ImagenesDemo/Ionic/Ionic01.png) ![Esta es una imagen](/ImagenesDemo/Ionic/Ionic02.png) 

Tenemos la página de login. Se ha implantado una particularidad de ionic que permite usar la cámara del dispositivo o cargar una imagen de la galería para cambiar la foto de perfil del usuario.

![Esta es una imagen](/ImagenesDemo/Ionic/Ionic03.png) ![Esta es una imagen](/ImagenesDemo/Ionic/Ionic04.png) ![Esta es una imagen](/ImagenesDemo/Ionic/Ionic05.png) ![Esta es una imagen](/ImagenesDemo/Ionic/Ionic06.png) 

Desde la pestaña de favoritos, cargamos las entradas guardadas en Firebase.

![Esta es una imagen](/ImagenesDemo/Ionic/Ionic07.png) 

También se implantó un modo noche desde el menú lateral.

![Esta es una imagen](/ImagenesDemo/Ionic/Ionic08.png) 

# React
La aplicación en React muestra en su principal pantalla tarjetas con los animes populares. La pestaña cuenta con un buscado de anime por nombre y filtros por estado de emisión y tipo de anime.

![Esta es una imagen](/ImagenesDemo/React/React01.png) 

Al hacer click en una entrada, se muestran los detalles: capítulos, fecha de emisión, título original, etc.

![Esta es una imagen](/ImagenesDemo/React/React02.png) 

En la pestaña de acceso, se permite iniciar sesión empleando el sistema de autenticación de firebase. Al iniciar sesión, se muestra la cuenta del usuario, y se habilita en el appbar el área de usuario y la pestaña de favoritos.

![Esta es una imagen](/ImagenesDemo/React/React03.png) 

![Esta es una imagen](/ImagenesDemo/React/React04.png) 

Queda pendiente guardar y cargar favoritos desde Firebase.

# Android nativo
La aplicación en Android muestra el fragmento principal con un recycler view de los animes más populares. Hay un cuadro de búsqueda para buscar animes por nombre, y unos radiogroups para filtar por tipo de anime y estado de emision.

![Esta es una imagen](/ImagenesDemo/Android/Android01.png) 

Al clicar en una de las tarjetas, se abre una nueva actividad con los detalles del anime, y un botón para añadirlo a favoritos.

![Esta es una imagen](/ImagenesDemo/Android/Android02.png) 

En el fragmento de login, se permite iniciar sesión desde la API de Google. Si se inicia con éxito, se muestran los datos del usuario.

![Esta es una imagen](/ImagenesDemo/Android/Android03.png) ![Esta es una imagen](/ImagenesDemo/Android/Android04.png) 

Si el usuario está logeado, se permite el guardo de favoritos en la nube desde firebase. Si no está logeado, los favoritos se guardan en local en una base de datos SQLite a través de Room.

![Esta es una imagen](/ImagenesDemo/Android/Android05.png) 


# Flutter (en proceso)
La aplicación en Flutter muestra en su pantalla principal los animes más populares, los animes en emisión, y las películas de anime más populares como conjuntos de tarjetas. Desde el buscador, puedes hacer una búsqueda de anime por nombre. 
Conforme se van deslizando tarjetas, se van recargando otras nuevas como si fuera una paginación, empleando el "infinite scroll".

![Esta es una imagen](/ImagenesDemo/Flutter/Flutter00.png) 

Al clicar en una de las tarjetas, se muestran los detalles de ese anime, junto a su título original en japonés, sinopsis y personajes ficticios que participan en la historia.

 ![Esta es una imagen](/ImagenesDemo/Flutter/Flutter02.png) ![Esta es una imagen](/ImagenesDemo/Flutter/Flutter03.png)

Queda pendiente implementar un sistema de login y guardado en favoritos.


